import MawzunPreview from "@/components/mawzun-options/MawzunPreview";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Mawzun Literal Rename Option — 3Ts Consulting",
  description:
    "A preview of the current site with the name changed to Mawzun Advisory and the supplied logo added.",
  path: "/mawzun-options/name-swap",
  image: "/og/home.webp",
});

export default function MawzunNameSwapPage() {
  return <MawzunPreview variant="name-swap" />;
}
