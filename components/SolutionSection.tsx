"use client";

import Image from "next/image";
import { motion } from "motion/react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CountUp from "@/components/CountUp";

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

const stats = [
  {
    end: 25,
    suffix: " Jahre",
    label: "Erfahrung im digitalen Xerox-Produktionsdruck",
    source: "Jens Burghold",
  },
  {
    end: 89,
    prefix: "24–",
    suffix: "%",
    label: "Aufpreis nannten befragte Druckeinkäufer für Spezialeffekte",
    source: "Keypoint Intelligence / InfoTrends, 2016",
    sourceUrl: "https://www.xerox.com/digital-printing/latest/PSGBR-281.pdf",
  },
  {
    end: 40,
    suffix: "%",
    label: "weniger externe Kosten im Xerox-Fallbeispiel Zuzu Print",
    source: "Xerox Case Study, kein allgemeines Ergebnis",
    sourceUrl: "https://www.xerox.com/digital-printing/latest/XIPCS-03G.pdf",
  },
  {
    end: 3,
    suffix: " Effekte",
    label: "Fluorescent Pink, Clear und Low-Gloss Clear bei Proficio",
    source: "Offizielle Xerox-Ankündigung",
    sourceUrl:
      "https://investors.xerox.com/news-releases/news-release-details/xerox-introduces-two-new-digital-presses-production-ecosystem",
  },
] as const;

export default function SolutionSection() {
  return (
    <section id="wirkung" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-beyond">
            Vom Effekt zum Angebot
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            Zeigen Sie Ihren Kunden,{" "}
            <span className="text-beyond">was Standarddruck nicht kann</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Premiumdruck wird gesehen und gefühlt, bevor jemand über Technik
            spricht. Der wirtschaftliche Hebel entsteht, wenn aus der Wirkung
            ein verständliches Produkt für eine erreichbare Zielgruppe wird.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="text-center text-2xl font-bold">
            Der sichtbare Unterschied schafft Gesprächswert
          </h3>
          <p className="mx-auto mb-7 mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Bewegen Sie den Regler. Er visualisiert, warum sich der Verkauf von
            Premiumdruck über Wirkung und Anwendung leichter erklären lässt als
            über technische Daten.
          </p>
          <BeforeAfterSlider />
        </div>

        <div className="mt-16 flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Aus Technik werden Produkte
            </div>
            <h3 className="mt-2 text-2xl font-bold">
              Geschäftschancen, die Kunden verstehen
            </h3>
          </div>
          <p className="hidden max-w-lg text-right text-sm text-muted md:block">
            Nicht die fünfte Farbe ist das Angebot, sondern die Visitenkarte,
            Verpackung oder Kampagne, die dadurch wertvoller wird.
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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-light-bg p-6 text-center"
            >
              <div className="text-4xl font-extrabold tracking-tight text-beyond lg:text-5xl">
                <CountUp
                  end={stat.end}
                  prefix={"prefix" in stat ? stat.prefix : undefined}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-3 text-sm font-semibold leading-snug">
                {stat.label}
              </p>
              {"sourceUrl" in stat ? (
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs leading-relaxed text-muted underline decoration-border underline-offset-2 hover:text-primary"
                >
                  {stat.source}
                </a>
              ) : (
                <p className="mt-2 text-xs text-muted">{stat.source}</p>
              )}
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-relaxed text-muted">
          Studien- und Fallbeispielwerte zeigen Marktpotenziale, keine Garantie
          für ein einzelnes Unternehmen. Entscheidend sind Zielgruppe, Angebot,
          Preis, Vertrieb und Produktionsumgebung.
        </p>
      </div>
    </section>
  );
}
