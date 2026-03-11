"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const stats = [
  { end: 89, prefix: "bis ", suffix: "%", label: "Aufpreis pro Auftrag", source: "Xerox / Keypoint Intelligence" },
  { end: 40, suffix: "%", label: "Gewinnsteigerung durch Inline-Veredelung", source: "Xerox Case Study: Zuzu Print" },
  { end: 55, suffix: "%", label: "der Kunden fragen nach Veredelungsoptionen", source: "NAPCO-Studie" },
  { end: 38, suffix: "%", label: "Aufpreis für fluoreszierenden Druck", source: "Keypoint Intelligence" },
];

const examples = [
  { src: "/images/02-visitenkarten.png", alt: "Premium-Visitenkarten mit Spot-Lack und Fluoreszenz – Beyond CMYK Digitaldruck-Veredelung", label: "Visitenkarten" },
  { src: "/images/03-broschuere.png", alt: "Marketingbroschüre mit Glanz- und Matt-Kontrasten durch Beyond CMYK Inline-Veredelung", label: "Broschüren" },
  { src: "/images/04-verpackung-pos.png", alt: "Premium-Verpackung mit fluoreszierenden Pink- und Violett-Tönen – fünfte Farbstation", label: "Verpackung & POS" },
  { src: "/images/05-speisekarte-synthetisch.png", alt: "Wasserfeste Speisekarte auf synthetischem Material – Digitaldruck auf Spezialsubstraten", label: "Speisekarten" },
  { src: "/images/06-direktmailing.png", alt: "Personalisierte Direktmailing-Postkarten mit variabler Beyond CMYK Veredelung – XMPie", label: "Direktmailings" },
];

export default function SolutionSection() {
  return (
    <section id="loesung" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Beyond CMYK Inline-Veredelung: Aus Druckaufträgen werden{" "}
            <span className="text-beyond">Premiumprodukte</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Die fünfte Farbstation macht den Unterschied: Fluoreszenz, Spot-Lack und Matt-Effekte
            inline im Produktionsdruck – in einem einzigen Durchgang. Kein Outsourcing, volle
            Wertschöpfung im Haus, Premiumprodukte zu Digitaldruckgeschwindigkeit.
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 border border-border text-center"
            >
              <div className="text-4xl lg:text-6xl font-extrabold text-beyond tracking-tighter text-glow-beyond leading-none">
                <CountUp end={s.end} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="text-sm font-semibold mt-2 text-foreground">{s.label}</div>
              <div className="text-xs text-muted italic mt-1">{s.source}</div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h3 className="text-xl font-bold mb-4 text-center">
            Der Unterschied: Standard CMYK vs. Beyond CMYK
          </h3>
          <p className="text-sm text-muted text-center mb-6">
            Ziehen Sie den Regler und sehen Sie den Digitaldruck Wow-Effekt selbst.
          </p>
          <BeforeAfterSlider />
        </motion.div>

        {/* Application Examples */}
        <h3 className="text-xl font-bold mb-5">Anwendungsbeispiele für Digitaldruck-Veredelung</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-72 snap-start"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src={ex.src} alt={ex.alt} fill className="object-cover" sizes="288px" />
              </div>
              <p className="text-sm font-semibold mt-3">{ex.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
