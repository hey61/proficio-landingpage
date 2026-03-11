"use client";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

export default function ProblemSection() {
  const stats = [
    { end: 55, suffix: "%", label: "der Druckeinkäufer bevorzugen Druckereien mit Veredelungsoptionen", source: "NAPCO-Studie" },
    { end: 100, suffix: "%", label: "Preiskampf bei reinem Standard-CMYK-Digitaldruck", source: "Branchentrend 2026" },
    { end: 40, suffix: "%", label: "der Marge fließt an externe Veredelungs-Dienstleister", source: "Kalkulationsbeispiel" },
  ];

  return (
    <section id="problem" className="bg-primary-darker py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            Die Margen im Standard-Digitaldruck sinken – Differenzierung wird überlebenswichtig
          </h2>
          <p className="text-base lg:text-lg text-white/70 leading-relaxed mb-4">
            Wer heute ausschließlich in CMYK produziert, konkurriert über den Preis – und das ist
            ein Wettbewerb, den auf Dauer niemand gewinnt. Die Margen im Produktionsdruck sinken seit Jahren,
            während die Erwartungen der Kunden steigen: auffälligere Materialien, haptische Effekte,
            Veredelungen, die aus einem Druckprodukt ein Erlebnis machen.
          </p>
          <p className="text-base lg:text-lg text-white/70 leading-relaxed">
            Digitaldruck-Veredelung auslagern heißt: Marge verschenken, längere Durchlaufzeiten und
            Abhängigkeit von Dritten. Der Fachkräftemangel macht manuelle Nachbearbeitung zusätzlich teurer.
            Was es braucht, ist Inline-Veredelung im Produktionsdruck – Technologie, die Veredelung
            direkt in den Produktionsprozess integriert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-dark-surface rounded-2xl p-7 border border-white/10"
            >
              <div className="text-5xl font-extrabold text-beyond tracking-tighter text-glow-beyond">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/85 mt-3 font-medium leading-snug">{stat.label}</div>
              <div className="text-xs text-muted italic mt-2">{stat.source}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
