import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { HeroSection } from "@/components/hero-section";
import { services, testimonials, contactInfo } from "@/lib/data";

const featuredServices = [
  services[0],
  services[1],
  services[3],
  services[5],
  services[7],
  services[13],
];

const whyUs = [
  {
    number: "01",
    title: "Tanzanian Expertise",
    description:
      "Deep understanding of local law, regulators, and business culture, delivered with international standards.",
  },
  {
    number: "02",
    title: "Commercially Focused",
    description:
      "We translate complex legal issues into practical, business-oriented solutions that protect your interests.",
  },
  {
    number: "03",
    title: "Sector Specialists",
    description:
      "Dedicated experience across finance, energy, tourism, gaming, property, and regulated industries.",
  },
  {
    number: "04",
    title: "Relationship Driven",
    description:
      "Responsive, accessible, and committed to building long-term partnerships with every client.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Snippet */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/about-us.jpg"
                  alt="Warriors Attorneys office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold p-8 text-white lg:block">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm opacity-90">Practice Areas</p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl font-medium tracking-[-0.01em] text-navy sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                Practical Legal Partners for{" "}
                <span className="font-display-italic text-gold">Growth</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Warriors Attorneys is a Tanzanian law firm providing practical,
                commercially focused legal solutions to corporations, financial
                institutions, investors, entrepreneurs, government entities, and
                private clients. Our practice is structured around corporate
                transactions, regulatory compliance, dispute resolution,
                property, and specialized regulated sectors.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We combine deep local knowledge with a clear understanding of
                commercial realities, helping clients move forward with
                confidence.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-8 border-navy text-navy hover:bg-navy hover:text-white"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="border-y border-ivory-200 bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Practice Areas & Professional Services"
            subtitle="What We Do"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-navy px-8 text-white hover:bg-navy-800"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Warriors Attorneys" subtitle="Why Us" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item.number}
                className="group relative h-full overflow-hidden rounded-2xl border border-ivory-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_24px_50px_-20px_rgba(11,34,78,0.18)]"
              >
                <span className="font-heading text-5xl font-medium italic text-navy-100 transition-colors group-hover:text-gold/40">
                  {item.number}
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
        <div className="absolute inset-0 bg-grain opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(195,145,28,0.10),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Testimonials"
            className="[&_h2]:text-white"
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-900 ring-1 ring-white/10">
            <div className="absolute inset-0 bg-grain opacity-50" />
            <div className="relative grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Contact Us
                  </span>
                </div>
                <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:leading-[1.12]">
                  Ready to Discuss Your{" "}
                  <span className="font-display-italic text-gold">
                    Legal Needs?
                  </span>
                </h2>
                <p className="mt-6 text-slate-300">
                  Get in touch with our team for practical, commercially focused
                  legal advice.
                </p>
                <div className="mt-8 space-y-4">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-slate-200 transition-colors hover:text-gold"
                    >
                      <Phone className="h-5 w-5 text-gold" />
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`mailto:${contactInfo.emails[0]}`}
                    className="flex items-center gap-3 text-slate-200 transition-colors hover:text-gold"
                  >
                    <Mail className="h-5 w-5 text-gold" />
                    {contactInfo.emails[0]}
                  </a>
                  <p className="flex items-start gap-3 text-slate-200">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    {contactInfo.location}
                  </p>
                </div>
                <Button
                  asChild
                  className="mt-10 bg-gold px-8 text-white hover:bg-gold-600"
                >
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
              </div>
              <div className="relative hidden min-h-[320px] lg:block">
                <Image
                  src="/corporate-commercial-law.jpg"
                  alt="Warriors Attorneys team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
