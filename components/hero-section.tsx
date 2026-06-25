import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-background.png"
          alt="Legal scales"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/85 to-navy/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,145,28,0.12),transparent_40%)]" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full border border-gold/10" />
      <div className="absolute -left-40 bottom-1/4 h-[600px] w-[600px] rounded-full border border-white/5" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-32 pt-40 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Advocates • Corporate Advisors • Compliance Consultants
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Excellence in{" "}
              <span className="text-gold">Legal Solutions</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              Practical, commercially focused legal counsel for businesses,
              investors, and institutions across Tanzania.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 gap-2 bg-gold px-8 text-base font-medium text-white shadow-lg shadow-gold/20 transition-all hover:bg-gold-600 hover:shadow-gold/30"
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 border-white/25 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/10 hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
              <a
                href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                className="group flex items-center gap-3 text-white transition-colors hover:text-gold"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors group-hover:border-gold group-hover:bg-gold/10">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">
                  {contactInfo.phones[0]}
                </span>
              </a>
            </div>
          </div>

          {/* Floating stats card */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="space-y-8">
                <div>
                  <p className="text-5xl font-semibold text-gold">16</p>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Practice Areas
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-5xl font-semibold text-white">100%</p>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Client Focused
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-5xl font-semibold text-white">TZ</p>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Tanzania Based
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-widest text-slate-400">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
