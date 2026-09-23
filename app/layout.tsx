import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import "./policy.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haytham Builds | The First Five: outbound for coaches selling into the Gulf",
  description:
    "A 30-day outbound pilot for coaches who want UAE and Gulf corporate clients. Researched outreach, checked by me, and five qualified calls, or I keep sending free. $1,500.",
  openGraph: {
    title: "The First Five by Haytham Builds",
    description:
      "You keep coaching. I run the outbound. Five qualified calls with Gulf corporate buyers in 30 days, or I keep sending free.",
    url: "https://haythambuilds.com",
    siteName: "Haytham Builds",
    type: "website",
  },
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
