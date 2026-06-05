import React, { useState, useEffect, useRef, useCallback } from "react";

const ADMIN_PASSWORD = "RR@Admin2025";

const DATA = {
  profile:{
    name:"Rajendra Royal",title:"Supply Chain & Operations Leader",
    subtitle:"Doctoral Researcher · Business & Operations",
    headline:"Shaping the Future of Supply Chain",
    sub:"20+ years leading enterprise supply chain transformation across retail, logistics, and distribution. Strategic depth. Operational precision. Doctoral-level research.",
    openTo:"Open to Senior Leadership, CXO & Consulting Roles",
    email:"rajendra@rajendraroyal.com",
    linkedin:"www.linkedin.com/in/rajendraroyal/",
    twitter:"@rajendraroyal",location:"India",cvUrl:"#",photo:"/photo.jpg",
  },
  ticker:[
    "🔬 Doctoral Researcher · Business & Operations · SSBM Geneva",
    "📦 20+ Years Supply Chain & Operations Leadership",
    "🏛️ IIM Calcutta EPOM · IIT Delhi Executive Program Alumni",
    "🎤 Available for Speaking, Consulting & Advisory",
    "📊 Six Sigma Certified · MBA Strategy · MBA Analytics",
    "🚀 Open to CXO, Board Advisory & Transformation Mandates",
  ],
  about:{
    bio:"Rajendra Royal is a seasoned Supply Chain and Operations professional with over two decades of experience leading warehouse operations, logistics management, inventory optimization, and business transformation across retail and supply chain organizations.\n\nWith a rare blend of strategic vision and hands-on operational mastery, he consistently delivers measurable impact — driving efficiency gains, cost reductions, and performance breakthroughs at enterprise scale. Backed by dual MBAs, executive programs at IIM Calcutta and IIT Delhi, Six Sigma certification, and doctoral research at SSBM Geneva.",
    mission:"To help organizations unlock the full potential of their supply chains — through smart strategy, data-led decisions, and the relentless elimination of waste — so they can grow faster, serve better, and operate with confidence.",
  },
  values:[
    {icon:"🎯",title:"Strategic Clarity",desc:"Translating complex SC challenges into clear, executable strategies aligned with business goals."},
    {icon:"📊",title:"Data-Driven Thinking",desc:"Every decision anchored in analytics, KPIs, and evidence — eliminating guesswork."},
    {icon:"🤝",title:"People-First Leadership",desc:"Building high-performance cultures where teams are empowered to excel."},
    {icon:"♾️",title:"Continuous Improvement",desc:"Relentless pursuit of excellence through Lean, Six Sigma & Kaizen."},
  ],
  offers:[
    {label:"What I Offer",text:"Strategic advisory, interim leadership, consulting, speaking, and hands-on transformation delivery."},
    {label:"Who I Serve",text:"Retail, logistics, DCs, e-commerce, and orgs undergoing supply chain transformation."},
    {label:"Why Work With Me",text:"20+ years of real results. Dual MBA + IIM/IIT + Doctoral Research. Boardroom to shop-floor."},
  ],
  credentials:[
    {type:"logo",badge:"IIM",inst:"IIM Calcutta",name:"Executive Programme in Operations Management (EPOM)",detail:"Operations · Lean · Quality · SC Design · Analytics",period:"2024–2025",pill:"",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/IIM_Calcutta_Logo.svg/200px-IIM_Calcutta_Logo.svg.png"},
    {type:"logo",badge:"IIT",inst:"IIT Delhi",name:"Executive Programme — SC & Operations Analytics",detail:"SC Strategy · Forecasting · Network Design · Resilience",period:"Aug 2025 – Aug 2026",pill:"Aug 2025 – Aug 2026",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/IIT_Delhi_logo.svg/200px-IIT_Delhi_logo.svg.png"},
    {type:"badge",badge:"MBA",inst:"Postgraduate",name:"MBA in Strategy & Leadership",detail:"Strategic Management · Executive Leadership",period:"",pill:"",logo:""},
    {type:"badge",badge:"MBA",inst:"Postgraduate",name:"MBA in Business Analytics",detail:"Data Analytics · Business Intelligence",period:"",pill:"",logo:""},
    {type:"badge",badge:"6σ",inst:"Certification",name:"Six Sigma — DMAIC · Process Excellence",detail:"Lean · Kaizen · Quality Management",period:"",pill:"",logo:""},
    {type:"badge",badge:"Dr.",inst:"SSBM Geneva",name:"Doctoral Researcher — Business & Operations",detail:"Operations · Leadership · Organizational Effectiveness",period:"Mar 2026–Present",pill:"🔬 Research Commenced Mar 2026",logo:"",active:true},
  ],
  skills:[
    {name:"Supply Chain Management",pct:95},
    {name:"Warehouse Operations",pct:95},
    {name:"Inventory Optimization",pct:92},
    {name:"Business Analytics",pct:88},
    {name:"Strategic Planning",pct:90},
    {name:"Process Excellence (Six Sigma)",pct:90},
    {name:"Leadership & Team Development",pct:92},
  ],
  toolTags:["SAP SCM","WMS","ERP Systems","Power BI","Advanced Excel","Demand Planning","KPI Dashboards","TMS","Lean / Kaizen","DMAIC","ABC-XYZ Analysis"],
  softTags:["Cross-functional Leadership","Change Management","Stakeholder Management","Executive Communication","Strategic Thinking","Data-Driven Decisions"],
  scNodes:[
    {icon:"🛒",label:"Procurement\n& Sourcing"},
    {icon:"🏭",label:"Warehouse\nOperations"},
    {icon:"📦",label:"Inventory\nManagement"},
    {icon:"🚛",label:"Logistics &\nTransport"},
    {icon:"🏪",label:"Retail\nDistribution"},
    {icon:"📊",label:"Analytics &\nExcellence"},
  ],
  scMetrics:[
    {n:"30%↑",t:"Warehouse Productivity",d:"Throughput improvement through layout redesign and workflow optimization"},
    {n:"28%↓",t:"Excess Inventory",d:"ABC-XYZ classification with safety stock modeling and reorder automation"},
    {n:"35%↓",t:"Forecast Error",d:"Statistical forecasting models aligned with real demand signals"},
  ],
  projects:[
    {tag:"Warehouse",title:"Warehouse Productivity Improvement",desc:"Redesigned warehouse layout, slotting strategy, and pick-path workflows to increase throughput while reducing labor hours per unit.",impacts:[{n:"30%↑",d:"Throughput"},{n:"22%↓",d:"Labor cost"}]},
    {tag:"Inventory",title:"Inventory Optimization Framework",desc:"ABC-XYZ classification with safety stock modeling — reducing excess stock while lifting fill rates and eliminating stockouts.",impacts:[{n:"28%↓",d:"Excess inventory"},{n:"98%",d:"Fill rate"}]},
    {tag:"Analytics",title:"Supply Chain Analytics Dashboard",desc:"Real-time executive KPI dashboards providing end-to-end supply chain visibility from procurement to last-mile delivery.",impacts:[{n:"40%↓",d:"Reporting time"},{n:"Live",d:"Real-time KPIs"}]},
    {tag:"Retail",title:"Retail KPI Management System",desc:"Retail performance framework linking store-level metrics to supply chain KPIs — enabling faster exception management.",impacts:[{n:"15+",d:"Stores aligned"},{n:"50%↓",d:"Response time"}]},
    {tag:"Forecasting",title:"Demand Forecasting Initiative",desc:"Advanced statistical forecasting models reducing MAPE and aligning procurement with real demand signals across the supply network.",impacts:[{n:"35%↓",d:"Forecast error"},{n:"20%↓",d:"Stockouts"}]},
    {tag:"Process",title:"Process Excellence Program",desc:"Six Sigma DMAIC program across warehouse and logistics delivering defect reduction, cycle time compression, and sustainable savings.",impacts:[{n:"25%↓",d:"Cycle time"},{n:"Sigma↑",d:"Process quality"}]},
  ],
  expertise:[
    {n:"01",t:"Supply Chain Management",d:"End-to-end SC design, strategy, and performance optimization at enterprise scale."},
    {n:"02",t:"Warehouse Operations",d:"High-performance warehouse design, throughput optimization, and workforce productivity."},
    {n:"03",t:"Logistics Management",d:"Freight optimization, carrier management, and last-mile delivery excellence."},
    {n:"04",t:"Inventory Optimization",d:"Demand-driven planning, safety stock modeling, and stockout elimination."},
    {n:"05",t:"Operations Excellence",d:"Lean methodologies, continuous improvement, and operational efficiency programs."},
    {n:"06",t:"Business Analytics",d:"Data-driven decisions, KPI frameworks, and advanced SC dashboards."},
    {n:"07",t:"Strategic Planning",d:"Long-range SC strategy, network design, and capability roadmapping."},
    {n:"08",t:"Retail Operations",d:"Omnichannel fulfilment, store replenishment, and retail SC integration."},
    {n:"09",t:"Process Improvement",d:"Six Sigma-driven reengineering and waste elimination initiatives."},
    {n:"10",t:"Cost Optimization",d:"Structural cost reduction, budget optimization, and ROI-driven decisions."},
    {n:"11",t:"Leadership Development",d:"Building high-performance teams and cultivating operational culture."},
    {n:"12",t:"Continuous Improvement",d:"Kaizen culture, operational reviews, and performance management systems."},
  ],
  journey:[
    {period:"2018 — Present",role:"Senior Supply Chain Leader",org:"Retail & Logistics Organization",desc:"Leading enterprise-wide supply chain transformation, overseeing warehouse operations, logistics networks, and analytics-driven improvement programs across multiple distribution centers."},
    {period:"2012 — 2018",role:"Operations Manager",org:"Supply Chain & Distribution",desc:"Managed large-scale warehouse operations with focus on productivity enhancement, inventory accuracy, and process standardization across multiple facilities."},
    {period:"2006 — 2012",role:"Logistics & Inventory Specialist",org:"Retail Operations",desc:"Developed expertise in logistics coordination, demand planning, and inventory management — laying the foundation for strategic operations leadership."},
    {period:"2002 — 2006",role:"Operations Executive",org:"Warehouse & Distribution",desc:"Began career in warehouse operations, gaining hands-on experience in inbound/outbound logistics, material handling, and operational planning."},
  ],
  testimonials:[
    {text:"Rajendra brings an exceptional combination of strategic thinking and operational rigor. His ability to translate complex data into clear business action — and to bring teams with him — sets him apart as a genuinely transformational leader.",name:"Senior Operations Director",role:"Retail & Logistics Industry"},
    {text:"Working with Rajendra on our warehouse transformation was outstanding. He diagnosed inefficiencies we had lived with for years, built a rigorous improvement roadmap, and drove execution with genuine accountability.",name:"VP Supply Chain",role:"E-Commerce & Distribution"},
    {text:"Rajendra's depth in inventory optimization and demand planning is among the best I've encountered in two decades. He has a gift for making the complex simple, and his passion for continuous improvement is infectious.",name:"Head of Planning & Forecasting",role:"FMCG Supply Chain"},
  ],
  education:[
    {inst:"IIM Calcutta",degree:"Executive Programme in Operations Management (EPOM)",detail:"Premier management institution. Operations, Lean, Analytics, Quality, SC Design.",active:false},
    {inst:"IIT Delhi",degree:"Executive Programme — SC & Operations Analytics",detail:"Advanced analytics and operations strategy. Aug 2025 – Aug 2026.",active:false},
    {inst:"MBA",degree:"MBA in Strategy & Leadership",detail:"Strategic management and executive leadership for senior CXO roles.",active:false},
    {inst:"MBA",degree:"MBA in Business Analytics",detail:"Data-driven decision making, analytics frameworks, and business intelligence.",active:false},
    {inst:"Six Sigma",degree:"Six Sigma Certification",detail:"Certified DMAIC practitioner in process improvement and quality management.",active:false},
    {inst:"SSBM Geneva",degree:"Doctoral Researcher in Business & Operations",detail:"Exploring contemporary challenges in operations, leadership, and organizational effectiveness. Research commenced March 2026.",active:true},
  ],
  quotes:[
    {text:"Data without strategy is noise. Strategy without data is guesswork. Great operations need both.",author:"Rajendra Royal"},
    {text:"The goal is not to be efficient. The goal is to create value — efficiency is just how you get there.",author:"Rajendra Royal"},
    {text:"Leadership is not about being in charge. It is about taking care of those in your charge.",author:"Simon Sinek"},
    {text:"Lean thinking is not a tool. It is a mindset — and mindsets outlast any methodology.",author:"Rajendra Royal"},
  ],
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:#081220;color:#f5f7fa;overflow-x:hidden;line-height:1.6;-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:#081220}::-webkit-scrollbar-thumb{background:#c9a84c}

@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.7)}}
@keyframes lineGrow{from{width:0}to{width:72px}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes particleDrift{0%{transform:translateY(0) translateX(0);opacity:0}10%{opacity:.6}90%{opacity:.2}100%{transform:translateY(-120vh) translateX(40px);opacity:0}}
@keyframes qslide{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
@keyframes barFill{from{width:0}to{width:var(--pct)}}

.rv{opacity:0;transform:translateY(20px);transition:opacity .75s ease,transform .75s ease}
.rv.on{opacity:1;transform:translateY(0)}
.rv-l{opacity:0;transform:translateX(-20px);transition:opacity .75s ease,transform .75s ease}
.rv-l.on{opacity:1;transform:translateX(0)}

.ticker-wrap{background:#c9a84c;overflow:hidden;padding:.5rem 0;position:relative;z-index:10}
.ticker-tr{display:flex;width:max-content;animation:ticker 42s linear infinite;white-space:nowrap}
.ticker-tr:hover{animation-play-state:paused}
.ticker-it{padding:0 2.5rem;font-size:.74rem;font-weight:700;letter-spacing:.06em;color:#081220;display:flex;align-items:center;gap:.8rem}
.ticker-sep{color:rgba(8,18,32,.3);font-size:.55rem}

.nav{position:fixed;top:32px;left:0;right:0;z-index:200;height:60px;padding:0 5%;display:flex;align-items:center;justify-content:space-between;transition:all .4s}
.nav.scrolled{top:0;background:rgba(8,18,32,.97);backdrop-filter:blur(24px);border-bottom:1px solid rgba(201,168,76,.18);height:64px;box-shadow:0 2px 20px rgba(0,0,0,.25)}
.nav-brand{display:flex;flex-direction:column;cursor:pointer;background:none;border:none;padding:0;text-align:left}
.nav-brand-n{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:500;color:#f5f7fa;line-height:1;letter-spacing:.02em}
.nav-brand-n em{font-style:italic;color:#c9a84c}
.nav-links{display:flex;gap:2.2rem;list-style:none}
.nav-links a{font-family:'DM Mono',monospace;font-size:.6rem;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:rgba(245,247,250,.55);text-decoration:none;transition:color .25s;position:relative;padding-bottom:2px}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:#c9a84c;transition:width .3s}
.nav-links a:hover,.nav-links a.active{color:#c9a84c}
.nav-links a:hover::after,.nav-links a.active::after{width:100%}
.nav-right{display:flex;align-items:center;gap:1.4rem}
.nav-dt{font-family:'DM Mono',monospace;font-size:.6rem;color:rgba(245,247,250,.35);letter-spacing:.06em;white-space:nowrap}
.nav-cta{padding:.4rem 1.15rem;background:transparent;border:1px solid rgba(201,168,76,.4);color:#c9a84c;font-family:'DM Mono',monospace;font-size:.6rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .28s}
.nav-cta:hover{background:#c9a84c;color:#081220}
.nav-ham{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:.3rem}
.nav-ham span{width:22px;height:1px;background:rgba(201,168,76,.7);display:block;transition:all .3s}
.mob-menu{position:fixed;inset:0;background:rgba(8,18,32,.98);z-index:300;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2rem;transform:translateX(100%);transition:transform .4s cubic-bezier(.16,1,.3,1)}
.mob-menu.open{transform:translateX(0)}
.mob-menu a{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:300;font-style:italic;color:#f5f7fa;text-decoration:none;transition:color .25s}
.mob-menu a:hover{color:#c9a84c}
.mob-close{position:absolute;top:1.5rem;right:1.5rem;background:none;border:none;color:rgba(245,247,250,.45);font-size:1.6rem;cursor:pointer}

.hero{height:100vh;min-height:700px;position:relative;overflow:hidden;display:grid;grid-template-columns:1fr 44%;align-items:center}
.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse 80% 70% at 85% 50%,rgba(201,168,76,.055) 0%,transparent 60%),radial-gradient(ellipse 50% 70% at 5% 80%,rgba(22,48,88,.75) 0%,transparent 55%),linear-gradient(155deg,#0a1628 0%,#081220 55%,#06101c 100%)}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(201,168,76,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.028) 1px,transparent 1px);background-size:64px 64px}
.particles{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.particle{position:absolute;background:#c9a84c;border-radius:50%;animation:particleDrift linear infinite}
.hero-left{position:relative;z-index:3;padding:60px 5% 0 6%;display:flex;flex-direction:column;justify-content:center}
.hero-chips{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.8rem;animation:fadeUp .6s .1s ease both}
.hero-chip{padding:.2rem .7rem;border:1px solid rgba(201,168,76,.25);font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(201,168,76,.65);background:rgba(201,168,76,.04)}
.hero-kicker{font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:rgba(201,168,76,.7);margin-bottom:.9rem;display:flex;align-items:center;gap:.8rem;animation:fadeUp .6s .18s ease both}
.hero-kicker::before{content:'';width:28px;height:1px;background:rgba(201,168,76,.6)}
.hero-h1{font-family:'Cormorant Garamond',serif;font-size:clamp(2.6rem,4.8vw,4.5rem);font-weight:300;line-height:1.05;letter-spacing:-.02em;color:#f5f7fa;margin-bottom:.4rem;animation:fadeUp .7s .24s ease both}
.hero-h1 em{font-style:italic;color:#c9a84c;display:block;font-weight:300}
.hero-h1 strong{font-weight:600;display:block}
.hero-rule{height:1px;width:0;background:linear-gradient(90deg,#c9a84c,rgba(201,168,76,.2),transparent);margin:1.6rem 0;animation:lineGrow 1.2s .55s ease both}
.hero-sub{font-size:.9rem;color:#aabbcc;line-height:1.8;max-width:500px;margin-bottom:1.6rem;animation:fadeUp .7s .32s ease both}
.hero-roles{display:flex;flex-wrap:wrap;gap:.42rem;margin-bottom:2rem;animation:fadeUp .7s .38s ease both}
.hero-role{padding:.26rem .78rem;border-left:2px solid #c9a84c;background:rgba(201,168,76,.05);font-size:.71rem;font-weight:500;letter-spacing:.04em;color:#aabbcc}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;animation:fadeUp .7s .44s ease both}
.btn-gold{padding:.78rem 1.9rem;background:#c9a84c;color:#081220;font-family:'DM Mono',monospace;font-weight:700;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;border:none;cursor:pointer;transition:all .28s}
.btn-gold:hover{background:#e8c97a;transform:translateY(-2px);box-shadow:0 10px 28px rgba(201,168,76,.3)}
.btn-ghost{padding:.78rem 1.9rem;background:transparent;color:#f5f7fa;font-family:'DM Mono',monospace;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;border:1px solid rgba(245,247,250,.2);cursor:pointer;transition:all .28s}
.btn-ghost:hover{border-color:#c9a84c;color:#c9a84c;transform:translateY(-2px)}
.hero-right{position:relative;z-index:3;height:100%;display:flex;flex-direction:column}
.hero-photo{flex:1;position:relative;overflow:hidden}
.hero-photo img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block}
.hero-photo::before{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(to right,rgba(8,18,32,.92) 0%,rgba(8,18,32,.5) 25%,rgba(8,18,32,.1) 55%,transparent 100%)}
.hero-photo::after{content:'';position:absolute;bottom:0;left:0;right:0;height:220px;z-index:1;background:linear-gradient(transparent,rgba(8,18,32,.95))}
.hero-placeholder{width:100%;height:100%;background:linear-gradient(160deg,#1a2e4a,#0c1c36,#081220);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.hero-placeholder::before{content:'RR';font-family:'Cormorant Garamond',serif;font-size:16rem;font-weight:300;color:rgba(201,168,76,.05);letter-spacing:-.05em;user-select:none;position:absolute}
.hc{position:absolute;width:48px;height:48px;border-color:#c9a84c;border-style:solid;z-index:4}
.hc.tl{top:0;right:0;border-width:2px 2px 0 0}
.hc.br{bottom:0;left:0;border-width:0 0 2px 2px}
.hero-nametag{position:absolute;bottom:0;left:0;right:0;z-index:5;padding:1.8rem 2.2rem 1.4rem}
.hero-nametag-n{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:500;color:#fff;line-height:1}
.hero-nametag-r{font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.14em;text-transform:uppercase;color:#c9a84c;margin-top:.3rem}
.hero-statbar{display:grid;grid-template-columns:repeat(4,1fr);background:rgba(8,18,32,.94);border-top:1px solid rgba(201,168,76,.18);flex-shrink:0}
.hstat{padding:1.1rem .8rem;text-align:center;border-right:1px solid rgba(201,168,76,.18)}
.hstat:last-child{border-right:none}
.hstat-n{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:300;color:#c9a84c;line-height:1;letter-spacing:-.02em}
.hstat-l{font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.1em;text-transform:uppercase;color:#7a8fa8;margin-top:.22rem}

.avail-banner{background:linear-gradient(135deg,#0d1e35,#0c1c36);border-top:1px solid rgba(201,168,76,.18);border-bottom:1px solid rgba(201,168,76,.18);padding:1.1rem 5%;position:relative;overflow:hidden}
.avail-banner::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 100% at 50% 50%,rgba(201,168,76,.04) 0%,transparent 70%)}
.avail-inner{position:relative;z-index:1;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap}
.avail-live{display:flex;align-items:center;gap:.6rem;padding:.28rem .85rem;background:rgba(34,197,94,.07);border:1px solid rgba(34,197,94,.22);flex-shrink:0}
.avail-dot{width:7px;height:7px;background:#22c55e;border-radius:50%;animation:pulse 2.5s infinite}
.avail-live-txt{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(34,197,94,.85);font-weight:600}
.avail-stmt{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:300;color:rgba(245,247,250,.75);font-style:italic}
.avail-div{width:1px;height:20px;background:rgba(201,168,76,.18);flex-shrink:0}
.avail-roles{display:flex;gap:.4rem;flex-wrap:wrap}
.avail-role{padding:.22rem .75rem;border:1px solid rgba(201,168,76,.22);background:rgba(201,168,76,.05);font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(201,168,76,.75)}

.media-bar{background:#0c1c36;border-bottom:1px solid rgba(201,168,76,.18);padding:1.1rem 5%}
.media-inner{display:flex;align-items:center;gap:2.5rem;flex-wrap:wrap}
.media-lbl{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:#7a8fa8;white-space:nowrap;flex-shrink:0}
.media-div{width:1px;height:22px;background:rgba(201,168,76,.18);flex-shrink:0}
.media-items{display:flex;align-items:center;gap:2.5rem;flex-wrap:wrap}
.media-item{font-family:'Cormorant Garamond',serif;font-size:.92rem;font-weight:500;color:rgba(245,247,250,.25);letter-spacing:.04em;transition:color .3s;cursor:default}
.media-item:hover{color:rgba(201,168,76,.65)}

.sec{padding:84px 5%}
.sec-alt{padding:84px 5%;background:#0c1c36}
.sec-dark{padding:84px 5%;background:#081220}
.sl{font-family:'DM Mono',monospace;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:#c9a84c;margin-bottom:.85rem;display:flex;align-items:center;gap:.9rem}
.sl::after{content:'';display:block;height:1px;width:48px;background:#c9a84c;opacity:.75}
.st{font-family:'Cormorant Garamond',serif;font-size:clamp(1.9rem,3.8vw,3rem);font-weight:300;line-height:1.12;margin-bottom:1rem;letter-spacing:-.01em}
.st em{font-style:italic;color:#c9a84c}
.st strong{font-weight:600}
.sd{font-size:.9rem;color:#aabbcc;max-width:500px;line-height:1.78}

.about-grid{display:grid;grid-template-columns:320px 1fr;gap:5rem;align-items:start;margin-top:3.5rem}
.portrait{width:100%;aspect-ratio:3/4;background:linear-gradient(160deg,#163058,#081220);border:1px solid rgba(201,168,76,.18);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.portrait img{width:100%;height:100%;object-fit:cover;object-position:center top}
.portrait-init{font-family:'Cormorant Garamond',serif;font-size:6rem;font-weight:300;color:rgba(201,168,76,.07);letter-spacing:-.04em;user-select:none}
.p-ov{position:absolute;bottom:0;left:0;right:0;padding:1.4rem;background:linear-gradient(transparent,rgba(8,18,32,.97))}
.p-name{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:500}
.p-role{font-family:'DM Mono',monospace;font-size:.52rem;color:#c9a84c;letter-spacing:.1em;text-transform:uppercase;margin-top:.2rem}
.pc2{position:absolute;width:38px;height:38px;border-color:#c9a84c;border-style:solid}
.pc2.tl{top:-1px;left:-1px;border-width:2px 0 0 2px}
.pc2.br{bottom:-1px;right:-1px;border-width:0 2px 2px 0}
.aq{display:flex;align-items:center;gap:.75rem;font-size:.79rem;color:#aabbcc;margin-top:.5rem}
.aq-dot{width:5px;height:5px;background:#c9a84c;border-radius:50%;opacity:.65;flex-shrink:0}
.about-bio p{font-size:.9rem;color:#aabbcc;line-height:1.82;margin-bottom:1.2rem}
.mission-box{margin:1.5rem 0;padding:1.4rem 1.6rem;border-left:3px solid #c9a84c;background:rgba(201,168,76,.04)}
.mission-lbl{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:#c9a84c;margin-bottom:.5rem}
.mission-txt{font-family:'Cormorant Garamond',serif;font-size:1.02rem;color:#f5f7fa;font-style:italic;line-height:1.75;font-weight:300}
.vals{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1.4rem}
.val{padding:1.1rem;background:rgba(201,168,76,.03);border:1px solid rgba(201,168,76,.18);transition:border-color .25s}
.val:hover{border-color:#c9a84c}
.val-icon{font-size:1.2rem;margin-bottom:.5rem}
.val-title{font-family:'Cormorant Garamond',serif;font-size:.95rem;font-weight:500;margin-bottom:.28rem}
.val-desc{font-size:.74rem;color:#7a8fa8;line-height:1.6}
.offer-row{display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem;margin-top:1.4rem}
.offer{padding:1.1rem;border:1px solid rgba(201,168,76,.18);background:rgba(8,18,32,.5);transition:border-color .25s}
.offer:hover{border-color:#c9a84c}
.offer-lbl{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:#c9a84c;margin-bottom:.45rem}
.offer-txt{font-size:.75rem;color:#7a8fa8;line-height:1.65}

.counters{display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid rgba(201,168,76,.18);border-bottom:1px solid rgba(201,168,76,.18)}
.ci{padding:2.2rem 1.2rem;text-align:center;border-right:1px solid rgba(201,168,76,.18);transition:background .25s}
.ci:last-child{border-right:none}
.ci:hover{background:rgba(201,168,76,.03)}
.ci-n{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:300;color:#c9a84c;line-height:1;letter-spacing:-.02em}
.ci-l{font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:#7a8fa8;margin-top:.38rem;line-height:1.4}

.creds{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid rgba(201,168,76,.18);background:rgba(201,168,76,.18)}
.cc{padding:2.4rem 1.8rem;text-align:center;background:#0c1c36;border-right:1px solid rgba(201,168,76,.18);border-bottom:1px solid rgba(201,168,76,.18);position:relative;overflow:hidden;transition:background .25s}
.cc:nth-child(3){border-right:none}
.cc:nth-child(4),.cc:nth-child(5),.cc:nth-child(6){border-bottom:none}
.cc:nth-child(6){border-right:none}
.cc:hover{background:rgba(201,168,76,.04)}
.cc::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);transform:scaleX(0);transition:transform .4s}
.cc:hover::after{transform:scaleX(1)}
.cc-logo{height:38px;display:flex;align-items:center;justify-content:center;margin-bottom:.9rem}
.cc-logo img{max-height:100%;max-width:115px;object-fit:contain;filter:brightness(0) invert(1);opacity:.55;transition:opacity .3s}
.cc:hover .cc-logo img{opacity:.82}
.cc-logo-fb{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:500;color:rgba(201,168,76,.55)}
.cc-badge{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border:1px solid rgba(201,168,76,.18);background:rgba(201,168,76,.07);margin:0 auto .9rem;font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:600;color:#c9a84c}
.cc-badge.glow{background:rgba(201,168,76,.16);border-color:#c9a84c;box-shadow:0 0 18px rgba(201,168,76,.18)}
.cc-inst{font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;color:#c9a84c;margin-bottom:.4rem}
.cc-name{font-family:'Cormorant Garamond',serif;font-size:.95rem;font-weight:400;line-height:1.3;margin-bottom:.38rem}
.cc-detail{font-size:.69rem;color:#7a8fa8;line-height:1.55}
.cc-pill{display:inline-block;margin-top:.6rem;padding:.17rem .6rem;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.3);font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.12em;text-transform:uppercase;color:#c9a84c}

.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;margin-top:3.5rem;align-items:start}
.sbar-item{margin-bottom:1.8rem}
.sbar-hdr{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.62rem}
.sbar-name{font-size:.86rem;font-weight:600;color:#f5f7fa}
.sbar-pct{font-family:'DM Mono',monospace;font-size:.76rem;color:#c9a84c}
.sbar-track{height:7px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.14);overflow:hidden}
.sbar-fill{height:100%;background:linear-gradient(90deg,#c9a84c,#e8c97a);width:0;transition:width 1.5s cubic-bezier(.16,1,.3,1);position:relative}
.sbar-fill::after{content:'';position:absolute;right:0;top:0;bottom:0;width:3px;background:rgba(255,255,255,.38)}
.tag-sec{display:flex;flex-direction:column;gap:1.7rem}
.tag-grp{padding:1.3rem;background:rgba(201,168,76,.02);border:1px solid rgba(201,168,76,.18)}
.tag-grp-lbl{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:#c9a84c;margin-bottom:.85rem;display:flex;align-items:center;gap:.7rem}
.tag-grp-lbl::after{content:'';flex:1;height:1px;background:rgba(201,168,76,.18)}
.tag-cloud{display:flex;flex-wrap:wrap;gap:.4rem}
.tag{padding:.28rem .76rem;font-size:.71rem;font-weight:500;letter-spacing:.04em;transition:all .22s;cursor:default}
.tag.cert{border:1px solid rgba(201,168,76,.4);color:#e8c97a;background:rgba(201,168,76,.07)}
.tag.cert:hover{background:rgba(201,168,76,.18);transform:translateY(-1px)}
.tag.tools{border:1px solid rgba(122,143,168,.26);color:#aabbcc;background:rgba(122,143,168,.04)}
.tag.tools:hover{border-color:#c9a84c;color:#e8c97a;transform:translateY(-1px)}
.tag.soft{border:1px solid #163058;background:#163058;color:rgba(245,247,250,.78)}
.tag.soft:hover{border-color:#e8c97a;transform:translateY(-1px)}

.sc-flow{display:flex;align-items:center;justify-content:center;gap:0;margin-top:4rem;overflow-x:auto;padding-bottom:.5rem}
.sc-node{display:flex;flex-direction:column;align-items:center;gap:.75rem;flex:1;min-width:90px;max-width:130px}
.sc-icon{width:68px;height:68px;border:1px solid rgba(201,168,76,.25);background:rgba(201,168,76,.06);display:flex;align-items:center;justify-content:center;font-size:1.65rem;transition:all .3s;animation:float 4s ease infinite}
.sc-node:nth-child(3) .sc-icon{animation-delay:.4s}
.sc-node:nth-child(5) .sc-icon{animation-delay:.8s}
.sc-node:nth-child(7) .sc-icon{animation-delay:1.2s}
.sc-node:nth-child(9) .sc-icon{animation-delay:1.6s}
.sc-node:nth-child(11) .sc-icon{animation-delay:2s}
.sc-icon:hover{background:rgba(201,168,76,.16);border-color:#c9a84c;transform:translateY(-4px) scale(1.05)}
.sc-lbl{font-family:'DM Mono',monospace;font-size:.55rem;letter-spacing:.1em;text-transform:uppercase;color:#aabbcc;text-align:center;white-space:pre-line;line-height:1.5}
.sc-arr{padding:0 .4rem;flex-shrink:0;display:flex;align-items:center}
.sc-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5px;background:rgba(201,168,76,.18);border:1px solid rgba(201,168,76,.18);margin-top:3.8rem}
.sc-m{background:#081220;padding:2rem 2.2rem;transition:background .25s}
.sc-m:hover{background:#0c1c36}
.sc-mn{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:300;color:#c9a84c;line-height:1;margin-bottom:.3rem;letter-spacing:-.02em}
.sc-mt{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:400;color:#f5f7fa;margin-bottom:.28rem}
.sc-md{font-size:.73rem;color:#7a8fa8;line-height:1.65}

.proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5px;background:rgba(201,168,76,.18);border:1px solid rgba(201,168,76,.18);margin-top:3.5rem}
.proj-card{background:#081220;padding:2rem 1.8rem;transition:background .25s;display:flex;flex-direction:column}
.proj-card:hover{background:#163058}
.proj-tag{display:inline-block;padding:.18rem .62px;background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.22);font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:#c9a84c;margin-bottom:1rem;align-self:flex-start;padding:.18rem .62rem}
.proj-title{font-family:'Cormorant Garamond',serif;font-size:1.06rem;font-weight:400;line-height:1.3;margin-bottom:.6rem}
.proj-desc{font-size:.76rem;color:#7a8fa8;line-height:1.65;flex:1}
.proj-impact{display:flex;gap:1.1rem;margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(201,168,76,.18)}
.impact-n{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:500;color:#c9a84c;line-height:1}
.impact-d{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.05em;color:#7a8fa8;margin-top:.14rem}
.proj-link{display:inline-flex;align-items:center;gap:.4rem;margin-top:1rem;font-family:'DM Mono',monospace;font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#c9a84c;border:none;background:none;cursor:pointer;border-bottom:1px solid transparent;transition:border-color .25s;padding:0;align-self:flex-start}
.proj-link:hover{border-color:#c9a84c}

.cta-band{padding:70px 5%;background:linear-gradient(135deg,#163058,#0c1c36);border-top:1px solid rgba(201,168,76,.18);border-bottom:1px solid rgba(201,168,76,.18);text-align:center;position:relative;overflow:hidden}
.cta-band::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(201,168,76,.07) 0%,transparent 70%)}
.cta-inner{position:relative;z-index:1}
.cta-pill{display:inline-flex;align-items:center;gap:.5rem;padding:.28rem .88rem;background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.18);font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.14em;color:#c9a84c;margin-bottom:1.5rem}
.cta-dot{width:5px;height:5px;background:#c9a84c;border-radius:50%;animation:blink 2s infinite}
.cta-band h3{font-family:'Cormorant Garamond',serif;font-size:clamp(1.7rem,3vw,2.6rem);font-weight:300;margin-bottom:.7rem;letter-spacing:-.01em}
.cta-band h3 em{font-style:italic;color:#c9a84c}
.cta-band p{font-size:.88rem;color:#aabbcc;max-width:520px;margin:0 auto 1.9rem;line-height:1.75}
.cta-btns{display:flex;gap:.85rem;justify-content:center;flex-wrap:wrap}

.exp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5px;background:rgba(201,168,76,.18);border:1px solid rgba(201,168,76,.18);margin-top:3.5rem}
.exp-card{background:#081220;padding:1.8rem 1.4rem;transition:background .25s;position:relative;overflow:hidden}
.exp-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:#c9a84c;transform:scaleX(0);transition:transform .3s;transform-origin:left}
.exp-card:hover{background:#0c1c36}
.exp-card:hover::before{transform:scaleX(1)}
.exp-n{font-family:'DM Mono',monospace;font-size:.6rem;color:#c9a84c;letter-spacing:.1em;margin-bottom:.85rem;opacity:.52}
.exp-t{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:500;line-height:1.3;margin-bottom:.48rem}
.exp-d{font-size:.73rem;color:#7a8fa8;line-height:1.6}

.t-line{position:relative;margin-top:3.5rem;padding-left:2rem;border-left:1px solid rgba(201,168,76,.18)}
.t-item{position:relative;padding:0 0 2.8rem 3rem}
.t-item:last-child{padding-bottom:0}
.t-item::before{content:'';position:absolute;left:-2.5rem;top:.3rem;width:10px;height:10px;background:#0c1c36;border:2px solid #c9a84c;border-radius:50%;transform:translateX(-4px)}
.t-period{font-family:'DM Mono',monospace;font-size:.64rem;letter-spacing:.14em;color:#c9a84c;margin-bottom:.38rem}
.t-role{font-family:'Cormorant Garamond',serif;font-size:1.22rem;font-weight:400;margin-bottom:.2rem}
.t-org{font-size:.8rem;font-weight:500;color:#e8c97a;margin-bottom:.58rem;letter-spacing:.02em}
.t-desc{font-size:.81rem;color:#7a8fa8;line-height:1.72;max-width:550px}

.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.3rem;margin-top:3.5rem}
.testi-card{padding:1.9rem;background:rgba(8,18,32,.6);border:1px solid rgba(201,168,76,.18);display:flex;flex-direction:column;transition:border-color .25s}
.testi-card:hover{border-color:rgba(201,168,76,.4)}
.testi-q{font-family:'Cormorant Garamond',serif;font-size:3.2rem;line-height:.6;color:#c9a84c;opacity:.22;margin-bottom:.4rem;font-style:italic}
.testi-txt{font-family:'Cormorant Garamond',serif;font-size:.94rem;color:#aabbcc;line-height:1.78;flex:1;font-style:italic;font-weight:300}
.testi-name{font-weight:600;font-size:.84rem;color:#f5f7fa;margin-top:1.3rem;padding-top:.95rem;border-top:1px solid rgba(201,168,76,.18)}
.testi-role{font-family:'DM Mono',monospace;font-size:.58rem;color:#c9a84c;margin-top:.16rem;letter-spacing:.04em}

.edu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;margin-top:3.5rem}
.edu-card{padding:1.9rem 1.6rem;background:rgba(12,28,54,.8);border:1px solid rgba(201,168,76,.18);position:relative;overflow:hidden;transition:all .28s}
.edu-card:hover{border-color:#c9a84c;transform:translateY(-3px)}
.edu-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#c9a84c,transparent)}
.edu-inst{font-family:'DM Mono',monospace;font-size:.6rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#c9a84c;margin-bottom:.6rem}
.edu-degree{font-family:'Cormorant Garamond',serif;font-size:1.04rem;font-weight:400;line-height:1.3;margin-bottom:.58rem}
.edu-detail{font-size:.74rem;color:#7a8fa8}
.edu-active{position:absolute;top:.85rem;right:.85rem;padding:.15rem .5rem;background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.36);font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.1em;text-transform:uppercase;color:#c9a84c}

.quote-box{max-width:700px;margin:3.5rem auto 0;padding:2.8rem 3rem;border:1px solid rgba(201,168,76,.18);background:rgba(12,28,54,.6);position:relative}
.qmark{font-family:'Cormorant Garamond',serif;font-size:7rem;line-height:.4;color:#c9a84c;opacity:.12;position:absolute;top:1.5rem;right:2rem;font-style:italic}
.qtext{font-family:'Cormorant Garamond',serif;font-size:1.28rem;font-weight:300;font-style:italic;line-height:1.65;color:#f5f7fa;padding-right:3rem}
.qauth{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(201,168,76,.55);margin-top:1.2rem}
.qdots{display:flex;gap:.5rem;justify-content:center;margin-top:1.5rem}
.qdot{width:6px;height:6px;border-radius:50%;background:rgba(201,168,76,.2);cursor:pointer;transition:background .2s}
.qdot.on{background:#c9a84c}
.q-btns{display:flex;gap:.5rem;justify-content:center;margin-top:.7rem}
.q-btn{width:34px;height:34px;border:1px solid rgba(201,168,76,.18);background:transparent;color:rgba(201,168,76,.5);cursor:pointer;font-size:.85rem;display:flex;align-items:center;justify-content:center;transition:all .2s}
.q-btn:hover{border-color:#c9a84c;color:#c9a84c}

.contact-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:5rem;margin-top:3.5rem;align-items:start}
.contact-h{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:300;font-style:italic;margin-bottom:.75rem}
.contact-p{font-size:.86rem;color:#aabbcc;line-height:1.78;margin-bottom:1.8rem}
.soc-link{display:flex;align-items:center;gap:.85rem;padding:.85rem 1rem;border:1px solid rgba(201,168,76,.18);text-decoration:none;color:#f5f7fa;transition:all .25s;margin-bottom:.7rem}
.soc-link:hover{border-color:#c9a84c;background:rgba(201,168,76,.04)}
.soc-icon{width:32px;height:32px;background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.soc-icon svg{width:13px;height:13px;fill:#c9a84c}
.soc-name{font-weight:600;font-size:.8rem;color:#f5f7fa}
.soc-handle{font-family:'DM Mono',monospace;font-size:.62rem;color:#7a8fa8}
.f-lbl{display:block;font-family:'DM Mono',monospace;font-size:.58rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#7a8fa8;margin-bottom:.3rem;margin-top:.85rem}
.f-in,.f-area{width:100%;padding:.78rem .95rem;background:rgba(8,18,32,.8);border:1px solid rgba(201,168,76,.18);color:#f5f7fa;font-family:'DM Sans',sans-serif;font-size:.84rem;outline:none;transition:border-color .25s;resize:none}
.f-in:focus,.f-area:focus{border-color:#c9a84c}
.f-area{height:118px}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
::placeholder{color:rgba(122,143,168,.38)}

footer{background:#081220;border-top:1px solid rgba(201,168,76,.18)}
.foot-top{padding:2.8rem 5%;display:grid;grid-template-columns:1fr 1fr 1fr;gap:3rem}
.foot-brand{font-family:'Cormorant Garamond',serif;font-size:1.22rem;font-weight:400;margin-bottom:.38rem}
.foot-brand em{font-style:italic;color:#c9a84c}
.foot-tag{font-size:.74rem;color:#7a8fa8;line-height:1.65;margin-top:.35rem;max-width:240px}
.foot-col-h{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:#c9a84c;margin-bottom:.95rem}
.foot-link{display:block;font-size:.78rem;color:#7a8fa8;text-decoration:none;margin-bottom:.45rem;transition:color .22s;background:none;border:none;padding:0;text-align:left;cursor:pointer;font-family:'DM Sans',sans-serif}
.foot-link:hover{color:#c9a84c}
.foot-bot{padding:1rem 5%;border-top:1px solid rgba(201,168,76,.08);display:flex;align-items:center;justify-content:space-between}
.foot-copy{font-family:'DM Mono',monospace;font-size:.6rem;color:#7a8fa8;letter-spacing:.08em}
.foot-dba{font-family:'DM Mono',monospace;font-size:.58rem;color:#c9a84c;letter-spacing:.1em}

.admin-fab{position:fixed;bottom:2rem;right:2rem;z-index:998;width:44px;height:44px;background:#0c1c36;border:1px solid rgba(201,168,76,.3);cursor:pointer;display:flex;align-items:center;justify-content:center;color:#c9a84c;font-size:1rem;transition:all .25s;box-shadow:0 4px 18px rgba(0,0,0,.4)}
.admin-fab:hover{background:#c9a84c;color:#081220;border-color:#c9a84c}
.pw-screen{position:fixed;inset:0;background:rgba(8,18,32,.97);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.4rem}
.pw-title{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:#f5f7fa;font-style:italic}
.pw-sub{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(201,168,76,.5)}
.pw-in{padding:.65rem 1rem;background:#0c1c36;border:1px solid rgba(201,168,76,.25);color:#f5f7fa;font-family:'DM Mono',monospace;font-size:.9rem;letter-spacing:.1em;outline:none;width:260px;text-align:center;transition:border-color .25s}
.pw-in:focus{border-color:rgba(201,168,76,.5)}
.pw-btn{padding:.55rem 1.8rem;background:#c9a84c;color:#081220;font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;border:none;cursor:pointer;font-weight:500;transition:all .25s}
.pw-btn:hover{background:#e8c97a}
.pw-err{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.1em;color:rgba(239,68,68,.7)}
.pw-cancel{background:none;border:none;font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(245,247,250,.28);cursor:pointer}
.pw-cancel:hover{color:rgba(245,247,250,.65)}
.admin-overlay{position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:1000;display:flex}
.admin-panel{background:#0c1c36;width:560px;max-width:95vw;height:100vh;overflow-y:auto;margin-left:auto;border-left:1px solid rgba(201,168,76,.15);display:flex;flex-direction:column}
.adm-head{padding:1.2rem 1.5rem;background:#081220;border-bottom:1px solid rgba(201,168,76,.12);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10}
.adm-head-title{font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:#f5f7fa;font-style:italic}
.adm-close{background:none;border:none;color:rgba(245,247,250,.35);font-size:1.2rem;cursor:pointer;transition:color .2s}
.adm-close:hover{color:#f5f7fa}
.adm-tabs{display:flex;flex-wrap:wrap;background:#081220;border-bottom:1px solid rgba(201,168,76,.1);position:sticky;top:56px;z-index:9}
.a-tab{padding:.5rem .8rem;font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.1em;text-transform:uppercase;border:none;background:none;cursor:pointer;color:rgba(245,247,250,.3);border-bottom:1px solid transparent;transition:all .2s}
.a-tab.on{color:#c9a84c;border-bottom-color:#c9a84c;background:#0c1c36}
.adm-body{padding:1.4rem 1.5rem;flex:1}
.a-sec{font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(201,168,76,.45);margin:1.2rem 0 .75rem;padding-bottom:.35rem;border-bottom:1px solid rgba(201,168,76,.1)}
.a-field{margin-bottom:.8rem}
.a-lbl{display:block;font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(245,247,250,.3);margin-bottom:.28rem}
.a-in,.a-area{width:100%;padding:.52rem .7rem;border:1px solid rgba(201,168,76,.12);background:#163058;font-family:'DM Sans',sans-serif;font-size:.82rem;color:#f5f7fa;outline:none;transition:border-color .2s}
.a-in:focus,.a-area:focus{border-color:rgba(201,168,76,.35)}
.a-area{resize:vertical;min-height:68px;line-height:1.6}
.a-item{display:flex;gap:.5rem;align-items:flex-start;margin-bottom:.6rem;padding:.7rem;background:#163058;border:1px solid rgba(201,168,76,.1)}
.a-item-fields{flex:1;display:flex;flex-direction:column;gap:.35rem}
.a-del{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.18);color:rgba(239,68,68,.7);width:22px;height:22px;flex-shrink:0;cursor:pointer;font-size:.75rem;display:flex;align-items:center;justify-content:center;transition:all .2s}
.a-del:hover{background:rgba(239,68,68,.18)}
.a-add{padding:.42rem 1rem;background:rgba(201,168,76,.06);border:1px dashed rgba(201,168,76,.22);color:rgba(201,168,76,.7);font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.1em;cursor:pointer;width:100%;margin-top:.4rem;transition:all .2s}
.a-add:hover{background:rgba(201,168,76,.1)}
.adm-save{position:sticky;bottom:0;width:100%;padding:1rem;background:#c9a84c;color:#081220;border:none;font-family:'DM Mono',monospace;font-size:.66rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:background .25s}
.adm-save:hover{background:#e8c97a}
.toast{position:fixed;bottom:5rem;right:2rem;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);color:rgba(34,197,94,.85);padding:.5rem 1.2rem;font-family:'DM Mono',monospace;font-size:.64rem;letter-spacing:.1em;z-index:1200;animation:fadeUp .3s ease}

@media(max-width:1100px){
  .hero{grid-template-columns:1fr 42%}
  .about-grid{grid-template-columns:1fr;gap:3rem}
  .counters{grid-template-columns:repeat(3,1fr)}
  .ci:nth-child(3){border-right:none}
  .ci:nth-child(4){border-right:1px solid rgba(201,168,76,.18);border-top:1px solid rgba(201,168,76,.18)}
  .ci:nth-child(5){border-top:1px solid rgba(201,168,76,.18)}
  .ci:nth-child(6){border-top:1px solid rgba(201,168,76,.18)}
  .exp-grid{grid-template-columns:repeat(2,1fr)}
  .creds{grid-template-columns:repeat(2,1fr)}
  .cc:nth-child(2){border-right:none}
  .cc:nth-child(3){border-right:1px solid rgba(201,168,76,.18);border-bottom:1px solid rgba(201,168,76,.18)}
  .foot-top{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .nav-links{display:none}
  .nav-ham{display:flex}
  .hero{grid-template-columns:1fr;height:auto;min-height:100svh}
  .hero-right{height:50vh;min-height:300px}
  .hero-left{padding:80px 5% 2rem}
  .hero-statbar{grid-template-columns:repeat(2,1fr)}
  .hstat:nth-child(2){border-right:none}
  .hstat:nth-child(3){border-right:1px solid rgba(201,168,76,.18);border-top:1px solid rgba(201,168,76,.18)}
  .hstat:nth-child(4){border-top:1px solid rgba(201,168,76,.18)}
  .skills-grid,.contact-grid{grid-template-columns:1fr;gap:3rem}
  .proj-grid{grid-template-columns:1fr}
  .testi-grid,.edu-grid{grid-template-columns:1fr}
  .f-row{grid-template-columns:1fr}
  .foot-top{grid-template-columns:1fr}
  .foot-bot{flex-direction:column;gap:.5rem;text-align:center}
  .creds{grid-template-columns:1fr}
  .cc{border-right:none!important}
  .vals,.offer-row{grid-template-columns:1fr}
  .sc-flow{gap:.5rem}
  .sc-arr{display:none}
  .avail-inner{flex-direction:column;align-items:flex-start;gap:.75rem}
}
@media(max-width:480px){
  .hero-h1{font-size:clamp(2.2rem,9vw,3rem)}
  .counters{grid-template-columns:repeat(2,1fr)}
  .exp-grid{grid-template-columns:1fr 1fr}
}
`;

/* ── HOOKS ── */
function useLiveDate(){
  const [d,setD]=useState(new Date());
  useEffect(()=>{const t=setInterval(()=>setD(new Date()),60000);return()=>clearInterval(t);},[]);
  return d;
}
function useReveal(){
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add("on");obs.unobserve(el);}},{threshold:.07});
    obs.observe(el);return()=>obs.disconnect();
  },[]);
  return ref;
}
function Rev({children,dir="",delay=0,style={}}){
  const ref=useReveal();
  const cls=dir==="l"?"rv-l":"rv";
  return <div ref={ref} className={cls} style={{transitionDelay:`${delay}s`,...style}}>{children}</div>;
}
function Counter({target,suffix="",tag="span"}){
  const [v,setV]=useState(0);const ref=useRef(null);const done=useRef(false);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const n=parseInt(target);
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!done.current&&!isNaN(n)){
        done.current=true;let c=0;
        const t=setInterval(()=>{c=Math.min(c+n/50,n);setV(Math.floor(c));if(c>=n)clearInterval(t);},28);
      }
    },{threshold:.5});
    obs.observe(el);return()=>obs.disconnect();
  },[target]);
  const isN=!isNaN(parseInt(target));
  const content=isN?v+(v>=parseInt(target)?suffix:""):target;
  if(tag==="div") return <div ref={ref} className="ci-n">{content}</div>;
  return <span ref={ref}>{content}</span>;
}
function SkillBar({name,pct}){
  const ref=useRef(null);const fillRef=useRef(null);const done=useRef(false);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!done.current){done.current=true;if(fillRef.current)fillRef.current.style.width=pct+"%";}
    },{threshold:.3});
    obs.observe(el);return()=>obs.disconnect();
  },[pct]);
  return(
    <div className="sbar-item" ref={ref}>
      <div className="sbar-hdr"><span className="sbar-name">{name}</span><span className="sbar-pct">{pct}%</span></div>
      <div className="sbar-track"><div className="sbar-fill" ref={fillRef} style={{transition:"width 1.5s cubic-bezier(.16,1,.3,1)"}}/></div>
    </div>
  );
}
function Quotes({quotes}){
  const [i,setI]=useState(0);const [k,setK]=useState(0);
  const go=useCallback((n)=>{setI(n);setK(x=>x+1);},[]);
  useEffect(()=>{const t=setInterval(()=>go((i+1)%quotes.length),8000);return()=>clearInterval(t);},[i,quotes.length,go]);
  const q=quotes[i];
  return(
    <section className="sec-dark" id="quotes">
      <Rev>
        <div className="sl" style={{justifyContent:"center"}}>Perspective</div>
        <h2 className="st" style={{textAlign:"center"}}>Words Worth <em>Keeping</em></h2>
        <div className="quote-box" key={k}>
          <div className="qmark">"</div>
          <div className="qtext" style={{animation:"qslide .45s ease both"}}>{q.text}</div>
          <div className="qauth">— {q.author}</div>
        </div>
        <div className="qdots">{quotes.map((_,x)=><div key={x} className={`qdot${x===i?" on":""}`} onClick={()=>go(x)}/>)}</div>
        <div className="q-btns">
          <button className="q-btn" onClick={()=>go((i-1+quotes.length)%quotes.length)}>←</button>
          <button className="q-btn" onClick={()=>go((i+1)%quotes.length)}>→</button>
        </div>
      </Rev>
    </section>
  );
}

/* ── ADMIN ── */
const TABS=["Profile","About","Skills","Credentials","Portfolio","Expertise","Journey","Testimonials","Education","Quotes"];
function PwScreen({onAuth,onClose}){
  const [pw,setPw]=useState("");const [err,setErr]=useState(false);
  const check=()=>{if(pw===ADMIN_PASSWORD){onAuth();}else{setErr(true);setPw("");setTimeout(()=>setErr(false),2000);}};
  return(
    <div className="pw-screen">
      <div className="pw-title">Admin Access</div>
      <div className="pw-sub">Enter password to edit content</div>
      <input className="pw-in" type="password" placeholder="••••••••••••" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&check()} autoFocus/>
      {err&&<div className="pw-err">Incorrect password</div>}
      <button className="pw-btn" onClick={check}>Unlock</button>
      <button className="pw-cancel" onClick={onClose}>Cancel</button>
    </div>
  );
}
function Admin({data,onSave,onClose}){
  const [d,setD]=useState(JSON.parse(JSON.stringify(data)));
  const [tab,setTab]=useState("Profile");
  const [saved,setSaved]=useState(false);
  const save=()=>{onSave(d);setSaved(true);setTimeout(()=>setSaved(false),2200);};
  const sp=(path,val)=>setD(prev=>{const n=JSON.parse(JSON.stringify(prev));const keys=path.split(".");let o=n;for(let i=0;i<keys.length-1;i++)o=o[keys[i]];o[keys[keys.length-1]]=val;return n;});
  const F=({label,path,area,rows=3})=>{const val=path.split(".").reduce((o,k)=>o?.[k],d)??"";return(<div className="a-field"><label className="a-lbl">{label}</label>{area?<textarea className="a-area" style={{minHeight:rows*22+16}} value={val} onChange={e=>sp(path,e.target.value)}/>:<input className="a-in" value={val} onChange={e=>sp(path,e.target.value)}/>}</div>);};
  const add=(path,tpl)=>setD(prev=>{const n=JSON.parse(JSON.stringify(prev));const keys=path.split(".");let o=n;for(let i=0;i<keys.length-1;i++)o=o[keys[i]];o[keys[keys.length-1]]=[...(o[keys[keys.length-1]]||[]),tpl];return n;});
  const del=(path,idx)=>setD(prev=>{const n=JSON.parse(JSON.stringify(prev));const keys=path.split(".");let o=n;for(let i=0;i<keys.length-1;i++)o=o[keys[i]];o[keys[keys.length-1]]=o[keys[keys.length-1]].filter((_,i)=>i!==idx);return n;});
  const sli=(path,idx,field,val)=>setD(prev=>{const n=JSON.parse(JSON.stringify(prev));const keys=path.split(".");let o=n;for(let i=0;i<keys.length-1;i++)o=o[keys[i]];o[keys[keys.length-1]][idx][field]=val;return n;});

  const body=()=>{switch(tab){
    case "Profile":return(<><div className="a-sec">Identity</div><F label="Name" path="profile.name"/><F label="Title" path="profile.title"/><F label="Headline" path="profile.headline"/><F label="Sub" path="profile.sub" area/><F label="Open To" path="profile.openTo"/><div className="a-sec">Contact</div><F label="Email" path="profile.email"/><F label="LinkedIn" path="profile.linkedin"/><F label="Twitter" path="profile.twitter"/><F label="CV URL" path="profile.cvUrl"/><F label="Photo URL (/photo.jpg)" path="profile.photo"/></>);
    case "About":return(<><div className="a-sec">Bio</div><F label="Biography" path="about.bio" area rows={7}/><F label="Mission" path="about.mission" area rows={3}/><div className="a-sec">Values</div>{d.values.map((v,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-in" value={v.icon} onChange={e=>sli("values",i,"icon",e.target.value)} placeholder="Icon"/><input className="a-in" value={v.title} onChange={e=>sli("values",i,"title",e.target.value)} placeholder="Title"/><textarea className="a-area" value={v.desc} onChange={e=>sli("values",i,"desc",e.target.value)} style={{minHeight:48}}/></div><button className="a-del" onClick={()=>del("values",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("values",{icon:"◈",title:"Value",desc:"Description"})}>+ Add Value</button></>);
    case "Skills":return(<><div className="a-sec">Skill Bars</div>{d.skills.map((s,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-in" value={s.name} onChange={e=>sli("skills",i,"name",e.target.value)}/><input className="a-in" type="number" min="0" max="100" value={s.pct} onChange={e=>sli("skills",i,"pct",+e.target.value)}/></div><button className="a-del" onClick={()=>del("skills",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("skills",{name:"New Skill",pct:80})}>+ Add Skill</button></>);
    case "Credentials":return(<><div className="a-sec">Credential Cards</div>{d.credentials.map((c,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-in" placeholder="Badge" value={c.badge} onChange={e=>sli("credentials",i,"badge",e.target.value)}/><input className="a-in" placeholder="Institution" value={c.inst} onChange={e=>sli("credentials",i,"inst",e.target.value)}/><input className="a-in" placeholder="Name" value={c.name} onChange={e=>sli("credentials",i,"name",e.target.value)}/><textarea className="a-area" placeholder="Detail" value={c.detail} onChange={e=>sli("credentials",i,"detail",e.target.value)} style={{minHeight:44}}/><input className="a-in" placeholder="Pill label" value={c.pill} onChange={e=>sli("credentials",i,"pill",e.target.value)}/><input className="a-in" placeholder="Logo URL" value={c.logo} onChange={e=>sli("credentials",i,"logo",e.target.value)}/></div><button className="a-del" onClick={()=>del("credentials",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("credentials",{type:"badge",badge:"NEW",inst:"",name:"",detail:"",period:"",pill:"",logo:""})}>+ Add Credential</button></>);
    case "Portfolio":return(<><div className="a-sec">Case Studies</div>{d.projects.map((p,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-in" placeholder="Tag" value={p.tag} onChange={e=>sli("projects",i,"tag",e.target.value)}/><input className="a-in" placeholder="Title" value={p.title} onChange={e=>sli("projects",i,"title",e.target.value)}/><textarea className="a-area" value={p.desc} onChange={e=>sli("projects",i,"desc",e.target.value)}/>{p.impacts.map((imp,j)=>(<div key={j} style={{display:"flex",gap:".4rem"}}><input className="a-in" value={imp.n} onChange={e=>{const n=JSON.parse(JSON.stringify(d));n.projects[i].impacts[j].n=e.target.value;setD(n);}} style={{width:"42%"}}/><input className="a-in" value={imp.d} onChange={e=>{const n=JSON.parse(JSON.stringify(d));n.projects[i].impacts[j].d=e.target.value;setD(n);}}/></div>))}</div><button className="a-del" onClick={()=>del("projects",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("projects",{tag:"New",title:"Case Study",desc:"Description",impacts:[{n:"X%↑",d:"Result"},{n:"Y%↓",d:"Result"}]})}>+ Add Case Study</button></>);
    case "Expertise":return(<><div className="a-sec">Expertise Cards</div>{d.expertise.map((e,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-in" placeholder="Number" value={e.n} onChange={ev=>sli("expertise",i,"n",ev.target.value)}/><input className="a-in" placeholder="Title" value={e.t} onChange={ev=>sli("expertise",i,"t",ev.target.value)}/><textarea className="a-area" value={e.d} onChange={ev=>sli("expertise",i,"d",ev.target.value)} style={{minHeight:44}}/></div><button className="a-del" onClick={()=>del("expertise",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("expertise",{n:"13",t:"New Domain",d:"Description"})}>+ Add Domain</button></>);
    case "Journey":return(<><div className="a-sec">Career Timeline</div>{d.journey.map((j,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-in" value={j.period} onChange={e=>sli("journey",i,"period",e.target.value)}/><input className="a-in" value={j.role} onChange={e=>sli("journey",i,"role",e.target.value)}/><input className="a-in" value={j.org} onChange={e=>sli("journey",i,"org",e.target.value)}/><textarea className="a-area" value={j.desc} onChange={e=>sli("journey",i,"desc",e.target.value)}/></div><button className="a-del" onClick={()=>del("journey",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("journey",{period:"Year–Year",role:"Role",org:"Org",desc:"Description"})}>+ Add Position</button></>);
    case "Testimonials":return(<><div className="a-sec">Testimonials</div>{d.testimonials.map((t,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><textarea className="a-area" value={t.text} onChange={e=>sli("testimonials",i,"text",e.target.value)} style={{minHeight:68}}/><input className="a-in" value={t.name} onChange={e=>sli("testimonials",i,"name",e.target.value)}/><input className="a-in" value={t.role} onChange={e=>sli("testimonials",i,"role",e.target.value)}/></div><button className="a-del" onClick={()=>del("testimonials",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("testimonials",{text:"Testimonial.",name:"Name",role:"Role"})}>+ Add</button></>);
    case "Education":return(<><div className="a-sec">Education Cards</div>{d.education.map((e,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><input className="a-in" value={e.inst} onChange={ev=>sli("education",i,"inst",ev.target.value)}/><input className="a-in" value={e.degree} onChange={ev=>sli("education",i,"degree",ev.target.value)}/><textarea className="a-area" value={e.detail} onChange={ev=>sli("education",i,"detail",ev.target.value)} style={{minHeight:44}}/><label style={{fontSize:".7rem",color:"#7a8fa8",display:"flex",alignItems:"center",gap:".4rem"}}><input type="checkbox" checked={e.active} onChange={ev=>sli("education",i,"active",ev.target.checked)}/> Show "Active" badge</label></div><button className="a-del" onClick={()=>del("education",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("education",{inst:"Institution",degree:"Degree",detail:"Details",active:false})}>+ Add Education</button></>);
    case "Quotes":return(<><div className="a-sec">Quotes</div>{d.quotes.map((q,i)=>(<div key={i} className="a-item"><div className="a-item-fields"><textarea className="a-area" value={q.text} onChange={e=>sli("quotes",i,"text",e.target.value)} style={{minHeight:64}}/><input className="a-in" value={q.author} onChange={e=>sli("quotes",i,"author",e.target.value)}/></div><button className="a-del" onClick={()=>del("quotes",i)}>✕</button></div>))}<button className="a-add" onClick={()=>add("quotes",{text:"Quote.",author:"Rajendra Royal"})}>+ Add Quote</button></>);
    default:return null;
  }};
  return(<div className="admin-overlay" onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="admin-panel"><div className="adm-head"><div className="adm-head-title">Edit Content</div><button className="adm-close" onClick={onClose}>✕</button></div><div className="adm-tabs">{TABS.map(t=><button key={t} className={`a-tab${tab===t?" on":""}`} onClick={()=>setTab(t)}>{t}</button>)}</div><div className="adm-body">{body()}</div><button className="adm-save" onClick={save}>Save All Changes</button></div>{saved&&<div className="toast">Changes saved ✓</div>}</div>);
}

const LiSvg=()=><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const EmSvg=()=><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;

function ContactForm({email}){
  const [form,setForm]=useState({name:"",email:"",phone:"",org:"",msg:""});
  const [status,setStatus]=useState("idle"); // idle | sending | sent | error
  const set=(k,v)=>setForm(f=>({...f,[k]:v}));
  const submit=async()=>{
    if(!form.name||!form.email||!form.msg){alert("Please fill in Name, Email and Message.");return;}
    setStatus("sending");
    try{
      const res=await fetch("https://formspree.io/f/xykazgaq",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name:form.name,email:form.email,phone:form.phone,organisation:form.org,message:form.msg})
      });
      if(res.ok){setStatus("sent");setForm({name:"",email:"",phone:"",org:"",msg:""});}
      else{setStatus("error");}
    }catch{setStatus("error");}
  };
  if(status==="sent") return(
    <div style={{padding:"2.5rem",border:"1px solid rgba(34,197,94,.3)",background:"rgba(34,197,94,.06)",textAlign:"center"}}>
      <div style={{fontSize:"2rem",marginBottom:".8rem"}}>✓</div>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.3rem",color:"#f5f7fa",marginBottom:".5rem"}}>Message Sent Successfully</div>
      <div style={{fontSize:".82rem",color:"#7a8fa8",marginBottom:"1.4rem"}}>Thank you — Rajendra will be in touch shortly.</div>
      <button className="btn-gold" onClick={()=>setStatus("idle")}>Send Another Message</button>
    </div>
  );
  return(
    <div>
      <div className="f-row">
        <div><label className="f-lbl">Name *</label><input type="text" className="f-in" placeholder="Your full name" value={form.name} onChange={e=>set("name",e.target.value)}/></div>
        <div><label className="f-lbl">Email *</label><input type="email" className="f-in" placeholder="your@email.com" value={form.email} onChange={e=>set("email",e.target.value)}/></div>
      </div>
      <label className="f-lbl">Phone</label>
      <input type="tel" className="f-in" placeholder="+91 00000 00000" value={form.phone} onChange={e=>set("phone",e.target.value)}/>
      <label className="f-lbl">Organisation / Role</label>
      <input type="text" className="f-in" placeholder="Company and your position" value={form.org} onChange={e=>set("org",e.target.value)}/>
      <label className="f-lbl">How can I help? *</label>
      <textarea className="f-area" placeholder="Tell me about your project or inquiry..." value={form.msg} onChange={e=>set("msg",e.target.value)}/>
      {status==="error"&&<div style={{fontSize:".78rem",color:"rgba(239,68,68,.8)",margin:".5rem 0"}}>Something went wrong. Please email directly: {email}</div>}
      <button className="btn-gold" style={{marginTop:"1rem",opacity:status==="sending"?.6:1,cursor:status==="sending"?"not-allowed":"pointer"}} onClick={submit} disabled={status==="sending"}>
        {status==="sending"?"Sending...":"Send Message"}
      </button>
    </div>
  );
}

export default function App(){
  const [data,setData]=useState(()=>{try{const s=localStorage.getItem("rr_v6");return s?{...DATA,...JSON.parse(s)}:DATA;}catch{return DATA;}});
  const [adminOpen,setAdminOpen]=useState(false);
  const [pwOpen,setPwOpen]=useState(false);
  const [authed,setAuthed]=useState(false);
  const [navScrolled,setNavScrolled]=useState(false);
  const [mobOpen,setMobOpen]=useState(false);
  const date=useLiveDate();

  const save=(d)=>{setData(d);try{localStorage.setItem("rr_v6",JSON.stringify(d));}catch{}};
  useEffect(()=>{
    const fn=()=>setNavScrolled(window.scrollY>80);
    window.addEventListener("scroll",fn,{passive:true});
    return()=>window.removeEventListener("scroll",fn);
  },[]);
  useEffect(()=>{
    const sections=document.querySelectorAll("section[id]");
    const links=document.querySelectorAll(".nav-links a");
    const fn=()=>{let cur="";sections.forEach(s=>{if(window.scrollY>=s.offsetTop-100)cur=s.id;});links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+cur));};
    window.addEventListener("scroll",fn,{passive:true});
    return()=>window.removeEventListener("scroll",fn);
  },[]);

  const fmt=d=>d.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"})+" · "+d.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});
  const go=id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  const openAdmin=()=>{if(authed){setAdminOpen(true);}else{setPwOpen(true);}};
  const onAuth=()=>{setAuthed(true);setPwOpen(false);setAdminOpen(true);};
  const navLinks=[["about","About"],["skills","Skills"],["portfolio","Portfolio"],["expertise","Expertise"],["journey","Journey"],["education","Education"],["contact","Contact"]];

  /* particles */
  const particles=Array.from({length:20},(_,i)=>({
    left:Math.random()*100,top:Math.random()*100,
    size:Math.random()<.5?1:2,
    dur:8+Math.random()*12,delay:Math.random()*8,
  }));

  return(
    <>
      <style>{css}</style>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-tr">
          {[...data.ticker,...data.ticker].map((t,i)=>(
            <span key={i} className="ticker-it">{t}<span className="ticker-sep">◆</span></span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav className={`nav${navScrolled?" scrolled":""}`}>
        <button className="nav-brand" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
          <span className="nav-brand-n">Rajendra <em>Royal</em></span>
        </button>
        <ul className="nav-links">
          {navLinks.map(([id,lbl])=><li key={id}><a href={`#${id}`}>{lbl}</a></li>)}
        </ul>
        <div className="nav-right">
          <span className="nav-dt">{fmt(date)}</span>
          <button className="nav-cta" onClick={()=>go("contact")}>Get In Touch</button>
          <button className="nav-ham" onClick={()=>setMobOpen(true)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mob-menu${mobOpen?" open":""}`}>
        <button className="mob-close" onClick={()=>setMobOpen(false)}>✕</button>
        {navLinks.map(([id,lbl])=>(
          <a key={id} href={`#${id}`} onClick={()=>setMobOpen(false)}>{lbl}</a>
        ))}
        <button className="btn-gold" style={{marginTop:"1rem"}} onClick={()=>{setMobOpen(false);go("contact");}}>Get In Touch</button>
      </div>

      {/* HERO — 100VH FULL SCREEN */}
      <section className="hero" id="hero">
        <div className="hero-bg"/>
        <div className="hero-grid"/>
        <div className="particles" aria-hidden="true">
          {particles.map((p,i)=>(
            <div key={i} className="particle" style={{left:`${p.left}%`,top:`${p.top}%`,width:`${p.size}px`,height:`${p.size}px`,animationDuration:`${p.dur}s`,animationDelay:`${p.delay}s`}}/>
          ))}
        </div>

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-chips">
            {["IIM Calcutta","IIT Delhi","Dual MBA","Six Sigma","SSBM Geneva · DBA"].map(c=>(
              <span key={c} className="hero-chip">{c}</span>
            ))}
          </div>
          <div className="hero-kicker">{data.profile.title}</div>
          <h1 className="hero-h1">
            {data.profile.name.split(" ")[0]}
            <em>{data.profile.name.split(" ").slice(1).join(" ")}</em>
            <strong>{data.profile.headline}</strong>
          </h1>
          <div className="hero-rule"/>
          <p className="hero-sub">{data.profile.sub}</p>
          <div className="hero-roles">
            {["Supply Chain Leader","Operations Excellence","CXO & Board Advisory","Keynote Speaker","Doctoral Researcher"].map(r=>(
              <span key={r} className="hero-role">{r}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-gold" onClick={()=>go("contact")}>Book a Consultation</button>
            <button className="btn-ghost" onClick={()=>go("portfolio")}>View Portfolio</button>
          </div>
        </div>

        {/* RIGHT — LARGE PHOTO */}
        <div className="hero-right">
          <div className="hero-photo">
            <div className="hc tl"/><div className="hc br"/>
            {data.profile.photo
              ?<img src={data.profile.photo} alt={data.profile.name}/>
              :<div className="hero-placeholder"/>
            }
            <div className="hero-nametag">
              <div className="hero-nametag-n">{data.profile.name}</div>
              <div className="hero-nametag-r">{data.profile.title} · {data.profile.subtitle}</div>
            </div>
          </div>
          <div className="hero-statbar">
            <div className="hstat"><div className="hstat-n"><Counter target="20" suffix="+"/></div><div className="hstat-l">Years Exp.</div></div>
            <div className="hstat"><div className="hstat-n"><Counter target="6" suffix=""/></div><div className="hstat-l">Credentials</div></div>
            <div className="hstat"><div className="hstat-n"><Counter target="12" suffix="+"/></div><div className="hstat-l">Domains</div></div>
            <div className="hstat"><div className="hstat-n">Dr.</div><div className="hstat-l">Researcher</div></div>
          </div>
        </div>
      </section>

      {/* AVAILABILITY BANNER — psychological impact, first thing after fold */}
      <div className="avail-banner">
        <div className="avail-inner">
          <div className="avail-live">
            <span className="avail-dot"/>
            <span className="avail-live-txt">Currently Available</span>
          </div>
          <span className="avail-stmt">"Open to the right conversation — senior leadership, consulting, or board advisory."</span>
          <div className="avail-div"/>
          <div className="avail-roles">
            {["VP / Director Supply Chain","Head of Operations","CXO & Board Advisory","Consulting Engagements","Speaking & Research"].map(r=>(
              <span key={r} className="avail-role">{r}</span>
            ))}
          </div>
        </div>
      </div>

      {/* RECOGNITION */}
      <div className="media-bar">
        <div className="media-inner">
          <span className="media-lbl">Recognised By</span>
          <div className="media-div"/>
          <div className="media-items">
            {["IIM Calcutta","IIT Delhi","SSBM Geneva","Six Sigma Council","Supply Chain India","Logistics Leaders Network"].map(m=>(
              <span key={m} className="media-item">{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="sec-alt" id="about">
        <div className="about-grid">
          <Rev dir="l">
            <div>
              <div className="portrait">
                <div className="pc2 tl"/><div className="pc2 br"/>
                {data.profile.photo
                  ?<img src={data.profile.photo} alt={data.profile.name}/>
                  :<div className="portrait-init">RR</div>
                }
                <div className="p-ov"><div className="p-name">{data.profile.name}</div><div className="p-role">{data.profile.title}</div></div>
              </div>
              {["📍 "+data.profile.location,"🔬 Doctoral Researcher · SSBM Geneva","🏛️ IIM Calcutta · IIT Delhi Alumni","📦 20+ Years SC & Operations","🎤 Speaker · Consultant · Researcher"].map((f,i)=>(
                <div key={i} className="aq"><span className="aq-dot"/>{f}</div>
              ))}
            </div>
          </Rev>
          <Rev>
            <div>
              <div className="sl">Who I Am</div>
              <h2 className="st">A Leader Shaping the Future of <em>Supply Chain</em></h2>
              {data.about.bio.split("\n\n").map((p,i)=><p key={i} className="about-bio p">{p}</p>)}
              <div className="mission-box">
                <div className="mission-lbl">Mission</div>
                <div className="mission-txt">"{data.about.mission}"</div>
              </div>
              <div className="vals">
                {data.values.map((v,i)=>(
                  <div key={i} className="val">
                    <div className="val-icon">{v.icon}</div>
                    <div className="val-title">{v.title}</div>
                    <div className="val-desc">{v.desc}</div>
                  </div>
                ))}
              </div>
              <div className="offer-row">
                {data.offers.map((o,i)=>(
                  <div key={i} className="offer">
                    <div className="offer-lbl">{o.label}</div>
                    <div className="offer-txt">{o.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </Rev>
        </div>
      </section>

      {/* COUNTERS */}
      <div className="sec-dark" style={{padding:0}}>
        <div className="counters">
          {[{t:"20",s:"+",l:"Years Experience"},{t:"6",s:"",l:"Executive Credentials"},{t:"12",s:"+",l:"Core Domains"},{t:"2",s:"×",l:"MBA Degrees"},{t:"100",s:"%",l:"Commitment"},{t:"Dr.",s:"",l:"Doctoral Researcher\nBusiness & Operations"}].map((c,i)=>(
            <div key={i} className="ci">
              <Counter target={c.t} suffix={c.s} tag="div"/>
              <div className="ci-l" style={{whiteSpace:"pre-line"}}>{c.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CREDENTIALS */}
      <div className="creds">
        {data.credentials.map((c,i)=>(
          <div key={i} className="cc">
            {c.logo?(
              <div className="cc-logo">
                <img src={c.logo} alt={c.inst} onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="block";}}/>
                <div className="cc-logo-fb" style={{display:"none"}}>{c.badge}</div>
              </div>
            ):(
              <div className="cc-badge" style={c.active?{background:"rgba(201,168,76,.16)",borderColor:"#c9a84c",boxShadow:"0 0 18px rgba(201,168,76,.18)"}:{}}>{c.badge}</div>
            )}
            <div className="cc-inst">{c.inst}</div>
            <div className="cc-name">{c.name}</div>
            <div className="cc-detail">{c.detail}</div>
            {c.pill&&<div className="cc-pill">{c.pill}</div>}
          </div>
        ))}
      </div>

      {/* SKILLS */}
      <section className="sec-alt" id="skills">
        <Rev>
          <div className="sl">Skills & Expertise</div>
          <h2 className="st">Competency <em>Depth</em></h2>
          <p className="sd">Proficiency built across two decades of practice, study, and delivery.</p>
          <div className="skills-grid">
            <div>
              <div className="sl" style={{marginBottom:"1.5rem"}}>Core Proficiencies</div>
              {data.skills.map((s,i)=><SkillBar key={i} name={s.name} pct={s.pct}/>)}
            </div>
            <div className="tag-sec">
              <div className="tag-grp">
                <div className="tag-grp-lbl">Qualifications & Certifications</div>
                <div className="tag-cloud">
                  {["MBA Strategy & Leadership","MBA Business Analytics","IIM Calcutta EPOM","IIT Delhi SC Analytics","Six Sigma"].map(t=><span key={t} className="tag cert">{t}</span>)}
                  <span className="tag cert" style={{borderColor:"#c9a84c",background:"rgba(201,168,76,.14)"}}>Doctoral Researcher 🔬</span>
                </div>
              </div>
              <div className="tag-grp">
                <div className="tag-grp-lbl">Tools & Technologies</div>
                <div className="tag-cloud">{data.toolTags.map(t=><span key={t} className="tag tools">{t}</span>)}</div>
              </div>
              <div className="tag-grp">
                <div className="tag-grp-lbl">Leadership Strengths</div>
                <div className="tag-cloud">{data.softTags.map(t=><span key={t} className="tag soft">{t}</span>)}</div>
              </div>
            </div>
          </div>
        </Rev>
      </section>

      {/* SC INFOGRAPHIC */}
      <section className="sec-dark">
        <Rev>
          <div className="sl">Supply Chain Mastery</div>
          <h2 className="st">The <em>Complete</em> Supply Chain</h2>
          <p className="sd">End-to-end expertise across every node of the value chain.</p>
          <div className="sc-flow">
            {data.scNodes.map((node,i)=>(
              <React.Fragment key={i}>
                <div className="sc-node">
                  <div className="sc-icon">{node.icon}</div>
                  <div className="sc-lbl">{node.label}</div>
                </div>
                {i<data.scNodes.length-1&&(
                  <div className="sc-arr">
                    <svg viewBox="0 0 26 13" fill="none" width="26" height="13"><path d="M0 6.5h22M16 1l6 5.5-6 5.5" stroke="#c9a84c" strokeWidth="1.2"/></svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="sc-metrics">
            {data.scMetrics.map((m,i)=>(
              <div key={i} className="sc-m">
                <div className="sc-mn">{m.n}</div>
                <div className="sc-mt">{m.t}</div>
                <div className="sc-md">{m.d}</div>
              </div>
            ))}
          </div>
        </Rev>
      </section>

      {/* PORTFOLIO */}
      <section className="sec-alt" id="portfolio">
        <Rev>
          <div className="sl">Portfolio</div>
          <h2 className="st">Transformational <em>Work</em></h2>
          <p className="sd">Selected initiatives demonstrating applied expertise and measurable impact at enterprise scale.</p>
          <div className="proj-grid">
            {data.projects.map((p,i)=>(
              <div key={i} className="proj-card">
                <span className="proj-tag">{p.tag}</span>
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-impact">
                  {p.impacts.map((imp,j)=>(
                    <div key={j}><div className="impact-n">{imp.n}</div><div className="impact-d">{imp.d}</div></div>
                  ))}
                </div>
                <button className="proj-link">Case Study →</button>
              </div>
            ))}
          </div>
        </Rev>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="cta-inner">
          <div className="cta-pill"><span className="cta-dot"/>Available for Consulting & Advisory</div>
          <h3>Ready to <em>Transform</em> Your Supply Chain?</h3>
          <p>Whether you need a strategic review, an interim operations leader, a keynote speaker, or a long-term transformation partner — let's talk about how 20+ years of expertise can move your business forward.</p>
          <div className="cta-btns">
            <button className="btn-gold" onClick={()=>go("contact")}>Book a Consultation</button>
            <button className="btn-ghost" onClick={()=>window.open(data.profile.cvUrl,"_blank","noopener,noreferrer")}>Download CV</button>
          </div>
        </div>
      </div>

      {/* EXPERTISE */}
      <section className="sec-dark" id="expertise">
        <Rev>
          <div className="sl">Core Expertise</div>
          <h2 className="st">Domains of <em>Mastery</em></h2>
          <div className="exp-grid">
            {data.expertise.map((e,i)=>(
              <div key={i} className="exp-card">
                <div className="exp-n">{e.n}</div>
                <div className="exp-t">{e.t}</div>
                <div className="exp-d">{e.d}</div>
              </div>
            ))}
          </div>
        </Rev>
      </section>

      {/* JOURNEY */}
      <section className="sec-alt" id="journey">
        <Rev>
          <div className="sl">Career Journey</div>
          <h2 className="st">20+ Years of <em>Impact</em></h2>
          <div className="t-line">
            {data.journey.map((j,i)=>(
              <div key={i} className="t-item">
                <div className="t-period">{j.period}</div>
                <div className="t-role">{j.role}</div>
                <div className="t-org">{j.org}</div>
                <div className="t-desc">{j.desc}</div>
              </div>
            ))}
          </div>
        </Rev>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec-dark" id="testimonials">
        <Rev>
          <div className="sl">Social Proof</div>
          <h2 className="st">What <em>Colleagues Say</em></h2>
          <div className="testi-grid">
            {data.testimonials.map((t,i)=>(
              <div key={i} className="testi-card">
                <div className="testi-q">"</div>
                <div className="testi-txt">{t.text}</div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </Rev>
      </section>

      {/* EDUCATION */}
      <section className="sec-alt" id="education">
        <Rev>
          <div className="sl">Education & Certifications</div>
          <h2 className="st">Academic <em>Excellence</em></h2>
          <div className="edu-grid">
            {data.education.map((e,i)=>(
              <div key={i} className="edu-card" style={e.active?{borderColor:"rgba(201,168,76,.4)",background:"rgba(201,168,76,.03)"}:{}}>
                {e.active&&<div className="edu-active">Active · 2026</div>}
                <div className="edu-inst">{e.inst}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-detail">{e.detail}</div>
              </div>
            ))}
          </div>
        </Rev>
      </section>

      {/* QUOTES */}
      <Quotes quotes={data.quotes}/>

      {/* CONTACT */}
      <section className="sec-dark" id="contact">
        <Rev>
          <div className="sl">Get In Touch</div>
          <h2 className="st">Let's <em>Connect</em></h2>
          <div className="contact-grid">
            <div>
              <div className="contact-h">Open to the Right Conversation</div>
              <p className="contact-p">Whether you're looking for a strategic advisor, guest speaker, research collaborator, or senior operations leader — I'd be glad to explore how we can create value together.</p>
              <a href={`https://${data.profile.linkedin}`} target="_blank" rel="noreferrer" className="soc-link"><div className="soc-icon"><LiSvg/></div><div><div className="soc-name">LinkedIn</div><div className="soc-handle">{data.profile.linkedin}</div></div></a>
              <a href={`mailto:${data.profile.email}`} className="soc-link"><div className="soc-icon"><EmSvg/></div><div><div className="soc-name">Email</div><div className="soc-handle">{data.profile.email}</div></div></a>
            </div>
            <ContactForm email={data.profile.email}/>
          </div>
        </Rev>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-top">
          <div>
            <div className="foot-brand">Rajendra <em>Royal</em></div>
            <div className="foot-tag">{data.profile.title} · Doctoral Researcher · Speaker · Consultant</div>
          </div>
          <div>
            <div className="foot-col-h">Navigate</div>
            {[["#about","About"],["#skills","Skills"],["#portfolio","Portfolio"],["#expertise","Expertise"],["#education","Education"],["#contact","Contact"]].map(([h,l])=>(
              <a key={h} href={h} className="foot-link">{l}</a>
            ))}
          </div>
          <div>
            <div className="foot-col-h">Expertise</div>
            {["Supply Chain Management","Warehouse Operations","Business Analytics","Process Excellence","Strategic Leadership"].map(e=>(
              <span key={e} className="foot-link">{e}</span>
            ))}
          </div>
        </div>
        <div className="foot-bot">
          <div className="foot-copy">© {new Date().getFullYear()} Rajendra Royal · All Rights Reserved</div>
          <div className="foot-dba">Doctoral Researcher · Business & Operations · SSBM Geneva</div>
        </div>
      </footer>

      {/* ADMIN */}
      <button className="admin-fab" onClick={openAdmin} title="Edit Content">✏️</button>
      {pwOpen&&<PwScreen onAuth={onAuth} onClose={()=>setPwOpen(false)}/>}
      {adminOpen&&<Admin data={data} onSave={save} onClose={()=>setAdminOpen(false)}/>}
    </>
  );
}
