"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";

export default function TrustSection() {
  return (
    <Section id="vertrauen" className="bg-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight"
        >
          Ihr Proficio-Partner in{" "}
          <span className="text-primary">Deutschland</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Text */}
        <div>
          <p className="text-foreground text-lg leading-relaxed mb-6">
            Team Jansen ist Deutschlands größter Xerox Vertragspartner mit{" "}
            <strong>Platinum Status</strong> – der höchsten Partnerstufe. Rund 60
            Mitarbeiter, über 2.000 Kunden und eine Xerox-Konzession seit 1987.
          </p>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Von der ersten Beratung über Installation und Workflow-Integration
            bis zur Schulung Ihres Teams. Inklusive Finanzierungs- und
            Leasingoptionen, die zu Ihrem Investitionsplan passen.
          </p>

          {/* Platinum Badge */}
          <div className="inline-flex items-center gap-4 bg-light-bg rounded-xl p-4 border border-border mb-8">
            <Image
              src="/badges/xerox-platinum-badge.png"
              alt="Xerox Platin Autorisierter Vertragspartner"
              width={120}
              height={100}
              className="w-auto max-h-16"
            />
          </div>

          {/* Trust Metrics */}
          <div className="flex gap-8 flex-wrap">
            {[
              { n: "60+", l: "Mitarbeiter" },
              { n: "2.000+", l: "Kunden" },
              { n: "Seit 1987", l: "Xerox-Partner" },
            ].map((m, i) => (
              <div key={i}>
                <div className="text-2xl font-extrabold text-primary">{m.n}</div>
                <div className="text-sm text-muted">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Map */}
        <div className="flex justify-center">
          <Image
            src="/images/standorte-deutschland-karte.svg"
            alt="Team Jansen Standorte: Hennef, Kassel, Erfurt"
            width={360}
            height={480}
            className="w-full max-w-[360px] h-auto"
          />
        </div>
      </div>
    </Section>
  );
}
