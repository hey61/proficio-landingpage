# Zukunftscheck für Druckdienstleister

Vorschau- und Übergabefassung für den Relaunch von `proficio-digitaldruck.de`.

## Absender

Jens Burghold / KI-Strategien

## Enthalten

- neuer persönlicher Markenauftritt
- Zukunftscheck mit zweistufigem Formular
- Profilbild und persönlicher Vertrauensbereich
- verifizierter PX300-/PX500-Vergleich
- transparente Partnervermittlung
- eigene FAQ, Metadaten und strukturierte Daten
- Impressum und Datenschutz als Arbeitsfassung
- SMTP-Versand über all-inkl nach dem KNAKKE-Muster
- Sitemap, Robots-Datei und dynamisches Open-Graph-Bild
- Themenseiten für Verpackungsdruck, Spezialdruck und Hausdruckereien
- wiederholbares Sichtbarkeits-Audit für die öffentlichen Seiten

## Technische Basis

- Next.js 16.2
- React 19.2
- TypeScript
- Tailwind CSS 3
- Motion
- Nodemailer über all-inkl-SMTP

Mindestens Node.js 20.9 verwenden.

## Lokal starten

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Danach `http://localhost:3000` öffnen.

## Sichtbarkeit regelmäßig prüfen

Nach der Veröffentlichung prüft der folgende Lauf alle wichtigen Seiten auf
Erreichbarkeit, Seitentitel, Beschreibung, H1, Canonical, strukturierte Daten,
interne Links und die vereinbarten Themenbegriffe:

```bash
npm run visibility:audit
```

Eine Vorschau lässt sich abweichend prüfen:

```bash
VISIBILITY_SITE_URL=https://ihre-vorschau.vercel.app npm run visibility:audit
```

Das technische Audit ergänzt die Google Search Console. Nur dort werden die
tatsächlichen Suchanfragen, Impressionen, Klicks und Veränderungen der
Sichtbarkeit sichtbar.

Nach einem Build kann dieselbe Prüfung ohne öffentliche Website direkt gegen
die erzeugten Seiten laufen:

```bash
VISIBILITY_BUILD_DIR=.next/server/app npm run visibility:audit
```

## Umgebungsvariablen

Diese Werte lokal in `.env.local` und für die Veröffentlichung in Vercel hinterlegen:

```text
SMTP_HOST=[all-inkl-Mailserver]
SMTP_PORT=465
SMTP_USER=jens@proficio-digitaldruck.de
SMTP_PASS=[Postfach-Passwort]
CONTACT_TO=jens@proficio-digitaldruck.de
CONTACT_FROM=Zukunftscheck Digitaldruck <jens@proficio-digitaldruck.de>
```

Das Passwort niemals in GitHub, den Vault oder eine Chat-Nachricht schreiben.

## Vor Veröffentlichung

1. `pnpm typecheck`
2. `pnpm build`
3. Desktop und Mobilansicht prüfen
4. Formular mit echten SMTP-Werten testen
5. Fehlerfall mit absichtlich falschem Passwort testen
6. Empfang und Weiterleitung der Anfrage prüfen
7. Antwortfunktion an die Absenderadresse prüfen
8. Impressum, Datenschutz, Markenhinweis und Bildrechte rechtlich freigeben
9. Vercel-Vorschau kontrollieren
10. Erst danach die Live-Domain umstellen

## Wichtig

Eine Formulareinreichung gibt noch keine Zustimmung zur Weitergabe an einen Partner. Diese Zustimmung muss später für den konkret benannten Empfänger eingeholt und dokumentiert werden.
