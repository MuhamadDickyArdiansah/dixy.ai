// app/readability-checker/page.js

"use client";

import { useState } from "react";
import { ScanText, ClipboardCheck } from "lucide-react";

export default function ReadabilityCheckerPage() {
  const [text, setText] = useState("");
  const [readabilityScore, setReadabilityScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckReadability = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setReadabilityScore(null);

    try {
      const response = await fetch("/api/check-readability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal memeriksa keterbacaan.");
      }

      const data = await response.json();
      setReadabilityScore(data.readabilityScore);

      console.log("Data Readability:", data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        // Now that TypeScript knows err is an instance of Error, we can access message
        setError(err.message);
      } else {
        // If it's not an instance of Error, handle it as a generic unknown error
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 pt-14 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-10">
          <ScanText className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="text-4xl font-extrabold text-gray-900 mt-4">
            Readability Checker
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Analisis teks Anda untuk mengetahui seberapa mudah tulisan tersebut
            untuk dipahami.
          </p>
        </div>

        {/* --- Input & Output Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* --- Input Area --- */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Masukkan Teks Anda
            </h2>
            <form onSubmit={handleCheckReadability}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-80 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Tempel atau ketik tulisan Anda di sini..."
              />
              <button
                type="submit"
                disabled={isLoading || !text}
                className="w-full mt-4 flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
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
                  <ClipboardCheck className="mr-2 h-5 w-5" />
                )}
                {isLoading ? "Menganalisis..." : "Cek Keterbacaan"}
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

            {!isLoading && readabilityScore && (
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Hasil Keterbacaan:
                </h2>
                <p className="text-lg text-gray-700 text-center">
                  {readabilityScore}
                </p>
              </div>
            )}

            {!isLoading && !readabilityScore && !error && (
              <div className="text-center text-gray-500 mt-16">
                <p>
                  Hasil keterbacaan akan muncul di sini setelah teks dimasukkan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
