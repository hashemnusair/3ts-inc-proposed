const proofQuotes = [
  {
    quote: "Within 3 months, he had done things no one in our city had done before.",
    context: "City safety crisis",
  },
  {
    quote: "Every voice was heard, every challenge named, and real solutions were developed.",
    context: "Leadership retreat",
  },
  {
    quote: "Challenged long-standing assumptions and boldly conceptualized a new path forward.",
    context: "Public-sector change",
  },
  {
    quote: "Turned my rushed prep into a confident and polished performance.",
    context: "High-stakes communication",
  },
  {
    quote: "Helped me to reframe my own internal dialogue.",
    context: "Senior coaching",
  },
  {
    quote: "Customized strategies for dealing with new management situations and to empower my team.",
    context: "New manager support",
  },
];

export default function ProofQuoteStrip() {
  return (
    <section id="client-evidence" className="site-gutter site-section-tight relative w-full scroll-mt-28 overflow-hidden border-t border-[#edebe4] bg-[#fcfbf9] text-charcoal">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <div className="site-container grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="mb-7 flex flex-col items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Client evidence
            </span>
            <div className="h-[2px] w-12 bg-gold/60" />
          </div>
          <h2 className="site-heading-md max-w-xl font-serif tracking-tight text-charcoal">
            The proof is in the moments clients remember.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-charcoal/62 md:text-base">
            Short fragments from people who brought Shareef into consequential
            rooms, pressured decisions, and leadership moments that needed more
            than another standard process.
          </p>
        </div>

        <div className="grid border-y border-charcoal/10 md:grid-cols-2 lg:grid-cols-3">
          {proofQuotes.map((item, index) => (
            <figure
              key={item.quote}
              className="group relative min-h-[10rem] border-b border-charcoal/10 px-0 py-7 md:border-r md:px-7 lg:last:border-r-0 [&:nth-last-child(-n+1)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <div className="absolute left-0 top-8 hidden h-10 w-px bg-gold/50 md:block" />
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="font-serif text-3xl text-gold/70">
                  0{index + 1}
                </span>
                <span className="text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/36 transition-colors duration-500 group-hover:text-gold/90">
                  {item.context}
                </span>
              </div>
              <blockquote className="font-serif text-xl leading-snug text-charcoal/84 md:text-2xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
