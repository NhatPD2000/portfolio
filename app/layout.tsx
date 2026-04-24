import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Phan Dinh Nhat — Business Analyst",
  description:
    "Business Analyst specializing in MES/MOM, ERP systems, and manufacturing digitalization. 3 years of experience bridging industrial processes with smart technology.",
  keywords: ["Business Analyst", "MES", "ERP", "Manufacturing", "Vietnam"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
