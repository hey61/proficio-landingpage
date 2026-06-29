"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type FormDataState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  postcode: string;
  currentSystem: string;
  volume: string;
  interest: string;
  nextStep: string;
  horizon: string;
  productionGoal: string;
  privacy: boolean;
  website: string;
};

const initialForm: FormDataState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  postcode: "",
  currentSystem: "",
  volume: "",
  interest: "",
  nextStep: "",
  horizon: "",
  productionGoal: "",
  privacy: false,
  website: "",
};

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

export default function CTASection() {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormDataState>(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = <K extends keyof FormDataState>(
    field: K,
    value: FormDataState[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const goToStepTwo = () => {
    setError("");
    if (
      !form.name.trim() ||
      !form.company.trim() ||
      !form.email.trim() ||
      !form.postcode.trim()
    ) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse an.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (step === 1) {
      goToStepTwo();
      return;
    }

    if (
      !form.volume ||
      !form.interest ||
      !form.nextStep ||
      !form.horizon ||
      !form.privacy
    ) {
      setError("Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie den Datenschutzhinweis.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "Die Anfrage konnte nicht versendet werden.");
      }
      setSent(true);
      setForm(initialForm);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Die Anfrage konnte nicht versendet werden.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="kontakt" className="bg-primary-darker py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-beyond">
            Kostenloser Zukunftscheck
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
            Welche Geschäftschance möchten Sie{" "}
            <span className="text-beyond">als Nächstes erschließen?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Beschreiben Sie kurz Ihren Betrieb, Ihre heutige Produktion und Ihr
            Ziel. Ich prüfe Ihre Angaben persönlich und melde mich mit einer
            ersten Zukunftseinordnung.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-9 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            {sent ? (
              <div
                className="flex min-h-[520px] flex-col items-center justify-center text-center"
                role="status"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-3xl font-bold text-success">
                  ✓
                </div>
                <h3 className="mt-6 text-2xl font-bold">Ihre Anfrage ist angekommen.</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  Ich prüfe Ihre Angaben persönlich und melde mich bei Ihnen.
                  Ihre Daten werden nicht automatisch an einen Partner
                  weitergegeben.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setStep(1);
                  }}
                  className="mt-7 text-sm font-semibold text-primary underline underline-offset-4"
                >
                  Weitere Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-7 flex items-center gap-3">
                  {[1, 2].map((number) => (
                    <div key={number} className="flex flex-1 items-center gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          step >= number
                            ? "bg-primary-darker text-white"
                            : "bg-light-bg text-muted"
                        }`}
                      >
                        {number}
                      </span>
                      <span
                        className={`hidden text-sm font-semibold sm:block ${
                          step >= number ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {number === 1 ? "Kontakt" : "Zukunftsziel"}
                      </span>
                      {number === 1 && <span className="h-px flex-1 bg-border" />}
                    </div>
                  ))}
                </div>

                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(event) => update("website", event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {step === 1 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Vor- und Nachname *" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(event) => update("name", event.target.value)}
                        className={inputClass}
                        placeholder="Max Mustermann"
                      />
                    </Field>
                    <Field label="Unternehmen *" htmlFor="company">
                      <input
                        id="company"
                        name="company"
                        autoComplete="organization"
                        required
                        value={form.company}
                        onChange={(event) => update("company", event.target.value)}
                        className={inputClass}
                        placeholder="Mustermann Druck GmbH"
                      />
                    </Field>
                    <Field label="Geschäftliche E-Mail *" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(event) => update("email", event.target.value)}
                        className={inputClass}
                        placeholder="max@druckerei.de"
                      />
                    </Field>
                    <Field label="Telefon" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(event) => update("phone", event.target.value)}
                        className={inputClass}
                        placeholder="+49 ..."
                      />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Postleitzahl / Region *" htmlFor="postcode">
                        <input
                          id="postcode"
                          name="postcode"
                          autoComplete="postal-code"
                          required
                          value={form.postcode}
                          onChange={(event) => update("postcode", event.target.value)}
                          className={inputClass}
                          placeholder="99084 / Thüringen"
                        />
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="button"
                        onClick={goToStepTwo}
                        className="mt-2 w-full rounded-lg bg-beyond py-4 text-base font-bold text-white shadow-glow-accent transition-all hover:brightness-110"
                      >
                        Weiter zum Zukunftsziel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Heutiges Produktionssystem" htmlFor="currentSystem">
                      <input
                        id="currentSystem"
                        name="currentSystem"
                        value={form.currentSystem}
                        onChange={(event) => update("currentSystem", event.target.value)}
                        className={inputClass}
                        placeholder="Hersteller / Modell"
                      />
                    </Field>
                    <Field label="Monatliches Farbvolumen *" htmlFor="volume">
                      <select
                        id="volume"
                        name="volume"
                        required
                        value={form.volume}
                        onChange={(event) => update("volume", event.target.value)}
                        className={inputClass}
                      >
                        <option value="">Bitte wählen</option>
                        <option>unter 25.000</option>
                        <option>25.000–75.000</option>
                        <option>75.000–150.000</option>
                        <option>über 150.000</option>
                        <option>noch unklar</option>
                      </select>
                    </Field>
                    <Field label="Wichtigstes Zukunftsthema *" htmlFor="interest">
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={form.interest}
                        onChange={(event) => update("interest", event.target.value)}
                        className={inputClass}
                      >
                        <option value="">Bitte wählen</option>
                        <option>neue Premiumprodukte</option>
                        <option>neue Zielgruppen</option>
                        <option>mehr Wertschöpfung im Haus</option>
                        <option>Beyond CMYK und Spezialeffekte</option>
                        <option>Ersatzinvestition</option>
                        <option>Automatisierung</option>
                        <option>noch offen</option>
                      </select>
                    </Field>
                    <Field label="Gewünschter nächster Schritt *" htmlFor="nextStep">
                      <select
                        id="nextStep"
                        name="nextStep"
                        required
                        value={form.nextStep}
                        onChange={(event) => update("nextStep", event.target.value)}
                        className={inputClass}
                      >
                        <option value="">Bitte wählen</option>
                        <option>erste Zukunftseinordnung</option>
                        <option>Anwendungs- und Marktideen</option>
                        <option>Muster ansehen</option>
                        <option>Technik oder Demonstration prüfen</option>
                        <option>Partnergespräch vorbereiten</option>
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Zeithorizont *" htmlFor="horizon">
                        <select
                          id="horizon"
                          name="horizon"
                          required
                          value={form.horizon}
                          onChange={(event) => update("horizon", event.target.value)}
                          className={inputClass}
                        >
                          <option value="">Bitte wählen</option>
                          <option>0–3 Monate</option>
                          <option>4–6 Monate</option>
                          <option>7–12 Monate</option>
                          <option>mehr als 12 Monate</option>
                          <option>noch offen</option>
                        </select>
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <Field
                        label="Welche Geschäftschance möchten Sie entwickeln?"
                        htmlFor="productionGoal"
                      >
                        <textarea
                          id="productionGoal"
                          name="productionGoal"
                          rows={4}
                          value={form.productionGoal}
                          onChange={(event) => update("productionGoal", event.target.value)}
                          className={inputClass}
                          placeholder="Produkte, Zielkunden, heutige Engpässe oder eine erste Idee ..."
                        />
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="flex items-start gap-3 rounded-xl bg-light-bg p-4 text-xs leading-relaxed text-muted">
                        <input
                          type="checkbox"
                          name="privacy"
                          required
                          checked={form.privacy}
                          onChange={(event) => update("privacy", event.target.checked)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                        />
                        <span>
                          Ich habe die{" "}
                          <Link
                            href="/datenschutz"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-primary underline"
                          >
                            Datenschutzerklärung
                          </Link>{" "}
                          zur Kenntnis genommen. Meine Angaben werden zur
                          Beantwortung der Anfrage verarbeitet. Eine
                          Partnerweitergabe erfolgt erst nach gesonderter
                          Abstimmung und Zustimmung. *
                        </span>
                      </label>
                    </div>

                    <div className="flex gap-3 sm:col-span-2">
                      <button
                        type="button"
                        onClick={() => {
                          setError("");
                          setStep(1);
                        }}
                        className="rounded-lg border border-border px-5 py-4 text-sm font-bold text-muted transition-colors hover:bg-light-bg"
                      >
                        Zurück
                      </button>
                      <button
                        type="submit"
                        disabled={sending}
                        className="flex-1 rounded-lg bg-beyond py-4 text-base font-bold text-white shadow-glow-accent transition-all hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
                      >
                        {sending ? "Wird gesendet …" : "Zukunftscheck anfragen"}
                      </button>
                    </div>
                  </div>
                )}

                <div aria-live="polite" className="mt-4 min-h-5 text-sm text-red-700">
                  {error}
                </div>
              </form>
            )}
          </div>

          <aside className="flex flex-col justify-center text-white">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-beyond">
                Direkt erreichbar
              </div>
              <a
                href="tel:+493614229616"
                className="mt-5 block text-3xl font-extrabold transition-colors hover:text-beyond"
              >
                0361 4229616
              </a>
              <a
                href="mailto:jens@proficio-digitaldruck.de"
                className="mt-3 block break-all text-sm text-white/70 transition-colors hover:text-white"
              >
                jens@proficio-digitaldruck.de
              </a>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-lg font-bold">Was danach passiert</h3>
              <ol className="mt-5 space-y-4 text-sm leading-relaxed text-white/60">
                <li>1. Ich ordne Ihre Angaben persönlich und geschäftlich ein.</li>
                <li>2. Wir klären offene Fragen direkt miteinander.</li>
                <li>
                  3. Nur wenn es sinnvoll ist und Sie zustimmen, stelle ich den
                  Kontakt zu einem Umsetzungspartner her.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}
