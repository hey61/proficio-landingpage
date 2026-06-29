"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function TrustSection() {
  return (
    <section id="ueber-mich" className="overflow-hidden bg-primary-darker py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/50 via-beyond/30 to-transparent blur-xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.65rem] border border-white/10 bg-dark-surface shadow-2xl">
            <Image
              src="/images/jens-burghold.jpg"
              alt="Jens Burghold, Experte für Xerox-Digitaldruck und KI-gestützte Geschäftsentwicklung"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-darker via-primary-darker/65 to-transparent px-6 pb-6 pt-24">
              <div className="text-xl font-bold text-white">Jens Burghold</div>
              <div className="mt-1 text-sm text-white/70">
                Produktionsdruck · KI-Strategien
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.18em] text-beyond">
            Über mich
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
            Ich kenne den Maschinenverkauf –{" "}
            <span className="text-beyond">und die Fragen davor</span>
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/70">
            <p>
              Ich habe rund 25 Jahre digitale Xerox-Drucksysteme verkauft und
              dabei Druckereien, Produktionsumgebungen und
              Investitionsentscheidungen aus nächster Nähe kennengelernt.
            </p>
            <p>
              Heute verbinde ich diese Branchenerfahrung mit KI-gestützter
              Marktanalyse und digitaler Kundengewinnung. Mein Ziel ist nicht,
              Ihnen möglichst schnell eine Maschine anzubieten. Ich möchte
              zuerst klären, ob die Proficio zu Ihrem Betrieb, Ihren Kunden und
              Ihren wirtschaftlichen Zielen passt.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-beyond pl-6 text-xl font-semibold leading-relaxed text-white lg:text-2xl">
            „Ich verkaufe Ihnen nicht zuerst eine Maschine. Ich prüfe zuerst, ob
            sie zu Ihrem Geschäft passt.“
          </blockquote>

          <div className="mt-9 flex flex-wrap gap-3 text-sm">
            {[
              "25 Jahre Xerox-Digitaldruck",
              "persönliche Erstqualifizierung",
              "Branche + KI",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white/70"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-white/40">
            Eigenständiges Informations- und Vermittlungsangebot. Jens Burghold
            / KI-Strategien ist kein Xerox-Vertragshändler.
          </p>
        </div>
      </div>
    </section>
  );
}
