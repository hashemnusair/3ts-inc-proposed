import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impact Review Options — 3Ts Consulting",
  description:
    "Review three presentation options for the 3Ts Consulting impact page.",
  path: "/impact",
  image: "/og/impact.webp",
});

const options = [
  {
    href: "/impact-options/editorial",
    label: "Editorial",
    title: "Expanded editorial",
    description:
      "Everything is open at once: the strongest format for reading the cases as a complete body of evidence.",
  },
  {
    href: "/impact-options/accordions",
    label: "Accordions",
    title: "Compact accordions",
    description:
      "A more focused read, with each service area opening on its own while the full case material stays close at hand.",
  },
  {
    href: "/impact-options/tabs",
    label: "Tabs",
    title: "Tabbed service view",
    description:
      "A service-led layout for moving between the four offers without losing the wider impact story.",
  },
];

export default function ImpactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      <section className="w-full px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Impact
            </span>
            <div className="h-[2px] w-12 bg-gold/60" />
          </div>

          <h1 className="mb-10 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-7xl">
            Impact page presentation options.
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-charcoal/72">
            Three routes use the same Shareef-approved copy. The only decision
            here is presentation: expanded editorial, compact accordions, or a
            tabbed service view.
          </p>
        </div>
      </section>

      <section className="w-full px-6 pb-28 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {options.map((option, index) => (
            <Link
              key={option.href}
              href={option.href}
              className="group flex min-h-[360px] flex-col justify-between border border-charcoal/10 bg-[#f8f6f2] p-8 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_70px_-42px_rgba(0,0,0,0.28)]"
            >
              <div>
                <p className="mb-8 font-serif text-5xl text-gold/80">
                  0{index + 1}
                </p>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {option.label}
                </p>
                <h2 className="mb-6 font-serif text-3xl leading-tight text-charcoal">
                  {option.title}
                </h2>
                <p className="text-base leading-relaxed text-charcoal/70">
                  {option.description}
                </p>
              </div>
              <p className="mt-12 text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                View option{" "}
                <span className="inline-block transition-transform group-hover:translate-x-2">
                  &rarr;
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
