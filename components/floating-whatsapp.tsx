import Image from "next/image";
import { contactInfo } from "@/lib/data";

export function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello Warriors Attorneys, I would like to inquire about your legal services."
  );
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 overflow-hidden rounded-full shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        fill
        className="object-cover"
        sizes="56px"
      />
    </a>
  );
}
