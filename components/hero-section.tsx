"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full border border-gold/30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        className="absolute -left-40 bottom-1/4 h-[600px] w-[600px] rounded-full border border-white/10"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-32 pt-40 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Main content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Advocates • Corporate Advisors • Compliance Consultants
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Excellence in{" "}
              <span className="text-gold">Legal Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl"
            >
              Practical, commercially focused legal counsel for businesses,
              investors, and institutions across Tanzania.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
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
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8"
            >
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
            </motion.div>
          </motion.div>

          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="hidden lg:col-span-4 lg:block"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
