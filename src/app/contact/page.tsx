import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact — 3Ts Consulting",
  description:
    "Request a confidential conversation with Shareef Khatib about a leadership, team, or organizational challenge.",
  path: "/contact",
  image: "/og/contact.webp",
});

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full max-w-[100vw] overflow-hidden py-32 px-6 md:px-16 lg:px-24 min-h-[60vh] flex flex-col justify-center items-center text-center">
        <div className="w-full max-w-[calc(100vw-3rem)] md:max-w-2xl mx-auto flex flex-col items-center">
          
          <div className="flex flex-col items-center space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          
          <h1 className="w-full max-w-[20rem] md:max-w-2xl font-serif text-3xl min-[380px]:text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-10 md:text-balance">
            Request a Confidential Conversation
          </h1>
          
          <p className="w-full max-w-[16rem] md:max-w-lg text-charcoal/80 text-base md:text-xl leading-relaxed mb-16 font-medium">
            I'd love to hear from you. Reach out to discuss how we might work together to support your individuals, teams, and organization.
          </p>

          <div className="w-full flex flex-col items-center mb-10">
             <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Email
             </span>
             <a href="mailto:shareef@3ts-inc.com" className="font-serif text-2xl md:text-4xl text-charcoal hover:text-gold transition-colors break-all">
                shareef@3ts-inc.com
             </a>
          </div>

          <div className="w-full flex flex-col items-center mb-16">
             <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Office Locations
             </span>
             <p className="w-full max-w-[16rem] md:max-w-none text-charcoal/80 text-base md:text-lg leading-relaxed">
                Washington, DC • Sarasota, FL • London, UK • Amman, JO
             </p>
          </div>
          
          <a
            href="mailto:shareef@3ts-inc.com"
            className="group relative overflow-hidden bg-[#2A372C] text-white px-5 md:px-10 py-5 text-xs md:text-sm tracking-[0.08em] md:tracking-widest uppercase font-medium hover:bg-[#1E2520] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl w-full max-w-[16rem] md:max-w-none text-center leading-relaxed"
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
