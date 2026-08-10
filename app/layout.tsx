import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Haytham Builds — We Build the Pipeline",
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
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
