import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./components/modal/ModalContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopper",
  description: "An online store made with jsx and typescript",
  openGraph: {
    title: "Shopper",
    description: "An online store made with jsx and typescript",
    images: ["/preview.png"],
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
    <html lang="en">
      <body className={inter.className + " content"}>{children}</body>
    </html>
    </ModalProvider>
  );
}
