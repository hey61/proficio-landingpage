import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vielen Dank | Team Jansen",
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <div className="min-h-screen bg-primary-darker flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">✓</div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Vielen Dank für Ihr Interesse an der Xerox Proficio.
        </h1>
        <p className="text-lg text-white/70 mb-8 leading-relaxed">
          Wir haben Ihre Anfrage erhalten und melden uns innerhalb von zwei Werktagen
          bei Ihnen – persönlich, nicht per Autoresponder.
        </p>
        <div className="bg-dark-surface rounded-xl p-6 text-left mb-8 border border-white/10">
          <h2 className="text-white font-semibold mb-3">Was passiert jetzt?</h2>
          <ul className="text-white/70 text-sm space-y-2">
            <li>→ Wenn Sie einen Demonstrationstermin gewünscht haben: Ein Ansprechpartner aus dem Standort in Ihrer Nähe wird sich bei Ihnen melden.</li>
            <li>→ Wenn Sie eine Beratung gewünscht haben: Wir vereinbaren einen passenden Termin mit Ihnen.</li>
            <li>→ Wenn Sie Frühbucher-Informationen gewählt haben: Sie erhalten exklusive Updates zur Verfügbarkeit.</li>
          </ul>
        </div>
        <p className="text-white/50 text-sm">
          Noch Fragen? Rufen Sie uns an:{" "}
          <a href="tel:+49224292120" className="text-white font-semibold hover:text-beyond">
            +49 (0) 2242 9212-0
          </a>
        </p>
      </div>
    </div>
  );
}
