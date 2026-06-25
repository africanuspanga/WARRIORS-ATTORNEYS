import { services } from "@/lib/data";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-navy pb-24 pt-40 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Practice Areas
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Practice Areas & Professional Services
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Structured around corporate transactions, regulatory compliance,
            dispute resolution, property, and specialized regulated sectors.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} expanded />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Legal Support?"
        description="Tell us about your matter and we will connect you with the right specialist for your industry and needs."
      />
    </>
  );
}
