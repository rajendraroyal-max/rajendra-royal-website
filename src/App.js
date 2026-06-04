import React, { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   RAJENDRA ROYAL — Luxury Executive Personal Brand
   Design: Dark leather · Champagne gold · Cormorant Garamond
   8 Sections · Password-protected Admin · Mobile + Desktop
═══════════════════════════════════════════════════════════════ */

const ADMIN_PASSWORD = "RR@Admin2025";

const DEFAULT_DATA = {
  profile:{
    name:"Rajendra Royal",
    title:"Supply Chain & Operations Leader",
    subtitle:"Doctoral Researcher · Business & Operations",
    headline:"20+ Years Transforming Supply Chains",
    tagline:"Across Retail · Logistics · Management",
    subheading:"Senior leader with expertise in warehouse operations, inventory management, and supply chain transformation. IIM Calcutta · IIT Delhi · Dual MBA · Six Sigma · Doctoral Research at SSBM Geneva.",
    openTo:"Open to Senior Leadership, CXO & Consulting Roles",
    email:"rajendra@rajendraroyal.com",
    linkedin:"www.linkedin.com/in/rajendraroyal/",
    twitter:"@rajendraroyal",
    location:"India",
    cvUrl:"#",
    photo:"",
  },
  ticker:[
    "Doctoral Researcher · Business & Operations · SSBM Geneva",
    "20+ Years Supply Chain & Operations Leadership",
    "IIM Calcutta EPOM · IIT Delhi Executive Program Alumni",
    "Available for Senior Leadership · Consulting · Speaking",
  ],
  about:{
    bio:"Rajendra Royal is a Supply Chain and Operations leader with 20+ years of experience delivering measurable results across retail, logistics, and distribution. He has led large-scale warehouse transformations, built inventory optimization frameworks, and implemented analytics-driven KPI systems that connect operations to business outcomes.\n\nHis academic foundation — dual MBAs, executive programs at IIM Calcutta and IIT Delhi, Six Sigma certification, and ongoing doctoral research in Business & Operations at SSBM Geneva — gives him a rare combination of hands-on execution ability and strategic depth.",
    mission:"To bring rigorous thinking and proven operational expertise to organizations that want to build supply chains that are faster, leaner, and more resilient.",
  },
  values:[
    {title:"Strategic Clarity",desc:"Turning complex challenges into clear, executable plans."},
    {title:"Evidence-Based Decisions",desc:"KPIs, analytics, and data — not intuition alone."},
    {title:"People-Led Execution",desc:"Results come through teams. Building capability is non-negotiable."},
    {title:"Continuous Improvement",desc:"Lean, Six Sigma, and Kaizen as a way of working — not a project."},
  ],
  scNodes:[
    {icon:"🛒",label:"Procurement\n& Sourcing"},
    {icon:"🏭",label:"Warehouse\nOperations"},
    {icon:"📦",label:"Inventory\nManagement"},
    {icon:"🚛",label:"Logistics &\nTransport"},
    {icon:"🏪",label:"Retail\nDistribution"},
    {icon:"📊",label:"Analytics &\nExcellence"},
  ],
  expertise:[
    {area:"Supply Chain Management & Strategy",level:"Expert",years:"20+"},
    {area:"Warehouse Operations",level:"Expert",years:"20+"},
    {area:"Inventory Management & Optimization",level:"Expert",years:"18+"},
    {area:"Demand Forecasting & Planning",level:"Expert",years:"15+"},
    {area:"Transportation & Logistics Operations",level:"Expert",years:"15+"},
    {area:"Network Design & Optimization",level:"Advanced",years:"10+"},
    {area:"Sourcing & Procurement Strategies",level:"Advanced",years:"12+"},
    {area:"Supply Chain Disruption & Resilience",level:"Advanced",years:"10+"},
    {area:"Business Analytics & KPIs",level:"Advanced",years:"10+"},
    {area:"Design of Lean Operations",level:"Expert",years:"12+"},
    {area:"Quality Management",level:"Certified",years:"12+"},
    {area:"Operations & Process Analysis",level:"Expert",years:"18+"},
  ],
  tools:["SAP SCM","WMS","ERP Systems","Power BI","Advanced Excel","Demand Planning","KPI Dashboards","TMS","Lean / Kaizen","DMAIC","ABC-XYZ Analysis","Network Optimization","Procurement Analytics"],
  credentials:[
    {badge:"IIM",inst:"Indian Institute of Management Calcutta",short:"IIM Calcutta",name:"Executive Programme in Operations Management (EPOM)",detail:"Operations · Lean · Quality · SC Design · Analytics · Cross-Functional Management",period:"2024 – 2025",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/IIM_Calcutta_Logo.svg/200px-IIM_Calcutta_Logo.svg.png",modules:["Introduction to Operations & Process Analysis","Analytics and Management Sciences","Design of Lean Operations","Quality Management","Supply Chain Design","Cross-Functional Areas of Management"]},
    {badge:"IIT",inst:"Indian Institute of Technology Delhi",short:"IIT Delhi",name:"Executive Management Programme in SC & Operations Analytics",detail:"SC Strategy · Forecasting · Inventory · Logistics · Network Design · Resilience",period:"Aug 2025 – Aug 2026",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/IIT_Delhi_logo.svg/200px-IIT_Delhi_logo.svg.png",modules:["Supply Chain Management & Strategy","Demand Forecasting & Planning","Inventory Management Techniques","Transportation & Logistics Operations","Network Design & Optimization","Sourcing & Procurement Strategies","SC Disruption & Resilience","Financial & Costing Decisions","Sustainability, Ethics & Leadership","Capstone Project & Case Studies"]},
    {badge:"MBA",inst:"Postgraduate Business School",short:"MBA Programme",name:"MBA in Strategy & Leadership",detail:"Strategic Management · Executive Leadership · Corporate Strategy",period:"",logo:"",modules:[]},
    {badge:"MBA",inst:"Postgraduate Business School",short:"MBA Programme",name:"MBA in Business Analytics",detail:"Data-Driven Decisions · Business Intelligence · Statistical Modelling",period:"",logo:"",modules:[]},
    {badge:"6σ",inst:"Six Sigma Certification Body",short:"Six Sigma",name:"DMAIC · Process Excellence · Quality Management",detail:"Lean · Kaizen · Defect Elimination · Process Improvement",period:"",logo:"",modules:[]},
    {badge:"Dr.",inst:"SSBM Geneva · Swiss School of Business & Management",short:"SSBM Geneva",name:"Doctoral Researcher in Business & Operations",detail:"Exploring contemporary challenges in operations, leadership, and organizational effectiveness",period:"Mar 2026 – Present",logo:"",modules:[]},
  ],
  projects:[
    {tag:"Warehouse",title:"Warehouse Productivity Improvement",desc:"Redesigned layout, slotting, and pick-path workflows across distribution centers. Delivered significant throughput gains while reducing labor cost per unit and achieving zero safety incidents.",impacts:[{num:"30%↑",desc:"Throughput"},{num:"22%↓",desc:"Labor cost"}]},
    {tag:"Inventory",title:"Inventory Optimization Framework",desc:"Built ABC-XYZ classification with safety stock modeling and automated reorder logic. Freed working capital while improving fill rates and eliminating chronic stockouts.",impacts:[{num:"28%↓",desc:"Excess stock"},{num:"98%",desc:"Fill rate"}]},
    {tag:"Analytics",title:"Supply Chain Analytics Dashboard",desc:"Designed real-time executive dashboards giving end-to-end supply chain visibility — from procurement through to last-mile delivery.",impacts:[{num:"40%↓",desc:"Reporting time"},{num:"Live",desc:"Real-time KPIs"}]},
    {tag:"Forecasting",title:"Demand Forecasting Initiative",desc:"Led deployment of statistical forecasting models that reduced forecast error (MAPE) and aligned procurement cycles with real demand signals.",impacts:[{num:"35%↓",desc:"Forecast error"},{num:"20%↓",desc:"Stockouts"}]},
  ],
  journey:[
    {period:"2018 — Present",role:"Senior Supply Chain Leader",org:"Retail & Logistics Organization",desc:"Leading enterprise-wide supply chain transformation across multiple distribution centers. Responsible for warehouse operations, logistics network, inventory planning, and analytics programs."},
    {period:"2012 — 2018",role:"Operations Manager",org:"Supply Chain & Distribution",desc:"Managed large-scale warehouse operations. Delivered productivity improvements, inventory accuracy gains, and process standardization across multiple sites."},
    {period:"2006 — 2012",role:"Logistics & Inventory Specialist",org:"Retail Operations",desc:"Built expertise in logistics coordination, demand planning, and inventory management — establishing the foundation for strategic leadership."},
    {period:"2002 — 2006",role:"Operations Executive",org:"Warehouse & Distribution",desc:"Started career in warehouse operations, developing hands-on skills in inbound/outbound logistics, material handling, and operational planning."},
  ],
  testimonials:[
    {text:"Rajendra brings a rare combination of strategic thinking and operational rigor. His ability to translate complex data into clear business action — and bring teams with him — is genuinely exceptional.",name:"Senior Operations Director",role:"Retail & Logistics · Long-term Colleague"},
    {text:"He diagnosed inefficiencies we had lived with for years, built a rigorous improvement roadmap, and drove execution with real accountability. The results were clear and lasting.",name:"VP Supply Chain",role:"E-Commerce & Distribution"},
    {text:"Rajendra's depth in inventory and demand planning is among the strongest I have seen in two decades in this industry.",name:"Head of Planning & Forecasting",role:"FMCG Supply Chain"},
  ],
  quotes:[
    {text:"Data without strategy is noise. Strategy without data is guesswork. Great operations need both.",author:"Rajendra Royal"},
    {text:"The goal is not to be efficient. The goal is to create value — efficiency is just how you get there.",author:"Rajendra Royal"},
    {text:"Leadership is not about being in charge. It is about taking care of those in your charge.",author:"Simon Sinek"},
    {text:"Lean thinking is not a tool. It is a mindset — and mindsets outlast any methodology.",author:"Rajendra Royal"},
  ],
};


const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:#0C0B09;color:#F0EAD6;overflow-x:hidden;line-height:1.65;-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:2px}::-webkit-scrollbar-track{background:#0C0B09}::-webkit-scrollbar-thumb{background:#C9A84C}

/* SCROLL PROGRESS */
.scroll-bar{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#C9A84C,#E2C97A);z-index:999;transition:width .1s linear;pointer-events:none}

/* TEXTURE */
body::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.028'/%3E%3C/svg%3E");background-size:180px;pointer-events:none;z-index:0}
.page{position:relative;z-index:1}

/* ANIMATIONS */
@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes kenBurns{0%{transform:scale(1.06)}100%{transform:scale(1.14)}}
@keyframes lineGrow{from{width:0}to{width:72px}}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.7)}}
@keyframes qfade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes shimmer{0%,100%{opacity:.6}50%{opacity:1}}
@keyframes borderGlow{0%,100%{box-shadow:0 0 0 rgba(201,168,76,0)}50%{box-shadow:0 0 24px rgba(201,168,76,.18)}}

.reveal{opacity:0;transform:translateY(24px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.reveal.on{opacity:1;transform:translateY(0)}
.reveal-l{opacity:0;transform:translateX(-24px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.reveal-l.on{opacity:1;transform:translateX(0)}
.reveal-r{opacity:0;transform:translateX(24px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.reveal-r.on{opacity:1;transform:translateX(0)}

/* TICKER */
.ticker{background:#080806;border-bottom:1px solid rgba(201,168,76,.12);padding:.52rem 0;overflow:hidden}
.ticker-tr{display:flex;width:max-content;animation:ticker 42s linear infinite;white-space:nowrap}
.ticker-tr:hover{animation-play-state:paused}
.ticker-it{padding:0 3rem;font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(201,168,76,.55);display:flex;align-items:center;gap:.9rem}
.ticker-it::before{content:'';width:4px;height:4px;background:rgba(201,168,76,.5);border-radius:50%;flex-shrink:0}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:200;height:70px;padding:0 5%;display:flex;align-items:center;justify-content:space-between;transition:all .4s}
.nav.solid{background:rgba(10,9,7,.96);backdrop-filter:blur(24px);border-bottom:1px solid rgba(201,168,76,.1)}
.nav-brand{display:flex;flex-direction:column;cursor:pointer;background:none;border:none;padding:0;text-align:left}
.nav-brand-name{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:400;color:#F0EAD6;line-height:1;letter-spacing:.02em}
.nav-brand-name em{font-style:italic;color:#C9A84C}
.nav-brand-sub{font-family:'DM Mono',monospace;font-size:.46rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(240,234,214,.35);margin-top:.1rem}
.nav-links{display:flex;gap:2.5rem;list-style:none}
.nav-links a{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(240,234,214,.45);text-decoration:none;transition:color .25s;position:relative;padding-bottom:2px}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:#C9A84C;transition:width .3s}
.nav-links a:hover{color:#C9A84C}
.nav-links a:hover::after{width:100%}
.nav-r{display:flex;align-items:center;gap:1.5rem}
.nav-cta{padding:.42rem 1.3rem;border:1px solid rgba(201,168,76,.35);background:transparent;color:#C9A84C;font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:all .3s}
.nav-cta:hover{background:#C9A84C;color:#0C0B09;border-color:#C9A84C}
.nav-ham{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:.3rem}
.nav-ham span{width:22px;height:1px;background:rgba(201,168,76,.7);transition:all .3s;display:block}

/* MOBILE NAV */
.mob-nav{position:fixed;inset:0;background:rgba(8,8,6,.97);z-index:300;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2rem;transform:translateX(100%);transition:transform .4s cubic-bezier(.16,1,.3,1)}
.mob-nav.open{transform:translateX(0)}
.mob-nav a{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:300;font-style:italic;color:#F0EAD6;text-decoration:none;transition:color .25s}
.mob-nav a:hover{color:#C9A84C}
.mob-close{position:absolute;top:1.5rem;right:1.5rem;background:none;border:none;color:rgba(240,234,214,.5);font-size:1.6rem;cursor:pointer;transition:color .2s}
.mob-close:hover{color:#C9A84C}

/* HERO */
.hero{height:100vh;min-height:600px;position:relative;overflow:hidden;display:flex;align-items:center}
.hero-bg{position:absolute;inset:0;background:linear-gradient(160deg,#141210 0%,#0A0908 100%);animation:kenBurns 16s ease infinite alternate}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(8,8,6,.88) 45%,rgba(8,8,6,.3) 100%)}
.hero-photo{position:absolute;inset:0;object-fit:cover;object-position:center top;opacity:.55;width:100%;height:100%}
.hero-grid-lines{position:absolute;inset:0;background-image:linear-gradient(rgba(201,168,76,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.025) 1px,transparent 1px);background-size:72px 72px}
.hero-inner{position:relative;z-index:2;padding:0 8%;max-width:900px;animation:fadeUp 1s ease both}
.hero-eyebrow{display:inline-flex;align-items:center;gap:.8rem;font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:rgba(201,168,76,.7);margin-bottom:2rem}
.hero-eyebrow::before{content:'';width:28px;height:1px;background:rgba(201,168,76,.6)}
.hero-avail{display:inline-flex;align-items:center;gap:.65rem;padding:.3rem .9rem;background:rgba(34,197,94,.07);border:1px solid rgba(34,197,94,.2);font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(34,197,94,.85);margin-bottom:2.2rem}
.hero-avail-dot{width:6px;height:6px;background:#22c55e;border-radius:50%;animation:pulse 2.5s infinite;flex-shrink:0}
.hero-name{font-family:'Cormorant Garamond',serif;font-size:clamp(3.8rem,9vw,7.5rem);font-weight:300;line-height:.92;letter-spacing:-.02em;color:#F0EAD6;margin-bottom:.3rem}
.hero-name em{font-style:italic;color:#C9A84C;display:block}
.hero-line{height:1px;background:linear-gradient(90deg,#C9A84C,transparent);margin:2rem 0;animation:lineGrow 1.4s .4s ease both;width:0}
.hero-tagline{font-family:'Cormorant Garamond',serif;font-size:clamp(1.1rem,2.4vw,1.55rem);font-weight:300;font-style:italic;color:rgba(240,234,214,.65);line-height:1.5;max-width:520px;margin-bottom:1rem}
.hero-sub{font-family:'Cormorant Garamond',serif;font-size:clamp(.9rem,1.6vw,1.1rem);font-weight:300;color:rgba(240,234,214,.42);line-height:1.6;max-width:480px;margin-bottom:2rem}
.hero-creds{display:flex;flex-wrap:wrap;gap:.45rem;margin-bottom:2.5rem}
.hero-cred{padding:.22rem .75rem;border:1px solid rgba(201,168,76,.22);font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(201,168,76,.65)}
.hero-btns{display:flex;gap:.85rem;flex-wrap:wrap}
.btn-gold{padding:.82rem 2.2rem;background:#C9A84C;color:#0C0B09;font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;border:none;cursor:pointer;font-weight:500;transition:all .3s}
.btn-gold:hover{background:#E2C97A;transform:translateY(-2px);box-shadow:0 12px 30px rgba(201,168,76,.25)}
.btn-outline{padding:.82rem 2.2rem;background:transparent;color:rgba(240,234,214,.75);font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;border:1px solid rgba(240,234,214,.2);cursor:pointer;transition:all .3s}
.btn-outline:hover{border-color:rgba(201,168,76,.45);color:#C9A84C;transform:translateY(-2px)}
.hero-stats{position:absolute;bottom:0;left:0;right:0;display:grid;grid-template-columns:repeat(4,1fr);background:rgba(8,8,6,.92);border-top:1px solid rgba(201,168,76,.1)}
.hero-stat{padding:1.4rem 1rem;text-align:center;border-right:1px solid rgba(201,168,76,.08)}
.hero-stat:last-child{border-right:none}
.hero-stat-n{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:300;color:#C9A84C;line-height:1;letter-spacing:-.02em}
.hero-stat-l{font-family:'DM Mono',monospace;font-size:.48rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(240,234,214,.3);margin-top:.25rem}

/* AVAIL STRIP */
.avail-strip{background:#080806;border-bottom:1px solid rgba(201,168,76,.1);padding:.85rem 5%;display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap}
.avail-dot{width:7px;height:7px;background:#22c55e;border-radius:50%;animation:pulse 2.5s infinite;flex-shrink:0}
.avail-label{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.1em;color:#F0EAD6;font-weight:500}
.avail-div{width:1px;height:14px;background:rgba(201,168,76,.2)}
.avail-tags{display:flex;gap:.38rem;flex-wrap:wrap}
.avail-tag{padding:.18rem .65rem;border:1px solid rgba(201,168,76,.22);background:rgba(201,168,76,.05);font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(201,168,76,.7)}

/* SECTION */
.sec{padding:100px 8%}
.sec-alt{padding:100px 8%;background:#0F0E0C}
.sec-dark{padding:100px 8%;background:#080806}
.eyebrow{display:inline-flex;align-items:center;gap:.8rem;font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.24em;text-transform:uppercase;color:rgba(201,168,76,.7);margin-bottom:1.2rem}
.eyebrow::before{content:'';width:24px;height:1px;background:rgba(201,168,76,.6)}
.sec-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2.2rem,4.5vw,3.8rem);font-weight:300;line-height:1.1;color:#F0EAD6;margin-bottom:1rem;letter-spacing:-.01em}
.sec-title em{font-style:italic;color:#C9A84C}
.sec-title strong{font-weight:600}
.sec-sub{font-size:.88rem;color:rgba(240,234,214,.45);max-width:480px;line-height:1.8}
.gold-rule{height:1px;background:linear-gradient(90deg,rgba(201,168,76,.5),transparent);margin:3rem 0}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:360px 1fr;gap:6rem;align-items:start;margin-top:4rem}
.portrait-wrap{position:relative}
.portrait{width:100%;aspect-ratio:3/4;background:linear-gradient(160deg,#1c1a16,#0C0B09);border:1px solid rgba(201,168,76,.18);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.portrait img{width:100%;height:100%;object-fit:cover;object-position:center top}
.portrait-init{font-family:'Cormorant Garamond',serif;font-size:9rem;font-weight:300;color:rgba(201,168,76,.06);letter-spacing:-.04em;user-select:none}
.portrait-ov{position:absolute;bottom:0;left:0;right:0;padding:1.6rem;background:linear-gradient(transparent,rgba(8,8,6,.97))}
.portrait-name{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:400;color:#F0EAD6}
.portrait-role{font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.12em;text-transform:uppercase;color:#C9A84C;margin-top:.2rem}
.p-corner{position:absolute;width:28px;height:28px;border-color:#C9A84C;border-style:solid}
.p-corner.tl{top:-1px;left:-1px;border-width:1px 0 0 1px}
.p-corner.br{bottom:-1px;right:-1px;border-width:0 1px 1px 0}
.about-facts{margin-top:1.4rem;display:flex;flex-direction:column;gap:.5rem}
.about-fact{display:flex;align-items:center;gap:.75rem;font-size:.76rem;color:rgba(240,234,214,.45)}
.about-fact::before{content:'';width:14px;height:1px;background:rgba(201,168,76,.45);flex-shrink:0}
.about-bio{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:300;color:rgba(240,234,214,.72);line-height:1.9;margin-bottom:1.5rem;white-space:pre-line}
.mission-box{padding:1.6rem 1.8rem;border-left:1px solid #C9A84C;background:rgba(201,168,76,.04);margin:1.8rem 0}
.mission-label{font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(201,168,76,.6);margin-bottom:.55rem}
.mission-text{font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-style:italic;font-weight:300;line-height:1.72;color:#F0EAD6}
.values-list{margin-top:1.8rem;display:flex;flex-direction:column;gap:.75rem}
.val-item{display:flex;gap:1.2rem;align-items:flex-start;padding:1.1rem 1.3rem;border:1px solid rgba(201,168,76,.1);transition:all .3s}
.val-item:hover{border-color:rgba(201,168,76,.28);background:rgba(201,168,76,.04)}
.val-num{font-family:'DM Mono',monospace;font-size:.58rem;color:rgba(201,168,76,.5);padding-top:.15rem;flex-shrink:0;min-width:1.6rem}
.val-title{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:500;color:#F0EAD6;margin-bottom:.22rem}
.val-desc{font-size:.76rem;color:rgba(240,234,214,.4);line-height:1.6}

/* STATS */
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);background:#080806;border-top:1px solid rgba(201,168,76,.1);border-bottom:1px solid rgba(201,168,76,.1)}
.stat-box{padding:3rem 2rem;text-align:center;border-right:1px solid rgba(201,168,76,.08);transition:background .3s}
.stat-box:last-child{border-right:none}
.stat-box:hover{background:#0F0E0C}
.stat-n{font-family:'Cormorant Garamond',serif;font-size:3.5rem;font-weight:300;color:#C9A84C;line-height:1;letter-spacing:-.02em}
.stat-l{font-family:'DM Mono',monospace;font-size:.55rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,234,214,.28);margin-top:.45rem;line-height:1.5}

/* SC INFOGRAPHIC */
.sc-flow{display:flex;align-items:center;justify-content:center;gap:0;margin-top:4rem;overflow-x:auto;padding-bottom:1rem}
.sc-node{display:flex;flex-direction:column;align-items:center;gap:.8rem;flex:1;min-width:100px;max-width:140px}
.sc-icon-box{width:72px;height:72px;border:1px solid rgba(201,168,76,.25);background:rgba(201,168,76,.06);display:flex;align-items:center;justify-content:center;font-size:1.7rem;transition:all .35s;animation:float 4s ease infinite;flex-shrink:0}
.sc-node:nth-child(3) .sc-icon-box{animation-delay:.4s}
.sc-node:nth-child(5) .sc-icon-box{animation-delay:.8s}
.sc-node:nth-child(7) .sc-icon-box{animation-delay:1.2s}
.sc-node:nth-child(9) .sc-icon-box{animation-delay:1.6s}
.sc-node:nth-child(11) .sc-icon-box{animation-delay:2s}
.sc-icon-box:hover{background:rgba(201,168,76,.14);border-color:#C9A84C;transform:translateY(-4px) scale(1.05)}
.sc-label{font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(240,234,214,.5);text-align:center;white-space:pre-line;line-height:1.5}
.sc-arrow{padding:0 .5rem;flex-shrink:0;display:flex;align-items:center}
.sc-arrow svg{width:30px;height:14px;opacity:.3}
.sc-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.1);margin-top:4rem}
.sc-metric{background:#080806;padding:2rem 2.2rem;transition:background .3s}
.sc-metric:hover{background:#0F0E0C}
.sc-mn{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:300;color:#C9A84C;line-height:1;margin-bottom:.35rem}
.sc-mt{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:400;color:#F0EAD6;margin-bottom:.3rem}
.sc-md{font-size:.74rem;color:rgba(240,234,214,.35);line-height:1.65}

/* CREDENTIALS */
.creds-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.1);margin-top:3.5rem}
.cred-card{background:#0F0E0C;padding:2.2rem 2rem;position:relative;overflow:hidden;transition:background .3s;cursor:pointer;display:flex;flex-direction:column}
.cred-card:hover{background:#161410}
.cred-card::after{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#C9A84C,transparent);transform:scaleX(0);transform-origin:center;transition:transform .45s}
.cred-card:hover::after{transform:scaleX(1)}
.cred-logo{height:36px;display:flex;align-items:center;margin-bottom:1rem}
.cred-logo img{max-height:100%;max-width:120px;object-fit:contain;filter:brightness(0) invert(1);opacity:.6;transition:opacity .3s}
.cred-card:hover .cred-logo img{opacity:.85}
.cred-logo-fb{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:500;color:rgba(201,168,76,.6);letter-spacing:-.02em}
.cred-badge-line{font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(201,168,76,.55);margin-bottom:.4rem}
.cred-name{font-family:'Cormorant Garamond',serif;font-size:.98rem;font-weight:400;color:#F0EAD6;line-height:1.3;margin-bottom:.4rem;flex:1}
.cred-detail{font-size:.68rem;color:rgba(240,234,214,.35);line-height:1.6}
.cred-pill{display:inline-block;margin-top:.75rem;padding:.18rem .62rem;border:1px solid rgba(201,168,76,.22);background:rgba(201,168,76,.05);font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(201,168,76,.65)}
.cred-pill.active{border-color:rgba(34,197,94,.3);background:rgba(34,197,94,.06);color:rgba(34,197,94,.8)}
/* expanded modules */
.cred-modules{max-height:0;overflow:hidden;transition:max-height .45s ease}
.cred-modules.open{max-height:400px}
.cred-mod-label{font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(201,168,76,.4);margin:1rem 0 .6rem}
.cred-mod-list{display:flex;flex-direction:column;gap:.32rem}
.cred-mod-item{display:flex;gap:.6rem;font-size:.72rem;color:rgba(240,234,214,.4);line-height:1.45}
.cred-mod-n{font-family:'DM Mono',monospace;font-size:.5rem;color:rgba(201,168,76,.4);min-width:1.2rem;flex-shrink:0;padding-top:.08rem}

/* PORTFOLIO */
.port-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.1);margin-top:3.5rem}
.port-card{background:#0F0E0C;padding:2.8rem 2.5rem;display:flex;flex-direction:column;transition:background .3s;position:relative;overflow:hidden}
.port-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#C9A84C,transparent);transform:scaleX(0);transform-origin:center;transition:transform .5s}
.port-card:hover{background:#161410}
.port-card:hover::before{transform:scaleX(1)}
.port-tag{display:inline-block;padding:.18rem .65rem;border:1px solid rgba(201,168,76,.22);font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(201,168,76,.6);margin-bottom:1.2rem;align-self:flex-start}
.port-title{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:#F0EAD6;line-height:1.25;margin-bottom:.8rem}
.port-desc{font-size:.8rem;color:rgba(240,234,214,.4);line-height:1.72;flex:1}
.port-metrics{display:flex;gap:2rem;margin-top:1.6rem;padding-top:1.4rem;border-top:1px solid rgba(201,168,76,.1)}
.pm-n{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:300;color:#C9A84C;line-height:1}
.pm-l{font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.08em;color:rgba(240,234,214,.3);margin-top:.18rem}

/* JOURNEY */
.journey-wrap{margin-top:3.5rem;position:relative;padding-left:2rem;border-left:1px solid rgba(201,168,76,.18)}
.j-item{position:relative;padding:0 0 3rem 2.8rem}
.j-item:last-child{padding-bottom:0}
.j-item::before{content:'';position:absolute;left:-2.25rem;top:.45rem;width:.85rem;height:.85rem;border:1px solid #C9A84C;background:#0C0B09;transform:rotate(45deg)}
.j-period{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.14em;color:rgba(201,168,76,.6);margin-bottom:.45rem}
.j-role{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:400;color:#F0EAD6;margin-bottom:.2rem}
.j-org{font-size:.78rem;color:rgba(201,168,76,.7);margin-bottom:.65rem;letter-spacing:.02em}
.j-desc{font-size:.8rem;color:rgba(240,234,214,.4);line-height:1.72;max-width:540px}

/* TESTIMONIALS */
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.1);margin-top:3.5rem}
.testi-card{background:#0F0E0C;padding:2.5rem 2rem;display:flex;flex-direction:column;transition:background .3s}
.testi-card:hover{background:#161410}
.testi-q{font-family:'Cormorant Garamond',serif;font-size:3.5rem;line-height:.55;color:#C9A84C;opacity:.18;margin-bottom:.5rem}
.testi-text{font-family:'Cormorant Garamond',serif;font-size:.98rem;font-style:italic;font-weight:300;color:rgba(240,234,214,.65);line-height:1.82;flex:1}
.testi-author{margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid rgba(201,168,76,.1)}
.testi-name{font-size:.82rem;font-weight:500;color:#F0EAD6}
.testi-role{font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.06em;color:rgba(201,168,76,.55);margin-top:.18rem}

/* QUOTES */
.quote-stage{max-width:720px;margin:3.5rem auto 0}
.quote-body{padding:3rem 3.5rem;border:1px solid rgba(201,168,76,.14);background:#0F0E0C;position:relative}
.quote-mark{font-family:'Cormorant Garamond',serif;font-size:7rem;line-height:.45;color:#C9A84C;opacity:.12;position:absolute;top:1.5rem;right:2rem;font-style:italic}
.quote-text{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:300;font-style:italic;line-height:1.65;color:#F0EAD6;padding-right:3rem;animation:qfade .45s ease both}
.quote-auth{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(201,168,76,.55);margin-top:1.4rem}
.quote-ctrl{display:flex;align-items:center;justify-content:center;gap:1.2rem;margin-top:1.8rem}
.q-dot{width:6px;height:6px;border-radius:50%;background:rgba(201,168,76,.25);cursor:pointer;transition:all .25s}
.q-dot.on{background:#C9A84C;transform:scale(1.3)}
.q-btn{width:36px;height:36px;border:1px solid rgba(201,168,76,.2);background:transparent;color:rgba(201,168,76,.5);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .22s;font-size:.9rem}
.q-btn:hover{border-color:#C9A84C;color:#C9A84C}

/* CTA BAND */
.cta-band{padding:90px 8%;text-align:center;background:radial-gradient(ellipse 60% 70% at 50% 50%,rgba(201,168,76,.06) 0%,transparent 70%),#080806;border-top:1px solid rgba(201,168,76,.12);border-bottom:1px solid rgba(201,168,76,.12);position:relative}
.cta-tag{display:inline-flex;align-items:center;gap:.55rem;font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(34,197,94,.75);margin-bottom:1.4rem}
.cta-tag-dot{width:5px;height:5px;background:#22c55e;border-radius:50%;animation:pulse 2.5s infinite}
.cta-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,4vw,3.5rem);font-weight:300;color:#F0EAD6;margin-bottom:.8rem;line-height:1.1}
.cta-title em{font-style:italic;color:#C9A84C}
.cta-sub{font-size:.88rem;color:rgba(240,234,214,.4);max-width:480px;margin:0 auto 2.4rem;line-height:1.78}
.cta-btns{display:flex;gap:.85rem;justify-content:center;flex-wrap:wrap}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:6rem;margin-top:3.5rem;align-items:start}
.contact-h{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:300;color:#F0EAD6;margin-bottom:.75rem;font-style:italic}
.contact-p{font-size:.84rem;color:rgba(240,234,214,.4);line-height:1.78;margin-bottom:2rem}
.soc-link{display:flex;align-items:center;gap:.9rem;padding:.85rem 1rem;border:1px solid rgba(201,168,76,.1);text-decoration:none;color:#F0EAD6;transition:all .25s;margin-bottom:.65rem}
.soc-link:hover{border-color:rgba(201,168,76,.28);background:rgba(201,168,76,.04)}
.soc-icon{width:32px;height:32px;background:rgba(201,168,76,.06);border:1px solid rgba(201,168,76,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.soc-icon svg{width:13px;height:13px;fill:#C9A84C}
.soc-name{font-size:.8rem;font-weight:500;color:#F0EAD6}
.soc-handle{font-family:'DM Mono',monospace;font-size:.58rem;color:rgba(240,234,214,.35)}
.f-label{display:block;font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,234,214,.3);margin-bottom:.3rem;margin-top:.85rem}
.f-input,.f-area{width:100%;padding:.78rem .95rem;background:#0F0E0C;border:1px solid rgba(201,168,76,.12);color:#F0EAD6;font-family:'Inter',sans-serif;font-size:.84rem;outline:none;transition:border-color .25s;resize:none}
.f-input::placeholder,.f-area::placeholder{color:rgba(240,234,214,.2)}
.f-input:focus,.f-area:focus{border-color:rgba(201,168,76,.35)}
.f-area{height:120px}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:.85rem}

/* FOOTER */
footer{background:#080806;border-top:1px solid rgba(201,168,76,.1)}
.foot-main{padding:3rem 8%;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:3rem}
.foot-brand{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:300;color:#F0EAD6;margin-bottom:.4rem}
.foot-brand em{font-style:italic;color:#C9A84C}
.foot-tag{font-size:.73rem;color:rgba(240,234,214,.28);line-height:1.7;max-width:230px;margin-top:.3rem}
.foot-col-h{font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(201,168,76,.5);margin-bottom:.9rem}
.foot-link{display:block;font-size:.76rem;color:rgba(240,234,214,.3);text-decoration:none;margin-bottom:.45rem;transition:color .2s;cursor:pointer;background:none;border:none;padding:0;text-align:left;font-family:'Inter',sans-serif}
.foot-link:hover{color:#C9A84C}
.foot-bot{padding:1rem 8%;border-top:1px solid rgba(201,168,76,.06);display:flex;justify-content:space-between;align-items:center}
.foot-copy{font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.08em;color:rgba(240,234,214,.22)}
.foot-research{font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.1em;color:rgba(201,168,76,.45)}

/* ADMIN */
.admin-fab{position:fixed;bottom:2rem;right:2rem;z-index:998;width:44px;height:44px;background:#0F0E0C;border:1px solid rgba(201,168,76,.3);cursor:pointer;display:flex;align-items:center;justify-content:center;color:rgba(201,168,76,.7);font-size:1rem;transition:all .25s;box-shadow:0 4px 18px rgba(0,0,0,.4)}
.admin-fab:hover{background:#C9A84C;color:#0C0B09;border-color:#C9A84C}
.admin-overlay{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:1000;display:flex}
/* password screen */
.pw-screen{position:fixed;inset:0;background:rgba(8,8,6,.97);z-index:1100;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1.5rem}
.pw-title{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:#F0EAD6;font-style:italic}
.pw-sub{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(201,168,76,.5)}
.pw-input{padding:.65rem 1rem;background:#0F0E0C;border:1px solid rgba(201,168,76,.25);color:#F0EAD6;font-family:'DM Mono',monospace;font-size:.9rem;letter-spacing:.1em;outline:none;width:260px;text-align:center;transition:border-color .25s}
.pw-input:focus{border-color:rgba(201,168,76,.5)}
.pw-btn{padding:.55rem 1.8rem;background:#C9A84C;color:#0C0B09;font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;border:none;cursor:pointer;font-weight:500;transition:all .25s}
.pw-btn:hover{background:#E2C97A}
.pw-err{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;color:rgba(239,68,68,.7)}
.pw-cancel{background:none;border:none;font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,234,214,.3);cursor:pointer;transition:color .2s}
.pw-cancel:hover{color:rgba(240,234,214,.7)}
/* panel */
.admin-panel{background:#0F0E0C;width:560px;max-width:95vw;height:100vh;overflow-y:auto;margin-left:auto;border-left:1px solid rgba(201,168,76,.15);display:flex;flex-direction:column}
.adm-head{padding:1.2rem 1.5rem;background:#080806;border-bottom:1px solid rgba(201,168,76,.12);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10}
.adm-head-title{font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:#F0EAD6;font-style:italic}
.adm-close{background:none;border:none;color:rgba(240,234,214,.35);font-size:1.2rem;cursor:pointer;transition:color .2s}
.adm-close:hover{color:#F0EAD6}
.adm-tabs{display:flex;flex-wrap:wrap;background:#080806;border-bottom:1px solid rgba(201,168,76,.1);position:sticky;top:56px;z-index:9}
.a-tab{padding:.5rem .8rem;font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.1em;text-transform:uppercase;border:none;background:none;cursor:pointer;color:rgba(240,234,214,.3);border-bottom:1px solid transparent;transition:all .2s}
.a-tab.on{color:#C9A84C;border-bottom-color:#C9A84C;background:#0F0E0C}
.adm-body{padding:1.4rem 1.5rem;flex:1}
.a-sec{font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(201,168,76,.45);margin:1.2rem 0 .75rem;padding-bottom:.35rem;border-bottom:1px solid rgba(201,168,76,.1)}
.a-field{margin-bottom:.8rem}
.a-label{display:block;font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(240,234,214,.3);margin-bottom:.28rem}
.a-input,.a-area{width:100%;padding:.52rem .7rem;border:1px solid rgba(201,168,76,.12);background:#161410;font-family:'Inter',sans-serif;font-size:.82rem;color:#F0EAD6;outline:none;transition:border-color .2s}
.a-input:focus,.a-area:focus{border-color:rgba(201,168,76,.35)}
.a-area{resize:vertical;min-height:68px;line-height:1.6}
.a-item{display:flex;gap:.5rem;align-items:flex-start;margin-bottom:.6rem;padding:.7rem;background:#161410;border:1px solid rgba(201,168,76,.1)}
.a-item-fields{flex:1;display:flex;flex-direction:column;gap:.35rem}
.a-del{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.18);color:rgba(239,68,68,.7);width:22px;height:22px;flex-shrink:0;cursor:pointer;font-size:.75rem;display:flex;align-items:center;justify-content:center;transition:all .2s}
.a-del:hover{background:rgba(239,68,68,.18)}
.a-add{padding:.42rem 1rem;background:rgba(201,168,76,.06);border:1px dashed rgba(201,168,76,.22);color:rgba(201,168,76,.7);font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.1em;cursor:pointer;width:100%;margin-top:.4rem;transition:all .2s}
.a-add:hover{background:rgba(201,168,76,.1)}
.adm-save{position:sticky;bottom:0;width:100%;padding:1rem;background:#C9A84C;color:#0C0B09;border:none;font-family:'DM Mono',monospace;font-size:.66rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:background .25s}
.adm-save:hover{background:#E2C97A}
.toast{position:fixed;bottom:5rem;right:2rem;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);color:rgba(34,197,94,.85);padding:.5rem 1.2rem;font-family:'DM Mono',monospace;font-size:.64rem;letter-spacing:.1em;z-index:1200;animation:fadeUp .3s ease}

/* LIGHTBOX */
.lb{position:fixed;inset:0;background:rgba(0,0,0,.95);z-index:2000;display:flex;align-items:center;justify-content:center;padding:2rem;cursor:pointer;animation:fadeIn .25s ease}
.lb-inner{position:relative;max-width:900px;width:100%;cursor:default}
.lb-img{width:100%;max-height:82vh;object-fit:contain;display:block}
.lb-close{position:absolute;top:-2.8rem;right:0;background:none;border:none;color:rgba(240,234,214,.45);font-size:1.6rem;cursor:pointer;line-height:1;transition:color .2s}
.lb-close:hover{color:#F0EAD6}

/* RESPONSIVE */
@media(max-width:1100px){
  .hero-inner{padding:0 5%}
  .about-grid{grid-template-columns:1fr;gap:3.5rem}
  .foot-main{grid-template-columns:1fr 1fr}
  .stats-row{grid-template-columns:repeat(2,1fr)}
  .stat-box:nth-child(2){border-right:none}
  .stat-box:nth-child(3){border-right:1px solid rgba(201,168,76,.08);border-top:1px solid rgba(201,168,76,.08)}
  .stat-box:nth-child(4){border-top:1px solid rgba(201,168,76,.08)}
  .creds-grid{grid-template-columns:repeat(2,1fr)}
  .testi-grid{grid-template-columns:1fr 1fr}
  .contact-grid{grid-template-columns:1fr;gap:3rem}
}
@media(max-width:768px){
  .nav-links{display:none}
  .nav-ham{display:flex}
  .hero{height:100svh}
  .hero-overlay{background:linear-gradient(to bottom,rgba(8,8,6,.7) 0%,rgba(8,8,6,.82) 100%)}
  .hero-stats{grid-template-columns:repeat(2,1fr)}
  .hero-stat:nth-child(2){border-right:none}
  .hero-stat:nth-child(3){border-right:1px solid rgba(201,168,76,.08);border-top:1px solid rgba(201,168,76,.08)}
  .hero-stat:nth-child(4){border-top:1px solid rgba(201,168,76,.08)}
  .port-grid{grid-template-columns:1fr}
  .testi-grid{grid-template-columns:1fr}
  .creds-grid{grid-template-columns:1fr}
  .sc-metrics{grid-template-columns:1fr}
  .foot-main{grid-template-columns:1fr}
  .foot-bot{flex-direction:column;gap:.5rem;text-align:center}
  .f-row{grid-template-columns:1fr}
  .quote-body{padding:2rem 1.8rem}
  .avail-strip{flex-direction:column;align-items:flex-start;gap:.75rem}
  .sec{padding:70px 5%}
  .sec-alt{padding:70px 5%}
  .sec-dark{padding:70px 5%}
  .cta-band{padding:70px 5%}
}
@media(max-width:480px){
  .hero-name{font-size:clamp(3rem,12vw,4.5rem)}
  .sc-flow{gap:.5rem}
  .sc-arrow{display:none}
  .stats-row{grid-template-columns:repeat(2,1fr)}
}
`;


/* ── HOOKS & COMPONENTS ── */
function useReveal(){
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add("on");obs.unobserve(el);}},{threshold:.08});
    obs.observe(el); return()=>obs.disconnect();
  },[]);
  return ref;
}
function Rev({children,dir="",delay=0,style={}}){
  const ref=useReveal();
  const cls=dir==="l"?"reveal-l":dir==="r"?"reveal-r":"reveal";
  return <div ref={ref} className={cls} style={{transitionDelay:`${delay}s`,...style}}>{children}</div>;
}
function Counter({target,suffix=""}){
  const [v,setV]=useState(0); const ref=useRef(null); const done=useRef(false);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const n=parseInt(target);
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!done.current&&!isNaN(n)){
        done.current=true; let c=0;
        const t=setInterval(()=>{c=Math.min(c+n/50,n);setV(Math.floor(c));if(c>=n)clearInterval(t);},1400/50);
      }
    },{threshold:.5});
    obs.observe(el); return()=>obs.disconnect();
  },[target]);
  const isN=!isNaN(parseInt(target));
  return <span ref={ref}>{isN?v+(v>=parseInt(target)?suffix:""):target}</span>;
}
function Quotes({quotes}){
  const [i,setI]=useState(0); const [k,setK]=useState(0);
  const go=useCallback((n)=>{setI(n);setK(x=>x+1);},[]);
  useEffect(()=>{const t=setInterval(()=>go((i+1)%quotes.length),8000);return()=>clearInterval(t);},[i,quotes.length,go]);
  if(!quotes.length) return null;
  const q=quotes[i];
  return(
    <section className="sec-dark" id="quotes">
      <Rev>
        <div className="eyebrow" style={{justifyContent:"center"}}>Perspective</div>
        <h2 className="sec-title" style={{textAlign:"center"}}>Words Worth <em>Keeping</em></h2>
        <div className="quote-stage">
          <div className="quote-body" key={k}>
            <div className="quote-mark">"</div>
            <div className="quote-text" style={{animation:"qfade .45s ease both"}}>{q.text}</div>
            <div className="quote-auth">— {q.author}</div>
          </div>
          <div className="quote-ctrl">
            <button className="q-btn" onClick={()=>go((i-1+quotes.length)%quotes.length)}>←</button>
            {quotes.map((_,x)=><div key={x} className={`q-dot${x===i?" on":""}`} onClick={()=>go(x)}/>)}
            <button className="q-btn" onClick={()=>go((i+1)%quotes.length)}>→</button>
          </div>
        </div>
      </Rev>
    </section>
  );
}

/* PASSWORD-PROTECTED ADMIN */
const TABS=["Profile","About","SC Flow","Credentials","Portfolio","Journey","Testimonials","Quotes"];
function PwScreen({onAuth,onCancel}){
  const [pw,setPw]=useState(""); const [err,setErr]=useState(false);
  const check=()=>{if(pw===ADMIN_PASSWORD){onAuth();}else{setErr(true);setPw("");setTimeout(()=>setErr(false),2000);}};
  return(
    <div className="pw-screen">
      <div className="pw-title">Admin Access</div>
      <div className="pw-sub">Enter password to edit content</div>
      <input className="pw-input" type="password" placeholder="••••••••••••" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&check()} autoFocus />
      {err&&<div className="pw-err">Incorrect password</div>}
      <button className="pw-btn" onClick={check}>Unlock</button>
      <button className="pw-cancel" onClick={onCancel}>Cancel</button>
    </div>
  );
}
function Admin({data,onSave,onClose}){
  const [d,setD]=useState(JSON.parse(JSON.stringify(data)));
  const [tab,setTab]=useState("Profile");
  const [saved,setSaved]=useState(false);
  const save=()=>{onSave(d);setSaved(true);setTimeout(()=>setSaved(false),2200);};
  const sp=(path,val)=>setD(prev=>{const n=JSON.parse(JSON.stringify(prev));const keys=path.split(".");let o=n;for(let i=0;i<keys.length-1;i++)o=o[keys[i]];o[keys[keys.length-1]]=val;return n;});
  const F=({label,path,area,rows=3})=>{
    const val=path.split(".").reduce((o,k)=>o?.[k],d)??"";
    return(<div className="a-field"><label className="a-label">{label}</label>{area?<textarea className="a-area" style={{minHeight:rows*22+16}} value={val} onChange={e=>sp(path,e.target.value)}/>:<input className="a-input" value={val} onChange={e=>sp(path,e.target.value)}/>}</div>);
  };
  const add=(path,tpl)=>setD(prev=>{const n=JSON.parse(JSON.stringify(prev));const keys=path.split(".");let o=n;for(let i=0;i<keys.length-1;i++)o=o[keys[i]];o[keys[keys.length-1]]=[...(o[keys[keys.length-1]]||[]),tpl];return n;});
  const del=(path,idx)=>setD(prev=>{const n=JSON.parse(JSON.stringify(prev));const keys=path.split(".");let o=n;for(let i=0;i<keys.length-1;i++)o=o[keys[i]];o[keys[keys.length-1]]=o[keys[keys.length-1]].filter((_,i)=>i!==idx);return n;});
  const sli=(path,idx,field,val)=>setD(prev=>{const n=JSON.parse(JSON.stringify(prev));const keys=path.split(".");let o=n;for(let i=0;i<keys.length-1;i++)o=o[keys[i]];o[keys[keys.length-1]][idx][field]=val;return n;});

  const body=()=>{switch(tab){
    case "Profile": return(<><div className="a-sec">Identity</div><F label="Name" path="profile.name"/><F label="Title" path="profile.title"/><F label="Hero Headline" path="profile.headline"/><F label="Tagline" path="profile.tagline"/><F label="Subheading" path="profile.subheading" area/><F label="Open To" path="profile.openTo"/><div className="a-sec">Contact</div><F label="Email" path="profile.email"/><F label="LinkedIn URL" path="profile.linkedin"/><F label="Twitter" path="profile.twitter"/><F label="Location" path="profile.location"/><F label="Resume URL" path="profile.cvUrl"/><F label="Photo URL (e.g. /photo.jpg)" path="profile.photo"/></>);
    case "About": return(<><div className="a-sec">Bio</div><F label="Biography" path="about.bio" area rows={7}/><F label="Mission Statement" path="about.mission" area rows={3}/><div className="a-sec">Values</div>{d.values.map((v,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-input" placeholder="Title" value={v.title} onChange={e=>sli("values",i,"title",e.target.value)}/><textarea className="a-area" placeholder="Desc" value={v.desc} onChange={e=>sli("values",i,"desc",e.target.value)} style={{minHeight:48}}/></div><button className="a-del" onClick={()=>del("values",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("values",{title:"Value",desc:"Description"})}>+ Add Value</button></>);
    case "SC Flow": return(<><div className="a-sec">Supply Chain Flow Nodes</div>{d.scNodes.map((n,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-input" placeholder="Icon emoji" value={n.icon} onChange={e=>sli("scNodes",i,"icon",e.target.value)}/><input className="a-input" placeholder="Label (use \n for line break)" value={n.label} onChange={e=>sli("scNodes",i,"label",e.target.value)}/></div><button className="a-del" onClick={()=>del("scNodes",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("scNodes",{icon:"📦",label:"New Node"})}>+ Add Node</button></>);
    case "Credentials": return(<><div className="a-sec">Credential Cards</div>{d.credentials.map((c,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-input" placeholder="Badge" value={c.badge} onChange={e=>sli("credentials",i,"badge",e.target.value)}/><input className="a-input" placeholder="Short name" value={c.short} onChange={e=>sli("credentials",i,"short",e.target.value)}/><input className="a-input" placeholder="Full institution" value={c.inst} onChange={e=>sli("credentials",i,"inst",e.target.value)}/><input className="a-input" placeholder="Programme name" value={c.name} onChange={e=>sli("credentials",i,"name",e.target.value)}/><textarea className="a-area" placeholder="Detail" value={c.detail} onChange={e=>sli("credentials",i,"detail",e.target.value)} style={{minHeight:44}}/><input className="a-input" placeholder="Period (optional)" value={c.period} onChange={e=>sli("credentials",i,"period",e.target.value)}/><input className="a-input" placeholder="Logo URL (optional)" value={c.logo} onChange={e=>sli("credentials",i,"logo",e.target.value)}/></div><button className="a-del" onClick={()=>del("credentials",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("credentials",{badge:"NEW",inst:"",short:"",name:"",detail:"",period:"",logo:"",modules:[]})}>+ Add Credential</button></>);
    case "Portfolio": return(<><div className="a-sec">Case Studies</div>{d.projects.map((p,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-input" placeholder="Tag" value={p.tag} onChange={e=>sli("projects",i,"tag",e.target.value)}/><input className="a-input" placeholder="Title" value={p.title} onChange={e=>sli("projects",i,"title",e.target.value)}/><textarea className="a-area" value={p.desc} onChange={e=>sli("projects",i,"desc",e.target.value)}/>{p.impacts.map((imp,j)=>(<div key={j} style={{display:"flex",gap:".4rem"}}><input className="a-input" placeholder="Stat" value={imp.num} onChange={e=>{const n=JSON.parse(JSON.stringify(d));n.projects[i].impacts[j].num=e.target.value;setD(n);}} style={{width:"42%"}}/><input className="a-input" placeholder="Label" value={imp.desc} onChange={e=>{const n=JSON.parse(JSON.stringify(d));n.projects[i].impacts[j].desc=e.target.value;setD(n);}}/></div>))}</div><button className="a-del" onClick={()=>del("projects",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("projects",{tag:"New",title:"Case Study",desc:"Description",impacts:[{num:"X%↑",desc:"Result"},{num:"Y%↓",desc:"Result"}]})}>+ Add Case Study</button></>);
    case "Journey": return(<><div className="a-sec">Career Timeline</div>{d.journey.map((j,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-input" placeholder="Period" value={j.period} onChange={e=>sli("journey",i,"period",e.target.value)}/><input className="a-input" placeholder="Role" value={j.role} onChange={e=>sli("journey",i,"role",e.target.value)}/><input className="a-input" placeholder="Organisation" value={j.org} onChange={e=>sli("journey",i,"org",e.target.value)}/><textarea className="a-area" value={j.desc} onChange={e=>sli("journey",i,"desc",e.target.value)}/></div><button className="a-del" onClick={()=>del("journey",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("journey",{period:"Year–Year",role:"Role",org:"Org",desc:"Description"})}>+ Add Position</button></>);
    case "Testimonials": return(<><div className="a-sec">Testimonials</div>{d.testimonials.map((t,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><textarea className="a-area" value={t.text} onChange={e=>sli("testimonials",i,"text",e.target.value)} style={{minHeight:68}}/><input className="a-input" placeholder="Name" value={t.name} onChange={e=>sli("testimonials",i,"name",e.target.value)}/><input className="a-input" placeholder="Role" value={t.role} onChange={e=>sli("testimonials",i,"role",e.target.value)}/></div><button className="a-del" onClick={()=>del("testimonials",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("testimonials",{text:"Testimonial.",name:"Name",role:"Role"})}>+ Add</button></>);
    case "Quotes": return(<><div className="a-sec">Quotes</div>{d.quotes.map((q,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><textarea className="a-area" value={q.text} onChange={e=>sli("quotes",i,"text",e.target.value)} style={{minHeight:64}}/><input className="a-input" placeholder="Author" value={q.author} onChange={e=>sli("quotes",i,"author",e.target.value)}/></div><button className="a-del" onClick={()=>del("quotes",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("quotes",{text:"Quote.",author:"Rajendra Royal"})}>+ Add Quote</button></>);
    default:return null;
  }};
  return(<div className="admin-overlay" onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="admin-panel"><div className="adm-head"><div className="adm-head-title">Edit Content</div><button className="adm-close" onClick={onClose}>✕</button></div><div className="adm-tabs">{TABS.map(t=><button key={t} className={`a-tab${tab===t?" on":""}`} onClick={()=>setTab(t)}>{t}</button>)}</div><div className="adm-body">{body()}</div><button className="adm-save" onClick={save}>Save All Changes</button></div>{saved&&<div className="toast">Changes saved ✓</div>}</div>);
}

const LiIcon=()=><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const EmIcon=()=><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;


export default function App(){
  const [data,setData]=useState(()=>{try{const s=localStorage.getItem("rr_v5");return s?JSON.parse(s):DEFAULT_DATA;}catch{return DEFAULT_DATA;}});
  const [adminOpen,setAdminOpen]=useState(false);
  const [pwOpen,setPwOpen]=useState(false);
  const [authed,setAuthed]=useState(false);
  const [navSolid,setNavSolid]=useState(false);
  const [mobOpen,setMobOpen]=useState(false);
  const [scroll,setScroll]=useState(0);
  const [expandedCred,setExpandedCred]=useState(null);


  const saveData=(d)=>{setData(d);try{localStorage.setItem("rr_v5",JSON.stringify(d));}catch{}};

  useEffect(()=>{
    const fn=()=>{
      const pct=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100;
      setScroll(pct);
      setNavSolid(window.scrollY>60);
    };
    window.addEventListener("scroll",fn,{passive:true});
    return()=>window.removeEventListener("scroll",fn);
  },[]);

  const scrollTo=id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  const openAdmin=()=>{if(authed){setAdminOpen(true);}else{setPwOpen(true);}};
  const onAuth=()=>{setAuthed(true);setPwOpen(false);setAdminOpen(true);};

  const navLinks=[["#about","About"],["#supply-chain","Supply Chain"],["#credentials","Credentials"],["#portfolio","Portfolio"],["#journey","Career"],["#testimonials","Voice"],["#contact","Contact"]];

  return(
    <>
      <style>{css}</style>
      <div className="page">

        {/* SCROLL PROGRESS */}
        <div className="scroll-bar" style={{width:`${scroll}%`}}/>

        {/* TICKER */}
        <div className="ticker">
          <div className="ticker-tr">
            {[...data.ticker,...data.ticker].map((t,i)=>(
              <span key={i} className="ticker-it">{t}<span style={{color:"rgba(201,168,76,.2)",margin:"0 .5rem"}}>◆</span></span>
            ))}
          </div>
        </div>

        {/* NAV */}
        <nav className={`nav${navSolid?" solid":""}`}>
          <button className="nav-brand" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
            <span className="nav-brand-name">Rajendra <em>Royal</em></span>
            <span className="nav-brand-sub">{data.profile.subtitle}</span>
          </button>
          <ul className="nav-links">
            {navLinks.map(([h,l])=><li key={h}><a href={h}>{l}</a></li>)}
          </ul>
          <div className="nav-r">
            <button className="nav-cta" onClick={()=>window.open(data.profile.cvUrl,"_blank","noopener,noreferrer")}>Download Resume</button>
            <button className="nav-ham" onClick={()=>setMobOpen(true)} aria-label="Menu">
              <span/><span/><span/>
            </button>
          </div>
        </nav>

        {/* MOBILE NAV */}
        <div className={`mob-nav${mobOpen?" open":""}`}>
          <button className="mob-close" onClick={()=>setMobOpen(false)}>✕</button>
          {navLinks.map(([h,l])=>(
            <a key={h} href={h} onClick={()=>setMobOpen(false)}>{l}</a>
          ))}
          <button className="btn-gold" style={{marginTop:"1rem"}} onClick={()=>{setMobOpen(false);scrollTo("contact");}}>Get In Touch</button>
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg"/>
          {data.profile.photo&&<img src={data.profile.photo} alt={data.profile.name} className="hero-photo"/>}
          <div className="hero-grid-lines"/>
          <div className="hero-overlay"/>
          <div className="hero-inner">
            <div className="hero-eyebrow">{data.profile.title}</div>
            <div className="hero-avail">
              <span className="hero-avail-dot"/>
              {data.profile.openTo}
            </div>
            <h1 className="hero-name">
              {data.profile.name.split(" ")[0]}
              <em>{data.profile.name.split(" ").slice(1).join(" ")}</em>
            </h1>
            <div className="hero-line"/>
            <p className="hero-tagline">{data.profile.headline}</p>
            <p className="hero-sub">{data.profile.tagline}</p>
            <div className="hero-creds">
              {["IIM Calcutta","IIT Delhi","Dual MBA","Six Sigma","SSBM Geneva · Doctoral"].map(c=>(
                <span key={c} className="hero-cred">{c}</span>
              ))}
            </div>
            <div className="hero-btns">
              <button className="btn-gold" onClick={()=>scrollTo("contact")}>Get In Touch</button>
              <button className="btn-outline" onClick={()=>scrollTo("portfolio")}>View Portfolio</button>
              <button className="btn-outline" onClick={()=>window.open(data.profile.cvUrl,"_blank","noopener,noreferrer")}>Download Resume</button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-n"><Counter target="20" suffix="+"/></div><div className="hero-stat-l">Years Exp.</div></div>
            <div className="hero-stat"><div className="hero-stat-n"><Counter target="6"/></div><div className="hero-stat-l">Credentials</div></div>
            <div className="hero-stat"><div className="hero-stat-n"><Counter target="12" suffix="+"/></div><div className="hero-stat-l">Domains</div></div>
            <div className="hero-stat"><div className="hero-stat-n">Dr.</div><div className="hero-stat-l">Researcher</div></div>
          </div>
        </section>

        {/* AVAIL STRIP */}
        <div className="avail-strip">
          <span className="avail-dot"/>
          <span className="avail-label">Currently Available</span>
          <div className="avail-div"/>
          <div className="avail-tags">
            {["VP / Director Supply Chain","Head of Operations","CXO & Board Advisory","Consulting","Speaking & Research"].map(t=>(
              <span key={t} className="avail-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="sec" id="about">
          <div style={{display:"grid",gridTemplateColumns:"360px 1fr",gap:"6rem",alignItems:"start"}} className="about-grid">
            <Rev dir="l">
              <div className="portrait-wrap">
                <div className="portrait">
                  <div className="p-corner tl"/><div className="p-corner br"/>
                  {data.profile.photo
                    ?<img src={data.profile.photo} alt={data.profile.name}/>
                    :<div className="portrait-init">RR</div>
                  }
                  <div className="portrait-ov">
                    <div className="portrait-name">{data.profile.name}</div>
                    <div className="portrait-role">{data.profile.title}</div>
                  </div>
                </div>
                <div className="about-facts">
                  {[data.profile.location,"Doctoral Researcher · SSBM Geneva","IIM Calcutta · IIT Delhi Alumni","20+ Years SC & Operations","Speaker · Consultant · Researcher"].map((f,i)=>(
                    <div key={i} className="about-fact">{f}</div>
                  ))}
                </div>
              </div>
            </Rev>
            <Rev dir="r">
              <div>
                <div className="eyebrow">About</div>
                <h2 className="sec-title">Experienced.<br/><em>Credentialed.</em><br/><strong style={{fontWeight:600}}>Results-Driven.</strong></h2>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.05rem",fontWeight:300,color:"rgba(240,234,214,.72)",lineHeight:1.9,marginBottom:"1.5rem",whiteSpace:"pre-line"}}>{data.about.bio}</div>
                <div className="mission-box">
                  <div className="mission-label">Mission</div>
                  <div className="mission-text">"{data.about.mission}"</div>
                </div>
                <div className="values-list">
                  {data.values.map((v,i)=>(
                    <div key={i} className="val-item">
                      <div className="val-num">0{i+1}</div>
                      <div><div className="val-title">{v.title}</div><div className="val-desc">{v.desc}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </Rev>
          </div>
        </section>

        {/* STATS */}
        <div className="stats-row">
          {[{t:"20",s:"+",l:"Years\nExperience"},{t:"6",s:"",l:"Academic\nCredentials"},{t:"12",s:"+",l:"Core\nDomains"},{t:"2",s:"×",l:"MBA\nDegrees"}].map((c,i)=>(
            <div key={i} className="stat-box">
              <div className="stat-n"><Counter target={c.t} suffix={c.s}/></div>
              <div className="stat-l" style={{whiteSpace:"pre-line"}}>{c.l}</div>
            </div>
          ))}
        </div>

        {/* SUPPLY CHAIN INFOGRAPHIC */}
        <section className="sec-dark" id="supply-chain">
          <Rev>
            <div className="eyebrow">Supply Chain Mastery</div>
            <h2 className="sec-title">The <em>Complete</em> Supply Chain</h2>
            <p className="sec-sub">End-to-end expertise across every node of the value chain — from procurement to analytics excellence.</p>
            <div className="sc-flow">
              {data.scNodes.map((node,i)=>(
                <React.Fragment key={i}>
                  <div className="sc-node">
                    <div className="sc-icon-box">{node.icon}</div>
                    <div className="sc-label">{node.label}</div>
                  </div>
                  {i<data.scNodes.length-1&&(
                    <div className="sc-arrow">
                      <svg viewBox="0 0 30 14" fill="none"><path d="M0 7h26M20 1l6 6-6 6" stroke="#C9A84C" strokeWidth="1.2"/></svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="sc-metrics">
              {data.projects.slice(0,3).map((p,i)=>(
                <div key={i} className="sc-metric">
                  <div className="sc-mn">{p.impacts[0].num}</div>
                  <div className="sc-mt">{p.title}</div>
                  <div className="sc-md">{p.desc.slice(0,90)}...</div>
                </div>
              ))}
            </div>
          </Rev>
        </section>

        {/* CREDENTIALS */}
        <section className="sec-alt" id="credentials">
          <Rev>
            <div className="eyebrow">Qualifications</div>
            <h2 className="sec-title">Academic & Professional <em>Credentials</em></h2>
            <p className="sec-sub">Perception. Consistency. Credibility. Trust.</p>
            <div className="creds-grid">
              {data.credentials.map((c,i)=>(
                <div key={i} className="cred-card" onClick={()=>setExpandedCred(expandedCred===i?null:i)}>
                  <div className="cred-logo">
                    {c.logo
                      ?<img src={c.logo} alt={c.short} onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="block";}}/>
                      :null
                    }
                    <div className="cred-logo-fb" style={{display:c.logo?"none":"block"}}>{c.badge}</div>
                  </div>
                  <div className="cred-badge-line">{c.short}</div>
                  <div className="cred-name">{c.name}</div>
                  <div className="cred-detail">{c.detail}</div>
                  {c.period&&<div className={`cred-pill${c.badge==="Dr."?" active":""}`}>{c.badge==="Dr."?"🔬 ":""}{c.period}</div>}
                  {c.modules&&c.modules.length>0&&(
                    <div className={`cred-modules${expandedCred===i?" open":""}`}>
                      <div className="cred-mod-label">Programme Modules</div>
                      <div className="cred-mod-list">
                        {c.modules.map((m,j)=>(
                          <div key={j} className="cred-mod-item">
                            <span className="cred-mod-n">{String(j+1).padStart(2,"0")}</span>
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {c.modules&&c.modules.length>0&&(
                    <div style={{marginTop:".75rem",fontFamily:"'DM Mono',monospace",fontSize:".5rem",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(201,168,76,.4)"}}>
                      {expandedCred===i?"▲ Hide modules":"▼ View modules"}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Rev>
        </section>

        {/* PORTFOLIO */}
        <section className="sec-dark" id="portfolio">
          <Rev>
            <div className="eyebrow">Portfolio</div>
            <h2 className="sec-title">Work That <em>Speaks</em></h2>
            <p className="sec-sub">Four case studies demonstrating the breadth and depth of operational impact over 20+ years.</p>
            <div className="port-grid">
              {data.projects.map((p,i)=>(
                <div key={i} className="port-card">
                  <span className="port-tag">{p.tag}</span>
                  <div className="port-title">{p.title}</div>
                  <div className="port-desc">{p.desc}</div>
                  <div className="port-metrics">
                    {p.impacts.map((imp,j)=>(
                      <div key={j}><div className="pm-n">{imp.num}</div><div className="pm-l">{imp.desc}</div></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Rev>
        </section>

        {/* JOURNEY */}
        <section className="sec" id="journey">
          <Rev>
            <div className="eyebrow">Career</div>
            <h2 className="sec-title">20+ Years of <em>Progression</em></h2>
            <div className="journey-wrap">
              {data.journey.map((j,i)=>(
                <div key={i} className="j-item">
                  <div className="j-period">{j.period}</div>
                  <div className="j-role">{j.role}</div>
                  <div className="j-org">{j.org}</div>
                  <div className="j-desc">{j.desc}</div>
                </div>
              ))}
            </div>
          </Rev>
        </section>

        {/* CTA BAND */}
        <div className="cta-band">
          <Rev>
            <div className="cta-tag"><span className="cta-tag-dot"/>Currently Available</div>
            <h2 className="cta-title">Open to <em>Senior Leadership</em><br/>&amp; Consulting Roles</h2>
            <p className="cta-sub">VP, Director, or CXO of Supply Chain / Operations. Open to consulting, board advisory, and speaking engagements. Let's have a conversation.</p>
            <div className="cta-btns">
              <button className="btn-gold" onClick={()=>scrollTo("contact")}>Get In Touch</button>
              <button className="btn-outline" onClick={()=>scrollTo("portfolio")}>View Portfolio</button>
              <button className="btn-outline" onClick={()=>window.open(data.profile.cvUrl,"_blank","noopener,noreferrer")}>Download Resume</button>
            </div>
          </Rev>
        </div>

        {/* TESTIMONIALS */}
        <section className="sec-alt" id="testimonials">
          <Rev>
            <div className="eyebrow">Testimonials</div>
            <h2 className="sec-title">What <em>Colleagues Say</em></h2>
            <div className="testi-grid">
              {data.testimonials.map((t,i)=>(
                <div key={i} className="testi-card">
                  <div className="testi-q">"</div>
                  <div className="testi-text">{t.text}</div>
                  <div className="testi-author">
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop:"1.5rem",padding:"1rem 1.4rem",border:"1px solid rgba(201,168,76,.12)",display:"flex",alignItems:"center",gap:"1rem"}}>
              <span style={{opacity:.4,flexShrink:0}}>🔗</span>
              <div><div style={{fontSize:".78rem",fontWeight:500,color:"#F0EAD6",marginBottom:".12rem"}}>More recommendations on LinkedIn</div><div style={{fontSize:".7rem",color:"rgba(240,234,214,.3)"}}>Connect to read full endorsements from colleagues and stakeholders.</div></div>
              <a href={`https://${data.profile.linkedin}`} target="_blank" rel="noreferrer" style={{marginLeft:"auto",flexShrink:0,padding:".36rem .95rem",border:"1px solid rgba(201,168,76,.22)",fontFamily:"'DM Mono',monospace",fontSize:".56rem",letterSpacing:".1em",textTransform:"uppercase",color:"rgba(201,168,76,.7)",textDecoration:"none",transition:"all .25s",whiteSpace:"nowrap"}} onMouseEnter={e=>{e.currentTarget.style.background="#C9A84C";e.currentTarget.style.color="#0C0B09";}} onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="rgba(201,168,76,.7)";}}>View LinkedIn</a>
            </div>
          </Rev>
        </section>

        {/* QUOTES */}
        <Quotes quotes={data.quotes}/>

        {/* CONTACT */}
        <section className="sec-dark" id="contact">
          <Rev>
            <div className="eyebrow">Contact</div>
            <h2 className="sec-title">Let's <em>Talk</em></h2>
            <div className="contact-grid">
              <div>
                <div className="contact-h">Open to Senior Leadership &amp; Consulting</div>
                <p className="contact-p">Whether you're looking for a VP / Director of Supply Chain, a transformation consultant, or a keynote speaker — I'd welcome the conversation.</p>
                <a href={`https://${data.profile.linkedin}`} target="_blank" rel="noreferrer" className="soc-link"><div className="soc-icon"><LiIcon/></div><div><div className="soc-name">LinkedIn</div><div className="soc-handle">{data.profile.linkedin}</div></div></a>
                <a href={`mailto:${data.profile.email}`} className="soc-link"><div className="soc-icon"><EmIcon/></div><div><div className="soc-name">Email</div><div className="soc-handle">{data.profile.email}</div></div></a>
              </div>
              <div>
                <div className="f-row">
                  <div><label className="f-label">Name</label><input type="text" className="f-input" placeholder="Your full name"/></div>
                  <div><label className="f-label">Email</label><input type="email" className="f-input" placeholder="your@email.com"/></div>
                </div>
                <label className="f-label">Organisation / Role</label>
                <input type="text" className="f-input" placeholder="Company and your position"/>
                <label className="f-label">How can I help?</label>
                <textarea className="f-area" placeholder="A role, consulting engagement, speaking invitation, or something else."/>
                <button className="btn-gold" style={{marginTop:"1rem"}}>Send Message</button>
              </div>
            </div>
          </Rev>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="foot-main">
            <div>
              <div className="foot-brand">Rajendra <em>Royal</em></div>
              <div className="foot-tag">{data.profile.title} · Doctoral Researcher · Speaker · Consultant</div>
            </div>
            <div>
              <div className="foot-col-h">Navigate</div>
              {[["#about","About"],["#supply-chain","Supply Chain"],["#credentials","Credentials"],["#portfolio","Portfolio"],["#journey","Career"],["#contact","Contact"]].map(([h,l])=>(
                <a key={h} href={h} className="foot-link">{l}</a>
              ))}
            </div>
            <div>
              <div className="foot-col-h">Credentials</div>
              {["IIM Calcutta EPOM","IIT Delhi SC Analytics","MBA Strategy & Leadership","MBA Business Analytics","Six Sigma","Doctoral Research · SSBM Geneva"].map(c=>(
                <span key={c} className="foot-link">{c}</span>
              ))}
            </div>
          </div>
          <div className="foot-bot">
            <div className="foot-copy">© {new Date().getFullYear()} Rajendra Royal · All Rights Reserved</div>
            <div className="foot-research">Doctoral Researcher · Business & Operations · SSBM Geneva</div>
          </div>
        </footer>

        {/* ADMIN FAB */}
        <button className="admin-fab" onClick={openAdmin} title="Edit Content">✏️</button>
        {pwOpen&&<PwScreen onAuth={onAuth} onCancel={()=>setPwOpen(false)}/>}
        {adminOpen&&<Admin data={data} onSave={saveData} onClose={()=>setAdminOpen(false)}/>}

      </div>
    </>
  );
}
