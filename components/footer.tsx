import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { navLinks, contactInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Logo & description */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-4 rounded-2xl bg-white p-4">
              <Image
                src="/logo.png"
                alt="Warriors Attorneys"
                width={72}
                height={72}
                className="h-16 w-auto"
              />
              <span className="text-lg font-semibold text-navy">
                Warriors Attorneys
              </span>
            </div>
            <p className="mt-8 max-w-md text-base leading-relaxed text-slate-300">
              Advocates, Corporate Advisors, and Compliance Consultants.
              Committed to excellence, integrity, and practical legal solutions
              for clients across Tanzania.
            </p>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                Quick Links
              </h3>
              <ul className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                Practice Areas
              </h3>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/services#corporate-commercial-law"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Corporate & Commercial Law
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#banking-finance-mergers-acquisitions"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Banking, Finance & M&A
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#regulatory-compliance-aml-data-protection"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    Regulatory Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    View All Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="mt-6 space-y-5">
              {contactInfo.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    {phone}
                  </a>
                </li>
              ))}
              {contactInfo.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-gold" />
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                {contactInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-center gap-2 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-slate-400">
            {new Date().getFullYear()} Warriors Attorneys.{" "}
            <a
              href="https://www.driftmark.co.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-slate-300"
              aria-label="All rights reserved"
            >
              All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
