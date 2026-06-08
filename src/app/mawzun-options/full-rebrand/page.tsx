import Home from "@/app/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mawzun Full Rebrand Option",
  description:
    "A preview of a fuller Mawzun Advisory visual system using the same site structure, copy, and interactions.",
  openGraph: {
    title: "Mawzun Full Rebrand Option",
    description:
      "A preview of a fuller Mawzun Advisory visual system using the same site structure, copy, and interactions.",
    siteName: "Mawzun Advisory",
    images: [{ url: "/mawzun-logo.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary",
    title: "Mawzun Full Rebrand Option",
    description:
      "A preview of a fuller Mawzun Advisory visual system using the same site structure, copy, and interactions.",
    images: ["/mawzun-logo.png"],
  },
};

export default function MawzunFullRebrandPage() {
  return <Home />;
}
