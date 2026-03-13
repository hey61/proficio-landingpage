import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Beyond CMYK Inline-Veredelung | Xerox Proficio PX300 & PX500 | Team Jansen",
  description: "Bis zu 89% Aufpreis pro Auftrag durch Inline-Veredelung. Xerox Proficio PX300 & PX500 mit 5. Farbstation. Jetzt Demo bei Team Jansen buchen.",
  metadataBase: new URL("https://proficio-digitaldruck.de"),
  openGraph: {
    title: "Beyond CMYK Inline-Veredelung | Xerox Proficio PX300 & PX500",
    description: "Bis zu 89% Aufpreis pro Auftrag. Inline-Veredelung im Produktionsdruck. Jetzt Demonstrationstermin bei Team Jansen.",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.className}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Team Jansen",
              url: "https://teamjansen.de",
              description: "Xerox Platin Partner – Deutschlands größter Xerox Vertragspartner",
              telephone: "+49224292120",
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Team Jansen – Xerox Platin Partner",
              telephone: "+49224292120",
              url: "https://teamjansen.de",
              address: [
                { "@type": "PostalAddress", addressLocality: "Hennef", addressRegion: "Nordrhein-Westfalen", addressCountry: "DE" },
                { "@type": "PostalAddress", addressLocality: "Kassel", addressRegion: "Hessen", addressCountry: "DE" },
                { "@type": "PostalAddress", addressLocality: "Erfurt", addressRegion: "Thüringen", addressCountry: "DE" },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
