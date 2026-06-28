import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { contactInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Editorial serif display face for headings — gives the firm a premium,
// established, "best-in-class" presence.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const SITE_URL = "https://www.warriorsattorneys.co.tz";
const SITE_NAME = "Warriors Attorneys";
const SITE_DESCRIPTION =
  "Warriors Attorneys is a leading Tanzanian law firm providing practical, commercially focused legal solutions to corporations, investors, entrepreneurs, and institutions across Tanzania — corporate & commercial law, banking & finance, M&A, regulatory compliance, and dispute resolution.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Warriors Attorneys | Leading Corporate Law Firm in Tanzania",
    template: "%s | Warriors Attorneys",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Legal Services",
  keywords: [
    "law firm Tanzania",
    "Tanzania law firm",
    "corporate lawyers Tanzania",
    "commercial law Tanzania",
    "advocates Dar es Salaam",
    "banking and finance law",
    "mergers and acquisitions Tanzania",
    "regulatory compliance Tanzania",
    "dispute resolution Tanzania",
    "litigation and arbitration",
    "company registration Tanzania",
    "investment law Tanzania",
    "Warriors Attorneys",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Warriors Attorneys | Leading Corporate Law Firm in Tanzania",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/hero-background.png",
        width: 1200,
        height: 630,
        alt: "Warriors Attorneys — Tanzanian Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warriors Attorneys | Leading Corporate Law Firm in Tanzania",
    description: SITE_DESCRIPTION,
    images: ["/hero-background.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#162853",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Warriors Attorneys Tanzania",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/hero-background.png`,
  telephone: contactInfo.phones,
  email: contactInfo.emails[0],
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Tanzania" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 1/50",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  sameAs: ["https://t.me/+255718091838", "https://wa.me/255743500300"],
  knowsLanguage: ["en", "sw"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
