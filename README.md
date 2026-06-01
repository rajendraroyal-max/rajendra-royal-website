# Rajendra Royal — Personal Branding Website

## Quick Start (Local)
```bash
npm install
npm start
# Opens at http://localhost:3000
```

## Deploy to Vercel (Live Website)

### Step 1 — Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2 — Build the project
```bash
npm run build
```

### Step 3 — Deploy
```bash
vercel
```
Follow the 3 prompts. Your site goes live at a `.vercel.app` URL instantly.

### Step 4 — Add Custom Domain
1. Buy `rajendraroyal.com` from GoDaddy or Namecheap (~₹800/year)
2. In Vercel dashboard → your project → Settings → Domains
3. Add `rajendraroyal.com` and `www.rajendraroyal.com`
4. Copy the DNS records Vercel shows you
5. In your domain registrar → DNS settings → paste Vercel's records
6. Wait 10–30 minutes → live on your domain

## GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit — Rajendra Royal website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rajendra-royal.git
git push -u origin main
```
Then in Vercel → Import from GitHub → auto-deploys on every push.

## Contact Form Setup (Formspree — Free)
1. Go to https://formspree.io and sign up (free)
2. Create a new form → copy your form ID (e.g. `xpwzabcd`)
3. In App.jsx, find the contact form section
4. Replace: `<form>` with `<form action="https://formspree.io/f/xpwzabcd" method="POST">`
5. That's it — form submissions arrive in your email

## Resume PDF
1. Name your CV file: `Rajendra_Royal_CV.pdf`
2. Place it in the `/public` folder
3. In Admin Panel → Profile → CV URL → type: `/Rajendra_Royal_CV.pdf`
4. The Download CV button now links to the real file

## Google Search Console (Indexing)
1. Go to https://search.google.com/search-console
2. Add property → Domain → type `rajendraroyal.com`
3. Verify via DNS (Vercel dashboard makes this easy)
4. Submit sitemap: `https://www.rajendraroyal.com/sitemap.xml`
5. Request indexing for your homepage

## LinkedIn Integration
- Your LinkedIn URL is already in the site data
- Update it via Admin Panel (✏️ button) → Profile → LinkedIn URL
- Enter your real URL: `linkedin.com/in/YOUR-ACTUAL-HANDLE`

## Files in This Project
```
/public
  index.html     ← SEO meta tags, Open Graph, structured data
  robots.txt     ← Tells Google to index your site
  sitemap.xml    ← Helps Google find all pages
  manifest.json  ← PWA config, mobile home screen icon
/src
  index.js       ← React entry point
  App.jsx        ← Full website (copy from rajendra_royal_v2.jsx)
vercel.json      ← Vercel deployment config
.gitignore       ← Git ignore rules
package.json     ← Project dependencies
README.md        ← This file
```
