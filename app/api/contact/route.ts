import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  postcode?: string;
  currentSystem?: string;
  volume?: string;
  interest?: string;
  nextStep?: string;
  horizon?: string;
  productionGoal?: string;
  privacy?: boolean;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value: unknown, maxLength = 800) =>
  typeof value === "string"
    ? value.replace(/\0/g, "").trim().slice(0, maxLength)
    : "";

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const company = clean(payload.company, 160);
  const email = clean(payload.email, 180);
  const phone = clean(payload.phone, 80);
  const postcode = clean(payload.postcode, 100);
  const currentSystem = clean(payload.currentSystem, 180);
  const volume = clean(payload.volume, 80);
  const interest = clean(payload.interest, 100);
  const nextStep = clean(payload.nextStep, 120);
  const horizon = clean(payload.horizon, 80);
  const productionGoal = clean(payload.productionGoal, 1500);

  if (
    !name ||
    !company ||
    !email ||
    !postcode ||
    !volume ||
    !interest ||
    !nextStep ||
    !horizon
  ) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
      { status: 400 },
    );
  }

  if (payload.privacy !== true) {
    return NextResponse.json(
      { error: "Bitte bestätigen Sie, dass Sie den Datenschutzhinweis gelesen haben." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT || "465";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO || smtpUser;
  const contactFrom =
    process.env.CONTACT_FROM ||
    (smtpUser ? `Zukunftscheck Digitaldruck <${smtpUser}>` : undefined);

  const missingVariables = [
    ["SMTP_HOST", smtpHost],
    ["SMTP_USER", smtpUser],
    ["SMTP_PASS", smtpPass],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingVariables.length > 0) {
    console.error(
      `Zukunftscheck: SMTP-Konfiguration unvollständig. Es fehlen: ${missingVariables.join(", ")}`,
    );
    return NextResponse.json(
      {
        error:
          "Der Versand ist derzeit nicht möglich. Bitte schreiben Sie direkt an jens@proficio-digitaldruck.de.",
      },
      { status: 500 },
    );
  }

  const port = Number(smtpPort);
  if (!Number.isInteger(port)) {
    console.error("Zukunftscheck: SMTP_PORT ist ungültig.");
    return NextResponse.json(
      { error: "Der Versand ist derzeit nicht möglich." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port,
    secure: port === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const text = [
    "Neue Anfrage über proficio-digitaldruck.de",
    "",
    `Unternehmen: ${company}`,
    `Name: ${name}`,
    `E-Mail: ${email}`,
    phone ? `Telefon: ${phone}` : "Telefon: nicht angegeben",
    `PLZ / Region: ${postcode}`,
    "",
    `Heutiges Produktionssystem: ${currentSystem || "nicht angegeben"}`,
    `Monatliches Farbvolumen: ${volume}`,
    `Wichtigstes Zukunftsthema: ${interest}`,
    `Gewünschter nächster Schritt: ${nextStep}`,
    `Zeithorizont: ${horizon}`,
    "",
    "Geschäftschance / Ziel:",
    productionGoal || "nicht angegeben",
    "",
    "Datenschutzhinweis wurde zur Kenntnis genommen.",
    "Eine Weitergabe an Partner ist damit noch nicht freigegeben.",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: contactFrom,
      to: contactTo,
      replyTo: { name, address: email },
      subject: `Neue Zukunftscheck-Anfrage – ${company.replace(/[\r\n]/g, " ")}`,
      text,
    });
  } catch (error) {
    console.error("Zukunftscheck: Mailversand fehlgeschlagen.", error);
    return NextResponse.json(
      {
        error:
          "Der Versand ist fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an jens@proficio-digitaldruck.de.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
