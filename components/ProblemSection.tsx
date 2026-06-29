"use client";

import { motion } from "motion/react";

const checks = [
  {
    number: "01",
    title: "Anwendungen",
    text: "Welche Produkte gewinnen durch Fluorescent Pink, Clear oder Low-Gloss Clear?",
  },
  {
    number: "02",
    title: "Nachfrage",
    text: "Welche Bestandskunden und Zielbranchen bezahlen für diesen Mehrwert?",
  },
  {
    number: "03",
    title: "Produktion",
    text: "Passen Volumen, Medien, Workflow und Weiterverarbeitung zusammen?",
  },
  {
    number: "04",
    title: "Wirtschaftlichkeit",
    text: "Welche zusätzliche Wertschöpfung ist realistisch – und welcher Aufwand steht ihr gegenüber?",
  },
] as const;

export default function ProblemSection() {
  return (
    <section id="chancen" className="bg-primary-darker py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.35fr] lg:items-end">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-beyond">
              Erst prüfen, dann investieren
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              Differenzierung muss sich rechnen
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Eine fünfte Farbstation eröffnet neue Anwendungen – sie garantiert
              aber noch kein profitables Geschäft. Entscheidend ist, ob
              Nachfrage, Vertrieb, Workflow, Volumen und Produktionsumgebung
              zusammenpassen.
            </p>
          </div>
          <p className="border-l-2 border-beyond pl-6 text-xl leading-relaxed text-white/90 lg:text-2xl">
            Bevor Sie über eine konkrete Maschine sprechen, sollten vier Fragen
            beantwortet sein: Was wollen Sie damit verkaufen? An wen? Wie häufig?
            Und was verändert sich in Ihrer heutigen Produktion?
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {checks.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-dark-surface p-6"
            >
              <div className="text-sm font-extrabold tracking-widest text-beyond">
                {item.number}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
