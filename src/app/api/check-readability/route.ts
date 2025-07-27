// src/app/api/check-readability/route.ts

import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import dotenv from "dotenv";

dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: "https://www.npmjs.com/package/create-replicate",
});

const model =
  "ibm-granite/granite-3.3-8b-instruct:a325a0cacfb0aa9226e6bad1abe5385f1073f4c7f8c36e52ed040e5409e6c034"; // Model IBM Granite AI

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const input = {
      top_k: 50,
      top_p: 0.9,
      prompt: `Cek keterbacaan teks berikut dan perbaiki jika ada kesalahan ketik atau tata bahasa. Jika teksnya dalam bahasa Indonesia, berikan analisis keterbacaan dalam bahasa Indonesia: \n\n${text}`,
      max_tokens: 512,
      min_tokens: 0,
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
    };

    const output = await replicate.run(model, { input });

    // Log output dari AI untuk memeriksa hasilnya
    console.log("AI Output:", output);

    const combinedOutput = output.join("");

    if (!output) {
      throw new Error("AI tidak memberikan respons yang valid.");
    }

    return NextResponse.json({
      readabilityScore: combinedOutput,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
