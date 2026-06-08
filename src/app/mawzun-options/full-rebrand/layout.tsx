import type { Metadata } from "next";
import MawzunPreviewShell from "@/components/brand/MawzunPreviewShell";

export const metadata: Metadata = {
  title: "Mawzun Advisory — Full Rebrand Preview",
  description:
    "A full Mawzun Advisory visual rebrand preview using the same site structure, copy, functionality, and interactions.",
  openGraph: {
    title: "Mawzun Advisory — Full Rebrand Preview",
    description:
      "A full Mawzun Advisory visual rebrand preview using the same site structure, copy, functionality, and interactions.",
    siteName: "Mawzun Advisory",
    images: [{ url: "/mawzun-logo.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary",
    title: "Mawzun Advisory — Full Rebrand Preview",
    description:
      "A full Mawzun Advisory visual rebrand preview using the same site structure, copy, functionality, and interactions.",
    images: ["/mawzun-logo.png"],
  },
};

export default function FullRebrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MawzunPreviewShell mode="mawzun-full" basePath="/mawzun-options/full-rebrand">
      {children}
    </MawzunPreviewShell>
  );
}
