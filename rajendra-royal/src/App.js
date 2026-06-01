import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   PRIMARY GOAL: Position Rajendra as a senior SC / Operations
   Leader open to CXO / VP / Director roles AND consulting
   engagements. Research credentials as a differentiator.
   Every section: Credibility → Expertise Proof → Conversion.
───────────────────────────────────────────────────────────── */

const G = {
  gold: "#9a7b2e", goldLight: "#b8960f", goldBg: "rgba(154,123,46,.09)",
  goldBorder: "rgba(154,123,46,.28)", navy: "#1a2f52", primary: "#1e3a5f",
  bg: "#f7f8fa", bgCard: "#ffffff", bgAlt: "#eef1f6",
  text: "#18253a", sub: "#475569", muted: "#8596aa",
  border: "#dde3ed", borderGold: "rgba(154,123,46,.25)",
};

/* ── SITE DATA ──────────────────────────────────────────────── */
const DEFAULT_DATA = {
  profile: {
    name: "Rajendra Royal",
    title: "Supply Chain & Operations Leader",
    subtitle: "Doctoral Researcher · Business & Operations",
    headline: "20+ Years Transforming Supply Chains Across Retail & Logistics",
    subheading: "Senior leader with expertise in warehouse operations, inventory management, and supply chain transformation. IIM Calcutta · IIT Delhi · Dual MBA · Six Sigma · Doctoral Research at SSBM Geneva.",
    openTo: "Open to Senior Leadership, CXO & Consulting Roles",
    email: "contact@rajendraroyal.com",
    linkedin: "www.linkedin.com/in/rajendraroyal/",
    twitter: "@rajendraroyal",
    location: "India",
    cvUrl: "#",
    photo: "",          // ← Add path: "/photo.jpg" after uploading to /public
  },
  ticker: [
    "🔬 Doctoral Researcher in Business & Operations · SSBM Geneva",
    "📦 20+ Years Supply Chain & Operations Leadership",
    "🏛️ IIM Calcutta EPOM · IIT Delhi Executive Program Alumni",
    "🎤 Available for Senior Leadership, Consulting & Speaking",
  ],
  about: {
    bio: "Rajendra Royal is a Supply Chain and Operations leader with 20+ years of experience delivering measurable results across retail, logistics, and distribution. He has led large-scale warehouse transformations, built inventory optimization frameworks, and implemented analytics-driven KPI systems that connect operations to business outcomes.\n\nHis academic foundation — dual MBAs, executive programs at IIM Calcutta and IIT Delhi, Six Sigma certification, and ongoing doctoral research in Business & Operations at SSBM Geneva — gives him a rare combination of hands-on execution ability and strategic depth.",
    mission: "To bring rigorous thinking and proven operational expertise to organizations that want to build supply chains that are faster, leaner, and more resilient.",
  },
  values: [
    { icon: "🎯", title: "Strategic Clarity", desc: "Turning complex challenges into clear, executable plans." },
    { icon: "📊", title: "Evidence-Based Decisions", desc: "KPIs, analytics, and data — not intuition alone." },
    { icon: "🤝", title: "People-Led Execution", desc: "Results come through teams. Building capability is non-negotiable." },
    { icon: "♾️", title: "Continuous Improvement", desc: "Lean, Six Sigma, and Kaizen as a way of working — not a project." },
  ],
  expertise: [
    { area: "Supply Chain Management & Strategy", level: "Expert", years: "20+" },
    { area: "Warehouse Operations", level: "Expert", years: "20+" },
    { area: "Inventory Management & Optimization", level: "Expert", years: "18+" },
    { area: "Demand Forecasting & Planning", level: "Expert", years: "15+" },
    { area: "Transportation & Logistics Operations", level: "Expert", years: "15+" },
    { area: "Network Design & Optimization", level: "Advanced", years: "10+" },
    { area: "Sourcing & Procurement Strategies", level: "Advanced", years: "12+" },
    { area: "Supply Chain Disruption & Resilience", level: "Advanced", years: "10+" },
    { area: "Business Analytics & KPIs", level: "Advanced", years: "10+" },
    { area: "Design of Lean Operations", level: "Expert", years: "12+" },
    { area: "Quality Management", level: "Certified", years: "12+" },
    { area: "Operations & Process Analysis", level: "Expert", years: "18+" },
  ],
  tools: ["SAP SCM", "WMS", "ERP Systems", "Power BI", "Advanced Excel", "Demand Planning Tools", "KPI Dashboards", "TMS", "Lean / Kaizen", "DMAIC", "ABC-XYZ Analysis", "Network Optimization", "Procurement Analytics"],
  curriculum: [
    {
      inst: "IIT Delhi",
      programme: "Executive Management Programme in Supply Chain & Operations Analytics",
      period: "Aug 2025 – Aug 2026",
      modules: [
        "Supply Chain Management and Strategy",
        "Demand Forecasting and Planning",
        "Inventory Management Techniques",
        "Coordination and Anomalies in Supply Chains",
        "Transportation and Logistics Operations",
        "Network Design and Optimization",
        "Sourcing and Procurement Strategies",
        "Supply Chain Disruption and Resilience",
        "Financial and Costing Decisions",
        "Sustainability, Ethics, and Leadership",
        "Capstone Project and Case Studies",
      ],
    },
    {
      inst: "IIM Calcutta",
      programme: "Executive Programme in Operations Management (EPOM)",
      period: "2024 – 2025",
      modules: [
        "Orientation & Schedule",
        "Module A: Introduction to Operations and Process Analysis",
        "Module B: Analytics and Management Sciences",
        "Module C: Design of Lean Operations",
        "Module D: Quality Management",
        "Module E: Supply Chain Design",
        "Module F: Cross-Functional Areas of Management",
      ],
    },
  ],
  credentials: [
    { badge: "IIM", inst: "IIM Calcutta", name: "Executive Programme in Operations Management (EPOM)", detail: "Operations · Lean · Quality · SC Design · Analytics · Cross-Functional Management", highlight: false, pill: "" },
    { badge: "IIT", inst: "IIT Delhi", name: "Executive Management Programme in Supply Chain & Operations Analytics", detail: "SC Strategy · Forecasting · Inventory · Logistics · Network Design · Resilience · Sustainability", highlight: false, pill: "Aug 2025 – Aug 2026" },
    { badge: "MBA", inst: "MBA — Strategy & Leadership", name: "Strategic Management & Executive Leadership", detail: "Postgraduate · Business Strategy", highlight: false, pill: "" },
    { badge: "MBA", inst: "MBA — Business Analytics", name: "Data-Driven Decision Making & Business Intelligence", detail: "Postgraduate · Analytics & Insights", highlight: false, pill: "" },
    { badge: "6σ", inst: "Six Sigma Certification", name: "DMAIC · Process Excellence · Quality Management", detail: "Certified Practitioner", highlight: false, pill: "" },
    { badge: "Dr.", inst: "SSBM Geneva · Swiss School of Business & Management", name: "Doctoral Researcher in Business & Operations", detail: "Exploring contemporary challenges in operations, leadership, and organizational effectiveness", highlight: true, pill: "🔬 Research Commenced Mar 2026" },
  ],
  projects: [
    { tag: "Warehouse", title: "Warehouse Productivity Improvement", desc: "Redesigned layout, slotting, and pick-path workflows across distribution centers. Delivered significant throughput gains while reducing labor cost per unit and achieving zero safety incidents.", impacts: [{ num: "30%↑", desc: "Throughput" }, { num: "22%↓", desc: "Labor cost/unit" }] },
    { tag: "Inventory", title: "Inventory Optimization Framework", desc: "Built ABC-XYZ classification with safety stock modeling and automated reorder logic. Freed working capital while improving fill rates and eliminating chronic stockouts.", impacts: [{ num: "28%↓", desc: "Excess inventory" }, { num: "98%", desc: "Fill rate achieved" }] },
    { tag: "Analytics", title: "Supply Chain Analytics Dashboard", desc: "Designed real-time executive dashboards giving end-to-end supply chain visibility — from procurement through to last-mile delivery — reducing manual reporting time significantly.", impacts: [{ num: "40%↓", desc: "Reporting time" }, { num: "Live", desc: "Real-time KPIs" }] },
    { tag: "Forecasting", title: "Demand Forecasting Initiative", desc: "Led deployment of statistical forecasting models that reduced forecast error (MAPE) and aligned procurement cycles with real demand signals across the supply network.", impacts: [{ num: "35%↓", desc: "Forecast error" }, { num: "20%↓", desc: "Stockout frequency" }] },
  ],
  journey: [
    { period: "2018 — Present", role: "Senior Supply Chain Leader", org: "Retail & Logistics Organization", desc: "Leading enterprise-wide supply chain transformation across multiple distribution centers. Responsible for warehouse operations, logistics network, inventory planning, and analytics programs." },
    { period: "2012 — 2018", role: "Operations Manager", org: "Supply Chain & Distribution", desc: "Managed large-scale warehouse operations. Delivered productivity improvements, inventory accuracy gains, and process standardization across multiple sites." },
    { period: "2006 — 2012", role: "Logistics & Inventory Specialist", org: "Retail Operations", desc: "Built expertise in logistics coordination, demand planning, and inventory management — establishing the foundation for strategic leadership." },
    { period: "2002 — 2006", role: "Operations Executive", org: "Warehouse & Distribution", desc: "Started career in warehouse operations, developing hands-on skills in inbound/outbound logistics, material handling, and operational planning." },
  ],
  speaking: [
    { type: "Keynote", date: "Upcoming · 2026", title: "Supply Chain Transformation in the Age of AI & Analytics", venue: "Industry Conference · India", photo: "" },
    { type: "Panel", date: "Recent", title: "Lean Warehousing & the Future of DC Excellence", venue: "Logistics Leaders Forum · India", photo: "" },
    { type: "Workshop", date: "Recent", title: "Building High-Performance SC Teams: Leadership in Operations", venue: "Corporate Leadership Workshop", photo: "" },
  ],
  gallery: [
    { type: "photo", src: "", caption: "Speaking at Industry Conference", category: "Speaking" },
    { type: "photo", src: "", caption: "Panel Discussion — Logistics Leaders Forum", category: "Speaking" },
    { type: "photo", src: "", caption: "Workshop — Corporate Leadership Program", category: "Events" },
    { type: "photo", src: "", caption: "IIM Calcutta — EPOM Programme", category: "Education" },
    { type: "video", src: "", caption: "Keynote Talk — Supply Chain & AI", category: "Speaking" },
    { type: "photo", src: "", caption: "Team — Warehouse Transformation Project", category: "Work" },
  ],
  quotes: [
    { text: "Data without strategy is noise. Strategy without data is guesswork. Great operations need both.", author: "Rajendra Royal" },
    { text: "The goal is not to be efficient. The goal is to create value — efficiency is just how you get there.", author: "Rajendra Royal" },
    { text: "Leadership is not about being in charge. It is about taking care of those in your charge.", author: "Simon Sinek" },
    { text: "Lean thinking is not a tool. It is a mindset — and mindsets outlast any methodology.", author: "Rajendra Royal" },
  ],
  testimonials: [
    { text: "Rajendra brings a rare combination of strategic thinking and operational rigor. His ability to translate complex data into clear business action — and bring teams with him — is genuinely exceptional.", name: "Senior Operations Director", role: "Retail & Logistics · Long-term Colleague" },
    { text: "He diagnosed inefficiencies we had lived with for years, built a rigorous improvement roadmap, and drove execution with real accountability. The results were clear and lasting.", name: "VP Supply Chain", role: "E-Commerce & Distribution" },
    { text: "Rajendra's depth in inventory and demand planning is among the strongest I have seen in two decades in this industry.", name: "Head of Planning & Forecasting", role: "FMCG Supply Chain" },
  ],
  blog: [
    { cat: "Supply Chain Strategy", title: "Building Resilient Supply Chains in an Age of Disruption", date: "Coming Soon", read: "5 min", thumb: "SC" },
    { cat: "Digital Transformation", title: "AI and Machine Learning Are Redefining Warehouse Operations", date: "Coming Soon", read: "6 min", thumb: "AI" },
    { cat: "Research Perspectives", title: "What Doctoral Research Reveals About Operational Leadership", date: "Coming Soon", read: "7 min", thumb: "DR" },
  ],
};

