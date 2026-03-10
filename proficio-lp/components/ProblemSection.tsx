"use client";
import { motion } from "framer-motion";
import Counter from "./Counter";
import Section from "./Section";

const stats = [
  { n: 55, s: "%", label: "der Druckeinkäufer bevorzugen Druckereien mit Veredelung", src: "NAPCO-Studie" },
  { n: 100, s: "%", label: "Preiskampf bei reinem Standard-CMYK", src: "Branchentrend" },
  { n: 40, s: "%", label: "Marge geht an externe Veredler", src: "Kalkulationsbeispiel" },
];

export default function ProblemSection() {
  return (
    <Section id="problem" className="bg-primary-darker">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Der Markt belohnt keine Standardware mehr
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg leading-relaxed mb-6 max-w-prose"
          >
            Wer heute ausschließlich in CMYK produziert, konkurriert über den
            Preis – und das ist ein Wettbewerb, den auf Dauer niemand gewinnt.
            Die Margen im Standard-Digitaldruck sinken seit Jahren. Gleichzeitig
            steigen die Erwartungen: auffälligere Materialien, haptische Effekte,
            Veredelungen.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed max-w-prose"
          >
            Veredelung auslagern heißt: Marge verschenken, längere
            Durchlaufzeiten, Abhängigkeit von Dritten. Der Fachkräftemangel macht
            manuelle Nachbearbeitung zunehmend teurer. Was es braucht, ist
            Technologie, die Veredelung in den Produktionsprozess integriert.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-surface rounded-xl p-7"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="text-5xl font-extrabold text-beyond leading-none tracking-tighter text-glow">
                <Counter end={s.n} suffix={s.s} />
              </div>
              <div className="text-white/85 text-sm font-medium mt-3 leading-snug">
                {s.label}
              </div>
              <div className="text-muted text-xs italic mt-2">{s.src}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
