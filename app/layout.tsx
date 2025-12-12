import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/common/Navbar";
import Providers from "./providers";
import ChatPanel from "@/components/chat/ChatPanel";

export const metadata = {
  title: "Instalily — Sales Intelligence",
  description: "Sales dashboard, customer insights, and contextual AI chat.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Providers>
          <Navbar />
          <main className="container mx-auto px-4 md:px-8 py-6">
            {children}
          </main>
          <ChatPanel />
        </Providers>
      </body>
    </html>
  );
}
