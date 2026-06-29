"use client";

import Image from "next/image";
import { motion } from "motion/react";

const examples = [
  {
    src: "/images/02-visitenkarten.png",
    alt: "Visitenkarten mit auffälligen Beyond-CMYK-Effekten",
    label: "Visitenkarten",
  },
  {
    src: "/images/03-broschuere.png",
    alt: "Broschüre mit veredelter Oberfläche",
    label: "Broschüren",
  },
  {
    src: "/images/04-verpackung-pos.png",
    alt: "Verpackungs- und POS-Anwendung mit erweiterten Farben",
    label: "Verpackung & POS",
  },
  {
    src: "/images/05-speisekarte-synthetisch.png",
    alt: "Speisekarte auf synthetischem Material",
    label: "Speisekarten",
  },
  {
    src: "/images/06-direktmailing.png",
    alt: "Personalisierte Direktmailing-Postkarten",
    label: "Direktmailings",
  },
] as const;

const opportunities = [
  ["Fluorescent Pink", "Leuchtende Akzente und ein erweiterter Farbraum für aufmerksamkeitsstarke Anwendungen."],
  ["Clear", "Gezielte Glanzflächen, Spot-Effekte und eine sichtbar aufgewertete Oberfläche."],
  ["Low-Gloss Clear", "Matte Effekte und Kontraste für zurückhaltende, hochwertige Veredelung."],
] as const;

export default function SolutionSection() {
  return (
    <section id="loesung" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-beyond">
            Beyond CMYK
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            Eine Chance –{" "}
            <span className="text-beyond">aber kein Automatismus</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Der wirtschaftliche Nutzen entsteht erst, wenn aus Technik
            verkaufbare Produkte werden. Deshalb verbindet der Fachcheck
            technische Möglichkeiten mit Anwendungs-, Zielgruppen- und
            Vermarktungsfragen.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {opportunities.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-light-bg p-7"
            >
              <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-beyond" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Anwendungsfelder
            </div>
            <h3 className="mt-2 text-2xl font-bold">Was daraus entstehen kann</h3>
          </div>
          <p className="hidden max-w-lg text-right text-sm text-muted md:block">
            Der Fachcheck betrachtet nicht nur den Druckeffekt, sondern auch
            Zielgruppe, Nutzenargument und Vermarktungsweg.
          </p>
        </div>

        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {examples.map((example, index) => (
            <motion.figure
              key={example.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="w-72 shrink-0 snap-start"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={example.src}
                  alt={example.alt}
                  fill
                  sizes="288px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-sm font-semibold">
                {example.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
