import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TitanOS for iPhone — The Cloud SaaS Engineered for Apple Ecosystem",
  description:
    "Next-generation enterprise SaaS built with Apple precision. Live Dynamic Island monitoring, hardware NFC & barcode intelligence, Secure Enclave encryption, and instant cross-device handoff.",
  keywords: [
    "iPhone SaaS",
    "Apple iOS SaaS",
    "Dynamic Island Live Activities",
    "NFC Scanner Cloud",
    "Barcode Fleet Management",
    "iOS Cloud App",
    "Apple Design System",
  ],
  authors: [{ name: "TitanOS Systems" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <head>
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-screen bg-black text-[#f5f5f7] flex flex-col selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
