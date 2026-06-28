import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Warriors Attorneys in Dar es Salaam, Tanzania. Call, email, WhatsApp, or Telegram us to discuss your corporate, commercial, or regulatory legal needs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Warriors Attorneys",
    description:
      "Reach Warriors Attorneys in Dar es Salaam by phone, email, WhatsApp, or Telegram.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const message = encodeURIComponent(
    "Hello Warriors Attorneys, I would like to inquire about your legal services."
  );
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}?text=${message}`;

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-navy pb-32 pt-40 text-white">
        <div className="absolute inset-0 bg-grain opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(195,145,28,0.12),transparent_40%)]" />
        <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full border border-white/5" />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact Us
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Get in{" "}
            <span className="font-display-italic text-gold">Touch</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Reach out for practical, commercially focused legal advice tailored
            to your needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative -mt-20 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Contact Info Card */}
            <div className="lg:col-span-5">
              <div className="h-full rounded-3xl bg-navy p-8 text-white shadow-xl sm:p-10">
                <h2 className="text-2xl font-semibold">Contact Details</h2>
                <p className="mt-2 text-slate-300">
                  We typically respond within one business day.
                </p>

                <div className="mt-10 space-y-8">
                  <div className="group">
                    <div className="mb-3 flex items-center gap-3 text-gold">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Phone
                      </span>
                    </div>
                    <div className="space-y-1 pl-14">
                      {contactInfo.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="block text-lg font-medium text-white transition-colors hover:text-gold"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-3 flex items-center gap-3 text-gold">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Email
                      </span>
                    </div>
                    <div className="space-y-1 pl-14">
                      {contactInfo.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="block text-base font-medium text-white transition-colors hover:text-gold"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-3 flex items-center gap-3 text-gold">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Office
                      </span>
                    </div>
                    <p className="pl-14 text-base text-white">
                      {contactInfo.location}
                    </p>
                  </div>

                  <div className="group">
                    <div className="mb-3 flex items-center gap-3 text-gold">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <Clock className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Business Hours
                      </span>
                    </div>
                    <div className="pl-14">
                      <p className="text-base text-white">
                        Monday to Friday: 08:30 - 17:30
                      </p>
                      <p className="text-sm text-slate-300">
                        Saturday: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  <Button
                    asChild
                    className="h-12 gap-2 bg-gold text-white hover:bg-gold-600"
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}>
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-3xl border border-ivory-200 bg-white p-8 shadow-[0_30px_60px_-30px_rgba(11,34,78,0.25)] sm:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-medium tracking-tight text-navy">
                    Send a Message
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Fill out the form below and we will get back to you shortly.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
