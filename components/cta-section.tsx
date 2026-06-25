"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

interface CTASectionProps {
  title: string;
  description: string;
}

export function CTASection({ title, description }: CTASectionProps) {
  const message = encodeURIComponent(
    "Hello Warriors Attorneys, I would like to inquire about your legal services."
  );
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}?text=${message}`;

  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 bg-grain opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(195,145,28,0.10),transparent_55%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Get Started
          </span>
          <span className="h-px w-8 bg-gold" />
        </div>
        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-14 gap-2 bg-gold px-8 text-base font-medium text-white shadow-lg shadow-gold/20 transition-all hover:bg-gold-600"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 gap-2 border-white/25 bg-white/5 px-8 text-base font-medium text-white transition-all hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-white"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
