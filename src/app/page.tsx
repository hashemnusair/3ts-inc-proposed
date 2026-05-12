import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhatWeDo from "@/components/WhatWeDo";
import WhyAndImpact from "@/components/WhyAndImpact";
import SelectedEngagements from "@/components/SelectedEngagements";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ImageBreak from "@/components/ImageBreak";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <Hero />
      <WhoWeWorkWith />
      <ImageBreak
        src="/notebookEtc.png"
        alt="Working session"
        height="h-[35vh] md:h-[50vh]"
        position="center"
      />
      <WhatWeDo />
      <WhyAndImpact />
      <SelectedEngagements />
      <ImageBreak
        src="/vaseANDfooter.png"
        alt="3Ts office"
        height="h-[35vh] md:h-[45vh]"
        position="top"
      />
      <AboutUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
