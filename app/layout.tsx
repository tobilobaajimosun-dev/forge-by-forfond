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

const SITE_URL = "https://forge.forfond.africa";
const TITLE = "Forge'26 — Built to Scale | June 13, 2026, Lagos";
const DESCRIPTION =
  "The room where growth & scale-oriented founders build what lasts. A curated one-day experience — growth, governance, finance, and private expert consultations. June 13, 2026, Lagos, Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Forge by ForFond",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Forge'26 — Built to Scale. June 13, 2026, Lagos, Nigeria.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
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
