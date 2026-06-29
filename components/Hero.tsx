"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-primary-darker pt-20"
    >
      <Image
        src="/images/01-hero-druckmuster.png"
        alt="Beyond-CMYK-Druckmuster in Pink-, Violett- und dunklen Farbtönen"
        fill
        priority
        quality={88}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-darker to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-beyond/40 bg-beyond/20 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-beyond shadow-glow-accent" />
            <span className="text-sm font-semibold text-white/90">
              Für Druckdienstleister und Hausdruckereien
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="max-w-4xl text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Neue Geschäftschancen mit{" "}
            <span className="text-beyond">
              Verpackungs- und Spezialdruck
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 lg:text-xl"
          >
            Wenn Standarddruck kaum noch trägt, braucht es Angebote, die nicht
            nur über den Preis verglichen werden. Gemeinsam entwickeln wir
            konkrete Anwendungen, Zielgruppen und Vertriebswege – und prüfen
            erst danach, welche Produktionstechnik dazu passt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#kontakt"
              className="rounded-lg bg-beyond px-7 py-4 text-center text-base font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Zukunftspotenzial prüfen
            </a>
            <a
              href="#wirkung"
              className="rounded-lg border border-white/25 bg-white/10 px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-white/20"
            >
              Geschäftschancen ansehen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70"
          >
            <span>✓ 25 Jahre Xerox-Erfahrung</span>
            <span>✓ Verpackungsdruck & Spezialdruck</span>
            <span>✓ Anwendungen vor Maschinen</span>
            <span>✓ Persönlicher Zukunftscheck</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
