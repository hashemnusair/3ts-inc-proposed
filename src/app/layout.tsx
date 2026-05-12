import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3Ts Consulting — Senior Advisory for Complex Leadership Moments",
  description:
    "3Ts works with sponsors and senior leaders of transformations, reforms, and consequential leadership transitions across governments, multilaterals, and private-sector organizations.",
  metadataBase: new URL("https://3ts-inc-proposed.pages.dev"),
  openGraph: {
    title: "3Ts Consulting — Senior Advisory for Complex Leadership Moments",
    description:
      "Private advisory for governments, multilaterals, sovereign-backed institutions, family enterprises, and large private-sector organizations.",
    url: "https://3ts-inc-proposed.pages.dev",
    siteName: "3Ts Consulting",
    images: [
      {
        url: "/og/home.webp",
        width: 1200,
        height: 630,
        alt: "3Ts Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3Ts Consulting — Senior Advisory for Complex Leadership Moments",
    description:
      "Private advisory for governments, multilaterals, sovereign-backed institutions, family enterprises, and large private-sector organizations.",
    images: ["/og/home.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="flex flex-col font-sans bg-cream text-charcoal selection:bg-gold selection:text-cream overflow-x-hidden w-full relative antialiased">
        {children}
      </body>
    </html>
  );
}
