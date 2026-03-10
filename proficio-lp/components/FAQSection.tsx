"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const faqs = [
  { q: "Was ist Beyond CMYK?", a: "Beyond CMYK beschreibt die Möglichkeit, im Digitaldruck über die vier Standardfarben Cyan, Magenta, Yellow und Key (Schwarz) hinauszugehen. Mit einer optionalen fünften Farbstation können Effekte wie Fluoreszenz, Spot-Lack oder Matt-Glanz-Kontraste direkt im Produktionsprozess erzeugt werden – ohne zusätzliche Arbeitsschritte oder externe Veredelung. Bei der Xerox Proficio stehen dafür Fluorescent Pink, Clear und Low-Gloss Clear zur Verfügung." },
  { q: "Was kostet die Xerox Proficio?", a: "Die Xerox Proficio PX300 und PX500 sind Produktionsmaschinen, deren Preis sich nach Konfiguration, Ausstattung und Finanzierungsmodell richtet. Einen Listenpreis gibt es daher nicht. Wir erstellen Ihnen auf Basis Ihres Produktionsvolumens ein konkretes Angebot – inklusive Leasing- und Finanzierungsoptionen. Kontaktieren Sie uns für ein unverbindliches Gespräch." },
  { q: "Wann ist die Xerox Proficio verfügbar?", a: "Die Xerox Proficio PX300 und PX500 sind ab sofort bestellbar. Die ersten Auslieferungen in Deutschland beginnen ab April 2026. Bei Team Jansen können Sie die Proficio ab März 2026 live in unseren Schauräumen in Hennef, Kassel und Erfurt erleben." },
  { q: "Welche Veredelungen sind mit der 5. Farbstation möglich?", a: "Fluorescent Pink für leuchtende, fluoreszierende Effekte, die unter UV-Licht zusätzlich strahlen. Clear für hochglänzenden Spot-Lack, der gezielt Bereiche hervorhebt. Low-Gloss Clear für matte Lackierung und dezente Texturen. Alle Effekte werden inline produziert – im selben Druckdurchgang wie CMYK. Mit XMPie lassen sich Veredelungen sogar personalisiert pro Druckstück einsetzen." },
  { q: "Für wen lohnt sich die PX300 vs. PX500?", a: "Beide Modelle bieten dieselbe Druckqualität (Ultra HD, 2400 × 2400 DPI) und dieselben Beyond-CMYK-Optionen. Die PX300 druckt 85 Seiten pro Minute und ist ideal für mittlere Produktionsvolumina. Die PX500 schafft 100 Seiten pro Minute und verfügt über den PredictPrint Media Manager – eine KI-gestützte Kalibrierung." },
  { q: "Kann ich auf synthetischen Materialien drucken?", a: "Ja. Beide Proficio-Modelle unterstützen synthetische Substrate bis 400 gsm, inklusive integrierter Anti-Statik-Technologie. Ideal für Speisekarten, Etiketten, Hangtags, Outdoor-Beschilderung und weitere Anwendungen, bei denen herkömmliches Papier an seine Grenzen stößt." },
  { q: "Wie unterstützt Team Jansen bei der Umstellung?", a: "Wir begleiten den gesamten Prozess: von der ersten Beratung und Workflow-Analyse über Installation und Integration in Ihre bestehende Produktionsumgebung bis zur Schulung Ihres Teams. Inklusive Integration von FreeFlow und XMPie in Ihre bestehenden Systeme." },
  { q: "Welche Finanzierungsmodelle gibt es?", a: "Wir bieten flexible Finanzierungsoptionen: Leasing, Mietkauf und klassische Finanzierung – abgestimmt auf Ihre Investitionsplanung. Kontaktieren Sie uns für eine unverbindliche Berechnung." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-light-bg">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-12 text-center"
        >
          Häufig gestellte Fragen
        </motion.h2>

        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center py-6 text-left group"
              aria-expanded={open === i}
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                {faq.q}
              </h3>
              <span
                className={`text-2xl text-muted transition-transform duration-300 flex-shrink-0 ${
                  open === i ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-muted leading-relaxed max-w-prose">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
