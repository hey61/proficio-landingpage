# Proficio Fachcheck

Vorschau- und Übergabefassung für den Relaunch von `proficio-digitaldruck.de`.

## Absender

Jens Burghold / KI-Strategien

## Enthalten

- neuer persönlicher Markenauftritt
- Proficio-Potenzialcheck mit zweistufigem Formular
- Profilbild und persönlicher Vertrauensbereich
- verifizierter PX300-/PX500-Vergleich
- transparente Partnervermittlung
- eigene FAQ, Metadaten und strukturierte Daten
- Impressum und Datenschutz als Arbeitsfassung
- SMTP-Versand über all-inkl nach dem KNAKKE-Muster
- Sitemap, Robots-Datei und dynamisches Open-Graph-Bild

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

## Umgebungsvariablen

Diese Werte lokal in `.env.local` und für die Veröffentlichung in Vercel hinterlegen:

```text
SMTP_HOST=[all-inkl-Mailserver]
SMTP_PORT=465
SMTP_USER=jens@proficio-digitaldruck.de
SMTP_PASS=[Postfach-Passwort]
CONTACT_TO=jens@proficio-digitaldruck.de
CONTACT_FROM=Proficio Fachcheck <jens@proficio-digitaldruck.de>
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
