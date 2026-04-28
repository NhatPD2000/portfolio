import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    "Business Analyst specializing in MES/MOM, ERP systems, and manufacturing digitalization. 3+ years delivering factory go-lives, BPMN workflows, and IoT integrations.",
  keywords: ["Business Analyst", "MES", "ERP", "Manufacturing", "Vietnam", "Agile", "BPMN", "IoT"],
  authors: [{ name: "Phan Dinh Nhat" }],
  metadataBase: new URL("https://nhatphan2000.vercel.app"),
  openGraph: {
    title: "Phan Dinh Nhat — Business Analyst",
    description:
      "3+ years in manufacturing tech — MES, ERP, IoT integrations and factory go-lives. Based in Ho Chi Minh City.",
    url: "https://nhatphan2000.vercel.app",
    siteName: "Phan Dinh Nhat Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phan Dinh Nhat — Business Analyst",
    description:
      "3+ years in manufacturing tech — MES, ERP, IoT integrations and factory go-lives.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
