# Rajendra Royal — Personal Branding Website

## Tech Stack
- **React 18** (Create React App)
- **Vanilla CSS-in-JS** (no Tailwind / no styled-components)
- **localStorage** for admin panel data persistence
- **Vercel** for deployment

## Quick Start (Local Development)

```bash
npm install
npm start
# Opens at http://localhost:3000
```

## Deploy to Vercel

### Option A — Via GitHub (Recommended, auto-deploys on push)
1. Push to GitHub (see below)
2. Go to https://vercel.com → New Project → Import from GitHub
3. Select `rajendra-royal` repo → Deploy
4. Done — live at `rajendra-royal.vercel.app` in ~2 minutes

### Option B — Via CLI
```bash
npm install -g vercel
npm run build
vercel --prod
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — Rajendra Royal website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rajendra-royal.git
git push -u origin main
```

## Connect Custom Domain
1. Buy `rajendraroyal.com` (GoDaddy / Namecheap ~₹800/yr)
2. Vercel dashboard → Project → Settings → Domains → Add domain
3. Copy DNS records from Vercel → paste into domain registrar
4. Wait 15–60 mins → live at https://www.rajendraroyal.com

## Add Your Profile Photo
1. Save as `photo.jpg` → place in `/public/`
2. Open site → click ✏️ (Admin Panel) → Profile tab → Photo URL → `/photo.jpg`
3. Save → photo appears in About section

## Add Gallery Photos
1. Create `/public/gallery/` folder
2. Add photos: `event1.jpg`, `iim.jpg`, etc.
3. Admin Panel (✏️) → Gallery tab → paste paths like `/gallery/event1.jpg`

## Add Speaking Event Photos
1. Place photo in `/public/gallery/`
2. Admin Panel → Speaking tab → each event → Photo field → `/gallery/speaking1.jpg`

## Connect Contact Form (Formspree — Free)
1. Go to https://formspree.io → sign up → New Form
2. Copy your form ID (e.g. `xpwzabcd`)
3. In `src/App.js` find the contact form — wrap inputs in:
   ```jsx
   <form action="https://formspree.io/f/xpwzabcd" method="POST">
     {/* existing inputs with name attributes */}
     <button type="submit">Send Message</button>
   </form>
   ```

## Upload Resume PDF
1. Save as `Rajendra_Royal_CV.pdf` → place in `/public/`
2. Admin Panel → Profile → Resume URL → `/Rajendra_Royal_CV.pdf`

## Enable Google Indexing (after domain is live)
1. Go to https://search.google.com/search-console
2. Add property → Domain → `rajendraroyal.com`
3. Verify via DNS
4. Submit sitemap: `https://www.rajendraroyal.com/sitemap.xml`
5. Request indexing on homepage

## Project Structure
```
rajendra-royal/
├── public/
│   ├── index.html        ← SEO meta, Open Graph, JSON-LD structured data
│   ├── manifest.json     ← PWA manifest
│   ├── robots.txt        ← Google crawl permission
│   ├── sitemap.xml       ← Google sitemap
│   ├── favicon.ico       ← Add your own
│   └── gallery/          ← Put event photos here
├── src/
│   ├── App.js            ← Full website — all sections, admin panel
│   └── index.js          ← React entry point
├── vercel.json           ← Vercel config + security headers
├── package.json          ← Dependencies (React 18, react-scripts)
├── .gitignore
└── README.md
```

## Admin Panel
Click the **✏️ button** (bottom-right corner) to open the editor.
Tabs: Profile · About · Expertise · Curriculum · Credentials · Portfolio · Speaking · Gallery · Journey · Quotes · Testimonials · Blog · Ticker

All changes save to **localStorage** and persist across page refreshes.

---
*Built for Rajendra Royal — Supply Chain & Operations Leader | Doctoral Researcher*
