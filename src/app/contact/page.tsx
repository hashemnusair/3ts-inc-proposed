import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24 min-h-[60vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          <div className="flex flex-col items-center space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-tight tracking-tight text-charcoal mb-10">
            Let's Chat
          </h1>
          
          <p className="text-charcoal/80 text-lg md:text-xl max-w-lg leading-relaxed mb-16 font-medium">
            I'd love to hear from you. Reach out to discuss how we might work together to support your individuals, teams, and organization.
          </p>

          <div className="flex flex-col items-center mb-10">
             <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Email
             </span>
             <a href="mailto:shareef@3ts-inc.com" className="font-serif text-3xl md:text-4xl text-charcoal hover:text-gold transition-colors">
                shareef@3ts-inc.com
             </a>
          </div>

          <div className="flex flex-col items-center mb-16">
             <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Office Locations
             </span>
             <p className="text-charcoal/80 text-base md:text-lg">
                Washington, DC • Sarasota, FL • London, UK • Amman, JO
             </p>
          </div>
          
          <a
            href="mailto:shareef@3ts-inc.com"
            className="group relative overflow-hidden bg-[#2A372C] text-white px-10 py-5 text-sm tracking-widest uppercase font-medium hover:bg-[#1E2520] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl"
          >
            <span className="relative z-10">Email shareef@3ts-inc.com</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
