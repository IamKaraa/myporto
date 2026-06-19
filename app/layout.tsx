import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Menggunakan font Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bima - Data Analyst Portfolio",
  description: "Transforming complex logic and ideas into seamless, functional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Memuat Phosphor Icons */}
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <body className={`${inter.className} bg-white text-black antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}