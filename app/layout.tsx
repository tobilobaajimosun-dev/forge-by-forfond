import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import { GeistPixelCircle } from "geist/font/pixel";
import "./globals.css";

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
    <html lang="en" className={`h-full antialiased ${display.variable} ${geist.variable} ${GeistPixelCircle.variable}`}>
      <head>
        {/* Force top on every load BEFORE paint — prevents mobile scroll restoration */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration' in history){history.scrollRestoration='manual';}if(!location.hash){window.scrollTo(0,0);}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
