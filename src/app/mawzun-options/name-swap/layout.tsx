import type { Metadata } from "next";
import MawzunPreviewShell from "@/components/brand/MawzunPreviewShell";

export const metadata: Metadata = {
  title: "Mawzun Advisory — Senior Advisory for High-Stakes Alignment",
  description:
    "Mawzun Advisory preview using the current site structure with the name and logo integrated throughout.",
  openGraph: {
    title: "Mawzun Advisory — Senior Advisory for High-Stakes Alignment",
    description:
      "Mawzun Advisory preview using the current site structure with the name and logo integrated throughout.",
    siteName: "Mawzun Advisory",
    images: [{ url: "/mawzun-logo.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary",
    title: "Mawzun Advisory — Senior Advisory for High-Stakes Alignment",
    description:
      "Mawzun Advisory preview using the current site structure with the name and logo integrated throughout.",
    images: ["/mawzun-logo.png"],
  },
};

export default function NameSwapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MawzunPreviewShell mode="mawzun-name" basePath="/mawzun-options/name-swap">
      {children}
    </MawzunPreviewShell>
  );
}
