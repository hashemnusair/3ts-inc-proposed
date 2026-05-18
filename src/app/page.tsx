import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofQuoteStrip from "@/components/ProofQuoteStrip";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhatPeopleCallAbout from "@/components/WhatPeopleCallAbout";
import StartingPointFinder from "@/components/StartingPointFinder";
import WhatWeDo from "@/components/WhatWeDo";
import WhyAndImpact from "@/components/WhyAndImpact";
import SelectedEngagements from "@/components/SelectedEngagements";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ImageBreak from "@/components/ImageBreak";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "3Ts Consulting — Senior Advisory for Complex Leadership Moments",
  description:
    "Private advisory for sponsors and senior leaders navigating complex alignment, reform, and consequential leadership transitions.",
  path: "/",
  image: "/og/home.webp",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <Hero />
      <ProofQuoteStrip />
      <WhoWeWorkWith />
      <StartingPointFinder />
      <ImageBreak
        src="/home-convening.webp"
        alt="Prepared executive convening room"
        height="media-break-tall"
        position="center"
      />
      <WhatWeDo />
      <WhatPeopleCallAbout />
      <WhyAndImpact />
      <SelectedEngagements />
      <AboutUs />
      <ImageBreak
        src="/home-kindness.webp"
        alt="Quiet leadership conversation setting"
        height="media-break"
        position="center"
      />
      <Testimonials />
      <Footer />
    </main>
  );
}
