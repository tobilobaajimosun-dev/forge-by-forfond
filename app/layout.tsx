import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
