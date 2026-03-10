"use client";
import { useState, FormEvent } from "react";

export default function CTASection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form backend (e.g. n8n webhook or Formspree)
    setSent(true);
  };

  const hubspotLinks = [
    { city: "Hennef", region: "Köln / Bonn", url: "https://meetings-eu1.hubspot.com/schauraum/termin-hennef?utm_source=landingpage&utm_medium=organic&utm_campaign=ProficioLP2026" },
    { city: "Kassel", region: "Nordhessen", url: "https://meetings-eu1.hubspot.com/schauraum-kassel/termin-kassel?utm_source=landingpage&utm_medium=organic&utm_campaign=ProficioLP2026" },
    { city: "Erfurt", region: "Thüringen", url: "https://meetings-eu1.hubspot.com/schauraum-erfurt/termin-erfurt?utm_source=landingpage&utm_medium=organic&utm_campaign=ProficioLP2026" },
  ];

  return (
    <section id="kontakt" className="bg-primary-darker py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Erleben Sie Beyond CMYK –{" "}
            <span className="text-beyond">live in Ihrem Schauraum</span>
          </h2>
          <p className="text-lg text-white/65 max-w-xl mx-auto">
            Buchen Sie einen kostenlosen Demonstrationstermin – mit Ihren eigenen Druckdaten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          {!sent ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6">Jetzt anfragen</h3>

              {/* Honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              {[
                { name: "name", label: "Name *", type: "text", ph: "Max Mustermann", req: true },
                { name: "email", label: "E-Mail *", type: "email", ph: "max@druckerei.de", req: true },
                { name: "company", label: "Unternehmen", type: "text", ph: "Mustermann Druck GmbH", req: false },
                { name: "phone", label: "Telefon", type: "tel", ph: "+49 123 456789", req: false },
              ].map((f) => (
                <div key={f.name} className="mb-4">
                  <label className="block text-sm font-semibold mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.ph}
                    required={f.req}
                    className="w-full px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1.5">Interesse an</label>
                <select
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="demo">Demonstrationstermin im Schauraum</option>
                  <option value="beratung">Persönliche Beratung (telefonisch/vor Ort)</option>
                  <option value="fruehbucher">Frühbucher-Informationen</option>
                </select>
              </div>

              <div className="flex gap-2 mb-6 items-start">
                <input type="checkbox" id="dsgvo" required className="mt-1 accent-primary" />
                <label htmlFor="dsgvo" className="text-xs text-muted leading-relaxed">
                  Ich bin damit einverstanden, dass Team Jansen mich zur Beratung rund um die
                  Xerox Proficio kontaktiert.{" "}
                  <a href="https://teamjansen.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-beyond text-white rounded-lg py-4 text-base font-bold hover:brightness-110 hover:scale-[1.02] transition-all shadow-glow-accent"
              >
                Termin anfragen
              </button>
            </form>
          ) : (
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Vielen Dank!</h3>
              <p className="text-muted max-w-xs">
                Wir melden uns innerhalb von zwei Werktagen bei Ihnen – persönlich, nicht per Autoresponder.
              </p>
            </div>
          )}

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <div className="text-xs text-white/40 font-semibold uppercase tracking-widest mb-2">
                Sie telefonieren lieber?
              </div>
              <a
                href="tel:+49224292120"
                className="text-3xl lg:text-4xl font-extrabold text-white hover:text-beyond transition-colors"
              >
                +49 (0) 2242 9212-0
              </a>
              <p className="text-sm text-white/50 mt-2">
                Mo–Fr 8:00–17:00 Uhr
              </p>
            </div>

            <div>
              <div className="text-xs text-white/40 font-semibold uppercase tracking-widest mb-4">
                Schauraum-Termin direkt buchen
              </div>
              {hubspotLinks.map((loc, i) => (
                <a
                  key={i}
                  href={loc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3.5 rounded-xl border border-white/20 text-white mb-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  📍 {loc.city}{" "}
                  <span className="text-white/50 font-normal">– {loc.region}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
