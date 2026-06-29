import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.proficio-digitaldruck.de";

export const metadata: Metadata = {
  title: {
    default: "Xerox Proficio PX300 & PX500 Fachcheck | Jens Burghold",
    template: "%s | Proficio Fachcheck",
  },
  description:
    "Passt die Xerox Proficio zu Ihrem Betrieb? PX300 und PX500 mit 25 Jahren Xerox-Erfahrung technisch, wirtschaftlich und marktbezogen einordnen.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Proficio Fachcheck – passt PX300 oder PX500 zu Ihrem Betrieb?",
    description:
      "25 Jahre Xerox-Digitaldruck, verbunden mit KI-gestützter Geschäftsentwicklung.",
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Proficio Fachcheck",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#jens-burghold`,
      name: "Jens Burghold",
      jobTitle: "Experte für Xerox-Digitaldruck und KI-gestützte Geschäftsentwicklung",
      telephone: "+49 361 4229616",
      email: "jens@proficio-digitaldruck.de",
      worksFor: { "@id": `${siteUrl}/#organisation` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organisation`,
      name: "Jens Burghold / KI-Strategien",
      url: siteUrl,
      founder: { "@id": `${siteUrl}/#jens-burghold` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gustav-Tauschek-Straße 2",
        postalCode: "99099",
        addressLocality: "Erfurt",
        addressCountry: "DE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Beratung",
        telephone: "+49 361 4229616",
        email: "jens@proficio-digitaldruck.de",
        availableLanguage: "de",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#fachcheck`,
      name: "Proficio-Potenzialcheck",
      description:
        "Kostenlose fachliche Erstqualifizierung für Druckereien, die Xerox Proficio PX300 oder PX500 prüfen.",
      provider: { "@id": `${siteUrl}/#organisation` },
      areaServed: "DE",
      serviceType: "Fachliche Erstqualifizierung und Partnervermittlung",
    },
    {
      "@type": "Product",
      name: "Xerox Proficio PX300",
      brand: { "@type": "Brand", name: "Xerox" },
      manufacturer: { "@type": "Organization", name: "Xerox" },
      description:
        "Produktionsdrucksystem mit Ultra-HD-Bildqualität, bis zu 85 Seiten pro Minute und optionaler fünfter Farbstation.",
    },
    {
      "@type": "Product",
      name: "Xerox Proficio PX500",
      brand: { "@type": "Brand", name: "Xerox" },
      manufacturer: { "@type": "Organization", name: "Xerox" },
      description:
        "Produktionsdrucksystem mit Ultra-HD-Bildqualität, bis zu 100 Seiten pro Minute und optionaler fünfter Farbstation.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
