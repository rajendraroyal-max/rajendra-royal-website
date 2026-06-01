# Rajendra Royal Website — Checklist Audit
Generated: June 2025

---

## ☑ CHECKLIST STATUS

| # | Item | Status | What's Done / What's Needed |
|---|------|--------|----------------------------|
| 1 | Domain purchased | ⬜ NOT DONE | You need to do this — see Step 1 below |
| 2 | Website code received from Claude | ✅ DONE | `rajendra_royal_v2.jsx` — full React site |
| 3 | GitHub repository created | ⬜ NOT DONE | See Step 3 below — 5 minutes |
| 4 | Website deployed on Vercel | ⬜ NOT DONE | Needs GitHub repo first — then 2 minutes |
| 5 | Domain connected | ⬜ NOT DONE | Needs domain + Vercel deployment first |
| 6 | LinkedIn added | ✅ IN CODE | Placeholder URL — update via Admin Panel |
| 7 | Resume PDF uploaded | ⬜ NOT DONE | Need your real PDF — see Step 7 below |
| 8 | Contact form working | ⬜ NOT DONE | Form exists but not connected — see Step 8 |
| 9 | Google indexing enabled | ✅ IN CODE | robots.txt + sitemap.xml created. Submit after deploy |
| 10 | Mobile view tested | ✅ IN CODE | Responsive CSS at 1024px, 768px, 480px breakpoints |

**Summary: 3 items fully done · 2 items done in code (need your data) · 5 items need your action**

---

## STEP-BY-STEP ACTION PLAN

---

### STEP 1 — Buy Your Domain (10 minutes, ~₹800/year)

**Recommended registrars:**
- **GoDaddy India** → https://www.godaddy.com/en-in (most common in India)
- **Namecheap** → https://www.namecheap.com (slightly cheaper)
- **Google Domains** → https://domains.google (simplest DNS management)

**Domain to buy:** `rajendraroyal.com`
Also register `www.rajendraroyal.com` — most registrars include this free.

**Tip:** Do NOT buy hosting from the registrar. You only need the domain name. Hosting = Vercel (free).

---

### STEP 2 — Set Up the Code Locally (15 minutes)

```bash
# 1. Install Node.js if you don't have it
# Download from: https://nodejs.org (LTS version)

# 2. Create the project
npx create-react-app rajendra-royal
cd rajendra-royal

# 3. Replace src/App.js with the website code
# Copy content from rajendra_royal_v2.jsx into src/App.jsx

# 4. Copy deployment files into the project folder:
#    - public/index.html (replace existing)
#    - public/robots.txt (new file)
#    - public/sitemap.xml (new file)
#    - public/manifest.json (replace existing)
#    - vercel.json (new file in root)
#    - .gitignore (replace existing)

# 5. Test locally
npm install
npm start
# Your site opens at http://localhost:3000
```

---

### STEP 3 — Create GitHub Repository (5 minutes)

```bash
# 1. Go to https://github.com and sign up / sign in
# 2. Click "New repository"
# 3. Name it: rajendra-royal
# 4. Set to Public
# 5. Do NOT add README (you already have one)
# 6. Click Create repository

# Then in your terminal (inside the project folder):
git init
git add .
git commit -m "Initial commit — Rajendra Royal website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rajendra-royal.git
git push -u origin main
```

---

### STEP 4 — Deploy on Vercel (2 minutes)

**Option A — Via GitHub (Recommended):**
1. Go to https://vercel.com and sign up with GitHub
2. Click "Add New Project"
3. Import your `rajendra-royal` GitHub repository
4. Vercel auto-detects React — click Deploy
5. Done. Live at `rajendra-royal.vercel.app` instantly

**Option B — Via CLI:**
```bash
npm install -g vercel
vercel
# Answer 3 questions → live in 60 seconds
```

**After every code change:**
```bash
git add .
git commit -m "Update: describe what changed"
git push
# Vercel auto-deploys in ~90 seconds
```

---

### STEP 5 — Connect Your Domain (10 minutes + DNS propagation)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Click **Add Domain**
3. Type: `rajendraroyal.com` → Add
4. Type: `www.rajendraroyal.com` → Add
5. Vercel shows you DNS records (looks like: `A record → 76.76.21.21`)
6. Go to your domain registrar → DNS Management
7. Add/update these records exactly as Vercel shows
8. Wait 15–60 minutes for DNS to propagate
9. Your site is now live at `https://www.rajendraroyal.com`

