"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/navbar";
import PageWrapper from "@/components/layout/pageWrapper";
import { usePathname } from "next/navigation";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dixy.ai - Your AI Writing Assistant",
  description: "Tools to generate product names and check readability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAiChatPage = pathname === "/pages/aiChat";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* {pathname !== "/aiChat" && <PageWrapper>{children}</PageWrapper>} */}
        {!isAiChatPage && <Footer />}
      </body>
    </html>
  );
}
