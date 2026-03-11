"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <Image
        src="/images/01-hero-druckmuster.png"
        alt="Locker überlappende Druckbögen mit lebendigen Beyond-CMYK-Farben in Pink, Violett und Berry auf dunklem Schiefer"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      {/* Darker overlay per Mia's spec */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/65 to-dark/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-beyond/15 border border-beyond/30 rounded-full px-5 py-2 mb-8"
        >
          <span className="text-beyond text-sm font-semibold">
            NEU: Xerox Proficio PX300 & PX500 – ab März 2026 live erleben
          </span>
        </motion.div>

        {/* SEO H1 (sr-only) with keywords */}
        <h1 className="sr-only">
          Beyond CMYK Inline-Veredelung im Produktionsdruck – Xerox Proficio PX300 & PX500 bei Team Jansen
        </h1>

        {/* Visual headline */}
        <motion.p
          role="heading"
          aria-level={2}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          Ihre Kunden wollen mehr als CMYK.{" "}
          <span className="text-beyond">Jetzt können Sie liefern.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Xerox Proficio PX300 & PX500 – Inline-Veredelung mit der fünften Farbstation.
          Fluoreszenz, Spot-Lack und Matt-Effekte in einem Durchgang. Exklusiv bei Team Jansen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("kontakt")}
            className="bg-beyond text-white rounded-lg px-8 py-4 text-lg font-bold hover:brightness-110 hover:scale-105 transition-all shadow-glow"
          >
            Kostenlose Demo vereinbaren
          </button>
          <button
            onClick={() => scrollTo("loesung")}
            className="bg-white/10 text-white border border-white/20 rounded-lg px-8 py-4 text-lg font-semibold hover:bg-white/15 transition-all"
          >
            Mehr erfahren
          </button>
        </motion.div>
      </div>
    </section>
  );
}
