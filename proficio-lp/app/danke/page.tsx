import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vielen Dank | Team Jansen – Xerox Proficio",
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <main className="min-h-screen bg-light-bg flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center py-20">
        <Image
          src="/logos/team-jansen-logo-color.png"
          alt="Team Jansen"
          width={160}
          height={40}
          className="mx-auto mb-12"
        />

        <div className="text-6xl mb-6">✓</div>

        <h1 className="text-3xl font-bold text-foreground mb-4">
          Vielen Dank für Ihr Interesse an der Xerox Proficio.
        </h1>

        <p className="text-muted text-lg leading-relaxed mb-8">
          Wir haben Ihre Anfrage erhalten und melden uns innerhalb von zwei
          Werktagen bei Ihnen – persönlich, nicht per Autoresponder.
        </p>

        <div className="bg-white rounded-2xl p-8 border border-border text-left mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4">
            Was passiert jetzt?
          </h2>
          <div className="space-y-4 text-muted">
            <p>
              <strong className="text-foreground">Demonstrationstermin:</strong>{" "}
              Ein Ansprechpartner aus dem Standort in Ihrer Nähe wird sich bei
              Ihnen melden, um einen Termin zu vereinbaren.
            </p>
            <p>
              <strong className="text-foreground">Persönliche Beratung:</strong>{" "}
              Wir bereiten eine individuelle Beratung auf Basis Ihrer
              Anforderungen vor.
            </p>
            <p>
              <strong className="text-foreground">Frühbucher-Info:</strong>{" "}
              Sie erhalten exklusive Updates zur Verfügbarkeit und
              Erstauslieferung der Proficio.
            </p>
          </div>
        </div>

        <p className="text-muted mb-2">Noch Fragen? Rufen Sie uns an:</p>
        <a
          href="tel:+49224292120"
          className="text-2xl font-bold text-primary hover:text-beyond transition-colors"
        >
          +49 (0) 2242 9212-0
        </a>
      </div>
    </main>
  );
}
