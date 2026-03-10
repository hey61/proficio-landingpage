"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "./Counter";
import Section from "./Section";

const impactStats = [
  { n: 89, s: "%", label: "Aufpreis pro Auftrag", src: "Xerox / Keypoint Intelligence" },
  { n: 40, s: "%", label: "Gewinnsteigerung", src: "Xerox Case Study: Zuzu Print" },
  { n: 55, s: "%", label: "Kundennachfrage nach Veredelung", src: "NAPCO-Studie" },
  { n: 38, s: "%", label: "Aufpreis für Fluoreszenz", src: "Keypoint Intelligence" },
];

const examples = [
  { src: "/images/02-visitenkarten.png", alt: "Premium-Visitenkarten mit lebendigen Farben gedruckt mit Beyond CMYK Technologie", label: "Visitenkarten" },
  { src: "/images/03-broschuere.png", alt: "Aufgeschlagene Marketingbroschüre mit intensiven Magenta- und Berry-Farbtönen durch Beyond CMYK Druck", label: "Broschüren" },
  { src: "/images/04-verpackung-pos.png", alt: "Premium-Verpackung mit fluoreszierenden Pink- und Violett-Tönen gedruckt auf der Xerox Proficio", label: "Verpackung & POS" },
  { src: "/images/05-speisekarte-synthetisch.png", alt: "Wasserfeste Restaurant-Speisekarte auf synthetischem Material mit lebendigen Farben", label: "Speisekarten (synth.)" },
  { src: "/images/06-direktmailing.png", alt: "Personalisierte Direktmailing-Postkarten mit Beyond CMYK Farbeffekten", label: "Direktmailings" },
];

export default function SolutionSection() {
  return (
    <Section id="loesung" className="bg-white">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto"
        >
          Beyond CMYK: Aus Druckaufträgen werden{" "}
          <span className="text-beyond">Premiumprodukte</span>
        </motion.h2>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Inline-Veredelung in einem einzigen Produktionsdurchgang. Kein
          Outsourcing. Volle Wertschöpfung im Haus. Premiumprodukte zu
          Digitaldruckgeschwindigkeit.
        </p>
      </div>

      {/* Impact Numbers */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
        {impactStats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 lg:p-8 text-center border border-border"
          >
            <div className="text-4xl lg:text-6xl font-extrabold text-beyond leading-none tracking-tighter text-glow">
              <Counter end={s.n} suffix={s.s} />
            </div>
            <div className="text-foreground text-sm font-semibold mt-2">{s.label}</div>
            <div className="text-muted text-xs italic mt-1">{s.src}</div>
          </motion.div>
        ))}
      </div>

      {/* Application Examples */}
      <h3 className="text-xl font-bold text-foreground mb-5">Anwendungsbeispiele</h3>
      <div className="gallery-scroll">
        {examples.map((ex, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="w-[280px] lg:w-[320px]"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src={ex.src}
                alt={ex.alt}
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-sm font-semibold mt-3 text-foreground">{ex.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
