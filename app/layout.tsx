import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

/* Pixel display font for the hero wordmark (Ship-style) */
const pixel = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/*
  Display font: Hanken Grotesk — a clean neo-grotesque, close to Neue Montreal
  in feel (narrow, neutral, not round or fat). When you have the real
  Neue Montreal files, drop them in /public/fonts/ and uncomment the
  @font-face block in globals.css — it will take priority automatically.
*/
const display = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Body font: Geist — clean, modern, excellent legibility */
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forge by ForFond — June 13, 2026",
  description:
    "A curated one-day experience for founders ready to build systems that survive the scale. Governance, operations, personal finance, and funding readiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${display.variable} ${geist.variable} ${pixel.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
