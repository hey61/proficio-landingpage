"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const features = {
  px300: {
    name: "Proficio PX300",
    sub: "Der effiziente Einstieg in Beyond CMYK",
    rows: [
      { f: "Geschwindigkeit", v: "85 S/min" },
      { f: "Auflösung", v: "2400 × 2400 DPI (Ultra HD)" },
      { f: "5. Farbstation", v: "Fluor. Pink, Clear, Low-Gloss" },
      { f: "Medien bis", v: "400 gsm + synthetisch" },
      { f: "Fiery FS700X", v: "✓" },
      { f: "Anti-Statik", v: "✓" },
      { f: "XMPie-Integration", v: "✓" },
    ],
    rec: "Idealer Einstieg für Druckereien, die Beyond CMYK profitabel erschließen wollen.",
    recDetail: "85 Seiten pro Minute reichen für die meisten mittleren Produktionsvolumina. Selbe Druckqualität wie die PX500, effizienterer Investitionseinstieg.",
  },
  px500: {
    name: "Proficio PX500",
    sub: "Maximaler Durchsatz mit KI-Kalibrierung",
    rows: [
      { f: "Geschwindigkeit", v: "100 S/min" },
      { f: "Auflösung", v: "2400 × 2400 DPI (Ultra HD)" },
      { f: "5. Farbstation", v: "Fluor. Pink, Clear, Low-Gloss" },
      { f: "Medien bis", v: "400 gsm + synthetisch" },
      { f: "Fiery FS700X", v: "✓" },
      { f: "Anti-Statik", v: "✓" },
      { f: "XMPie-Integration", v: "✓" },
      { f: "PredictPrint AI", v: "✓ (exklusiv)" },
    ],
    rec: "Für Produktionsbetriebe mit hohem Durchsatz und maximalen Qualitätsansprüchen.",
    recDetail: "100 Seiten pro Minute plus PredictPrint Media Manager – KI-gestützte Kalibrierung für optimierten Medienverbrauch über die gesamte Auflage.",
  },
};

export default function ProductSection() {
  const [tab, setTab] = useState<"px300" | "px500">("px300");
  const data = features[tab];

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Section id="produkt" className="bg-light-bg">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4"
        >
          Zwei Maschinen, ein Ziel:{" "}
          <span className="text-beyond">Ihre Margen nach oben</span>
        </motion.h2>
      </div>

      {/* Tab Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white rounded-xl p-1.5 border border-border">
          {(["px300", "px500"] as const).map((id) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                tab === id
                  ? "bg-primary text-white shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {id === "px300" ? "PX300 · Mittleres Volumen" : "PX500 · Hohes Volumen"}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Feature Table */}
          <div className="bg-white rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">{data.name}</h3>
            <p className="text-muted text-sm font-medium mb-6">{data.sub}</p>
            {data.rows.map((row, i) => (
              <div
                key={i}
                className="flex justify-between py-3 border-b border-border last:border-0 text-sm"
              >
                <span className="text-muted">{row.f}</span>
                <span
                  className={`font-semibold ${
                    row.v.startsWith("✓") ? "text-success" : "text-foreground"
                  }`}
                >
                  {row.v}
                </span>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div className="bg-gradient-to-br from-primary-darker to-primary-dark rounded-2xl p-8 text-white flex flex-col justify-center">
            <span className="inline-block bg-beyond rounded-full px-4 py-1.5 text-xs font-bold mb-5 self-start">
              EMPFEHLUNG
            </span>
            <h3 className="text-xl font-bold mb-4 leading-snug">{data.rec}</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {data.recDetail}
            </p>
            <button
              onClick={() => scrollTo("kontakt")}
              className="bg-beyond text-white rounded-lg px-6 py-3.5 text-base font-bold hover:brightness-110 hover:scale-105 transition-all shadow-glow-accent self-start"
            >
              Persönliche Beratung buchen
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
