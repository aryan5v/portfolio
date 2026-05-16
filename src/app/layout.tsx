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
  metadataBase: new URL(baseUrl),
  title: "Aryan Kumar — ML & Software Engineer",
  description:
    "ML engineer in the Bay Area working on production AI systems, open-source ML tooling, deep learning systems, and generative models.",
  keywords: [
    "ML Engineer",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Diffusion Models",
    "Open Source",
    "Bay Area",
    "Aryan Kumar",
  ],
  openGraph: {
    title: "Aryan Kumar — ML & Software Engineer",
    description:
      "ML engineer in the Bay Area working on production AI systems, open-source ML tooling, deep learning systems, and generative models.",
    url: baseUrl,
    siteName: "Aryan Kumar",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aryan Kumar — ML & Software Engineer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Kumar — ML & Software Engineer",
    description:
      "ML engineer working on production AI systems, open-source ML tooling, and generative models.",
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
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM profile guide"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/profile.md"
          title="Aryan Kumar profile"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/open-source.md"
          title="Aryan Kumar open-source work"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
