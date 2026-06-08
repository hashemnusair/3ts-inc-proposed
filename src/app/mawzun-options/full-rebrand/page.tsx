import MawzunPreview from "@/components/mawzun-options/MawzunPreview";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Mawzun Full Rebrand Option — 3Ts Consulting",
  description:
    "A preview of a fuller Mawzun Advisory visual system using the same site structure, copy, and interactions.",
  path: "/mawzun-options/full-rebrand",
  image: "/og/home.webp",
});

export default function MawzunFullRebrandPage() {
  return <MawzunPreview variant="full-rebrand" />;
}
