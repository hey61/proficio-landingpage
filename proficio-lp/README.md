# Proficio Landingpage – Team Jansen

Xerox Proficio PX300 & PX500 Conversion-Landingpage.
Next.js 14 + Tailwind CSS + Framer Motion. Deployed auf Vercel.

## Deployment (3 Schritte)

### 1. GitHub Repository erstellen
- Geh auf github.com → "New repository"
- Name: `proficio-landingpage`
- Private oder Public – beides geht
- "Create repository"

### 2. Code hochladen
Option A – Per Drag & Drop:
- Entpacke dieses ZIP
- Geh ins neue Repository auf GitHub
- Klicke "uploading an existing file"
- Ziehe ALLE Dateien und Ordner rein
- "Commit changes"

Option B – Per Terminal (wenn du Git installiert hast):
```bash
cd proficio-landingpage
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DEIN-USERNAME/proficio-landingpage.git
git push -u origin main
```

### 3. Vercel verbinden
- Geh auf vercel.com → "Add New Project"
- "Import Git Repository" → Wähle `proficio-landingpage`
- Framework: Next.js (wird automatisch erkannt)
- "Deploy"
- Fertig! Vercel gibt dir eine URL (z.B. proficio-landingpage.vercel.app)

## Custom Domain
Wenn proficio-druckrevolution.de als Domain gewünscht ist:
- In Vercel: Settings → Domains → Domain hinzufügen
- DNS-Einträge bei deinem Domain-Provider setzen (Vercel zeigt dir die Werte)

## Anpassungen
- Farben: `tailwind.config.ts`
- Texte: `components/*.tsx`
- Bilder: `public/images/` und `public/logos/`
- Meta-Tags: `app/layout.tsx`

Gebaut von Max (KI-Team ki-strategien.com) für Team Jansen.
