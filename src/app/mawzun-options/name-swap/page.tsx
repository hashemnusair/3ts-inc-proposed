import Home from "@/app/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mawzun Literal Rename Option",
  description:
    "A preview of the current site with the name changed to Mawzun Advisory and the supplied logo added.",
  openGraph: {
    title: "Mawzun Literal Rename Option",
    description:
      "A preview of the current site with the name changed to Mawzun Advisory and the supplied logo added.",
    siteName: "Mawzun Advisory",
    images: [{ url: "/mawzun-logo.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary",
    title: "Mawzun Literal Rename Option",
    description:
      "A preview of the current site with the name changed to Mawzun Advisory and the supplied logo added.",
    images: ["/mawzun-logo.png"],
  },
};

export default function MawzunNameSwapPage() {
  return <Home />;
}
