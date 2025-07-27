// app/aiChat/page.js

"use client";

import { useState, useRef, useEffect } from "react";
import {
  User,
  Box,
  SendHorizonal,
  Loader,
  Sparkles,
  ArrowDown,
  Copy,
  Check,
} from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  code: string;
}

function CodeBlock({ language, code }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative my-2 rounded-lg bg-slate-900 text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 rounded-t-lg">
        <span className="text-gray-400">{language || "code"}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
        >
          {isCopied ? (
            <>
              <Check size={16} /> Copied!
            </>
          ) : (
            <>
              <Copy size={16} /> Copy code
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem",
          backgroundColor: "#1E293B",
          borderBottomLeftRadius: "0.5rem",
          borderBottomRightRadius: "0.5rem",
        }}
        codeTagProps={{ style: { fontFamily: "var(--font-geist-mono)" } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

// --- LANGKAH 3: Definisikan fungsi renderMessageContent di sini ---
function renderMessageContent(content: string) {
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <p key={lastIndex} className="whitespace-pre-wrap">
          {content.substring(lastIndex, match.index)}
        </p>
      );
    }
    const language = match[1] || "plaintext";
    const code = match[2];
    parts.push(<CodeBlock key={match.index} language={language} code={code} />);
    lastIndex = codeBlockRegex.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push(
      <p key={lastIndex} className="whitespace-pre-wrap">
        {content.substring(lastIndex)}
      </p>
    );
  }

  return parts.length > 0 ? (
    parts
  ) : (
    <p className="whitespace-pre-wrap">{content}</p>
  );
}

export default function AiChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Halo! Saya adalah asisten AI Anda. Ada yang bisa saya bantu?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // PERBAIKAN: Logika auto-scroll yang lebih baik
  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom();
    }
  }, [messages, isAtBottom]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const atBottom = scrollHeight - scrollTop <= clientHeight + 5; // Ubah toleransi
      setIsAtBottom(atBottom); // Update state
      console.log("isAtBottom:", atBottom);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    // Pasang event listener ke div spesifik, bukan ke window
    container?.addEventListener("scroll", handleScroll);

    // Jangan lupa untuk membersihkan event listener saat komponen dibongkar
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      // PERBAIKAN: Pastikan URL API sudah benar (sesuai file di folder api)
      const response = await fetch("/api/aiChat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Gagal mendapatkan balasan dari AI. Coba lagi.");
      }

      const data = await response.json();
      const aiMessage = { role: "ai", content: data.reply };
      setMessages([...newMessages, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = {
        role: "ai",
        content: "Maaf, terjadi kesalahan. Silakan coba lagi nanti.",
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("Message sent:", input);
      setInput(""); // Clear the input
    }
  };

  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col pt-14 h-[calc(100vh-10px)] bg-gray-50">
      {/* --- Area Percakapan --- */}
      <div
        className="flex-grow overflow-y-auto p-6 relative"
        ref={scrollContainerRef}
      >
        {/* PERUBAHAN UTAMA: Tampilkan prompt di tengah jika chat masih kosong */}
        {messages.length === 1 ? (
          // --- Tampilan Awal (Kosong) ---
          <div className="flex h-full flex-col items-center justify-center text-center ">
            <div className="p-4 rounded-full bg-indigo-100 mb-4">
              <Sparkles className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Siap Membantu Anda
            </h2>
            <p className="mt-2 text-gray-500 max-w-sm">
              Mulai percakapan dengan menanyakan apa saja. Anda bisa meminta ide
              nama, memeriksa tulisan, atau lainnya.
            </p>
          </div>
        ) : (
          // --- Tampilan Percakapan Normal ---
          <div className="space-y-6 max-w-2xl mx-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "ai" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                    <Box size={20} />
                  </div>
                )}
                <div
                  className={`max-w-lg p-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 shadow-sm rounded-bl-none"
                  }`}
                >
                  {msg.role === "ai" ? (
                    renderMessageContent(msg.content)
                  ) : (
                    <p className="whitespace-pre-wrap p-3">{msg.content}</p>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                    <User size={20} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                  <Box size={20} />
                </div>
                <div className="max-w-lg p-3 rounded-2xl bg-white text-gray-800 shadow-sm rounded-bl-none flex items-center space-x-2">
                  <span className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {!isAtBottom && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-40 right-1/2 z-50 rounded-full bg-indigo-600 text-white p-2 shadow-md hover:bg-indigo-700 transition"
          title="Scroll to Bottom"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      )}

      {/* --- Area Input Teks --- */}
      <div className="w-full max-w-2xl mx-auto backdrop-blur-md font-sans">
        {/* --- Form utama yang menjadi kontainer --- */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
        >
          {/* Textarea untuk prompt utama */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ketik pesan Anda di sini..."
            disabled={isLoading}
            className="w-full bg-transparent resize-none focus:outline-none placeholder-gray-400 text-base"
            rows={1} // Atur tinggi awal textarea
            onKeyDown={handleKeyDown}
            maxLength={2000}
          />
          {/* Tombol kirim diposisikan di kanan bawah */}
          <div className="flex justify-end items-center mt-2">
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <Loader size={20} className="animate-spin" />
              ) : (
                <SendHorizonal size={20} />
              )}
            </button>
          </div>
        </form>

        {/* --- Baris Disclaimer & Penghitung Karakter --- */}
        <div className="flex justify-between items-center mt-2 px-1">
          <p className="text-xs text-gray-500">
            Respons yang dihasilkan AI mungkin mengandung ketidakakuratan. Harap
            verifikasi ulang secara mandiri.
          </p>
          <p className="text-xs text-gray-500">{input.length}/2000</p>
        </div>
      </div>
    </div>
  );
}
