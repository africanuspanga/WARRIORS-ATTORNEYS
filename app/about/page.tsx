import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";

const values = [
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in every matter, combining rigorous legal analysis with clear, actionable advice.",
  },
  {
    title: "Integrity",
    description:
      "Trust is the foundation of our practice. We are transparent, ethical, and accountable in every client relationship.",
  },
  {
    title: "Practicality",
    description:
      "Legal advice is only valuable if it works in the real world. We focus on outcomes, not just theory.",
  },
  {
    title: "Partnership",
    description:
      "We act as an extension of your team, invested in your success and responsive to your priorities.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-navy pb-24 pt-40 text-white">
        <div className="absolute inset-0 bg-grain opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,145,28,0.12),transparent_42%)]" />
        <div className="absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full border border-white/5" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About Us
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="font-display-italic text-gold">
              Warriors Attorneys
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Committed to excellence, integrity, and practical legal solutions.
          </p>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ivory-200">
              <Image
                src="/about-us.jpg"
                alt="Warriors Attorneys"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-navy sm:text-4xl lg:leading-[1.12]">
                A Modern Tanzanian{" "}
                <span className="font-display-italic text-gold">Law Firm</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Warriors Attorneys is a Tanzanian law firm providing practical,
                commercially focused legal solutions to corporations, financial
                institutions, investors, entrepreneurs, government entities, and
                private clients.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Our practice is structured around corporate transactions,
                regulatory compliance, dispute resolution, property, and
                specialized regulated sectors. We serve clients at every stage of
                the business lifecycle, from incorporation and licensing to
                complex transactions, compliance, and dispute resolution.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We believe that great legal counsel should be clear, accessible,
                and aligned with commercial reality. That is the standard we bring
                to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-ivory-200 bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Values" subtitle="What Drives Us" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group h-full rounded-2xl border border-ivory-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_24px_50px_-20px_rgba(11,34,78,0.18)]"
              >
                <h3 className="text-xl font-medium tracking-tight text-navy">
                  {value.title}
                </h3>
                <div className="my-4 h-px w-12 bg-gold transition-all duration-300 group-hover:w-20" />
                <p className="text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-navy sm:text-4xl">
                Our{" "}
                <span className="font-display-italic text-gold">Approach</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Every client matter begins with listening. We take time to
                understand the business context, the risks, and the desired
                outcomes before we advise. This allows us to deliver legal
                solutions that are not only sound, but also practical and
                proportionate.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We combine specialist knowledge across corporate law, finance,
                property, energy, tourism, gaming, tax, intellectual property,
                employment, and disputes with a collaborative, partner-led service
                model. The result is responsive, high-quality counsel tailored to
                Tanzania&apos;s legal and regulatory environment.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ivory-200">
              <Image
                src="/legal-research-advisory.jpg"
                alt="Legal research and advisory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Let us bring practical, commercially focused legal counsel to your next transaction, project, or dispute."
      />
    </>
  );
}