/* ── CSS ─────────────────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;background:${G.bg};color:${G.text};overflow-x:hidden;line-height:1.6}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:${G.gold}}

@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes qSlide{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}

.fade-in{opacity:0;transform:translateY(16px);transition:opacity .6s ease,transform .6s ease}
.fade-in.vis{opacity:1;transform:translateY(0)}

/* TICKER */
.ticker{background:${G.primary};overflow:hidden;padding:.38rem 0}
.ticker-inner{display:flex;width:max-content;animation:ticker 32s linear infinite;white-space:nowrap}
.ticker-inner:hover{animation-play-state:paused}
.t-item{padding:0 2.5rem;font-size:.72rem;font-weight:600;color:rgba(232,210,140,.9);letter-spacing:.06em}
.t-sep{color:rgba(232,210,140,.35);margin:0 .4rem}

/* NAV */
nav{position:sticky;top:0;z-index:100;background:rgba(247,248,250,.97);backdrop-filter:blur(16px);border-bottom:1px solid ${G.border};height:66px;padding:0 5%;display:flex;align-items:center;justify-content:space-between;box-shadow:0 1px 10px rgba(0,0,0,.05)}
.nav-logo{font-family:'Playfair Display',serif;font-size:1.18rem;font-weight:700;color:${G.primary};text-decoration:none;line-height:1.15}
.nav-logo span{color:${G.gold}}
.nav-logo small{display:block;font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.15em;color:${G.muted};text-transform:uppercase;font-weight:400}
.nav-links{display:flex;gap:1.8rem;list-style:none}
.nav-links a{font-size:.73rem;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:${G.muted};text-decoration:none;transition:color .2s;padding-bottom:2px;border-bottom:2px solid transparent}
.nav-links a:hover{color:${G.gold};border-bottom-color:${G.gold}}
.nav-right{display:flex;align-items:center;gap:1.2rem}
.nav-date{font-family:'DM Mono',monospace;font-size:.65rem;color:${G.muted};letter-spacing:.05em}
.nav-cta{padding:.4rem 1.1rem;background:${G.primary};border:none;color:#fff;font-family:'DM Sans',sans-serif;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:all .25s}
.nav-cta:hover{background:${G.gold};transform:translateY(-1px);box-shadow:0 4px 12px rgba(154,123,46,.28)}

/* BUTTONS */
.btn-p{padding:.75rem 1.8rem;background:${G.primary};color:#fff;font-family:'DM Sans',sans-serif;font-weight:700;font-size:.78rem;letter-spacing:.09em;text-transform:uppercase;border:none;cursor:pointer;transition:all .25s}
.btn-p:hover{background:${G.gold};transform:translateY(-2px);box-shadow:0 6px 18px rgba(154,123,46,.25)}
.btn-g{padding:.75rem 1.8rem;background:${G.gold};color:#fff;font-family:'DM Sans',sans-serif;font-weight:700;font-size:.78rem;letter-spacing:.09em;text-transform:uppercase;border:none;cursor:pointer;transition:all .25s}
.btn-g:hover{background:${G.goldLight};transform:translateY(-2px)}
.btn-o{padding:.75rem 1.8rem;background:transparent;color:${G.primary};font-family:'DM Sans',sans-serif;font-weight:600;font-size:.78rem;letter-spacing:.09em;text-transform:uppercase;border:2px solid ${G.border};cursor:pointer;transition:all .25s}
.btn-o:hover{border-color:${G.gold};color:${G.gold};transform:translateY(-2px)}
.btn-ow{padding:.75rem 1.8rem;background:transparent;color:rgba(255,255,255,.82);font-family:'DM Sans',sans-serif;font-weight:600;font-size:.78rem;letter-spacing:.09em;text-transform:uppercase;border:2px solid rgba(255,255,255,.28);cursor:pointer;transition:all .25s}
.btn-ow:hover{border-color:rgba(255,255,255,.7);color:#fff}

/* SHARED */
section{padding:76px 5%}
.sl{font-family:'DM Mono',monospace;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:${G.gold};margin-bottom:.75rem;display:flex;align-items:center;gap:.8rem}
.sl::after{content:'';display:block;height:1px;width:40px;background:${G.gold};opacity:.7}
.st{font-family:'Playfair Display',serif;font-size:clamp(1.65rem,3.2vw,2.6rem);font-weight:700;line-height:1.18;margin-bottom:.85rem;color:${G.primary}}
.st em{font-style:italic;color:${G.gold}}
.sd{font-size:.9rem;color:${G.sub};max-width:480px;line-height:1.78}

/* HERO */
.hero{background:linear-gradient(150deg,${G.primary} 0%,#162d50 60%,#0e2040 100%);padding:80px 5% 72px;display:grid;grid-template-columns:1fr 360px;gap:4rem;align-items:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 70% at 85% 50%,rgba(154,123,46,.09) 0%,transparent 65%)}
.hero-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:52px 52px}
.hero-l{position:relative;z-index:2}
.hero-badge{display:inline-flex;align-items:center;gap:.6rem;padding:.3rem .85rem;border:1px solid rgba(154,123,46,.4);background:rgba(154,123,46,.1);font-family:'DM Mono',monospace;font-size:.63rem;letter-spacing:.18em;text-transform:uppercase;color:#d4aa50;margin-bottom:1.5rem}
.hero-badge-dot{width:5px;height:5px;background:#d4aa50;border-radius:50%;animation:blink 2s infinite}
.hero h1{font-family:'Playfair Display',serif;font-size:clamp(1.85rem,3.8vw,3.2rem);font-weight:900;line-height:1.12;margin-bottom:1rem;color:#fff}
.hero h1 em{font-style:italic;color:#d4aa50}
.hero-sub{font-size:.88rem;color:rgba(255,255,255,.7);line-height:1.78;max-width:520px;margin-bottom:1.5rem}
.open-to-badge{display:inline-flex;align-items:center;gap:.55rem;padding:.32rem .9rem;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);font-size:.72rem;color:rgba(255,255,255,.8);letter-spacing:.04em;margin-bottom:1.8rem}
.open-to-dot{width:6px;height:6px;background:#4ade80;border-radius:50%;animation:blink 2.5s infinite}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap}

/* hero card */
.hero-r{position:relative;z-index:2}
.hero-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);padding:2rem 1.8rem;backdrop-filter:blur(10px)}
.hero-card-name{font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:.25rem}
.hero-card-title{font-size:.72rem;color:#d4aa50;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1.4rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,.1)}
.hero-stat-row{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.08);margin-bottom:1.4rem}
.hero-stat{padding:.85rem .7rem;background:rgba(255,255,255,.04);text-align:center}
.hero-stat-n{font-family:'Playfair Display',serif;font-size:1.55rem;font-weight:900;color:#d4aa50;line-height:1}
.hero-stat-l{font-family:'DM Mono',monospace;font-size:.55rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-top:.2rem}
.hero-creds{display:flex;flex-wrap:wrap;gap:.4rem}
.hero-cred-tag{padding:.22rem .65rem;background:rgba(154,123,46,.15);border:1px solid rgba(154,123,46,.3);font-size:.62rem;color:#d4aa50;letter-spacing:.04em}

/* OPEN TO BANNER */
.open-banner{background:#fff;border-top:1px solid ${G.border};border-bottom:1px solid ${G.border};padding:.9rem 5%}
.open-banner-inner{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}
.ob-dot{width:8px;height:8px;background:#22c55e;border-radius:50%;animation:blink 2.5s infinite;flex-shrink:0}
.ob-text{font-size:.8rem;font-weight:600;color:${G.primary}}
.ob-sub{font-size:.78rem;color:${G.muted};margin-left:.3rem}
.ob-divider{width:1px;height:18px;background:${G.border};margin:0 .5rem}
.ob-tags{display:flex;gap:.5rem;flex-wrap:wrap}
.ob-tag{padding:.22rem .7rem;background:${G.goldBg};border:1px solid ${G.goldBorder};font-size:.68rem;font-weight:600;color:${G.gold};letter-spacing:.04em}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;margin-top:3rem}
.portrait-box{width:100%;aspect-ratio:4/5;background:linear-gradient(160deg,${G.primary},#0e2040);border:1px solid ${G.borderGold};position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.portrait-init{font-family:'Playfair Display',serif;font-size:7rem;font-weight:900;color:rgba(154,123,46,.1);user-select:none}
.portrait-overlay{position:absolute;bottom:0;left:0;right:0;padding:1.5rem;background:linear-gradient(transparent,rgba(10,18,36,.96))}
.p-corner{position:absolute;width:40px;height:40px;border-color:${G.gold};border-style:solid;opacity:.7}
.p-corner.tl{top:-7px;left:-7px;border-width:2px 0 0 2px}
.p-corner.br{bottom:-7px;right:-7px;border-width:0 2px 2px 0}
.about-quick{margin-top:1.2rem;display:flex;flex-direction:column;gap:.5rem}
.aq-row{display:flex;align-items:center;gap:.65rem;font-size:.78rem;color:${G.sub}}
.aq-dot{width:5px;height:5px;background:${G.gold};border-radius:50%;flex-shrink:0;opacity:.7}
.about-bio{white-space:pre-line;font-size:.9rem;color:${G.sub};line-height:1.82;margin-bottom:1.4rem}
.mission-block{padding:1.2rem 1.4rem;border-left:3px solid ${G.gold};background:${G.goldBg};margin:1.2rem 0}
.mission-lbl{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.18em;text-transform:uppercase;color:${G.gold};margin-bottom:.45rem}
.mission-txt{font-family:'Playfair Display',serif;font-size:.9rem;font-style:italic;line-height:1.72;color:${G.primary}}
.values-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.4rem}
.val-card{padding:1rem 1.1rem;background:#fff;border:1px solid ${G.border};transition:border-color .22s}
.val-card:hover{border-color:${G.borderGold}}
.val-icon{font-size:1.15rem;margin-bottom:.5rem}
.val-title{font-family:'Playfair Display',serif;font-size:.88rem;font-weight:700;color:${G.primary};margin-bottom:.3rem}
.val-desc{font-size:.74rem;color:${G.sub};line-height:1.6}

/* COUNTERS */
.counters{display:grid;grid-template-columns:repeat(4,1fr);background:#fff;border-top:1px solid ${G.border};border-bottom:1px solid ${G.border}}
.c-item{padding:2rem 1.5rem;text-align:center;border-right:1px solid ${G.border};transition:background .22s}
.c-item:last-child{border-right:none}
.c-item:hover{background:#fafbf6}
.c-num{font-family:'Playfair Display',serif;font-size:2.3rem;font-weight:900;color:${G.gold};line-height:1}
.c-lbl{font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${G.muted};margin-top:.35rem;line-height:1.4}

/* EXPERTISE TABLE */
.exp-table{width:100%;border-collapse:collapse;margin-top:2.5rem;font-size:.84rem}
.exp-table th{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:${G.muted};padding:.7rem 1rem;text-align:left;border-bottom:2px solid ${G.border};background:#fff}
.exp-table td{padding:.85rem 1rem;border-bottom:1px solid ${G.border};background:#fff;vertical-align:middle}
.exp-table tr:hover td{background:${G.goldBg}}
.exp-area{font-weight:600;color:${G.primary}}
.exp-level{display:inline-block;padding:.2rem .65rem;font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.exp-expert{background:rgba(16,185,129,.1);color:#065f46;border:1px solid rgba(16,185,129,.25)}
.exp-advanced{background:${G.goldBg};color:${G.gold};border:1px solid ${G.borderGold}}
.exp-certified{background:rgba(59,130,246,.08);color:#1d4ed8;border:1px solid rgba(59,130,246,.22)}
.exp-years{font-family:'DM Mono',monospace;font-size:.72rem;color:${G.muted}}
.tools-wrap{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:2rem}
.tool-tag{padding:.28rem .75rem;background:#fff;border:1px solid ${G.border};font-size:.72rem;color:${G.sub};transition:all .2s}
.tool-tag:hover{border-color:${G.borderGold};color:${G.gold}}
.curr-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem;margin-top:2.5rem}
.curr-card{background:#fff;border:1px solid ${G.border};overflow:hidden;transition:border-color .25s}
.curr-card:hover{border-color:${G.borderGold}}
.curr-header{padding:1.4rem 1.6rem;background:linear-gradient(135deg,${G.primary},#162d50)}
.curr-inst-badge{display:inline-block;padding:.2rem .65rem;background:rgba(212,170,80,.2);border:1px solid rgba(212,170,80,.35);font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.15em;text-transform:uppercase;color:#d4aa50;margin-bottom:.65rem}
.curr-prog{font-family:'Playfair Display',serif;font-size:.95rem;font-weight:700;color:#fff;line-height:1.35;margin-bottom:.3rem}
.curr-period{font-family:'DM Mono',monospace;font-size:.6rem;color:rgba(255,255,255,.48);letter-spacing:.1em}
.curr-body{padding:1.4rem 1.6rem}
.curr-module-label{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:${G.gold};margin-bottom:.9rem}
.curr-modules{display:flex;flex-direction:column;gap:.5rem}
.curr-module{display:flex;align-items:flex-start;gap:.7rem;font-size:.8rem;color:${G.sub};line-height:1.5}
.curr-module-num{font-family:'DM Mono',monospace;font-size:.58rem;color:${G.gold};min-width:1.4rem;padding-top:.13rem;opacity:.75;flex-shrink:0}
.curr-module-text{flex:1}

/* CREDENTIALS */
.creds-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:${G.border};border:1px solid ${G.border};margin-top:3rem}
.cred-card{background:#fff;padding:2rem 1.6rem;text-align:center;transition:background .22s;position:relative;overflow:hidden}
.cred-card:hover{background:${G.goldBg}}
.cred-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${G.gold},transparent);transform:scaleX(0);transition:transform .35s}
.cred-card:hover::after{transform:scaleX(1)}
.cred-badge{display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;border:1px solid ${G.borderGold};background:${G.goldBg};font-family:'Playfair Display',serif;font-size:.9rem;font-weight:900;color:${G.gold};margin:0 auto .9rem}
.cred-badge.hi{background:rgba(154,123,46,.18);border-color:${G.gold};box-shadow:0 0 12px rgba(154,123,46,.18)}
.cred-inst{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:${G.gold};margin-bottom:.4rem}
.cred-name{font-family:'Playfair Display',serif;font-size:.9rem;font-weight:700;color:${G.primary};line-height:1.3;margin-bottom:.4rem}
.cred-detail{font-size:.68rem;color:${G.muted};line-height:1.55}
.cred-pill{display:inline-block;margin-top:.6rem;padding:.17rem .58rem;background:${G.goldBg};border:1px solid ${G.borderGold};font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.12em;text-transform:uppercase;color:${G.gold}}

/* PROJECTS */
.proj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.3rem;margin-top:3rem}
.proj-card{background:#fff;border:1px solid ${G.border};padding:2rem 1.8rem;display:flex;flex-direction:column;transition:all .25s}
.proj-card:hover{border-color:${G.borderGold};box-shadow:0 6px 24px rgba(0,0,0,.07);transform:translateY(-2px)}
.proj-tag{display:inline-block;padding:.2rem .62rem;background:${G.goldBg};border:1px solid ${G.borderGold};font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:${G.gold};margin-bottom:.9rem;align-self:flex-start}
.proj-title{font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;color:${G.primary};line-height:1.3;margin-bottom:.6rem}
.proj-desc{font-size:.8rem;color:${G.sub};line-height:1.7;flex:1}
.proj-impacts{display:flex;gap:1.5rem;margin-top:1.1rem;padding-top:1.1rem;border-top:1px solid ${G.border}}
.imp-n{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:900;color:${G.gold};line-height:1}
.imp-d{font-size:.64rem;color:${G.muted};margin-top:.15rem}

/* SPEAKING */
.speak-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;margin-top:3rem}
.speak-card{background:#fff;border:1px solid ${G.border};overflow:hidden;transition:all .25s;display:flex;flex-direction:column}
.speak-card:hover{border-color:${G.borderGold};transform:translateY(-2px);box-shadow:0 6px 22px rgba(0,0,0,.07)}
.speak-top{height:110px;background:linear-gradient(135deg,${G.primary},#162d50);display:flex;align-items:center;justify-content:center;position:relative}
.speak-top-txt{font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:900;color:rgba(212,170,80,.15)}
.speak-badge{position:absolute;top:.8rem;left:.8rem;padding:.2rem .6rem;background:${G.gold};font-size:.58rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff}
.speak-body{padding:1.2rem;flex:1;display:flex;flex-direction:column}
.speak-date{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.08em;color:${G.gold};margin-bottom:.45rem}
.speak-title{font-family:'Playfair Display',serif;font-size:.92rem;font-weight:700;color:${G.primary};line-height:1.35;flex:1;margin-bottom:.45rem}
.speak-venue{font-size:.72rem;color:${G.muted}}

/* JOURNEY */
.journey-line{border-left:2px solid ${G.borderGold};padding-left:2rem;margin-top:3rem}
.j-item{position:relative;padding:0 0 2.4rem 2.5rem}
.j-item:last-child{padding-bottom:0}
.j-item::before{content:'';position:absolute;left:-2.4rem;top:.35rem;width:9px;height:9px;background:#fff;border:2px solid ${G.gold};border-radius:50%;transform:translateX(-3px)}
.j-period{font-family:'DM Mono',monospace;font-size:.64rem;letter-spacing:.13em;color:${G.gold};margin-bottom:.35rem}
.j-role{font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:${G.primary};margin-bottom:.2rem}
.j-org{font-size:.8rem;font-weight:600;color:${G.gold};margin-bottom:.55rem}
.j-desc{font-size:.8rem;color:${G.sub};line-height:1.72;max-width:540px}

/* QUOTES */
.quote-card{background:#fff;border-left:4px solid ${G.gold};padding:2rem 2.2rem;position:relative;box-shadow:0 3px 16px rgba(0,0,0,.06)}
.q-mark{font-family:'Playfair Display',serif;font-size:4.5rem;line-height:.6;color:${G.gold};opacity:.18;position:absolute;top:.9rem;right:1.4rem;font-style:italic}
.q-text{font-family:'Playfair Display',serif;font-size:1.1rem;font-style:italic;line-height:1.65;color:${G.primary};margin-bottom:.9rem;padding-right:2.5rem}
.q-author{font-family:'DM Mono',monospace;font-size:.67rem;letter-spacing:.12em;text-transform:uppercase;color:${G.gold}}
.q-dots{display:flex;gap:.45rem;justify-content:center;margin-top:1.6rem}
.q-dot{width:7px;height:7px;border-radius:50%;background:${G.border};cursor:pointer;transition:background .2s}
.q-dot.on{background:${G.gold}}
.q-nav{display:flex;gap:.5rem;justify-content:center;margin-top:.9rem}
.q-btn{width:34px;height:34px;background:none;border:1.5px solid ${G.borderGold};color:${G.gold};cursor:pointer;font-size:.9rem;display:flex;align-items:center;justify-content:center;transition:all .2s}
.q-btn:hover{background:${G.goldBg}}

/* TESTIMONIALS */
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;margin-top:3rem}
.testi-card{background:#fff;border:1px solid ${G.border};padding:1.8rem;display:flex;flex-direction:column;transition:border-color .22s}
.testi-card:hover{border-color:${G.borderGold}}
.tq{font-family:'Playfair Display',serif;font-size:2.8rem;line-height:.6;color:${G.gold};opacity:.22;margin-bottom:.4rem}
.tt{font-size:.84rem;color:${G.sub};line-height:1.78;flex:1;font-style:italic}
.ta{margin-top:1.3rem;padding-top:1rem;border-top:1px solid ${G.border}}
.ta-name{font-weight:700;font-size:.86rem;color:${G.primary}}
.ta-role{font-size:.7rem;color:${G.gold};margin-top:.15rem;letter-spacing:.03em}

/* CTA BAND */
.cta-band{background:${G.primary};padding:60px 5%;text-align:center;position:relative;overflow:hidden}
.cta-band::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(154,123,46,.1) 0%,transparent 70%)}
.cta-inner{position:relative;z-index:1}
.cta-pill{display:inline-flex;align-items:center;gap:.45rem;padding:.27rem .8rem;background:rgba(154,123,46,.15);border:1px solid rgba(154,123,46,.3);font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.14em;color:#d4aa50;margin-bottom:1.3rem}
.cta-pill-dot{width:5px;height:5px;background:#4ade80;border-radius:50%;animation:blink 2.5s infinite}
.cta-h{font-family:'Playfair Display',serif;font-size:clamp(1.4rem,2.6vw,2.1rem);font-weight:700;color:#fff;margin-bottom:.65rem}
.cta-h em{font-style:italic;color:#d4aa50}
.cta-p{font-size:.88rem;color:rgba(255,255,255,.68);max-width:500px;margin:0 auto 1.7rem;line-height:1.75}
.cta-btns{display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap}

/* BLOG */
.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;margin-top:3rem}
.blog-card{background:#fff;border:1px solid ${G.border};display:flex;flex-direction:column;overflow:hidden;transition:all .25s}
.blog-card:hover{border-color:${G.borderGold};transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.07)}
.blog-thumb{height:130px;background:linear-gradient(135deg,${G.primary},#162d50);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:1.9rem;font-weight:900;color:rgba(212,170,80,.16);position:relative}
.blog-read{position:absolute;bottom:.55rem;right:.75rem;font-family:'DM Mono',monospace;font-size:.54rem;color:rgba(255,255,255,.4);letter-spacing:.06em}
.blog-body{padding:1.2rem;flex:1;display:flex;flex-direction:column}
.blog-cat{font-size:.61rem;letter-spacing:.15em;text-transform:uppercase;color:${G.gold};margin-bottom:.55rem}
.blog-title{font-family:'Playfair Display',serif;font-size:.92rem;font-weight:700;color:${G.primary};line-height:1.4;margin-bottom:.55rem;flex:1}
.blog-date{font-size:.67rem;color:${G.muted};font-family:'DM Mono',monospace}

/* GALLERY */
.gallery-filters{display:flex;gap:.5rem;flex-wrap:wrap;margin:2rem 0 1.8rem}
.gf-btn{padding:.3rem .9rem;font-size:.72rem;font-weight:600;letter-spacing:.06em;border:1px solid ${G.border};background:#fff;color:${G.muted};cursor:pointer;transition:all .22s}
.gf-btn:hover,.gf-btn.on{border-color:${G.gold};color:${G.gold};background:${G.goldBg}}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
.gallery-item{position:relative;overflow:hidden;cursor:pointer;background:${G.primary};aspect-ratio:4/3;border:1px solid ${G.border}}
.gallery-item img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
.gallery-item:hover img{transform:scale(1.06)}
.gallery-ph{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,${G.primary},#162d50);border:1.5px dashed rgba(154,123,46,.25);min-height:200px}
.gph-icon{font-size:2rem;margin-bottom:.6rem;opacity:.35}
.gph-lbl{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(154,123,46,.45)}
.gph-cap{font-size:.76rem;color:rgba(255,255,255,.4);margin-top:.4rem;text-align:center;padding:0 1rem}
.gallery-ov{position:absolute;inset:0;background:linear-gradient(transparent 40%,rgba(10,18,36,.92));opacity:0;transition:opacity .3s;display:flex;flex-direction:column;justify-content:flex-end;padding:1.1rem}
.gallery-item:hover .gallery-ov{opacity:1}
.gallery-caption{font-family:'Playfair Display',serif;font-size:.86rem;font-weight:700;color:#fff;margin-bottom:.22rem}
.gallery-cat-lbl{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:#d4aa50}
.video-badge{position:absolute;top:.7rem;right:.7rem;width:32px;height:32px;background:rgba(154,123,46,.9);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;color:#fff}
.gallery-hint{margin-top:1.8rem;padding:1rem 1.4rem;background:${G.goldBg};border:1px dashed ${G.borderGold};display:flex;align-items:flex-start;gap:1rem}
.gh-icon{font-size:1.4rem;flex-shrink:0;margin-top:.1rem}
.gh-title{font-size:.82rem;font-weight:600;color:${G.primary};margin-bottom:.2rem}
.gh-sub{font-size:.74rem;color:${G.muted};line-height:1.65}
.lb-wrap{position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:2000;display:flex;align-items:center;justify-content:center;padding:2rem;cursor:pointer}
.lb-inner{position:relative;max-width:900px;width:100%;cursor:default}
.lb-img{width:100%;max-height:80vh;object-fit:contain;display:block}
.lb-iframe{width:100%;aspect-ratio:16/9;border:none}
.lb-close{position:absolute;top:-2.8rem;right:0;background:none;border:none;color:#fff;font-size:1.8rem;cursor:pointer;line-height:1;padding:.2rem}
.lb-cap{text-align:center;margin-top:1rem;font-family:'Playfair Display',serif;font-size:.95rem;font-style:italic;color:rgba(255,255,255,.75)}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:4.5rem;margin-top:3rem;align-items:start}
.contact-h{font-family:'Playfair Display',serif;font-size:1.45rem;font-weight:700;color:${G.primary};margin-bottom:.75rem}
.contact-p{font-size:.86rem;color:${G.sub};line-height:1.78;margin-bottom:1.6rem}
.soc-link{display:flex;align-items:center;gap:.8rem;padding:.78rem 1rem;border:1px solid ${G.border};text-decoration:none;color:${G.text};transition:all .22s;margin-bottom:.7rem}
.soc-link:hover{border-color:${G.borderGold};background:${G.goldBg}}
.soc-icon{width:30px;height:30px;background:${G.goldBg};border:1px solid ${G.borderGold};display:flex;align-items:center;justify-content:center;flex-shrink:0}
.soc-icon svg{width:13px;height:13px;fill:${G.gold}}
.soc-name{font-weight:600;font-size:.78rem;color:${G.primary}}
.soc-handle{font-size:.66rem;color:${G.muted};font-family:'DM Mono',monospace}
.f-group{margin-bottom:.9rem}
.f-label{display:block;font-size:.62rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${G.muted};margin-bottom:.3rem}
.f-input,.f-area{width:100%;padding:.75rem .9rem;background:#fff;border:1px solid ${G.border};color:${G.text};font-family:'DM Sans',sans-serif;font-size:.84rem;outline:none;transition:border-color .2s;resize:none}
.f-input:focus,.f-area:focus{border-color:${G.gold}}
.f-area{height:110px}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:.9rem;margin-bottom:.9rem}
::placeholder{color:rgba(133,150,170,.45)}

/* FOOTER */
footer{background:${G.primary}}
.footer-top{padding:2.8rem 5%;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:3rem}
.footer-brand{font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:#fff;margin-bottom:.4rem}
.footer-brand span{color:#d4aa50}
.footer-tagline{font-size:.75rem;color:rgba(255,255,255,.45);line-height:1.65;max-width:230px}
.footer-col-h{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:#d4aa50;margin-bottom:.85rem}
.footer-link{display:block;font-size:.78rem;color:rgba(255,255,255,.5);text-decoration:none;margin-bottom:.45rem;transition:color .2s}
.footer-link:hover{color:#d4aa50}
.footer-bottom{padding:.95rem 5%;border-top:1px solid rgba(255,255,255,.07);display:flex;justify-content:space-between;align-items:center}
.footer-copy{font-family:'DM Mono',monospace;font-size:.6rem;color:rgba(255,255,255,.3);letter-spacing:.08em}
.footer-research{font-family:'DM Mono',monospace;font-size:.58rem;color:#d4aa50;letter-spacing:.1em}

/* ADMIN */
.admin-fab{position:fixed;bottom:1.8rem;right:1.8rem;z-index:999;width:48px;height:48px;background:${G.primary};border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,.22);transition:all .25s;color:#fff;font-size:1.1rem}
.admin-fab:hover{background:${G.gold};transform:scale(1.08)}
.admin-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1000;display:flex;align-items:stretch}
.admin-panel{background:#fff;width:540px;max-width:95vw;height:100vh;overflow-y:auto;margin-left:auto;box-shadow:-6px 0 32px rgba(0,0,0,.15);display:flex;flex-direction:column}
.admin-hdr{padding:1.2rem 1.5rem;background:${G.primary};color:#fff;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10}
.admin-hdr-title{font-family:'Playfair Display',serif;font-size:1rem;font-weight:700}
.admin-hdr-title span{color:#d4aa50}
.admin-close{background:none;border:none;color:#fff;font-size:1.3rem;cursor:pointer}
.admin-tabs{display:flex;background:#f7f8fa;border-bottom:1px solid ${G.border};flex-wrap:wrap;position:sticky;top:58px;z-index:9}
.a-tab{padding:.6rem .9rem;font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border:none;background:none;cursor:pointer;color:${G.muted};border-bottom:2px solid transparent;transition:all .2s}
.a-tab.on{color:${G.gold};border-bottom-color:${G.gold};background:#fff}
.admin-body{padding:1.3rem 1.5rem;flex:1}
.a-sec{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:${G.gold};margin:1.2rem 0 .8rem;padding-bottom:.38rem;border-bottom:1px solid ${G.border}}
.a-field{margin-bottom:.85rem}
.a-label{display:block;font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${G.muted};margin-bottom:.28rem}
.a-input,.a-area{width:100%;padding:.55rem .75rem;border:1px solid ${G.border};background:#fafbfc;font-family:'DM Sans',sans-serif;font-size:.84rem;color:${G.text};outline:none;transition:border-color .2s}
.a-input:focus,.a-area:focus{border-color:${G.gold}}
.a-area{resize:vertical;min-height:72px;line-height:1.6}
.a-item{display:flex;gap:.55rem;align-items:flex-start;margin-bottom:.65rem;padding:.75rem;background:#f7f8fa;border:1px solid ${G.border}}
.a-item-fields{flex:1;display:flex;flex-direction:column;gap:.38rem}
.a-del{background:#fee2e2;border:none;color:#dc2626;width:24px;height:24px;flex-shrink:0;cursor:pointer;font-size:.8rem;display:flex;align-items:center;justify-content:center}
.a-add{padding:.45rem 1rem;background:${G.goldBg};border:1px dashed ${G.borderGold};color:${G.gold};font-size:.72rem;font-weight:600;cursor:pointer;width:100%;margin-top:.45rem;transition:all .2s}
.a-add:hover{background:rgba(154,123,46,.16)}
.admin-save{position:sticky;bottom:0;width:100%;padding:.95rem;background:${G.primary};color:#fff;border:none;font-family:'DM Sans',sans-serif;font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:background .25s}
.admin-save:hover{background:${G.gold}}
.toast{position:fixed;bottom:5rem;right:1.8rem;background:#065f46;color:#fff;padding:.55rem 1.1rem;font-size:.76rem;font-weight:600;z-index:1100;box-shadow:0 4px 14px rgba(0,0,0,.2)}

@media(max-width:1024px){
  .hero{grid-template-columns:1fr;gap:2.5rem}
  .hero-r{max-width:380px}
  .about-grid{grid-template-columns:1fr;gap:3rem}
  .counters{grid-template-columns:repeat(2,1fr)}
  .creds-grid{grid-template-columns:repeat(2,1fr)}
  .footer-top{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .nav-links{display:none}
  .proj-grid,.speak-grid,.testi-grid,.blog-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr;gap:2.5rem}
  .counters{grid-template-columns:repeat(2,1fr)}
  .creds-grid{grid-template-columns:1fr 1fr}
  .footer-top{grid-template-columns:1fr}
  .footer-bottom{flex-direction:column;gap:.4rem;text-align:center}
  .values-grid{grid-template-columns:1fr}
  .curr-grid{grid-template-columns:1fr}
}
@media(max-width:480px){
  .creds-grid{grid-template-columns:1fr}
  .f-row{grid-template-columns:1fr}
}
`;

/* ── LIVE DATE ──────────────────────────────────────────────── */
function useLiveDate() {
  const [d, setD] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setD(new Date()), 60000); return () => clearInterval(t); }, []);
  return d;
}

/* ── COUNTER ─────────────────────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const n = parseInt(target);
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current && !isNaN(n)) {
        done.current = true;
        let cur = 0; const steps = 48;
        const t = setInterval(() => {
          cur = Math.min(cur + n / steps, n);
          setVal(Math.floor(cur));
          if (cur >= n) clearInterval(t);
        }, 1200 / steps);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  const isNum = !isNaN(parseInt(target));
  return <span ref={ref}>{isNum ? (val + (val >= parseInt(target) ? suffix : "")) : target}</span>;
}

/* ── QUOTES ──────────────────────────────────────────────────── */
function Quotes({ quotes }) {
  const [i, setI] = useState(0);
  const [k, setK] = useState(0);
  const go = (n) => { setI(n); setK(x => x + 1); };
  useEffect(() => { const t = setInterval(() => go((i + 1) % quotes.length), 7000); return () => clearInterval(t); }, [i, quotes.length]);
  if (!quotes.length) return null;
  const q = quotes[i];
  return (
    <section style={{ background: G.bgAlt, padding: "76px 5%" }} id="quotes">
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div className="sl" style={{ justifyContent: "center" }}>Perspective</div>
        <h2 className="st" style={{ textAlign: "center", marginBottom: "2rem" }}>Words Worth <em>Keeping</em></h2>
        <div className="quote-card" key={k} style={{ animation: "qSlide .45s ease both" }}>
          <div className="q-mark">"</div>
          <div className="q-text">{q.text}</div>
          <div className="q-author">— {q.author}</div>
        </div>
        <div className="q-dots">{quotes.map((_, n) => <div key={n} className={`q-dot${n === i ? " on" : ""}`} onClick={() => go(n)} />)}</div>
        <div className="q-nav">
          <button className="q-btn" onClick={() => go((i - 1 + quotes.length) % quotes.length)}>←</button>
          <button className="q-btn" onClick={() => go((i + 1) % quotes.length)}>→</button>
        </div>
      </div>
    </section>
  );
}

/* ── FADE-IN WRAPPER ─────────────────────────────────────────── */
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("vis"); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}s` }}>{children}</div>;
}

/* ── ADMIN PANEL ─────────────────────────────────────────────── */
const TABS = ["Profile", "About", "Expertise", "Curriculum", "Credentials", "Portfolio", "Speaking", "Gallery", "Journey", "Quotes", "Testimonials", "Blog", "Ticker"];

function Admin({ data, onSave, onClose }) {
  const [d, setD] = useState(JSON.parse(JSON.stringify(data)));
  const [tab, setTab] = useState("Profile");
  const [saved, setSaved] = useState(false);

  const save = () => { onSave(d); setSaved(true); setTimeout(() => setSaved(false), 2200); };

  const set = (path, val) => setD(prev => {
    const n = JSON.parse(JSON.stringify(prev));
    const keys = path.split(".");
    let o = n;
    for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]];
    o[keys[keys.length - 1]] = val;
    return n;
  });

  const F = ({ label, path, area, rows = 3 }) => {
    const val = path.split(".").reduce((o, k) => o?.[k], d) ?? "";
    return (
      <div className="a-field">
        <label className="a-label">{label}</label>
        {area ? <textarea className="a-area" style={{ minHeight: rows * 22 + 16 }} value={val} onChange={e => set(path, e.target.value)} />
               : <input className="a-input" value={val} onChange={e => set(path, e.target.value)} />}
      </div>
    );
  };

  const addItem = (path, tpl) => setD(prev => {
    const n = JSON.parse(JSON.stringify(prev));
    const keys = path.split("."); let o = n;
    for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]];
    o[keys[keys.length - 1]] = [...(o[keys[keys.length - 1]] || []), tpl];
    return n;
  });
  const delItem = (path, idx) => setD(prev => {
    const n = JSON.parse(JSON.stringify(prev));
    const keys = path.split("."); let o = n;
    for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]];
    o[keys[keys.length - 1]] = o[keys[keys.length - 1]].filter((_, i) => i !== idx);
    return n;
  });
  const setLI = (path, idx, field, val) => setD(prev => {
    const n = JSON.parse(JSON.stringify(prev));
    const keys = path.split("."); let o = n;
    for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]];
    o[keys[keys.length - 1]][idx][field] = val;
    return n;
  });
  const setLS = (path, idx, val) => setD(prev => {
    const n = JSON.parse(JSON.stringify(prev));
    const keys = path.split("."); let o = n;
    for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]];
    o[keys[keys.length - 1]][idx] = val;
    return n;
  });

  const body = () => {
    switch (tab) {
      case "Profile": return (<>
        <div className="a-sec">Identity</div>
        <F label="Full Name" path="profile.name" />
        <F label="Professional Title" path="profile.title" />
        <F label="Sub Title / Research Status" path="profile.subtitle" />
        <F label="Hero Headline" path="profile.headline" area />
        <F label="Hero Subheading" path="profile.subheading" area rows={4} />
        <F label="Open To (shown as availability badge)" path="profile.openTo" />
        <div className="a-sec">Contact & Social</div>
        <F label="Email" path="profile.email" />
        <F label="LinkedIn URL" path="profile.linkedin" />
        <F label="Twitter / X Handle" path="profile.twitter" />
        <F label="Location" path="profile.location" />
        <F label="Resume / CV URL (for Download Resume button)" path="profile.cvUrl" />
        <F label="Profile Photo URL (place file in /public, enter path e.g. /photo.jpg)" path="profile.photo" />
      </>);
      case "About": return (<>
        <div className="a-sec">Bio & Mission</div>
        <F label="Biography (use line breaks for paragraphs)" path="about.bio" area rows={6} />
        <F label="Mission Statement" path="about.mission" area rows={3} />
        <div className="a-sec">Leadership Values</div>
        {d.values.map((v, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <input className="a-input" placeholder="Icon" value={v.icon} onChange={e => setLI("values", i, "icon", e.target.value)} />
              <input className="a-input" placeholder="Title" value={v.title} onChange={e => setLI("values", i, "title", e.target.value)} />
              <textarea className="a-area" placeholder="Description" value={v.desc} onChange={e => setLI("values", i, "desc", e.target.value)} style={{ minHeight: 52 }} />
            </div>
            <button className="a-del" onClick={() => delItem("values", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("values", { icon: "⭐", title: "Value", desc: "Description" })}>+ Add Value</button>
      </>);
      case "Expertise": return (<>
        <div className="a-sec">Expertise Areas (shown as table — no self-rating %)</div>
        {d.expertise.map((e, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <input className="a-input" placeholder="Area" value={e.area} onChange={ev => setLI("expertise", i, "area", ev.target.value)} />
              <select className="a-input" value={e.level} onChange={ev => setLI("expertise", i, "level", ev.target.value)}>
                <option>Expert</option><option>Advanced</option><option>Proficient</option><option>Certified</option>
              </select>
              <input className="a-input" placeholder="Years (e.g. 15+)" value={e.years} onChange={ev => setLI("expertise", i, "years", ev.target.value)} />
            </div>
            <button className="a-del" onClick={() => delItem("expertise", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("expertise", { area: "New Area", level: "Advanced", years: "X+" })}>+ Add Area</button>
        <div className="a-sec">Tools & Technologies</div>
        {d.tools.map((t, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields"><input className="a-input" value={t} onChange={e => setLS("tools", i, e.target.value)} /></div>
            <button className="a-del" onClick={() => delItem("tools", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("tools", "New Tool")}>+ Add Tool</button>
      </>);
      case "Credentials": return (<>
        <div className="a-sec">Credential Cards</div>
        {d.credentials.map((c, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <input className="a-input" placeholder="Badge (e.g. IIM)" value={c.badge} onChange={e => setLI("credentials", i, "badge", e.target.value)} />
              <input className="a-input" placeholder="Institution" value={c.inst} onChange={e => setLI("credentials", i, "inst", e.target.value)} />
              <input className="a-input" placeholder="Programme Name" value={c.name} onChange={e => setLI("credentials", i, "name", e.target.value)} />
              <textarea className="a-area" placeholder="Detail" value={c.detail} onChange={e => setLI("credentials", i, "detail", e.target.value)} style={{ minHeight: 46 }} />
              <input className="a-input" placeholder="Pill label (optional)" value={c.pill} onChange={e => setLI("credentials", i, "pill", e.target.value)} />
              <label style={{ fontSize: ".7rem", color: G.muted, display: "flex", alignItems: "center", gap: ".4rem" }}>
                <input type="checkbox" checked={c.highlight} onChange={e => setLI("credentials", i, "highlight", e.target.checked)} /> Gold highlight (Doctoral / special)
              </label>
            </div>
            <button className="a-del" onClick={() => delItem("credentials", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("credentials", { badge: "NEW", inst: "", name: "", detail: "", pill: "", highlight: false })}>+ Add Credential</button>
      </>);
      case "Portfolio": return (<>
        <div className="a-sec">Portfolio Case Studies (keep to 4 — quality over quantity)</div>
        {d.projects.map((p, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <input className="a-input" placeholder="Tag" value={p.tag} onChange={e => setLI("projects", i, "tag", e.target.value)} />
              <input className="a-input" placeholder="Title" value={p.title} onChange={e => setLI("projects", i, "title", e.target.value)} />
              <textarea className="a-area" placeholder="Description" value={p.desc} onChange={e => setLI("projects", i, "desc", e.target.value)} />
              <div style={{ fontSize: ".68rem", color: G.gold, fontWeight: 600, marginTop: ".3rem" }}>Impact Stats (2 per card)</div>
              {p.impacts.map((imp, j) => (
                <div key={j} style={{ display: "flex", gap: ".4rem" }}>
                  <input className="a-input" placeholder="Stat (e.g. 30%↑)" value={imp.num} onChange={e => { const n = JSON.parse(JSON.stringify(d)); n.projects[i].impacts[j].num = e.target.value; setD(n); }} style={{ width: "42%" }} />
                  <input className="a-input" placeholder="Label" value={imp.desc} onChange={e => { const n = JSON.parse(JSON.stringify(d)); n.projects[i].impacts[j].desc = e.target.value; setD(n); }} />
                </div>
              ))}
            </div>
            <button className="a-del" onClick={() => delItem("projects", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("projects", { tag: "New", title: "Case Study Title", desc: "Description", impacts: [{ num: "X%↑", desc: "Result" }, { num: "Y%↓", desc: "Result" }] })}>+ Add Case Study</button>
      </>);
      case "Speaking": return (<>
        <div className="a-sec">Speaking Events</div>
        {d.speaking.map((s, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <input className="a-input" placeholder="Type (Keynote/Panel/Workshop)" value={s.type} onChange={e => setLI("speaking", i, "type", e.target.value)} />
              <input className="a-input" placeholder="Date" value={s.date} onChange={e => setLI("speaking", i, "date", e.target.value)} />
              <input className="a-input" placeholder="Talk Title" value={s.title} onChange={e => setLI("speaking", i, "title", e.target.value)} />
              <input className="a-input" placeholder="Venue / Event" value={s.venue} onChange={e => setLI("speaking", i, "venue", e.target.value)} />
              <input className="a-input" placeholder="Event photo path (e.g. /gallery/event.jpg) — optional" value={s.photo} onChange={e => setLI("speaking", i, "photo", e.target.value)} />
            </div>
            <button className="a-del" onClick={() => delItem("speaking", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("speaking", { type: "Keynote", date: "2026", title: "Talk Title", venue: "Event · Location" })}>+ Add Event</button>
      </>);
      case "Gallery": return (<>
        <div className="a-sec">Photos &amp; Videos</div>
        <p style={{fontSize:".78rem",color:G.muted,marginBottom:"1.2rem",lineHeight:1.65}}>
          Place files in <code style={{background:G.goldBg,padding:".1rem .3rem",fontSize:".72rem"}}>/public/gallery/</code> then enter the path below.<br/>
          For YouTube, paste: <code style={{background:G.goldBg,padding:".1rem .3rem",fontSize:".72rem"}}>https://www.youtube.com/embed/VIDEO_ID</code>
        </p>
        {d.gallery.map((item, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <select className="a-input" value={item.type} onChange={e => setLI("gallery", i, "type", e.target.value)}>
                <option value="photo">Photo</option>
                <option value="video">Video (YouTube embed)</option>
              </select>
              <input className="a-input" placeholder={item.type === "video" ? "https://www.youtube.com/embed/VIDEO_ID" : "/gallery/photo.jpg"} value={item.src} onChange={e => setLI("gallery", i, "src", e.target.value)} />
              <input className="a-input" placeholder="Caption" value={item.caption} onChange={e => setLI("gallery", i, "caption", e.target.value)} />
              <select className="a-input" value={item.category} onChange={e => setLI("gallery", i, "category", e.target.value)}>
                {["Speaking","Events","Education","Work","Research","Awards","Personal"].map(c => <option key={c}>{c}</option>)}
              </select>
              {item.src && item.type === "photo" && (
                <img src={item.src} alt={item.caption} style={{width:"100%",height:80,objectFit:"cover",marginTop:".3rem"}} onError={e => e.target.style.display="none"} />
              )}
            </div>
            <button className="a-del" onClick={() => delItem("gallery", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("gallery", {type:"photo",src:"",caption:"New Photo",category:"Events"})}>+ Add Photo / Video</button>
      </>);

      case "Journey": return (<>
        <div className="a-sec">Career Timeline</div>
        {d.journey.map((j, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <input className="a-input" placeholder="Period" value={j.period} onChange={e => setLI("journey", i, "period", e.target.value)} />
              <input className="a-input" placeholder="Role / Title" value={j.role} onChange={e => setLI("journey", i, "role", e.target.value)} />
              <input className="a-input" placeholder="Organization" value={j.org} onChange={e => setLI("journey", i, "org", e.target.value)} />
              <textarea className="a-area" placeholder="Description" value={j.desc} onChange={e => setLI("journey", i, "desc", e.target.value)} />
            </div>
            <button className="a-del" onClick={() => delItem("journey", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("journey", { period: "Year — Year", role: "Role", org: "Organization", desc: "Description" })}>+ Add Position</button>
      </>);
      case "Quotes": return (<>
        <div className="a-sec">Quotes (max 4 — avoid attributing too many to yourself)</div>
        {d.quotes.map((q, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <textarea className="a-area" placeholder="Quote" value={q.text} onChange={e => setLI("quotes", i, "text", e.target.value)} style={{ minHeight: 68 }} />
              <input className="a-input" placeholder="Author" value={q.author} onChange={e => setLI("quotes", i, "author", e.target.value)} />
            </div>
            <button className="a-del" onClick={() => delItem("quotes", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("quotes", { text: "Quote text.", author: "Rajendra Royal" })}>+ Add Quote</button>
      </>);
      case "Testimonials": return (<>
        <div className="a-sec">Testimonials</div>
        {d.testimonials.map((t, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <textarea className="a-area" placeholder="Testimonial text" value={t.text} onChange={e => setLI("testimonials", i, "text", e.target.value)} style={{ minHeight: 68 }} />
              <input className="a-input" placeholder="Name / Title" value={t.name} onChange={e => setLI("testimonials", i, "name", e.target.value)} />
              <input className="a-input" placeholder="Role / Context" value={t.role} onChange={e => setLI("testimonials", i, "role", e.target.value)} />
            </div>
            <button className="a-del" onClick={() => delItem("testimonials", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("testimonials", { text: "Testimonial.", name: "Name", role: "Role" })}>+ Add Testimonial</button>
      </>);
      case "Curriculum": return (<>
        <div className="a-sec">Academic Programme Modules — IIT Delhi & IIM Calcutta</div>
        {d.curriculum.map((prog, i) => (
          <div key={i} style={{ marginBottom: "1.8rem", border: `1px solid ${G.border}`, padding: "1rem" }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: G.gold, marginBottom: ".8rem" }}>Programme {i + 1}</div>
            <div className="a-field">
              <label className="a-label">Institution</label>
              <input className="a-input" value={prog.inst} onChange={e => { const n = JSON.parse(JSON.stringify(d)); n.curriculum[i].inst = e.target.value; setD(n); }} />
            </div>
            <div className="a-field">
              <label className="a-label">Programme Name</label>
              <input className="a-input" value={prog.programme} onChange={e => { const n = JSON.parse(JSON.stringify(d)); n.curriculum[i].programme = e.target.value; setD(n); }} />
            </div>
            <div className="a-field">
              <label className="a-label">Period</label>
              <input className="a-input" value={prog.period} onChange={e => { const n = JSON.parse(JSON.stringify(d)); n.curriculum[i].period = e.target.value; setD(n); }} />
            </div>
            <div className="a-sec" style={{ marginTop: ".8rem" }}>Modules</div>
            {prog.modules.map((m, j) => (
              <div key={j} className="a-item">
                <div className="a-item-fields">
                  <input className="a-input" value={m} onChange={e => { const n = JSON.parse(JSON.stringify(d)); n.curriculum[i].modules[j] = e.target.value; setD(n); }} />
                </div>
                <button className="a-del" onClick={() => { const n = JSON.parse(JSON.stringify(d)); n.curriculum[i].modules.splice(j, 1); setD(n); }}>✕</button>
              </div>
            ))}
            <button className="a-add" onClick={() => { const n = JSON.parse(JSON.stringify(d)); n.curriculum[i].modules.push("New Module"); setD(n); }}>+ Add Module</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("curriculum", { inst: "Institution", programme: "Programme Name", period: "Year – Year", modules: ["Module 1"] })}>+ Add Programme</button>
      </>);
      case "Blog": return (<>
        <div className="a-sec">Articles / Insights (3 is ideal — Coming Soon is fine)</div>
        {d.blog.map((b, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields">
              <input className="a-input" placeholder="Thumb (2-3 letters)" value={b.thumb} onChange={e => setLI("blog", i, "thumb", e.target.value)} />
              <input className="a-input" placeholder="Category" value={b.cat} onChange={e => setLI("blog", i, "cat", e.target.value)} />
              <input className="a-input" placeholder="Article Title" value={b.title} onChange={e => setLI("blog", i, "title", e.target.value)} />
              <input className="a-input" placeholder="Date or 'Coming Soon'" value={b.date} onChange={e => setLI("blog", i, "date", e.target.value)} />
              <input className="a-input" placeholder="Read time (e.g. 5 min)" value={b.read} onChange={e => setLI("blog", i, "read", e.target.value)} />
            </div>
            <button className="a-del" onClick={() => delItem("blog", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("blog", { thumb: "NEW", cat: "Category", title: "Title", date: "Coming Soon", read: "5 min" })}>+ Add Article</button>
      </>);
      case "Ticker": return (<>
        <div className="a-sec">Ticker Items (4 is ideal — keep concise)</div>
        {d.ticker.map((t, i) => (
          <div key={i} className="a-item">
            <div className="a-item-fields"><input className="a-input" value={t} onChange={e => setLS("ticker", i, e.target.value)} /></div>
            <button className="a-del" onClick={() => delItem("ticker", i)}>✕</button>
          </div>
        ))}
        <button className="a-add" onClick={() => addItem("ticker", "🔔 New item")}>+ Add Item</button>
      </>);
      default: return null;
    }
  };

  return (
    <div className="admin-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="admin-panel">
        <div className="admin-hdr">
          <div className="admin-hdr-title">Edit <span>Content</span></div>
          <button className="admin-close" onClick={onClose}>✕</button>
        </div>
        <div className="admin-tabs">{TABS.map(t => <button key={t} className={`a-tab${tab === t ? " on" : ""}`} onClick={() => setTab(t)}>{t}</button>)}</div>
        <div className="admin-body">{body()}</div>
        <button className="admin-save" onClick={save}>✓ Save All Changes</button>
      </div>
      {saved && <div className="toast">✓ Saved successfully</div>}
    </div>
  );
}

/* ── SVG ICONS ───────────────────────────────────────────────── */
const LinkedInIcon = () => <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
const EmailIcon = () => <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;

/* ── GALLERY SECTION ─────────────────────────────────────────── */
function GallerySection({ items }) {
  const cats = ["All", ...new Set(items.map(i => i.category))];
  const [active, setActive] = useState("All");
  const [lb, setLb] = useState(null); // lightbox item

  const filtered = active === "All" ? items : items.filter(i => i.category === active);
  const hasAny = items.some(i => i.src);

  return (
    <section style={{ background: G.bg, padding: "76px 5%" }} id="gallery">
      <FadeIn>
        <div className="sl">Gallery</div>
        <h2 className="st">Moments &amp; <em>Milestones</em></h2>
        <p className="sd">Event photos, speaking engagements, academic milestones, and moments from the field.</p>

        {/* FILTER BUTTONS */}
        <div className="gallery-filters">
          {cats.map(c => (
            <button key={c} className={`gf-btn${active === c ? " on" : ""}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>

        {/* GRID */}
        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div key={i} className="gallery-item" onClick={() => item.src && setLb(item)}>
              {item.src ? (
                <>
                  {item.type === "video"
                    ? <div style={{width:"100%",height:"100%",background:`linear-gradient(135deg,${G.primary},#162d50)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <div style={{fontSize:"2.5rem",opacity:.4}}>▶</div>
                      </div>
                    : <img src={item.src} alt={item.caption} />
                  }
                  {item.type === "video" && <div className="video-badge">▶</div>}
                  <div className="gallery-ov">
                    <div className="gallery-caption">{item.caption}</div>
                    <div className="gallery-cat-lbl">{item.category}</div>
                  </div>
                </>
              ) : (
                <div className="gallery-ph">
                  <div className="gph-icon">{item.type === "video" ? "🎥" : "📷"}</div>
                  <div className="gph-lbl">{item.category}</div>
                  <div className="gph-cap">{item.caption}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* UPLOAD HINT — shown when no photos added yet */}
        {!hasAny && (
          <div className="gallery-hint">
            <div className="gh-icon">📁</div>
            <div>
              <div className="gh-title">How to add your photos &amp; videos</div>
              <div className="gh-sub">
                <strong>Photos:</strong> Place image files in <code style={{background:"rgba(154,123,46,.1)",padding:".1rem .3rem",fontSize:".72rem"}}>/public/gallery/</code> folder. Then open Admin Panel (✏️) → Gallery tab → paste the path e.g. <code style={{background:"rgba(154,123,46,.1)",padding:".1rem .3rem",fontSize:".72rem"}}>/gallery/event1.jpg</code><br/><br/>
                <strong>YouTube videos:</strong> Paste the embed URL e.g. <code style={{background:"rgba(154,123,46,.1)",padding:".1rem .3rem",fontSize:".72rem"}}>https://www.youtube.com/embed/VIDEO_ID</code> — set type to "video".
              </div>
            </div>
          </div>
        )}
      </FadeIn>

      {/* LIGHTBOX */}
      {lb && (
        <div className="lb-wrap" onClick={() => setLb(null)}>
          <div className="lb-inner" onClick={e => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setLb(null)}>✕</button>
            {lb.type === "video"
              ? <iframe className="lb-iframe" src={lb.src} allowFullScreen title={lb.caption} />
              : <img className="lb-img" src={lb.src} alt={lb.caption} />
            }
            <div className="lb-cap">{lb.caption}</div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ── MAIN APP ─────────────────────────────────────────────────── */
export default function App() {
  const [data, setData] = useState(() => {
    try { const s = localStorage.getItem("rr_v3"); return s ? JSON.parse(s) : DEFAULT_DATA; } catch { return DEFAULT_DATA; }
  });
  const [adminOpen, setAdminOpen] = useState(false);
  const date = useLiveDate();

  const save = (d) => { setData(d); try { localStorage.setItem("rr_v3", JSON.stringify(d)); } catch {} };
  const fmtDate = d => d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  const fmtTime = d => d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  const levelClass = l => l === "Expert" ? "exp-expert" : l === "Advanced" ? "exp-advanced" : "exp-certified";

  const ticker = [...data.ticker, ...data.ticker];

  return (
    <>
      <style>{css}</style>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {ticker.map((t, i) => <span key={i} className="t-item">{t}<span className="t-sep">◆</span></span>)}
        </div>
      </div>

      {/* NAV */}
      <nav>
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>
          Rajendra <span>Royal</span>
          <small>{data.profile.subtitle}</small>
        </button>
        <ul className="nav-links">
          {[["#about","About"],["#expertise","Expertise"],["#portfolio","Portfolio"],["#journey","Journey"],["#gallery","Gallery"],["#quotes","Perspective"],["#testimonials","Testimonials"],["#blog","Insights"],["#contact","Contact"]].map(([h,l]) => (
            <li key={h}><a href={h}>{l}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <span className="nav-date">{fmtDate(date)} · {fmtTime(date)}</span>
          <button className="nav-cta" onClick={() => window.open(data.profile.cvUrl)}>Download Resume</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-l">
          <div className="hero-badge"><span className="hero-badge-dot" />{data.profile.title}</div>
          <h1><em>{data.profile.headline.split("Transforming")[0]}</em>{data.profile.headline.includes("Transforming") ? data.profile.headline : data.profile.headline}</h1>
          <p className="hero-sub">{data.profile.subheading}</p>
          <div className="open-to-badge">
            <span className="open-to-dot" />
            {data.profile.openTo}
          </div>
          <div className="hero-btns">
            <button className="btn-g" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Get In Touch</button>
            <button className="btn-ow" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>View Portfolio</button>
            <button className="btn-ow" onClick={() => window.open(data.profile.cvUrl)}>Download Resume</button>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-card">
            <div className="hero-card-name">{data.profile.name}</div>
            <div className="hero-card-title">{data.profile.title} · {data.profile.subtitle}</div>
            <div className="hero-stat-row">
              <div className="hero-stat"><div className="hero-stat-n"><Counter target="20" suffix="+" /></div><div className="hero-stat-l">Years Exp.</div></div>
              <div className="hero-stat"><div className="hero-stat-n"><Counter target="6" suffix="" /></div><div className="hero-stat-l">Credentials</div></div>
              <div className="hero-stat"><div className="hero-stat-n"><Counter target="12" suffix="+" /></div><div className="hero-stat-l">Domains</div></div>
              <div className="hero-stat"><div className="hero-stat-n">Dr.</div><div className="hero-stat-l">Researcher</div></div>
            </div>
            <div className="hero-creds">
              {["IIM Calcutta","IIT Delhi","Dual MBA","Six Sigma","SSBM Geneva"].map(c => <span key={c} className="hero-cred-tag">{c}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* OPEN TO BANNER */}
      <div className="open-banner">
        <div className="open-banner-inner">
          <span className="ob-dot" />
          <span className="ob-text">Currently Available</span>
          <span className="ob-sub">— open to the following roles:</span>
          <div className="ob-divider" />
          <div className="ob-tags">
            {["VP / Director Supply Chain","Head of Operations","CXO & Board Advisory","Consulting Engagements","Speaking & Research"].map(t => <span key={t} className="ob-tag">{t}</span>)}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section style={{ background: G.bgAlt, padding: "76px 5%" }} id="about">
        <FadeIn>
          <div className="about-grid">
            <div>
              <div className="portrait-box">
                <div className="p-corner tl" /><div className="p-corner br" />
                {data.profile.photo
                  ? <img src={data.profile.photo} alt={data.profile.name} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}} />
                  : <div className="portrait-init">RR</div>
                }
                <div className="portrait-overlay">
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>{data.profile.name}</div>
                  <div style={{ fontSize: ".68rem", color: "#d4aa50", letterSpacing: ".1em", textTransform: "uppercase", marginTop: ".2rem" }}>{data.profile.title}</div>
                </div>
              </div>
              <div className="about-quick">
                {[`📍 ${data.profile.location}`, "🔬 Doctoral Researcher · SSBM Geneva", "🏛️ IIM Calcutta · IIT Delhi Alumni", "📦 20+ Years SC & Operations Leadership", "🎤 Speaker · Consultant · Researcher"].map((item, i) => (
                  <div key={i} className="aq-row"><span className="aq-dot" />{item}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="sl">About</div>
              <h2 className="st">Experienced. <em>Credentialed.</em> Results-Driven.</h2>
              <div className="about-bio">{data.about.bio}</div>
              <div className="mission-block">
                <div className="mission-lbl">Mission</div>
                <div className="mission-txt">"{data.about.mission}"</div>
              </div>
              <div className="values-grid">
                {data.values.map((v, i) => (
                  <div key={i} className="val-card">
                    <div className="val-icon">{v.icon}</div>
                    <div className="val-title">{v.title}</div>
                    <div className="val-desc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* COUNTERS */}
      <div className="counters">
        {[{t:"20",s:"+",l:"Years Experience"},{t:"6",s:"",l:"Qualifications"},{t:"12",s:"+",l:"Core Domains"},{t:"2",s:"×",l:"MBA Degrees"}].map((c,i) => (
          <div key={i} className="c-item">
            <div className="c-num"><Counter target={c.t} suffix={c.s} /></div>
            <div className="c-lbl">{c.l}</div>
          </div>
        ))}
      </div>

      {/* CREDENTIALS */}
      <FadeIn>
        <div style={{ background: G.bgCard, borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
          <div className="creds-grid">
            {data.credentials.map((c, i) => (
              <div key={i} className="cred-card">
                <div className={`cred-badge${c.highlight ? " hi" : ""}`}>{c.badge}</div>
                <div className="cred-inst">{c.inst}</div>
                <div className="cred-name">{c.name}</div>
                <div className="cred-detail">{c.detail}</div>
                {c.pill && <div className="cred-pill">{c.pill}</div>}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* EXPERTISE */}
      <section style={{ background: G.bg, padding: "76px 5%" }} id="expertise">
        <FadeIn>
          <div className="sl">Expertise</div>
          <h2 className="st">Areas of <em>Deep Practice</em></h2>
          <p className="sd">Competencies built through two decades of delivery — not self-rated percentages.</p>
          <table className="exp-table">
            <thead>
              <tr><th>Area</th><th>Level</th><th>Experience</th></tr>
            </thead>
            <tbody>
              {data.expertise.map((e, i) => (
                <tr key={i}>
                  <td><span className="exp-area">{e.area}</span></td>
                  <td><span className={`exp-level ${levelClass(e.level)}`}>{e.level}</span></td>
                  <td><span className="exp-years">{e.years} years</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "2rem" }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: ".62rem", letterSpacing: ".18em", textTransform: "uppercase", color: G.muted, marginBottom: "1rem" }}>Tools & Platforms</div>
            <div className="tools-wrap">
              {data.tools.map((t, i) => <span key={i} className="tool-tag">{t}</span>)}
            </div>
          </div>

          {/* ACADEMIC CURRICULUM */}
          <div style={{ marginTop: "3.5rem" }}>
            <div className="sl" style={{ marginBottom: ".75rem" }}>Academic Curriculum</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: G.primary, marginBottom: ".5rem" }}>
              What I Studied at <em style={{ fontStyle: "italic", color: G.gold }}>IIM Calcutta & IIT Delhi</em>
            </h3>
            <p style={{ fontSize: ".88rem", color: G.muted, marginBottom: "0", lineHeight: 1.7 }}>
              Formal academic modules from two of India's most respected institutions — directly informing how I think about supply chain strategy and operations.
            </p>
            <div className="curr-grid">
              {data.curriculum.map((prog, i) => (
                <div key={i} className="curr-card">
                  <div className="curr-header">
                    <div className="curr-inst-badge">{prog.inst}</div>
                    <div className="curr-prog">{prog.programme}</div>
                    <div className="curr-period">{prog.period}</div>
                  </div>
                  <div className="curr-body">
                    <div className="curr-module-label">Modules Covered</div>
                    <div className="curr-modules">
                      {prog.modules.map((m, j) => (
                        <div key={j} className="curr-module">
                          <span className="curr-module-num">{String(j + 1).padStart(2, "0")}</span>
                          <span className="curr-module-text">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PORTFOLIO */}
      <section style={{ background: G.bgAlt, padding: "76px 5%" }} id="portfolio">
        <FadeIn>
          <div className="sl">Portfolio</div>
          <h2 className="st">Work That <em>Speaks</em></h2>
          <p className="sd">Four case studies demonstrating the breadth and depth of operational impact over 20+ years.</p>
          <div className="proj-grid">
            {data.projects.map((p, i) => (
              <div key={i} className="proj-card">
                <span className="proj-tag">{p.tag}</span>
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-impacts">
                  {p.impacts.map((imp, j) => (
                    <div key={j}><div className="imp-n">{imp.num}</div><div className="imp-d">{imp.desc}</div></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* JOURNEY */}
      <section style={{ background: G.bg, padding: "76px 5%" }} id="journey">
        <FadeIn>
          <div className="sl">Career</div>
          <h2 className="st">20+ Years of <em>Progression</em></h2>
          <div className="journey-line">
            {data.journey.map((j, i) => (
              <div key={i} className="j-item">
                <div className="j-period">{j.period}</div>
                <div className="j-role">{j.role}</div>
                <div className="j-org">{j.org}</div>
                <div className="j-desc">{j.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="cta-inner">
          <div className="cta-pill"><span className="cta-pill-dot" />Currently Available</div>
          <div className="cta-h">Open to <em>Senior Leadership</em> & Consulting Roles</div>
          <div className="cta-p">VP, Director, or CXO of Supply Chain / Operations. Open to consulting, board advisory, and speaking engagements. Let's talk.</div>
          <div className="cta-btns">
            <button className="btn-g" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Get In Touch</button>
            <button className="btn-ow" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>View Portfolio</button>
            <button className="btn-ow" onClick={() => window.open(data.profile.cvUrl)}>Download Resume</button>
          </div>
        </div>
      </div>

      {/* SPEAKING */}
      <section style={{ background: G.bgAlt, padding: "76px 5%" }} id="speaking">
        <FadeIn>
          <div className="sl">Speaking</div>
          <h2 className="st">On Stage & <em>In the Room</em></h2>
          <p className="sd">Available for keynotes, panel discussions, and industry workshops on supply chain, operations, and leadership.</p>
          <div className="speak-grid">
            {data.speaking.map((s, i) => (
              <div key={i} className="speak-card">
                <div className="speak-top">
                  {s.photo
                    ? <img src={s.photo} alt={s.title} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} />
                    : <div className="speak-top-txt">{s.type.slice(0, 2).toUpperCase()}</div>
                  }
                  <span className="speak-badge">{s.type}</span>
                </div>
                <div className="speak-body">
                  <div className="speak-date">{s.date}</div>
                  <div className="speak-title">{s.title}</div>
                  <div className="speak-venue">{s.venue}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <button className="btn-o" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Invite Me to Speak</button>
          </div>
        </FadeIn>
      </section>

      {/* GALLERY */}
      <GallerySection items={data.gallery} />

      {/* QUOTES */}
      <Quotes quotes={data.quotes} />

      {/* TESTIMONIALS */}
      <section style={{ background: G.bg, padding: "76px 5%" }} id="testimonials">
        <FadeIn>
          <div className="sl">Testimonials</div>
          <h2 className="st">What <em>Colleagues Say</em></h2>
          <div className="testi-grid">
            {data.testimonials.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="tq">"</div>
                <div className="tt">{t.text}</div>
                <div className="ta"><div className="ta-name">{t.name}</div><div className="ta-role">{t.role}</div></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.4rem", padding: "1rem 1.3rem", border: `1px dashed ${G.borderGold}`, background: G.goldBg, display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ opacity: .5, flexShrink: 0 }}>🔗</span>
            <div>
              <div style={{ fontSize: ".78rem", fontWeight: 600, color: G.primary, marginBottom: ".12rem" }}>More recommendations on LinkedIn</div>
              <div style={{ fontSize: ".72rem", color: G.muted }}>Connect to read full endorsements from colleagues and stakeholders.</div>
            </div>
            <a href={`https://${data.profile.linkedin}`} target="_blank" rel="noreferrer" style={{ marginLeft: "auto", flexShrink: 0, padding: ".38rem .9rem", border: `1px solid ${G.borderGold}`, color: G.gold, fontSize: ".7rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", textDecoration: "none", transition: "all .22s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.background = G.gold; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = G.gold; }}>
              View LinkedIn
            </a>
          </div>
        </FadeIn>
      </section>

      {/* BLOG */}
      <section style={{ background: G.bgAlt, padding: "76px 5%" }} id="blog">
        <FadeIn>
          <div className="sl">Insights</div>
          <h2 className="st">Thought <em>Leadership</em></h2>
          <p className="sd">Perspectives on supply chain strategy, digital transformation, and operations leadership.</p>
          <div className="blog-grid">
            {data.blog.map((b, i) => (
              <div key={i} className="blog-card">
                <div className="blog-thumb">{b.thumb}<div className="blog-read">{b.read}</div></div>
                <div className="blog-body">
                  <div className="blog-cat">{b.cat}</div>
                  <div className="blog-title">{b.title}</div>
                  <div className="blog-date">{b.date}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CONTACT */}
      <section style={{ background: G.bg, padding: "76px 5%" }} id="contact">
        <FadeIn>
          <div className="sl">Contact</div>
          <h2 className="st">Let's <em>Talk</em></h2>
          <div className="contact-grid">
            <div>
              <div className="contact-h">Open to Senior Leadership & Consulting</div>
              <div className="contact-p">Whether you're looking for a VP / Director of Supply Chain, a transformation consultant, or a keynote speaker — I'd welcome the conversation.</div>
              <a href={`https://${data.profile.linkedin}`} target="_blank" rel="noreferrer" className="soc-link"><div className="soc-icon"><LinkedInIcon /></div><div><div className="soc-name">LinkedIn</div><div className="soc-handle">{data.profile.linkedin}</div></div></a>
              <a href={`mailto:${data.profile.email}`} className="soc-link"><div className="soc-icon"><EmailIcon /></div><div><div className="soc-name">Email</div><div className="soc-handle">{data.profile.email}</div></div></a>
              <a href={`https://twitter.com/${data.profile.twitter}`} target="_blank" rel="noreferrer" className="soc-link"><div className="soc-icon"><TwitterIcon /></div><div><div className="soc-name">X (Twitter)</div><div className="soc-handle">{data.profile.twitter}</div></div></a>
            </div>
            <div>
              <div className="f-row">
                <div><label className="f-label">Name</label><input type="text" className="f-input" placeholder="Your full name" /></div>
                <div><label className="f-label">Email</label><input type="email" className="f-input" placeholder="your@email.com" /></div>
              </div>
              <div className="f-group"><label className="f-label">Organisation / Role</label><input type="text" className="f-input" placeholder="Company and your position" /></div>
              <div className="f-group"><label className="f-label">How can I help?</label><textarea className="f-area" placeholder="Briefly describe what you're looking for — a role, consulting work, a speaking engagement, or something else." /></div>
              <button className="btn-p" style={{ marginTop: ".3rem" }}>Send Message</button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand">Rajendra <span>Royal</span></div>
            <div className="footer-tagline">{data.profile.title} · Doctoral Researcher · Speaker · Consultant</div>
          </div>
          <div>
            <div className="footer-col-h">Navigate</div>
            {[["#about","About"],["#expertise","Expertise"],["#portfolio","Portfolio"],["#journey","Career"],["#contact","Contact"]].map(([h,l]) => <a key={h} href={h} className="footer-link">{l}</a>)}
          </div>
          <div>
            <div className="footer-col-h">Credentials</div>
            {["IIM Calcutta EPOM","IIT Delhi SC Analytics","MBA Strategy & Leadership","MBA Business Analytics","Six Sigma","Doctoral Research · SSBM Geneva"].map(c => <span key={c} className="footer-link" style={{cursor:"default"}}>{c}</span>)}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© {new Date().getFullYear()} {data.profile.name} · All Rights Reserved</div>
          <div className="footer-research">Doctoral Researcher · Business & Operations · SSBM Geneva</div>
        </div>
      </footer>

      {/* ADMIN */}
      <button className="admin-fab" onClick={() => setAdminOpen(true)} title="Edit Content">✏️</button>
      {adminOpen && <Admin data={data} onSave={save} onClose={() => setAdminOpen(false)} />}
    </>
  );
}
