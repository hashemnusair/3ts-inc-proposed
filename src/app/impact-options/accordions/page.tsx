import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactAccordions from "@/components/impact/ImpactAccordions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impact Accordion Option — 3Ts Consulting",
  description:
    "A compact version of the impact page that keeps each service area easy to scan.",
  path: "/impact-options/accordions",
  image: "/og/impact.webp",
});

export default function ImpactAccordionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <ImpactAccordions />
      <Footer />
    </main>
  );
}
