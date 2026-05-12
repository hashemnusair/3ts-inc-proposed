import Navbar from "@/components/Navbar";
import WhyAndImpact from "@/components/WhyAndImpact";
import Footer from "@/components/Footer";

export default function ApproachPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Our Approach
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            Moving through the patterns that stall progress.
          </h1>
        </div>
      </section>
      <WhyAndImpact />
      <Footer />
    </main>
  );
}
