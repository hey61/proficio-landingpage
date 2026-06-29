"use client";

import { motion } from "motion/react";

const checks = [
  {
    number: "01",
    title: "Premiumprodukte",
    text: "Welche Angebote lösen Sie aus der Preisvergleichbarkeit des Standarddrucks?",
  },
  {
    number: "02",
    title: "Neue Zielkunden",
    text: "Welche Branchen und Bestandskunden haben einen konkreten Grund, mehr zu bezahlen?",
  },
  {
    number: "03",
    title: "Mehr Wertschöpfung",
    text: "Welche bislang ausgelagerten Leistungen können Sie wirtschaftlich ins Haus holen?",
  },
  {
    number: "04",
    title: "Machbare Umsetzung",
    text: "Welche Technik, Prozesse und Vermarktungsschritte machen aus der Idee ein Angebot?",
  },
] as const;

export default function ProblemSection() {
  return (
    <section id="chancen" className="bg-primary-darker py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.35fr] lg:items-end">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-beyond">
              Geschäft zuerst, Technik danach
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              Zukunft beginnt nicht bei der Maschine
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Druckdienstleister suchen keine Technik um der Technik willen.
              Sie suchen Angebote, mit denen sie Kunden halten, neue Märkte
              erreichen und mehr Wertschöpfung im eigenen Betrieb behalten.
            </p>
          </div>
          <p className="border-l-2 border-beyond pl-6 text-xl leading-relaxed text-white/90 lg:text-2xl">
            Der Zukunftscheck beginnt deshalb mit vier Fragen: Was könnten Sie
            künftig verkaufen? An wen? Warum ist es mehr wert? Und was brauchen
            Sie, um es zuverlässig zu produzieren?
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
