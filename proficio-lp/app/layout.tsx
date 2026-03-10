import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Xerox Proficio PX300 & PX500 | Beyond CMYK Produktionsdruck | Team Jansen",
  description:
    "Bis zu 89 % Aufpreis pro Auftrag mit Beyond CMYK. Xerox Proficio PX300 & PX500 – jetzt bei Team Jansen. Demonstrationstermin vereinbaren.",
  metadataBase: new URL("https://proficio-druckrevolution.de"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Xerox Proficio – Beyond CMYK Produktionsdruck",
    description:
      "Bis zu 89 % Aufpreis pro Auftrag. Inline-Veredelung in einem Durchgang. Jetzt Demonstrationstermin vereinbaren bei Team Jansen.",
    url: "https://proficio-druckrevolution.de",
    siteName: "Team Jansen – Xerox Proficio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "de_DE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Team Jansen",
      url: "https://teamjansen.de",
      description: "Deutschlands größter Xerox Vertragspartner – Platin Partner",
      telephone: "+49-2242-9212-0",
      logo: "https://proficio-druckrevolution.de/logos/team-jansen-logo-color.png",
    },
    {
      "@type": "Product",
      name: "Xerox Proficio PX300 & PX500",
      description:
        "Produktionsdrucksystem mit Beyond CMYK – 5. Farbstation für Fluoreszenz, Spot-Lack und Matt-Effekte. Inline-Veredelung in einem Durchgang.",
      brand: { "@type": "Brand", name: "Xerox" },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        priceCurrency: "EUR",
        seller: { "@type": "Organization", name: "Team Jansen" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was ist Beyond CMYK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beyond CMYK beschreibt die Möglichkeit, im Digitaldruck über die vier Standardfarben hinauszugehen. Mit einer optionalen fünften Farbstation können Effekte wie Fluoreszenz, Spot-Lack oder Matt-Glanz-Kontraste direkt im Produktionsprozess erzeugt werden.",
          },
        },
        {
          "@type": "Question",
          name: "Was kostet die Xerox Proficio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Die Xerox Proficio PX300 und PX500 sind Produktionsmaschinen, deren Preis sich nach Konfiguration und Finanzierungsmodell richtet. Kontaktieren Sie Team Jansen für ein individuelles Angebot.",
          },
        },
        {
          "@type": "Question",
          name: "Wann ist die Xerox Proficio verfügbar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Die Proficio PX300 und PX500 sind ab sofort bestellbar. Erste Auslieferungen in Deutschland ab April 2026. Live erlebbar ab März 2026 in den Schauräumen von Team Jansen.",
          },
        },
        {
          "@type": "Question",
          name: "Welche Veredelungen sind mit der 5. Farbstation möglich?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fluorescent Pink für leuchtende Effekte, Clear für Spot-Lack und Low-Gloss Clear für matte Texturen. Alle inline im selben Druckdurchgang.",
          },
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Team Jansen – Hennef",
      address: { "@type": "PostalAddress", addressLocality: "Hennef", addressRegion: "NRW", addressCountry: "DE" },
      telephone: "+49-2242-9212-0",
    },
    {
      "@type": "LocalBusiness",
      name: "Team Jansen – Kassel",
      address: { "@type": "PostalAddress", addressLocality: "Kassel", addressRegion: "Hessen", addressCountry: "DE" },
    },
    {
      "@type": "LocalBusiness",
      name: "Team Jansen – Erfurt",
      address: { "@type": "PostalAddress", addressLocality: "Erfurt", addressRegion: "Thüringen", addressCountry: "DE" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
