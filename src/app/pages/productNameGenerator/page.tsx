// app/product-name-generator/page.js

"use client";

import { useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";

export default function ProductNameGenerator() {
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");
  const [generatedNames, setGeneratedNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setGeneratedNames([]);

    try {
      const response = await fetch("/api/generate-product-names", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, keywords }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal menghasilkan nama produk.");
      }

      const data = await response.json();
      setGeneratedNames(data.names);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-14 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl">
        {/* --- Header --- */}
        <div className="text-center mb-8">
          <Wand2 className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="text-4xl font-extrabold text-gray-900 mt-4">
            Product Name Generator
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Temukan nama yang sempurna untuk produk Anda dengan kekuatan AI.
          </p>
        </div>

        {/* --- Input Form --- */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kategori Produk
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Minuman, Skincare, Pakaian"
                required
              />
            </div>
            <div>
              <label
                htmlFor="keywords"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kata Kunci Utama
              </label>
              <textarea
                id="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="e.g. Segar, boba, manis, organik, untuk anak"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <Sparkles className="mr-2 h-5 w-5" />
              )}
              {isLoading ? "Mencari Ide..." : "Buat Nama Produk"}
            </button>
          </form>
        </div>

        {/* --- Output Area --- */}
        <div className="mt-10">
          {error && <p className="text-center text-red-500">{error}</p>}

          {isLoading && (
            <p className="text-center text-gray-500 animate-pulse">
              AI sedang berpikir keras...
            </p>
          )}

          {!isLoading && generatedNames.length > 0 && (
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Berikut Ide Nama Untuk Anda:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedNames.map((name, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-800 p-4 rounded-lg text-center font-semibold text-lg hover:bg-blue-100 cursor-pointer transition"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {!isLoading && generatedNames.length === 0 && !error && (
            <div className="text-center text-gray-500 mt-16">
              <p>Hasil nama produk akan muncul di sini.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
