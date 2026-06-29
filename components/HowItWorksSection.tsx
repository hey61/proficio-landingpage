"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "1",
    title: "Ausgangslage beschreiben",
    text: "Sie nennen heutiges System, Volumen, Anwendungen und Ihren gewünschten nächsten Schritt.",
  },
  {
    number: "2",
    title: "Persönliche Einordnung",
    text: "Ich prüfe Ihre Angaben und ordne Chancen, offene Fragen und das mögliche Einsatzprofil ein.",
  },
  {
    number: "3",
    title: "Sinnvoll weitergehen",
    text: "Bei echtem Potenzial folgt ein Muster, eine Demonstration oder – mit Ihrer Zustimmung – das Gespräch mit einem geeigneten Partner.",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section id="ablauf" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-beyond">
            Proficio-Potenzialcheck
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            Kein vorschnelles Verkaufsgespräch
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Sie schildern Ihre Ausgangslage. Ich ordne den möglichen Einsatz ein
            und empfehle den nächsten sinnvollen Schritt.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16.7%] right-[16.7%] top-8 hidden h-px bg-gradient-to-r from-primary via-beyond to-primary md:block" />
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative rounded-2xl border border-border bg-light-bg p-7 text-center"
            >
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-beyond text-2xl font-extrabold text-white shadow-glow-accent">
                {step.number}
              </div>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#kontakt"
            className="inline-flex rounded-lg bg-beyond px-7 py-4 text-base font-bold text-white shadow-glow-accent transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Fachcheck starten
          </a>
        </div>
      </div>
    </section>
  );
}
