"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, contactInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-24 items-center justify-between lg:h-28">
          <Link
            href="/"
            aria-label="Warriors Attorneys — Home"
            className={cn(
              "flex items-center justify-center rounded-2xl p-1.5 transition-all duration-300",
              !scrolled
                ? "h-18 w-18 bg-white shadow-md lg:h-22 lg:w-22"
                : "h-18 w-18 lg:h-22 lg:w-22"
            )}
          >
            <Image
              src="/logo.png"
              alt="Warriors Attorneys logo"
              width={96}
              height={96}
              className="h-15 w-auto lg:h-19"
              priority
            />
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold",
                  scrolled ? "text-slate-700" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold",
                scrolled ? "text-navy" : "text-white"
              )}
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
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={cn(
                  "hover:bg-white/10",
                  scrolled ? "text-navy" : "text-white"
                )}
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between pb-8">
                  <Link
                    href="/"
                    aria-label="Warriors Attorneys — Home"
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-slate-100"
                  >
                    <Image
                      src="/logo.png"
                      alt="Warriors Attorneys logo"
                      width={64}
                      height={64}
                      className="h-13 w-auto"
                    />
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
