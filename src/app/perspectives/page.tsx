import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PerspectivesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24 min-h-[50vh]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Perspectives
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            Quiet judgment between the formal moments.
          </h1>
          <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Articles and private briefings on leadership, organizational development, and navigating stalled transformations in sensitive environments.
          </p>
          <div className="mt-16 text-gold italic font-serif text-2xl">
            Content coming soon.
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
