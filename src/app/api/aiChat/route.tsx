// src/app/api/chat/route.ts

import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

// Inisialisasi Replicate (dotenv tidak diperlukan di Next.js)
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const model =
  "ibm-granite/granite-3.3-8-instruct:a325a0cacfb0aa9226e6bad1abe5385f1073f4c7f8c36e52ed040e5409e6c034";

export async function POST(req: NextRequest) {
  try {
    // 1. Mengambil 'messages' (riwayat chat) dari frontend
    const { messages } = await req.json();

    if (!messages || messages.length === 0) {
      throw new Error("Input percakapan tidak boleh kosong.");
    }

    // 2. Memformat riwayat chat menjadi satu prompt yang kontekstual
    const prompt =
      messages
        .map(
          (msg: { role: string; content: string }) =>
            `${msg.role === "user" ? "User" : "AI"}: ${msg.content}`
        )
        .join("\n") + "\nAI:"; // Memberi sinyal pada AI untuk melanjutkan percakapan

    const input = {
      prompt: prompt,
      // System prompt untuk memberi AI kepribadian
      system_prompt:
        "You are a helpful and creative AI assistant named Dicty.ai. Keep your answers concise and friendly.",
      max_tokens: 512,
      temperature: 0.75,
    };

    const output = await replicate.run(model, { input });
    const combinedOutput = (output as string[]).join("").trim();

    if (!combinedOutput) {
      throw new Error("AI tidak memberikan respons yang valid.");
    }

    // 3. Mengirim kembali jawaban dengan key 'reply'
    return NextResponse.json({
      reply: combinedOutput,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
