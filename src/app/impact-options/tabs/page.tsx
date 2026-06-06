import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactTabs from "@/components/impact/ImpactTabs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impact Tabs Option — 3Ts Consulting",
  description:
    "Tabbed impact page option for representative 3Ts Consulting cases.",
  path: "/impact-options/tabs",
  image: "/og/impact.webp",
});

export default function ImpactTabsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <ImpactTabs />
      <Footer />
    </main>
  );
}
