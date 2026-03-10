"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/01-hero-druckmuster.png"
        alt="Gedruckte Druckmuster mit lebendigen Beyond-CMYK-Farben in Pink, Magenta, Korall und Violett auf dunkler Oberfläche"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-beyond/15 border border-beyond/30 rounded-full px-5 py-2 mb-8"
        >
          <span className="text-beyond text-sm font-semibold tracking-wide">
            NEU: Xerox Proficio PX300 & PX500 – ab März 2026 live erleben
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6"
        >
          Ihre Kunden wollen mehr als CMYK.{" "}
          <span className="text-beyond">Jetzt können Sie liefern.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Xerox Proficio PX300 & PX500 – exklusiv bei Team Jansen, Ihrem Xerox
          Platinum Partner. Beyond CMYK Inline-Veredelung in einem Durchgang.
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
            onClick={() => scrollTo("produkt")}
            className="bg-white/10 text-white border border-white/20 rounded-lg px-8 py-4 text-lg font-semibold hover:bg-white/15 transition-all"
          >
            Mehr erfahren ↓
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-2xl animate-bounce-slow">
        ↓
      </div>
    </section>
  );
}
