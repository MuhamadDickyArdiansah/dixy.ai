import Image from "next/image";

import ProductCard from "@/components/layout/productCard";
import { Sparkles, FileText, ScanLine, Workflow } from "lucide-react";
import Footer from "@/components/layout/footer";

const features = [
  {
    name: "Generasi Ide Instan",
    description:
      "Atasi kebuntuan kreatif. Gunakan AI Chat untuk brainstorming atau dapatkan puluhan ide deskripsi produk yang unik dalam hitungan detik.",
    icon: Sparkles,
  },
  {
    name: "Copywriting Otomatis",
    description:
      "Hemat waktu menulis Anda. Biarkan AI merangkai kata kunci Anda menjadi deskripsi penjualan yang persuasif dan siap pakai untuk website atau media sosial.",
    icon: FileText,
  },
  {
    name: "Analisis & Optimasi Teks",
    description:
      "Pastikan pesan Anda tersampaikan dengan jelas. Dapatkan skor keterbacaan instan dan saran untuk menyempurnakan tulisan Anda agar lebih efektif.",
    icon: ScanLine,
  },
  {
    name: "Alur Kerja Terintegrasi",
    description:
      "Semua alat yang Anda butuhkan berada dalam satu platform. Mulai dari ide, penulisan draf, hingga penyempurnaan akhir, semuanya terhubung.",
    icon: Workflow,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-13 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto flex flex-col sm:flex-row  justify-around items-center  py-3 sm:py-4 lg:py-5">
          <div className="text-center flex-1">
            <h1 className="text-6xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Satu Platform AI untuk Kebutuhan produk Anda
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Temukan nama produk yang sempurna dengan Name Generator kami, lalu
              pastikan pesan Anda tersampaikan secara efektif menggunakan
              Readability Checker.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#produk"
                className="rounded-md bg-violet-600 px-3.5 transition transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="flex-1 mt-8 lg:mt-0 hidden md:block justify-center items-center">
            <Image
              src={"/images/ilustrations/content-creation-91.svg"}
              alt="heroImage"
              width={520}
              height={520}
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base font-semibold text-indigo-600">
            Kreasikan & Publikasikan Lebih Cepat
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Dari percikan ide hingga draf akhir yang matang
          </p>
          <div className="mt-10 grid gap-8 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
            {/* Card 1 */}
            <div className="relative flex flex-col items-center justify-center p-8  rounded-lg shhover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-900">
                Desain Responsif & Mobile-Friendly
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Dapatkan ide nama produk brilian saat rapat, atau periksa skor
                keterbacaan caption media sosial Anda langsung dari ponsel
                sebelum diunggah.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col items-center justify-center p-8 transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-900">
                Performa Super Cepat
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Jangan biarkan waktu tunggu menghambat alur kreativitas Anda.
                Dapatkan puluhan ide nama dalam hitungan detik dan analisis
                keterbacaan teks secara instan.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col items-center justify-center p-8  transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-900">
                Sederhana, Anonim, Aman.
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Tidak perlu membuat akun, tidak ada pelacakan. Cukup gunakan
                alatnya, dapatkan hasilnya, dan semua data input Anda langsung
                terhapus.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative flex flex-col items-center justify-center p-8  transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-gray-900">
                Mesin AI yang Cerdas
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Tools kami didukung oleh model bahasa canggih yang dilatih untuk
                memahami nuansa kreativitas dan kejelasan, memberikan Anda hasil
                yang terasa cerdas sekaligus manusiawi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-400">
                  Dari Ide ke Teks, Seketika
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                  Fokus pada Alur Kerja Terintegrasi
                </p>
                <p className="mt-6 text-lg/8 ">
                  Gaya ini menjelaskan bagaimana setiap alat saling mendukung
                  dalam satu platform.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src={"/images/ilustrations/data-processing-51.svg"}
              width={520}
              height={520}
              className="w-3xl max-w-none rounded-xl ring-1 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>

      <section id="produk" className="py-10 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            {/* Left Section: Deskripsi */}
            <div className="w-full md:w-2/5 max-w-xl text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl font-bold ">
                Ukir Nama, Pangkas Kerumitan
              </h2>
              <p className="mt-4 text-lg ">
                Alat utama yang dirancang untuk mengatasi tantangan terbesar
                dalam dunia kreatif untuk menemukan ide awal dan menyampaikannya
                dengan jelas.
              </p>
            </div>

            {/* Right Section: Product Cards */}
            <div className="flex-1 md:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProductCard
                title="Product Description Generator"
                description="Bebaskan identitas merek Anda dengan mudah menggunakan generator nama merek kami. Instan, kreatif, dan dirancang khusus untuk Anda!"
                link="/pages/productNameGenerator"
              />
              <ProductCard
                title="Readability Checker"
                description="Pastikan setiap kata mudah dipahami. Analisis dan tingkatkan skor keterbacaan tulisan Anda agar pesannya sampai secara efektif ke semua pembaca."
                link="/pages/readabilityChecker"
              />

              <ProductCard
                title="AI Chat"
                description="Asisten AI pribadi Anda. Dapatkan jawaban instan, kembangkan ide, dan atasi tantangan kreatif melalui percakapan cerdas."
                link="/pages/aiChat"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
