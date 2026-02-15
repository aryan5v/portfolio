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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://aryank.xyz";

export const metadata: Metadata = {
  title: "Aryan Kumar — ML & Software Engineer",
  description:
    "ML & Software Engineer in the Bay Area. AI agents, RAG pipelines, LLM systems. Building at Boardwalktech. Always up for building and learning alongside great people.",
  keywords: [
    "ML Engineer",
    "AI Engineer",
    "Machine Learning",
    "Bay Area",
    "RAG",
    "LLM",
    "Aryan Kumar",
  ],
  openGraph: {
    title: "Aryan Kumar — ML & Software Engineer",
    description:
      "ML & Software Engineer in the Bay Area. AI agents, RAG pipelines, LLM systems. Building at Boardwalktech.",
    url: baseUrl,
    siteName: "Aryan Kumar",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aryan Kumar — ML & Software Engineer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Kumar — ML & Software Engineer",
    description: "ML & Software Engineer. AI agents, RAG, LLM systems. Bay Area.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
