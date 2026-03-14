"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Was ist Beyond CMYK?",
    a: "Beyond CMYK beschreibt die Möglichkeit, im Digitaldruck über die vier Standardfarben Cyan, Magenta, Yellow und Key (Schwarz) hinauszugehen. Mit einer optionalen fünften Farbstation können Effekte wie Fluoreszenz, Spot-Lack oder Matt-Glanz-Kontraste direkt im Produktionsprozess erzeugt werden – ohne zusätzliche Arbeitsschritte oder externe Veredelung."
  },
  {
    q: "Was kostet die Xerox Proficio?",
    a: "Die Xerox Proficio PX300 und PX500 sind Produktionsmaschinen, deren Preis sich nach Konfiguration, Ausstattung und Finanzierungsmodell richtet. Wir bieten Ihnen eine persönliche Beratung mit konkretem Angebot – inklusive Leasing- und Finanzierungsoptionen."
  },
  {
    q: "Wann ist die Xerox Proficio verfügbar?",
    a: "Die Xerox Proficio PX300 und PX500 sind ab sofort bestellbar. Die ersten Auslieferungen in Deutschland beginnen ab April 2026. Bei Team Jansen können Sie die Proficio ab März 2026 live in unseren Schauräumen in Hennef, Kassel und Erfurt erleben."
  },
  {
    q: "Welche Veredelungen sind mit der 5. Farbstation möglich?",
    a: "Fluorescent Pink für leuchtende, fluoreszierende Effekte. Clear für hochglänzenden Spot-Lack. Low-Gloss Clear für matte Lackierung und Texturen. Alle Effekte werden inline produziert, im selben Durchgang wie CMYK. Mit XMPie sogar personalisiert pro Druckstück."
  },
  {
    q: "Für wen lohnt sich die PX300 vs. PX500?",
    a: "Beide Modelle bieten dieselbe Druckqualität (Ultra HD, 2400 × 2400 DPI). Die PX300 druckt 85 Seiten pro Minute und ist ideal für mittlere Produktionsvolumina. Die PX500 schafft 100 Seiten pro Minute mit PredictPrint Media Manager – KI-gestützte Kalibrierung für optimierten Medienverbrauch."
  },
  {
    q: "Kann ich auf synthetischen Materialien drucken?",
    a: "Ja. Beide Proficio-Modelle unterstützen synthetische Substrate bis 400 gsm, inklusive integrierter Anti-Statik-Technologie. Ideal für Speisekarten, Etiketten, Hangtags, Outdoor-Beschilderung und weitere Anwendungen."
  },
  {
    q: "Wie unterstützt Team Jansen bei der Umstellung?",
    a: "Als Xerox Platinum Partner begleiten wir den gesamten Prozess: Beratung, Workflow-Analyse, Installation, Integration in Ihre Produktionsumgebung und Schulung Ihres Teams. Inklusive FreeFlow und XMPie Integration."
  },
  {
    q: "Welche Finanzierungsmodelle gibt es?",
    a: "Leasing, Mietkauf und klassische Finanzierung – abgestimmt auf Ihre Investitionsplanung. Kontaktieren Sie uns für eine unverbindliche Berechnung."
  },
  {
    q: "Welche Vorteile hat die Xerox Proficio gegenüber anderen Produktionsdrucksystemen?",
    a: "Im Segment der Produktionsdrucker mit Inline-Veredelung positioniert sich die Xerox Proficio mit einer Kombination aus Geschwindigkeit, Automatisierung und fünfter Farbstation. Anders als die Canon imagePRESS V-Serie, die keine Inline-Veredelung mit Sonderfarben bietet, ermöglicht die Proficio Fluoreszenz, Spot-Lack und Matt-Effekte in einem Druckdurchgang. Die Ricoh Pro C7500 bietet ebenfalls eine fünfte Farbstation mit Sonderfarben wie Clear, Weiß, Neon-Pink oder Gold – allerdings bei maximal 95 Seiten pro Minute und ohne die Echtzeit-Farbdichte- und Registerautomation der Proficio. Die Konica Minolta AccurioPress-Serie setzt für Veredelung auf externe MGI-Maschinen, die einen separaten Produktionsschritt erfordern. Die Proficio PX500 vereint mit 100 Seiten pro Minute, Ultra-HD-Auflösung und dem exklusiven Fiery FS700X Print Server Veredelung und Produktionsgeschwindigkeit in einem System."
  },
  {
    q: "Ist die Proficio eine Alternative zu meinem aktuellen Produktionsdrucker?",
    a: "Die Xerox Proficio PX300 und PX500 sind für Druckdienstleister konzipiert, die im mittleren bis hohen Produktionsvolumen arbeiten und sich über Veredelung differenzieren wollen. Typische Upgrade-Szenarien: Sie produzieren auf einer Canon imagePRESS, Ricoh Pro C9500, Konica Minolta AccurioPress, Kyocera TASKalfa oder einem Triumph Adler System und suchen eine Maschine, die Inline-Veredelung ohne separaten Arbeitsschritt ermöglicht. Sie nutzen eine Xerox PrimeLink oder Versant und wollen auf mehr Geschwindigkeit, Automation und Beyond-CMYK-Fähigkeiten umsteigen. Oder Sie lagern Veredelung aktuell an externe Dienstleister aus und wollen die volle Wertschöpfung ins Haus holen. Team Jansen berät Sie gerne, ob die PX300 oder PX500 zu Ihrem Auftragsportfolio passt."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-light-bg py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight mb-12 text-center">
          Häufig gestellte Fragen
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <h3 className="text-base lg:text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
                  {faq.q}
                </h3>
                <span
                  className={`text-xl text-muted transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
