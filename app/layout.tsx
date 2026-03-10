import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Xerox Proficio PX300 & PX500 | Beyond CMYK Produktionsdruck | Team Jansen",
  description: "Bis zu 89 % Aufpreis pro Auftrag mit Beyond CMYK. Xerox Proficio PX300 & PX500 – jetzt bei Team Jansen. Demonstrationstermin vereinbaren.",
  metadataBase: new URL("https://proficio-landingpage.vercel.app"),
  openGraph: {
    title: "Xerox Proficio – Beyond CMYK Produktionsdruck",
    description: "Bis zu 89 % Aufpreis pro Auftrag. Inline-Veredelung in einem Durchgang. Jetzt Demonstrationstermin bei Team Jansen.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Team Jansen",
              url: "https://teamjansen.de",
              description: "Xerox Platin Partner – Deutschlands größter Xerox Vertragspartner",
              address: [
                { "@type": "PostalAddress", addressLocality: "Hennef", addressRegion: "NRW", addressCountry: "DE" },
                { "@type": "PostalAddress", addressLocality: "Kassel", addressRegion: "HE", addressCountry: "DE" },
                { "@type": "PostalAddress", addressLocality: "Erfurt", addressRegion: "TH", addressCountry: "DE" },
              ],
              telephone: "+49224292120",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
