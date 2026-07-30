import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-portfolio-2026-vert.vercel.app"),
  title: "Tayyaba Rafiq | AI Developer & AI Engineer",
  description:
    "AI Developer specializing in AI Agents, Retrieval-Augmented Generation (RAG), FastAPI, Next.js, Python, and Intelligent Web Applications. Explore my portfolio, projects, and technical work.",
  openGraph: {
    title: "Tayyaba Rafiq | AI Developer & AI Engineer",
    description:
      "AI Developer specializing in AI Agents, Retrieval-Augmented Generation (RAG), FastAPI, Next.js, Python, and Intelligent Web Applications. Explore my portfolio, projects, and technical work.",
      url: "https://ai-portfolio-2026-vert.vercel.app",
  siteName: "Tayyaba Rafiq Portfolio",
    type: "website",
    images: [
      {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Tayyaba Rafiq AI Portfolio",
    },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayyaba Rafiq | AI Developer & AI Engineer",
    description:
      "AI Developer specializing in AI Agents, Retrieval-Augmented Generation (RAG), FastAPI, Next.js, Python, and Intelligent Web Applications. Explore my portfolio, projects, and technical work.",
    images: [
      {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Tayyaba Rafiq AI Portfolio",
    },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}