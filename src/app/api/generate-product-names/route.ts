// src/app/api/generate-product-names/route.ts

import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import dotenv from "dotenv";

dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN, // Pastikan API Token sudah di .env
  userAgent: "https://www.npmjs.com/package/create-replicate",
});

const model =
  "ibm-granite/granite-3.3-8b-instruct:a325a0cacfb0aa9226e6bad1abe5385f1073f4c7f8c36e52ed040e5409e6c034"; // Model IBM Granite AI

export async function POST(req: NextRequest) {
  try {
    const { category, keywords } = await req.json();

    // Prompt untuk meminta AI menghasilkan nama produk berdasarkan kategori dan kata kunci
    const input = {
      top_k: 50,
      top_p: 0.9,
      prompt: `Buat beberapa nama produk kreatif untuk kategori "${category}" dengan kata kunci berikut: "${keywords}". Nama produk harus unik dan menarik. Pilih kata yang relevan dengan kategori dan mudah diingat.`,
      max_tokens: 512,
      min_tokens: 0,
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
    };

    const output = await replicate.run(model, { input });

    // Gabungkan output menjadi satu string utuh jika output berupa array
    const combinedOutput = Object.values(output).join("");
    return NextResponse.json({
      names: combinedOutput.split("\n").filter((name) => name.trim() !== ""), // Mengembalikan daftar nama produk
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Jika error adalah instance dari Error, akses properti message
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Jika error bukan instance dari Error, berikan pesan error default
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
