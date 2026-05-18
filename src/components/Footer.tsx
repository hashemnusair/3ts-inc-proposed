"use client";

export default function Footer() {
  return (
    <footer className="site-gutter w-full bg-[#151a16] pt-14 pb-20 min-[900px]:pt-16 min-[900px]:pb-24">
      <div className="site-container flex flex-col md:flex-row items-start md:items-end justify-between border-t border-cream/10 pt-14 min-[900px]:pt-16">
        <div className="mb-12 md:mb-0">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Request a confidential conversation.
          </h2>
          <a
            href="mailto:shareef@3ts-inc.com"
            className="premium-track text-gold/80 hover:text-gold transition-colors font-sans tracking-widest uppercase text-sm inline-block mt-4"
          >
            shareef@3ts-inc.com
          </a>
        </div>

        <div className="flex flex-col items-end text-right">
          <div className="font-serif text-3xl text-cream mb-2">
            3Ts Consulting
          </div>
          <div className="text-gold text-xs tracking-[0.2em] uppercase mb-6">
            Thoroughly. Thought. Through.
          </div>
          <div className="max-w-xs text-cream/28 text-[10px] leading-relaxed tracking-[0.16em] uppercase mb-6">
            Advisory, facilitation, and coaching for consequential rooms.
          </div>
          <div className="text-cream/40 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} 3Ts Consulting, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
