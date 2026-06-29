"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const models = {
  px300: {
    name: "Proficio PX300",
    label: "Kompakter Einstieg",
    profile:
      "Für Druckdienstleister, die neue Premiumanwendungen erschließen und dabei ein mittleres Produktionsprofil abbilden möchten.",
    rows: [
      ["Geschwindigkeit", "bis zu 85 Seiten/Minute"],
      ["Bildqualität", "Ultra HD"],
      ["Fünfte Farbstation", "optional"],
      ["Beyond CMYK", "Fluorescent Pink, Clear, Low-Gloss Clear"],
      ["Printserver", "Xerox Print Server, powered by Fiery FS700X"],
      ["Automation", "Farbdichte und Register in Echtzeit"],
      ["Synthetische Medien", "Anti-Statik-Unterstützung"],
    ],
  },
  px500: {
    name: "Proficio PX500",
    label: "Mehr Durchsatz",
    profile:
      "Für wachsende oder volumenstärkere Produktionsumgebungen, die mehr Geschwindigkeit mit Premiumanwendungen verbinden möchten.",
    rows: [
      ["Geschwindigkeit", "bis zu 100 Seiten/Minute"],
      ["Bildqualität", "Ultra HD"],
      ["Fünfte Farbstation", "optional"],
      ["Beyond CMYK", "Fluorescent Pink, Clear, Low-Gloss Clear"],
      ["Printserver", "Xerox Print Server, powered by Fiery FS700X"],
      ["Automation", "Farbdichte und Register in Echtzeit"],
      ["Synthetische Medien", "Anti-Statik-Unterstützung"],
    ],
  },
} as const;

export default function ProductSection() {
  const [selected, setSelected] = useState<keyof typeof models>("px300");
  const model = models[selected];

  return (
    <section id="produkt" className="bg-light-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">
            PX300 und PX500
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            Zwei Produktionssysteme.{" "}
            <span className="text-beyond">Unterschiedliche Einsatzprofile.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Die richtige Wahl hängt nicht nur von der Geschwindigkeit ab,
            sondern von Volumen, Anwendungen, Automatisierungsbedarf und Ihrer
            geplanten Entwicklung.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex w-full max-w-xl rounded-xl border border-border bg-white p-1.5 shadow-sm">
            {(Object.keys(models) as Array<keyof typeof models>).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelected(id)}
                aria-pressed={selected === id}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-bold transition-all ${
                  selected === id
                    ? "bg-primary-darker text-white shadow-md"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {models[id].name.replace("Proficio ", "")} · {models[id].label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-7 lg:grid-cols-[1.25fr_0.75fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5">
                <h3 className="text-2xl font-bold">{model.name}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {model.label}
                </span>
              </div>
              <dl className="mt-2">
                {model.rows.map(([feature, value]) => (
                  <div
                    key={feature}
                    className="grid gap-1 border-b border-border py-3.5 text-sm sm:grid-cols-[0.38fr_0.62fr]"
                  >
                    <dt className="text-muted">{feature}</dt>
                    <dd className="font-semibold text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </AnimatePresence>

          <aside className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-primary-darker via-dark-surface to-primary-dark p-7 text-white sm:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-beyond">
              Typisches Einsatzprofil
            </div>
            <p className="mt-5 text-xl font-semibold leading-relaxed">
              {model.profile}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Eine belastbare Empfehlung entsteht erst aus Ihrem Volumen,
              Anwendungsportfolio und Workflow.
            </p>
            <a
              href="#kontakt"
              className="mt-7 self-start rounded-lg bg-beyond px-6 py-3.5 text-sm font-bold text-white shadow-glow-accent transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Einsatzprofil prüfen
            </a>
          </aside>
        </div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-relaxed text-muted">
          Technische Kerndaten nach offizieller Xerox-Ankündigung. Verfügbare
          Konfigurationen und regionale Lieferbedingungen werden vor einem
          konkreten Projekt mit dem Umsetzungspartner geprüft.{" "}
          <a
            href="https://investors.xerox.com/news-releases/news-release-details/xerox-introduces-two-new-digital-presses-production-ecosystem"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
          >
            Primärquelle ansehen
          </a>
        </p>
      </div>
    </section>
  );
}
