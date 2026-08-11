import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haytham Builds | We build the pipeline",
  description:
    "Haytham Builds finds the companies, maps the buyer, runs the outreach and books the call when there is a real fit.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/brand/haytham-builds-symbol-primary.svg",
    shortcut: "/brand/haytham-builds-symbol-primary.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
