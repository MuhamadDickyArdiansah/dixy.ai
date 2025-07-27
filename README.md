This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Dixy.ai - Your AI Writing Assistant

Dixy.ai adalah alat AI berbasis web yang membantu Anda dalam berbagai tugas terkait teks, seperti menghasilkan nama produk, memeriksa keterbacaan teks, dan berinteraksi dengan asisten AI untuk berbagai kebutuhan kreatif dan teknis. Aplikasi ini dibangun menggunakan Next.js dan React, memberikan pengalaman yang cepat dan responsif untuk pengguna.

## Deskripsi

Dixy.ai menyederhanakan berbagai tugas yang memerlukan kreativitas dan kejelasan, seperti menghasilkan nama produk, menulis teks, dan memeriksa keterbacaan. Aplikasi ini menggunakan model AI yang canggih untuk memberikan saran dan rekomendasi yang relevan berdasarkan permintaan pengguna. Dengan UI yang ramah pengguna, pengguna dapat berinteraksi langsung dengan asisten AI untuk menyelesaikan berbagai tugas.

## Teknologi yang Digunakan

Proyek ini dibangun dengan teknologi terbaru untuk memberikan pengalaman pengguna yang mulus dan cepat:

- **Next.js**: Framework React untuk aplikasi server-side rendering (SSR) dan statis.
- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **Tailwind CSS**: Framework utility-first untuk styling cepat dan responsif.
- **Lucide React**: Ikon SVG untuk antarmuka yang lebih bersih dan estetis.
- **Prism.js**: Syntax highlighter untuk kode yang dihasilkan oleh AI.
- **react-simple-code-editor**: Editor kode untuk menangani kode yang diberikan oleh AI.
- **Vercel**: Platform hosting untuk aplikasi Next.js dengan dukungan CDN.

## Fitur

- **Chat AI**: Interaksi langsung dengan AI untuk berbagai pertanyaan dan permintaan, mulai dari ide kreatif hingga pertanyaan teknis.
- **Generasi Nama Produk**: Alat untuk menghasilkan nama produk yang kreatif dan unik berdasarkan preferensi pengguna.
- **Pemeriksa Keterbacaan**: Memeriksa teks Anda untuk memberikan skor keterbacaan yang lebih baik.
- **Editor Kode**: Menyediakan editor untuk menampilkan dan mengedit kode yang dihasilkan oleh AI.
- **Mode Gelap dan Terang**: Pengguna dapat beralih antara mode terang dan gelap untuk kenyamanan mata.

## Setup Instructions

### Prasyarat

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut:

- **Node.js** versi 16.x atau lebih tinggi
- **npm** atau **yarn**

### Langkah-langkah Instalasi

1. **Clone repositori**:

   ```bash
   git clone https://github.com/username/dicty-ai.git
   cd dicty-ai
   ```

2. **Instal dependensi**:

Jika Anda menggunakan npm:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. **Menjalankan proyek**:

Untuk menjalankan proyek di mode pengembangan:

```bash
Copy
npm run dev
```

atau

```bash
Copy
yarn dev
```

Buka aplikasi di browser melalui http://localhost:3000.

**_Struktur Proyek_**
Berikut adalah struktur dasar proyek:

```bash
Copy
/dicty-ai
  /pages              # Halaman utama dan lainnya
    /api              # API endpoint (misalnya, chat dengan AI)
    /aiChat           # Halaman chat dengan AI
  /components         # Komponen yang dapat digunakan kembali
    /layout           # Layout utama seperti Navbar, Footer
    /chat             # Komponen chat dan input
  /styles             # CSS dan Tailwind konfigurasi
  /public             # Gambar, logo, dan aset statis lainnya
```

**_AI Support Explanation_**
Dixy.ai menggunakan model AI canggih yang dilatih untuk memahami konteks dan memberikan respons yang relevan. Berikut adalah beberapa kemampuan utama AI yang digunakan di aplikasi ini:

Generasi Nama Produk: AI dapat menghasilkan nama produk yang kreatif berdasarkan kata kunci atau tema yang diberikan oleh pengguna. Model ini dilatih menggunakan berbagai dataset yang mencakup kata-kata yang populer dan relevansi pasar.

Pemeriksa Keterbacaan: AI dapat menganalisis teks dan memberikan skor keterbacaan menggunakan metrik seperti Flesch Reading Ease atau Flesch-Kincaid Grade Level. AI ini dapat menyarankan perubahan untuk meningkatkan keterbacaan teks dan membuatnya lebih mudah dipahami oleh audiens yang lebih luas.

Chatbot AI: AI dapat menjawab berbagai pertanyaan, mulai dari topik teknis hingga kreatif. Pengguna dapat berinteraksi dengan asisten AI ini secara langsung dan mendapatkan bantuan sesuai kebutuhan.

# dixy.ai
