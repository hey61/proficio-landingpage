"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section id="vertrauen" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight mb-12 text-center">
          Ihr Proficio-Partner in <span className="text-primary">Deutschland</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Badge */}
          <div>
            <p className="text-base lg:text-lg leading-relaxed mb-5">
              Team Jansen ist Deutschlands größter Xerox Vertragspartner – und trägt den{" "}
              <strong>Xerox Platinum Status</strong>, die höchste Partnerstufe. Mit rund 60 Mitarbeitern,
              über 2.000 Kunden und einer Xerox-Konzession, die bis 1987 zurückreicht.
            </p>
            <p className="text-base lg:text-lg text-muted leading-relaxed mb-8">
              Full-Service: Von der Beratung über Installation und Workflow-Integration bis zur
              Schulung Ihres Teams. Inklusive Finanzierungs- und Leasingoptionen.
            </p>

            {/* Platinum Badge */}
            <div className="mb-8">
              <Image
                src="/badges/xerox-platinum-badge.png"
                alt="Xerox Platin Autorisierter Vertragspartner"
                width={200}
                height={170}
                className="w-auto h-auto max-w-[180px]"
              />
            </div>

            {/* Trust Metrics */}
            <div className="flex gap-10 flex-wrap">
              {[
                ["60+", "Mitarbeiter"],
                ["2.000+", "Kunden"],
                ["Seit 1987", "Xerox-Partner"],
              ].map(([n, l], i) => (
                <div key={i}>
                  <div className="text-2xl font-extrabold text-primary">{n}</div>
                  <div className="text-sm text-muted">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/standorte-deutschland-karte.svg"
              alt="Team Jansen Standorte: Hennef, Kassel, Erfurt"
              width={400}
              height={533}
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
