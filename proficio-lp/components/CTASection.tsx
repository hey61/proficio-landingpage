"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "demo",
  });
  const [submitted, setSubmitted] = useState(false);
  // Honeypot field
  const [hp, setHp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot detected
    // In production: send to API route / HubSpot / etc.
    setSubmitted(true);
  };

  const schauraum = [
    { city: "Hennef", region: "Köln / Bonn", url: "https://meetings-eu1.hubspot.com/schauraum/termin-hennef?utm_source=landingpage&utm_medium=organic&utm_campaign=ProficioLP2026" },
    { city: "Kassel", region: "Nordhessen", url: "https://meetings-eu1.hubspot.com/schauraum-kassel/termin-kassel?utm_source=landingpage&utm_medium=organic&utm_campaign=ProficioLP2026" },
    { city: "Erfurt", region: "Thüringen", url: "https://meetings-eu1.hubspot.com/schauraum-erfurt/termin-erfurt?utm_source=landingpage&utm_medium=organic&utm_campaign=ProficioLP2026" },
  ];

  return (
    <Section id="kontakt" className="bg-primary-darker">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4"
        >
          Erleben Sie Beyond CMYK –{" "}
          <span className="text-beyond">live in Ihrem Schauraum</span>
        </motion.h2>
        <p className="text-lg text-white/70 max-w-xl mx-auto">
          Buchen Sie einen kostenlosen Demonstrationstermin in einem unserer drei
          Schauräume – mit Ihren eigenen Druckdaten.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Jetzt anfragen
            </h3>

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {[
              { key: "name", label: "Name *", type: "text", ph: "Max Mustermann", req: true },
              { key: "email", label: "E-Mail *", type: "email", ph: "max@druckerei.de", req: true },
              { key: "company", label: "Unternehmen", type: "text", ph: "Mustermann Druck GmbH", req: false },
              { key: "phone", label: "Telefon", type: "tel", ph: "+49 123 456789", req: false },
            ].map((field) => (
              <div key={field.key} className="mb-4">
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.ph}
                  required={field.req}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.key]: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            ))}

            <div className="mb-5">
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Interesse an
              </label>
              <select
                value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-border text-base bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="demo">Demonstrationstermin im Schauraum</option>
                <option value="beratung">Persönliche Beratung (telefonisch/vor Ort)</option>
                <option value="fruehbucher">Frühbucher-Informationen</option>
              </select>
            </div>

            <div className="flex gap-2 items-start mb-6">
              <input type="checkbox" required id="dsgvo" className="mt-1" />
              <label htmlFor="dsgvo" className="text-xs text-muted leading-relaxed">
                Ich bin damit einverstanden, dass Team Jansen mich zur Beratung
                rund um die Xerox Proficio kontaktiert.{" "}
                <a
                  href="https://teamjansen.de/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Datenschutzerklärung
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-beyond text-white rounded-lg py-4 text-lg font-bold hover:brightness-110 hover:scale-[1.02] transition-all shadow-glow-accent"
            >
              Termin anfragen
            </button>
          </form>
        ) : (
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Vielen Dank!
            </h3>
            <p className="text-muted max-w-sm leading-relaxed">
              Wir haben Ihre Anfrage erhalten und melden uns innerhalb von zwei
              Werktagen bei Ihnen, um einen Termin zu vereinbaren – persönlich,
              nicht per Autoresponder.
            </p>
          </div>
        )}

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-10">
            <div className="text-xs text-white/50 font-semibold uppercase tracking-widest mb-2">
              Sie telefonieren lieber?
            </div>
            <a
              href="tel:+49224292120"
              className="text-3xl lg:text-4xl font-extrabold text-white hover:text-beyond transition-colors tracking-tight"
            >
              +49 (0) 2242 9212-0
            </a>
          </div>

          <div>
            <div className="text-xs text-white/50 font-semibold uppercase tracking-widest mb-4">
              Schauraum-Termin buchen
            </div>
            {schauraum.map((loc, i) => (
              <a
                key={i}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3.5 px-5 rounded-xl border border-white/20 text-white mb-3 hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold">📍 {loc.city}</span>{" "}
                <span className="text-white/50">– {loc.region}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
