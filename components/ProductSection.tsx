"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const specs = {
  px300: {
    name: "Proficio PX300",
    sub: "Der effiziente Einstieg in Beyond CMYK",
    rec: "Idealer Einstieg für Druckereien, die Beyond CMYK profitabel erschließen wollen.",
    recDetail: "85 Seiten pro Minute reichen für die meisten mittleren Produktionsvolumina. Selbe Druckqualität wie die PX500, effizienterer Investitionseinstieg.",
    rows: [
      ["Geschwindigkeit", "85 S/min"],
      ["Auflösung", "2400 × 2400 DPI (Ultra HD)"],
      ["5. Farbstation", "Fluor. Pink, Clear, Low-Gloss"],
      ["Medien bis", "400 gsm + synthetisch"],
      ["Fiery FS700X", "✓"],
      ["Anti-Statik", "✓"],
      ["XMPie-Integration", "✓"],
    ],
  },
  px500: {
    name: "Proficio PX500",
    sub: "Maximaler Durchsatz mit KI-Kalibrierung",
    rec: "Für Produktionsbetriebe mit hohem Durchsatz und maximalen Qualitätsansprüchen.",
    recDetail: "100 Seiten pro Minute plus PredictPrint Media Manager – KI-gestützte Kalibrierung für optimierten Medienverbrauch über die gesamte Auflage.",
    rows: [
      ["Geschwindigkeit", "100 S/min"],
      ["Auflösung", "2400 × 2400 DPI (Ultra HD)"],
      ["5. Farbstation", "Fluor. Pink, Clear, Low-Gloss"],
      ["Medien bis", "400 gsm + synthetisch"],
      ["Fiery FS700X", "✓"],
      ["Anti-Statik", "✓"],
      ["XMPie-Integration", "✓"],
      ["PredictPrint AI", "✓ (exklusiv)"],
    ],
  },
};

export default function ProductSection() {
  const [tab, setTab] = useState<"px300" | "px500">("px300");
  const s = specs[tab];

  return (
    <section id="produkt" className="bg-light-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
            Zwei Maschinen, ein Ziel:{" "}
            <span className="text-beyond">Ihre Margen nach oben</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-1.5 border border-border inline-flex gap-1.5">
            {(["px300", "px500"] as const).map((id) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  tab === id ? "bg-primary text-white shadow-md" : "text-muted hover:text-foreground"
                }`}
              >
                {id === "px300" ? "PX300 · Mittleres Volumen" : "PX500 · Hohes Volumen"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Spec Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <h3 className="text-xl font-bold mb-1">{s.name}</h3>
              <p className="text-sm text-muted mb-6">{s.sub}</p>
              {s.rows.map(([feature, value], i) => (
                <div key={i} className="flex justify-between py-3 border-b border-border text-sm">
                  <span className="text-muted">{feature}</span>
                  <span className={`font-semibold ${value.includes("✓") ? "text-success" : "text-foreground"}`}>
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Recommendation */}
          <div className="bg-gradient-to-br from-primary-darker to-primary-dark rounded-2xl p-8 text-white flex flex-col justify-center">
            <span className="bg-beyond rounded-full px-4 py-1.5 text-xs font-bold self-start mb-5">
              EMPFEHLUNG
            </span>
            <h3 className="text-xl font-bold mb-4 leading-snug">{s.rec}</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">{s.recDetail}</p>
            <button
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-beyond text-white rounded-lg px-6 py-3.5 text-base font-bold self-start hover:brightness-110 hover:scale-105 transition-all shadow-glow-accent"
            >
              Persönliche Beratung buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