**Vercel also gives you free SSL (https://) automatically.**

---

### STEP 6 — Update LinkedIn URL (2 minutes)

Your real LinkedIn handle must replace the placeholder.

**In the website:**
1. Open your live site
2. Click the ✏️ button (bottom right) → Admin Panel
3. Click **Profile** tab
4. Find **LinkedIn URL** field
5. Replace `linkedin.com/in/rajendraroyal` with your actual URL
   (e.g. `linkedin.com/in/rajendra-royal-12345`)
6. Click **Save All Changes**

---

### STEP 7 — Upload Resume PDF (5 minutes)

1. Save your CV as: `Rajendra_Royal_CV.pdf`
2. Place the file inside the `/public` folder of your project
3. In Admin Panel → **Profile** tab → **CV / Resume URL**
4. Change `#` to `/Rajendra_Royal_CV.pdf`
5. Save → push to GitHub → Vercel auto-deploys
6. "Download CV" button now downloads your real CV

**Tip:** Keep the PDF under 2MB. Use a PDF compressor at https://smallpdf.com if needed.

---

### STEP 8 — Make Contact Form Work (10 minutes, Free)

The form currently has inputs but no backend. Use **Formspree** (free, no code needed):

1. Go to https://formspree.io
2. Sign up with your email
3. Click **New Form**
4. Name it "Rajendra Royal Contact"
5. Copy the form endpoint (looks like: `https://formspree.io/f/xpwzabcd`)

**In your App.jsx, find the contact form section (~line 1080) and update:**

```jsx
// BEFORE (non-functional):
<button className="btn-p" style={{ marginTop: ".3rem" }}>Send Message</button>

// AFTER — wrap inputs in a form tag:
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
>
  {/* all your existing input fields stay the same */}
  {/* just add name attributes to each input: */}
  {/* <input name="name" ... /> */}
  {/* <input name="email" ... /> */}
  {/* <input name="organisation" ... /> */}
  {/* <textarea name="message" ... /> */}
  <button type="submit" className="btn-p">Send Message</button>
</form>
```

6. When someone submits, Formspree emails you at the address you signed up with
7. Free plan: 50 submissions/month — more than enough

**Alternative: EmailJS** (sends directly from browser, no redirect)
→ https://www.emailjs.com — slightly more setup but smoother UX

---

### STEP 9 — Enable Google Indexing (15 minutes, after domain is live)

Files already created: `robots.txt` and `sitemap.xml`

**After your domain is live:**

1. Go to https://search.google.com/search-console
2. Click **Add Property**
3. Choose **Domain** → type `rajendraroyal.com`
4. Google gives you a TXT record → add it in your domain registrar DNS
5. Click Verify
6. In left sidebar → **Sitemaps**
7. Enter: `sitemap.xml` → Submit
8. Go to **URL Inspection** → type your full URL → **Request Indexing**
9. Google typically indexes within 1–7 days

**Also do this:** In Google Search Console → Settings → change crawl rate to "faster" if available.

---

### STEP 10 — Test Mobile View (5 minutes)

**During development (local):**
- Open Chrome → right-click → Inspect → click the phone icon (toggle device toolbar)
- Test at: iPhone SE (375px), iPhone 14 (390px), Samsung Galaxy (412px)

**After deployment:**
- Open `https://www.rajendraroyal.com` on your actual phone
- Check: text readable, buttons tappable, nav works, no horizontal scroll

**Google's tool:** https://search.google.com/test/mobile-friendly
→ Enter your URL → Google tests it and shows a screenshot

**Current breakpoints in the code:**
- 1024px — tablet (hero stacks, 2-col footer)
- 768px — mobile (all grids go single column, nav links hide)
- 480px — small mobile (credentials go single column)

---

## FINAL CHECKLIST (Once All Steps Done)

```
☑ Domain purchased          → rajendraroyal.com
☑ Website code received     → rajendra_royal_v2.jsx
☑ GitHub repository created → github.com/USERNAME/rajendra-royal
☑ Website deployed          → rajendra-royal.vercel.app
☑ Domain connected          → www.rajendraroyal.com (https)
☑ LinkedIn added            → Admin Panel → Profile → LinkedIn URL
☑ Resume PDF uploaded       → /public/Rajendra_Royal_CV.pdf
☑ Contact form working      → Formspree connected
☑ Google indexing enabled   → Search Console + sitemap submitted
☑ Mobile view tested        → Chrome DevTools + real device
```

---

## MONTHLY MAINTENANCE (15 mins/month)

- Update Admin Panel with new speaking events, projects, or articles
- Push any code changes: `git add . && git commit -m "Update" && git push`
- Check Google Search Console for any crawl errors
- Refresh sitemap `lastmod` date when content changes significantly

---

*This document was generated as part of the Rajendra Royal personal branding website project.*
