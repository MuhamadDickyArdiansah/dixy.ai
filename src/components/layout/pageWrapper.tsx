// components/layout/PageWrapper.jsx

"use client"; // Tandai sebagai Client Component

import { usePathname } from "next/navigation"; // Gunakan hook ini, bukan useRouter
import Footer from "./footer";

interface PageWrapperProps {
  children: React.ReactNode; // Ensure children is properly typed
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname(); // Hook untuk mendapatkan path URL saat ini
  const isAiChatPage = pathname === "/pages/aiChat";

  return (
    <>
      <main className="flex-grow">{children}</main>
      {!isAiChatPage && <Footer />}
    </>
  );
}
