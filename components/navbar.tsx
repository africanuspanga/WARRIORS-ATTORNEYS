"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, contactInfo } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-24 items-center justify-between lg:h-28">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Warriors Attorneys"
              width={72}
              height={72}
              className="h-16 w-auto lg:h-20"
              priority
            />
            <span className="text-xl font-semibold tracking-tight text-navy lg:text-2xl">
              Warriors Attorneys
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-navy"
            >
              <Phone className="h-4 w-4 text-gold" />
              {contactInfo.phones[0]}
            </a>
            <Button
              asChild
              className="bg-gold px-6 text-white hover:bg-gold-600"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-7 w-7 text-navy" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between pb-8">
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Warriors Attorneys"
                      width={56}
                      height={56}
                      className="h-14 w-auto"
                    />
                    <span className="text-lg font-semibold text-navy">
                      Warriors Attorneys
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-navy-50 hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto space-y-4 border-t border-slate-100 pt-8">
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm font-medium text-navy"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    {contactInfo.phones[0]}
                  </a>
                  <Button
                    asChild
                    className="w-full bg-gold text-white hover:bg-gold-600"
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
