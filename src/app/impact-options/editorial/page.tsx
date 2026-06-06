import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactEditorial from "@/components/impact/ImpactEditorial";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impact Editorial Option — 3Ts Consulting",
  description:
    "Expanded editorial impact page option for representative 3Ts Consulting cases.",
  path: "/impact-options/editorial",
  image: "/og/impact.webp",
});

export default function ImpactEditorialPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <ImpactEditorial />
      <Footer />
    </main>
  );
}
