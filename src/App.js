<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rajendra Royal | Supply Chain Leader | Doctoral Researcher</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#081220; --navy-m:#0c1c36; --navy-l:#163058;
  --gold:#c9a84c; --gold-l:#e8c97a; --gold-br:rgba(201,168,76,.22);
  --white:#f5f7fa; --grey:#7a8fa8; --grey-l:#aabbcc;
  --border:rgba(201,168,76,.18); --card:rgba(12,28,54,.8);
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:var(--navy);color:var(--white);overflow-x:hidden;line-height:1.6;-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:var(--navy)}::-webkit-scrollbar-thumb{background:var(--gold)}

@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.7)}}
@keyframes lineGrow{from{width:0}to{width:72px}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}
@keyframes particleDrift{0%{transform:translateY(0) translateX(0);opacity:0}10%{opacity:.6}90%{opacity:.2}100%{transform:translateY(-120vh) translateX(40px);opacity:0}}
@keyframes rotateSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes expandLine{from{transform:scaleX(0);transform-origin:left}to{transform:scaleX(1);transform-origin:left}}
@keyframes qslide{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}

.reveal{opacity:0;transform:translateY(20px);transition:opacity .75s ease,transform .75s ease}
.reveal.on{opacity:1;transform:translateY(0)}
.reveal-l{opacity:0;transform:translateX(-20px);transition:opacity .75s ease,transform .75s ease}
.reveal-l.on{opacity:1;transform:translateX(0)}
.reveal-r{opacity:0;transform:translateX(20px);transition:opacity .75s ease,transform .75s ease}
.reveal-r.on{opacity:1;transform:translateX(0)}

/* ━━━ TICKER (GOLD BAR) ━━━ */
.ticker{background:var(--gold);overflow:hidden;padding:.5rem 0;position:relative;z-index:10}
.ticker-track{display:flex;width:max-content;animation:ticker 40s linear infinite;white-space:nowrap}
.ticker-track:hover{animation-play-state:paused}
.ticker-item{padding:0 2.5rem;font-size:.74rem;font-weight:700;letter-spacing:.06em;color:var(--navy);display:flex;align-items:center;gap:.8rem}
.ticker-sep{color:rgba(8,18,32,.3);font-size:.55rem}

/* ━━━ NAV — CLEAN, NO CLUTTER ━━━ */
.nav{
  position:fixed;top:32px;left:0;right:0;z-index:200;
  height:60px;padding:0 5%;
  display:flex;align-items:center;justify-content:space-between;
  transition:all .4s;
}
.nav.scrolled{
  top:0;
  background:rgba(8,18,32,.97);
  backdrop-filter:blur(24px);
  border-bottom:1px solid var(--border);
  height:64px;
  box-shadow:0 2px 20px rgba(0,0,0,.25);
}
/* Logo — name only, clean */
.nav-brand{display:flex;flex-direction:column;cursor:pointer;background:none;border:none;padding:0;text-align:left;gap:0}
.nav-brand-name{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:500;color:var(--white);line-height:1;letter-spacing:.02em}
.nav-brand-name em{font-style:italic;color:var(--gold)}
/* Nav links */
.nav-links{display:flex;gap:2.2rem;list-style:none}
.nav-links a{font-family:'DM Mono',monospace;font-size:.6rem;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:rgba(245,247,250,.55);text-decoration:none;transition:color .25s;position:relative;padding-bottom:2px}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:var(--gold);transition:width .3s}
.nav-links a:hover,.nav-links a.active{color:var(--gold)}
.nav-links a:hover::after,.nav-links a.active::after{width:100%}
/* Right side — date/time only, no CTA clutter */
.nav-right{display:flex;align-items:center;gap:1.4rem}
.nav-datetime{font-family:'DM Mono',monospace;font-size:.6rem;color:rgba(245,247,250,.35);letter-spacing:.06em;white-space:nowrap}
.nav-cta-single{padding:.4rem 1.15rem;background:transparent;border:1px solid rgba(201,168,76,.4);color:var(--gold);font-family:'DM Mono',monospace;font-size:.6rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:all .28s}
.nav-cta-single:hover{background:var(--gold);color:var(--navy)}

/* ━━━ HERO — FULL 100VH, FORTUNE 500 EXECUTIVE ━━━ */
.hero{
  height:100vh;min-height:700px;
  position:relative;overflow:hidden;
  display:grid;grid-template-columns:1fr 44%;
  align-items:center;
}
/* Animated dark background */
.hero-bg{
  position:absolute;inset:0;
  background:
    radial-gradient(ellipse 80% 70% at 85% 50%,rgba(201,168,76,.055) 0%,transparent 60%),
    radial-gradient(ellipse 50% 70% at 5% 80%,rgba(22,48,88,.75) 0%,transparent 55%),
    linear-gradient(155deg,#0a1628 0%,#081220 55%,#06101c 100%);
}
/* Subtle animated grid lines */
.hero-grid{
  position:absolute;inset:0;
  background-image:linear-gradient(rgba(201,168,76,.028) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(201,168,76,.028) 1px,transparent 1px);
  background-size:64px 64px;
}
/* Floating particles */
.particles{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.particle{
  position:absolute;width:1px;height:1px;
  background:var(--gold);border-radius:50%;
  animation:particleDrift linear infinite;
}
/* Left content */
.hero-left{
  position:relative;z-index:3;
  padding:0 5% 0 6%;
  display:flex;flex-direction:column;
  justify-content:center;
  padding-top:60px;
}
/* Small credential strip at top */
.hero-cred-strip{
  display:flex;flex-wrap:wrap;gap:.4rem;
  margin-bottom:1.8rem;
  animation:fadeUp .6s .1s ease both;
}
.hero-cred-chip{
  padding:.2rem .7rem;
  border:1px solid rgba(201,168,76,.25);
  font-family:'DM Mono',monospace;font-size:.52rem;letter-spacing:.1em;text-transform:uppercase;
  color:rgba(201,168,76,.65);
  background:rgba(201,168,76,.04);
}
/* Main headline */
.hero-kicker{
  font-family:'DM Mono',monospace;font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;
  color:rgba(201,168,76,.7);margin-bottom:.9rem;
  display:flex;align-items:center;gap:.8rem;
  animation:fadeUp .6s .18s ease both;
}
.hero-kicker::before{content:'';width:28px;height:1px;background:rgba(201,168,76,.6)}
.hero h1{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.6rem,4.8vw,4.5rem);
  font-weight:300;line-height:1.05;
  letter-spacing:-.02em;color:var(--white);
  margin-bottom:.4rem;
  animation:fadeUp .7s .24s ease both;
}
.hero h1 em{font-style:italic;color:var(--gold);display:block;font-weight:300}
.hero h1 strong{font-weight:600;display:block}
/* Gold rule */
.hero-rule{
  height:1px;width:0;
  background:linear-gradient(90deg,var(--gold),rgba(201,168,76,.2),transparent);
  margin:1.6rem 0;
  animation:lineGrow 1.2s .55s ease both;
}
/* Subline */
.hero-sub{
  font-size:.9rem;color:var(--grey-l);line-height:1.8;
  max-width:500px;margin-bottom:1.6rem;
  animation:fadeUp .7s .32s ease both;
}
/* Role tags */
.hero-roles{
  display:flex;flex-wrap:wrap;gap:.42rem;margin-bottom:2rem;
  animation:fadeUp .7s .38s ease both;
}
.hero-role{
  padding:.26rem .78rem;
  border-left:2px solid var(--gold);
  background:rgba(201,168,76,.05);
  font-size:.71rem;font-weight:500;letter-spacing:.04em;color:var(--grey-l);
}
/* CTAs */
.hero-btns{
  display:flex;gap:.75rem;flex-wrap:wrap;
  animation:fadeUp .7s .44s ease both;
}
.btn-gold{padding:.78rem 1.9rem;background:var(--gold);color:var(--navy);font-family:'DM Mono',monospace;font-weight:700;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;border:none;cursor:pointer;transition:all .28s}
.btn-gold:hover{background:var(--gold-l);transform:translateY(-2px);box-shadow:0 10px 28px rgba(201,168,76,.3)}
.btn-ghost{padding:.78rem 1.9rem;background:transparent;color:var(--white);font-family:'DM Mono',monospace;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;border:1px solid rgba(245,247,250,.2);cursor:pointer;transition:all .28s}
.btn-ghost:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-2px)}

/* Right — LARGE PHOTO */
.hero-right{
  position:relative;z-index:3;height:100%;
  display:flex;flex-direction:column;
}
.hero-photo-wrap{
  flex:1;position:relative;overflow:hidden;
}
/* Photo itself fills entire right column height */
.hero-photo-wrap img{
  width:100%;height:100%;object-fit:cover;object-position:center top;
  display:block;
}
/* Gradient overlay — fades left into content */
.hero-photo-wrap::before{
  content:'';position:absolute;inset:0;z-index:1;
  background:linear-gradient(to right,rgba(8,18,32,.92) 0%,rgba(8,18,32,.5) 25%,rgba(8,18,32,.1) 55%,transparent 100%);
}
/* Bottom overlay with name */
.hero-photo-wrap::after{
  content:'';position:absolute;bottom:0;left:0;right:0;height:220px;z-index:1;
  background:linear-gradient(transparent,rgba(8,18,32,.95));
}
/* Photo placeholder when no photo */
.hero-photo-placeholder{
  width:100%;height:100%;
  background:linear-gradient(160deg,#1a2e4a,#0c1c36,#081220);
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
}
.hero-photo-placeholder::before{
  content:'RR';font-family:'Cormorant Garamond',serif;
  font-size:16rem;font-weight:300;color:rgba(201,168,76,.05);
  letter-spacing:-.05em;user-select:none;position:absolute;
}
/* Decorative corners */
.hero-corner{position:absolute;width:48px;height:48px;border-color:var(--gold);border-style:solid;z-index:4}
.hero-corner.tl{top:0;right:0;border-width:2px 2px 0 0}
.hero-corner.br{bottom:0;left:0;border-width:0 0 2px 2px}
/* Name overlay at bottom of photo */
.hero-name-tag{
  position:absolute;bottom:0;left:0;right:0;z-index:5;
  padding:1.8rem 2.2rem 1.4rem;
}
.hero-name-tag-n{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:500;color:#fff;line-height:1}
.hero-name-tag-r{font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-top:.3rem}
/* Stat strip at very bottom of photo */
.hero-stat-bar{
  display:grid;grid-template-columns:repeat(4,1fr);
  background:rgba(8,18,32,.94);
  border-top:1px solid var(--border);
  flex-shrink:0;
}
.h-stat{padding:1.1rem .8rem;text-align:center;border-right:1px solid var(--border)}
.h-stat:last-child{border-right:none}
.h-stat-n{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:300;color:var(--gold);line-height:1;letter-spacing:-.02em}
.h-stat-l{font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.1em;text-transform:uppercase;color:var(--grey);margin-top:.22rem}

/* ━━━ AVAILABILITY BANNER — right after hero, high psychological impact ━━━ */
.avail-banner{
  background:linear-gradient(135deg,#0d1e35,#0c1c36);
  border-top:1px solid var(--border);
  border-bottom:1px solid var(--border);
  padding:1.1rem 5%;
  position:relative;overflow:hidden;
}
.avail-banner::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse 60% 100% at 50% 50%,rgba(201,168,76,.04) 0%,transparent 70%);
}
.avail-inner{
  position:relative;z-index:1;
  display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;
}
.avail-live{
  display:flex;align-items:center;gap:.6rem;
  padding:.28rem .85rem;
  background:rgba(34,197,94,.07);border:1px solid rgba(34,197,94,.22);
  flex-shrink:0;
}
.avail-live-dot{width:7px;height:7px;background:#22c55e;border-radius:50%;animation:pulse 2.5s infinite}
.avail-live-text{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(34,197,94,.85);font-weight:600}
.avail-statement{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:300;color:rgba(245,247,250,.75);font-style:italic}
.avail-div{width:1px;height:20px;background:var(--border);flex-shrink:0}
.avail-roles{display:flex;gap:.4rem;flex-wrap:wrap}
.avail-role{
  padding:.22rem .75rem;
  border:1px solid rgba(201,168,76,.22);background:rgba(201,168,76,.05);
  font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.08em;text-transform:uppercase;
  color:rgba(201,168,76,.75);
}

/* ━━━ MEDIA/RECOGNITION BAR ━━━ */
.media-bar{background:var(--navy-m);border-bottom:1px solid var(--border);padding:1.1rem 5%}
.media-inner{display:flex;align-items:center;gap:2.5rem;flex-wrap:wrap}
.media-label{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:var(--grey);white-space:nowrap;flex-shrink:0}
.media-divider{width:1px;height:22px;background:var(--border);flex-shrink:0}
.media-items{display:flex;align-items:center;gap:2.5rem;flex-wrap:wrap}
.media-item{font-family:'Cormorant Garamond',serif;font-size:.92rem;font-weight:500;color:rgba(245,247,250,.25);letter-spacing:.04em;transition:color .3s;cursor:default}
.media-item:hover{color:rgba(201,168,76,.65)}

/* ━━━ SHARED SECTION STYLES ━━━ */
.sec{padding:84px 5%}
.sec-alt{padding:84px 5%;background:var(--navy-m)}
.sec-dark{padding:84px 5%;background:var(--navy)}
.sl{font-family:'DM Mono',monospace;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:.85rem;display:flex;align-items:center;gap:.9rem}
.sl::after{content:'';display:block;height:1px;width:48px;background:var(--gold);opacity:.75}
.st{font-family:'Cormorant Garamond',serif;font-size:clamp(1.9rem,3.8vw,3rem);font-weight:300;line-height:1.12;margin-bottom:1rem;letter-spacing:-.01em}
.st em{font-style:italic;color:var(--gold)}
.st strong{font-weight:600}
.sd{font-size:.9rem;color:var(--grey-l);max-width:500px;line-height:1.78}

/* ━━━ ABOUT ━━━ */
.about-grid{display:grid;grid-template-columns:320px 1fr;gap:5rem;align-items:start;margin-top:3.5rem}
.portrait-img{width:100%;aspect-ratio:3/4;background:linear-gradient(160deg,var(--navy-l),var(--navy));border:1px solid var(--border);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.portrait-img img{width:100%;height:100%;object-fit:cover;object-position:center top}
.portrait-init{font-family:'Cormorant Garamond',serif;font-size:6rem;font-weight:300;color:rgba(201,168,76,.07);letter-spacing:-.04em;user-select:none}
.p-ov{position:absolute;bottom:0;left:0;right:0;padding:1.4rem;background:linear-gradient(transparent,rgba(8,18,32,.97))}
.p-name{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:500}
.p-role{font-family:'DM Mono',monospace;font-size:.52rem;color:var(--gold);letter-spacing:.1em;text-transform:uppercase;margin-top:.2rem}
.pc{position:absolute;width:38px;height:38px;border-color:var(--gold);border-style:solid}
.pc.tl{top:-1px;left:-1px;border-width:2px 0 0 2px}
.pc.br{bottom:-1px;right:-1px;border-width:0 2px 2px 0}
.aq{display:flex;align-items:center;gap:.75rem;font-size:.79rem;color:var(--grey-l);margin-top:.5rem}
.aq-dot{width:5px;height:5px;background:var(--gold);border-radius:50%;opacity:.65;flex-shrink:0}
.about-bio p{font-size:.9rem;color:var(--grey-l);line-height:1.82;margin-bottom:1.2rem}
.mission-box{margin:1.5rem 0;padding:1.4rem 1.6rem;border-left:3px solid var(--gold);background:rgba(201,168,76,.04)}
.mission-lbl{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:.5rem}
.mission-txt{font-family:'Cormorant Garamond',serif;font-size:1.02rem;color:var(--white);font-style:italic;line-height:1.75;font-weight:300}
.vals{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1.4rem}
.val{padding:1.1rem;background:rgba(201,168,76,.03);border:1px solid var(--border);transition:border-color .25s}
.val:hover{border-color:var(--gold)}
.val-icon{font-size:1.2rem;margin-bottom:.5rem}
.val-title{font-family:'Cormorant Garamond',serif;font-size:.95rem;font-weight:500;margin-bottom:.28rem}
.val-desc{font-size:.74rem;color:var(--grey);line-height:1.6}
.offer-row{display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem;margin-top:1.4rem}
.offer{padding:1.1rem;border:1px solid var(--border);background:rgba(8,18,32,.5);transition:border-color .25s}
.offer:hover{border-color:var(--gold)}
.offer-lbl{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:.45rem}
.offer-txt{font-size:.75rem;color:var(--grey);line-height:1.65}

/* ━━━ COUNTERS ━━━ */
.counters{display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.ci{padding:2.2rem 1.2rem;text-align:center;border-right:1px solid var(--border);transition:background .25s}
.ci:last-child{border-right:none}
.ci:hover{background:rgba(201,168,76,.03)}
.ci-n{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:300;color:var(--gold);line-height:1;letter-spacing:-.02em}
.ci-l{font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:var(--grey);margin-top:.38rem;line-height:1.4}

/* ━━━ CREDENTIALS ━━━ */
.creds{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--border);background:var(--border)}
.cc{padding:2.4rem 1.8rem;text-align:center;background:var(--navy-m);border-right:1px solid var(--border);border-bottom:1px solid var(--border);position:relative;overflow:hidden;transition:background .25s}
.cc:nth-child(3){border-right:none}
.cc:nth-child(4),.cc:nth-child(5),.cc:nth-child(6){border-bottom:none}
.cc:nth-child(6){border-right:none}
.cc:hover{background:rgba(201,168,76,.04)}
.cc::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--gold),transparent);transform:scaleX(0);transition:transform .4s}
.cc:hover::after{transform:scaleX(1)}
.cc-logo{height:38px;display:flex;align-items:center;justify-content:center;margin-bottom:.9rem}
.cc-logo img{max-height:100%;max-width:115px;object-fit:contain;filter:brightness(0) invert(1);opacity:.55;transition:opacity .3s}
.cc:hover .cc-logo img{opacity:.82}
.cc-logo-fb{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:500;color:rgba(201,168,76,.55)}
.cc-badge{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border:1px solid var(--border);background:rgba(201,168,76,.07);margin:0 auto .9rem;font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:600;color:var(--gold)}
.cc-badge.active{background:rgba(201,168,76,.16);border-color:var(--gold);box-shadow:0 0 18px rgba(201,168,76,.18)}
.cc-inst{font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:.4rem}
.cc-name{font-family:'Cormorant Garamond',serif;font-size:.95rem;font-weight:400;line-height:1.3;margin-bottom:.38rem}
.cc-detail{font-size:.69rem;color:var(--grey);line-height:1.55}
.cc-pill{display:inline-block;margin-top:.6rem;padding:.17rem .6rem;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.3);font-family:'DM Mono',monospace;font-size:.54rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}

/* ━━━ SKILLS ━━━ */
.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;margin-top:3.5rem;align-items:start}
.skill-bars{display:flex;flex-direction:column;gap:1.8rem}
.sbi .sbh{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.62rem}
.sbi .sbn{font-size:.86rem;font-weight:600;color:var(--white)}
.sbi .sbp{font-family:'DM Mono',monospace;font-size:.76rem;color:var(--gold)}
.sbt{height:7px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.14);overflow:hidden}
.sbf{height:100%;background:linear-gradient(90deg,var(--gold),var(--gold-l));width:0;transition:width 1.5s cubic-bezier(.16,1,.3,1);position:relative}
.sbf::after{content:'';position:absolute;right:0;top:0;bottom:0;width:3px;background:rgba(255,255,255,.38);box-shadow:0 0 5px var(--gold-l)}
.tag-sec{display:flex;flex-direction:column;gap:1.7rem}
.tag-grp{padding:1.3rem;background:rgba(201,168,76,.02);border:1px solid var(--border)}
.tag-grp-lbl{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:.85rem;display:flex;align-items:center;gap:.7rem}
.tag-grp-lbl::after{content:'';flex:1;height:1px;background:var(--border)}
.tag-cloud{display:flex;flex-wrap:wrap;gap:.4rem}
.tag{padding:.28rem .76rem;font-size:.71rem;font-weight:500;letter-spacing:.04em;transition:all .22s;cursor:default}
.tag.cert{border:1px solid rgba(201,168,76,.4);color:var(--gold-l);background:rgba(201,168,76,.07)}
.tag.cert:hover{background:rgba(201,168,76,.18);transform:translateY(-1px)}
.tag.tools{border:1px solid rgba(122,143,168,.26);color:var(--grey-l);background:rgba(122,143,168,.04)}
.tag.tools:hover{border-color:var(--gold);color:var(--gold-l);transform:translateY(-1px)}
.tag.soft{border:1px solid var(--navy-l);background:var(--navy-l);color:rgba(245,247,250,.78)}
.tag.soft:hover{border-color:var(--gold-l);transform:translateY(-1px)}

/* ━━━ SC INFOGRAPHIC ━━━ */
.sc-flow{display:flex;align-items:center;justify-content:center;gap:0;margin-top:4rem;overflow-x:auto;padding-bottom:.5rem}
.sc-node{display:flex;flex-direction:column;align-items:center;gap:.75rem;flex:1;min-width:90px;max-width:130px}
.sc-icon{width:68px;height:68px;border:1px solid rgba(201,168,76,.25);background:rgba(201,168,76,.06);display:flex;align-items:center;justify-content:center;font-size:1.65rem;transition:all .3s;animation:float 4s ease infinite}
.sc-node:nth-child(3) .sc-icon{animation-delay:.4s}
.sc-node:nth-child(5) .sc-icon{animation-delay:.8s}
.sc-node:nth-child(7) .sc-icon{animation-delay:1.2s}
.sc-node:nth-child(9) .sc-icon{animation-delay:1.6s}
.sc-node:nth-child(11) .sc-icon{animation-delay:2s}
.sc-icon:hover{background:rgba(201,168,76,.16);border-color:var(--gold);transform:translateY(-4px) scale(1.05)}
.sc-lbl{font-family:'DM Mono',monospace;font-size:.55rem;letter-spacing:.1em;text-transform:uppercase;color:var(--grey-l);text-align:center;white-space:pre-line;line-height:1.5}
.sc-arr{padding:0 .4rem;flex-shrink:0;display:flex;align-items:center}
.sc-arr svg{width:26px;height:13px;opacity:.28}
.sc-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5px;background:var(--border);border:1px solid var(--border);margin-top:3.8rem}
.sc-m{background:var(--navy);padding:2rem 2.2rem;transition:background .25s}
.sc-m:hover{background:var(--navy-m)}
.sc-mn{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:300;color:var(--gold);line-height:1;margin-bottom:.3rem;letter-spacing:-.02em}
.sc-mt{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:400;color:var(--white);margin-bottom:.28rem}
.sc-md{font-size:.73rem;color:var(--grey);line-height:1.65}

/* ━━━ PORTFOLIO 3x2 ━━━ */
.proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5px;background:var(--border);border:1px solid var(--border);margin-top:3.5rem}
.proj-card{background:var(--navy);padding:2rem 1.8rem;transition:background .25s;display:flex;flex-direction:column}
.proj-card:hover{background:var(--navy-l)}
.proj-tag{display:inline-block;padding:.18rem .62rem;background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.22);font-family:'DM Mono',monospace;font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem;align-self:flex-start}
.proj-title{font-family:'Cormorant Garamond',serif;font-size:1.06rem;font-weight:400;line-height:1.3;margin-bottom:.6rem}
.proj-desc{font-size:.76rem;color:var(--grey);line-height:1.65;flex:1}
.proj-impact{display:flex;gap:1.1rem;margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border)}
.impact-n{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:500;color:var(--gold);line-height:1}
.impact-d{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.05em;color:var(--grey);margin-top:.14rem}
.proj-link{display:inline-flex;align-items:center;gap:.4rem;margin-top:1rem;font-family:'DM Mono',monospace;font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);text-decoration:none;border-bottom:1px solid transparent;transition:border-color .25s;align-self:flex-start}
.proj-link:hover{border-color:var(--gold)}
.proj-link svg{width:10px;height:10px;stroke:currentColor;fill:none;stroke-width:2.5;transition:transform .25s}
.proj-link:hover svg{transform:translate(2px,-2px)}

/* ━━━ CTA BAND ━━━ */
.cta-band{padding:70px 5%;background:linear-gradient(135deg,var(--navy-l),var(--navy-m));border-top:1px solid var(--border);border-bottom:1px solid var(--border);text-align:center;position:relative;overflow:hidden}
.cta-band::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(201,168,76,.07) 0%,transparent 70%)}
.cta-inner{position:relative;z-index:1}
.cta-pill{display:inline-flex;align-items:center;gap:.5rem;padding:.28rem .88rem;background:rgba(201,168,76,.07);border:1px solid var(--border);font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.14em;color:var(--gold);margin-bottom:1.5rem}
.cta-pill-dot{width:5px;height:5px;background:var(--gold);border-radius:50%;animation:blink 2s infinite}
.cta-band h3{font-family:'Cormorant Garamond',serif;font-size:clamp(1.7rem,3vw,2.6rem);font-weight:300;margin-bottom:.7rem;letter-spacing:-.01em}
.cta-band h3 em{font-style:italic;color:var(--gold)}
.cta-band p{font-size:.88rem;color:var(--grey-l);max-width:520px;margin:0 auto 1.9rem;line-height:1.75}
.cta-btns{display:flex;gap:.85rem;justify-content:center;flex-wrap:wrap}

/* ━━━ EXPERTISE 4x3 ━━━ */
.exp-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5px;background:var(--border);border:1px solid var(--border);margin-top:3.5rem}
.exp-card{background:var(--navy);padding:1.8rem 1.4rem;transition:background .25s;position:relative;overflow:hidden}
.exp-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--gold);transform:scaleX(0);transition:transform .3s;transform-origin:left}
.exp-card:hover{background:var(--navy-m)}
.exp-card:hover::before{transform:scaleX(1)}
.exp-n{font-family:'DM Mono',monospace;font-size:.6rem;color:var(--gold);letter-spacing:.1em;margin-bottom:.85rem;opacity:.52}
.exp-t{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:500;line-height:1.3;margin-bottom:.48rem}
.exp-d{font-size:.73rem;color:var(--grey);line-height:1.6}

/* ━━━ TIMELINE ━━━ */
.t-line{position:relative;margin-top:3.5rem;padding-left:2rem;border-left:1px solid var(--border)}
.t-item{position:relative;padding:0 0 2.8rem 3rem}
.t-item:last-child{padding-bottom:0}
.t-item::before{content:'';position:absolute;left:-2.5rem;top:.3rem;width:10px;height:10px;background:var(--navy-m);border:2px solid var(--gold);border-radius:50%;transform:translateX(-4px)}
.t-period{font-family:'DM Mono',monospace;font-size:.64rem;letter-spacing:.14em;color:var(--gold);margin-bottom:.38rem}
.t-role{font-family:'Cormorant Garamond',serif;font-size:1.22rem;font-weight:400;margin-bottom:.2rem}
.t-org{font-size:.8rem;font-weight:500;color:var(--gold-l);margin-bottom:.58rem;letter-spacing:.02em}
.t-desc{font-size:.81rem;color:var(--grey);line-height:1.72;max-width:550px}

/* ━━━ TESTIMONIALS ━━━ */
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.3rem;margin-top:3.5rem}
.testi-card{padding:1.9rem;background:rgba(8,18,32,.6);border:1px solid var(--border);display:flex;flex-direction:column;transition:border-color .25s}
.testi-card:hover{border-color:rgba(201,168,76,.4)}
.testi-q{font-family:'Cormorant Garamond',serif;font-size:3.2rem;line-height:.6;color:var(--gold);opacity:.22;margin-bottom:.4rem;font-style:italic}
.testi-text{font-family:'Cormorant Garamond',serif;font-size:.94rem;color:var(--grey-l);line-height:1.78;flex:1;font-style:italic;font-weight:300}
.testi-name{font-weight:600;font-size:.84rem;color:var(--white);margin-top:1.3rem;padding-top:.95rem;border-top:1px solid var(--border)}
.testi-role{font-family:'DM Mono',monospace;font-size:.58rem;color:var(--gold);margin-top:.16rem;letter-spacing:.04em}

/* ━━━ EDUCATION ━━━ */
.edu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2rem;margin-top:3.5rem}
.edu-card{padding:1.9rem 1.6rem;background:var(--card);border:1px solid var(--border);position:relative;overflow:hidden;transition:all .28s}
.edu-card:hover{border-color:var(--gold);transform:translateY(-3px)}
.edu-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--gold),transparent)}
.edu-inst{font-family:'DM Mono',monospace;font-size:.6rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:.6rem}
.edu-degree{font-family:'Cormorant Garamond',serif;font-size:1.04rem;font-weight:400;line-height:1.3;margin-bottom:.58rem}
.edu-detail{font-size:.74rem;color:var(--grey)}
.edu-active{position:absolute;top:.85rem;right:.85rem;padding:.15rem .5rem;background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.36);font-family:'DM Mono',monospace;font-size:.5rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)}

/* ━━━ QUOTES ━━━ */
.quote-box{max-width:700px;margin:3.5rem auto 0;padding:2.8rem 3rem;border:1px solid var(--border);background:rgba(12,28,54,.6);position:relative}
.qmark{font-family:'Cormorant Garamond',serif;font-size:7rem;line-height:.4;color:var(--gold);opacity:.12;position:absolute;top:1.5rem;right:2rem;font-style:italic}
.qtext{font-family:'Cormorant Garamond',serif;font-size:1.28rem;font-weight:300;font-style:italic;line-height:1.65;color:var(--white);padding-right:3rem;animation:qslide .45s ease both}
.qauth{font-family:'DM Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(201,168,76,.55);margin-top:1.2rem}
.qdots{display:flex;gap:.5rem;justify-content:center;margin-top:1.5rem}
.qdot{width:6px;height:6px;border-radius:50%;background:rgba(201,168,76,.2);cursor:pointer;transition:background .2s}
.qdot.on{background:var(--gold)}
.q-btns{display:flex;gap:.5rem;justify-content:center;margin-top:.7rem}
.q-btn{width:34px;height:34px;border:1px solid var(--border);background:transparent;color:rgba(201,168,76,.5);cursor:pointer;font-size:.85rem;display:flex;align-items:center;justify-content:center;transition:all .2s}
.q-btn:hover{border-color:var(--gold);color:var(--gold)}

/* ━━━ CONTACT ━━━ */
.contact-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:5rem;margin-top:3.5rem;align-items:start}
.contact-h{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:300;font-style:italic;margin-bottom:.75rem}
.contact-p{font-size:.86rem;color:var(--grey-l);line-height:1.78;margin-bottom:1.8rem}
.soc-link{display:flex;align-items:center;gap:.85rem;padding:.85rem 1rem;border:1px solid var(--border);text-decoration:none;color:var(--white);transition:all .25s;margin-bottom:.7rem}
.soc-link:hover{border-color:var(--gold);background:rgba(201,168,76,.04)}
.soc-icon{width:32px;height:32px;background:rgba(201,168,76,.07);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.soc-icon svg{width:13px;height:13px;fill:var(--gold)}
.soc-name{font-weight:600;font-size:.8rem;color:var(--white)}
.soc-handle{font-family:'DM Mono',monospace;font-size:.62rem;color:var(--grey)}
.f-lbl{display:block;font-family:'DM Mono',monospace;font-size:.58rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--grey);margin-bottom:.3rem;margin-top:.85rem}
.f-in,.f-area{width:100%;padding:.78rem .95rem;background:rgba(8,18,32,.8);border:1px solid var(--border);color:var(--white);font-family:'DM Sans',sans-serif;font-size:.84rem;outline:none;transition:border-color .25s;resize:none}
.f-in:focus,.f-area:focus{border-color:var(--gold)}
.f-area{height:118px}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
::placeholder{color:rgba(122,143,168,.38)}

/* ━━━ FOOTER ━━━ */
footer{background:var(--navy);border-top:1px solid var(--border)}
.foot-top{padding:2.8rem 5%;display:grid;grid-template-columns:1fr 1fr 1fr;gap:3rem}
.foot-brand{font-family:'Cormorant Garamond',serif;font-size:1.22rem;font-weight:400;margin-bottom:.38rem}
.foot-brand em{font-style:italic;color:var(--gold)}
.foot-tag{font-size:.74rem;color:var(--grey);line-height:1.65;margin-top:.35rem;max-width:240px}
.foot-col-h{font-family:'DM Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:.95rem}
.foot-link{display:block;font-size:.78rem;color:var(--grey);text-decoration:none;margin-bottom:.45rem;transition:color .22s}
.foot-link:hover{color:var(--gold)}
.foot-bot{padding:1rem 5%;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.foot-copy{font-family:'DM Mono',monospace;font-size:.6rem;color:var(--grey);letter-spacing:.08em}
.foot-dba{font-family:'DM Mono',monospace;font-size:.58rem;color:var(--gold);letter-spacing:.1em}

/* ━━━ RESPONSIVE ━━━ */
@media(max-width:1100px){
  .hero{grid-template-columns:1fr 42%}
  .about-grid{grid-template-columns:1fr;gap:3rem}
  .counters{grid-template-columns:repeat(3,1fr)}
  .ci:nth-child(3){border-right:none}
  .ci:nth-child(4){border-right:1px solid var(--border);border-top:1px solid var(--border)}
  .ci:nth-child(5){border-top:1px solid var(--border)}
  .ci:nth-child(6){border-top:1px solid var(--border)}
  .exp-grid{grid-template-columns:repeat(2,1fr)}
  .creds{grid-template-columns:repeat(2,1fr)}
  .cc:nth-child(2){border-right:none}
  .cc:nth-child(3){border-right:1px solid var(--border);border-bottom:1px solid var(--border)}
  .foot-top{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
  .nav-links{display:none}
  .hero{grid-template-columns:1fr;height:auto;min-height:100svh}
  .hero-right{height:50vh;min-height:300px}
  .hero-left{padding:80px 5% 2rem}
  .hero-stat-bar{grid-template-columns:repeat(2,1fr)}
  .h-stat:nth-child(2){border-right:none}
  .h-stat:nth-child(3){border-right:1px solid var(--border);border-top:1px solid var(--border)}
  .h-stat:nth-child(4){border-top:1px solid var(--border)}
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
  .media-inner{gap:1.5rem}
}
@media(max-width:480px){
  .hero h1{font-size:clamp(2.2rem,9vw,3rem)}
  .counters{grid-template-columns:repeat(2,1fr)}
  .exp-grid{grid-template-columns:1fr 1fr}
}
</style>
</head>
<body>

<!-- GOLD TICKER BAR — Above everything -->
<div class="ticker">
  <div class="ticker-track" id="ticker-track"></div>
</div>

<!-- NAV — Clean, only name + links + datetime + one CTA -->
<nav id="mainnav">
  <button class="nav-brand" onclick="window.scrollTo({top:0,behavior:'smooth'})">
    Rajendra <em>Royal</em>
  </button>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#expertise">Expertise</a></li>
    <li><a href="#journey">Journey</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div class="nav-right">
    <span class="nav-datetime" id="navdt"></span>
    <button class="nav-cta-single">Get In Touch</button>
  </div>
</nav>

<!-- ═══════════════════════════════════════════
     HERO — 100VH FULL SCREEN, PHOTO RIGHT
═══════════════════════════════════════════ -->
<section class="hero" id="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <!-- Floating particles -->
  <div class="particles" id="particles"></div>

  <!-- LEFT — Executive headline -->
  <div class="hero-left">
    <!-- Credential chips above headline -->
    <div class="hero-cred-strip">
      <span class="hero-cred-chip">IIM Calcutta</span>
      <span class="hero-cred-chip">IIT Delhi</span>
      <span class="hero-cred-chip">Dual MBA</span>
      <span class="hero-cred-chip">Six Sigma</span>
      <span class="hero-cred-chip">SSBM Geneva · DBA</span>
    </div>

    <div class="hero-kicker">Supply Chain & Operations Leader</div>

    <h1>
      Rajendra
      <em>Royal</em>
      <strong>Shaping the Future<br>of Supply Chain</strong>
    </h1>

    <div class="hero-rule"></div>

    <p class="hero-sub">20+ years leading enterprise supply chain transformation across retail, logistics, and distribution. Strategic depth. Operational precision. Doctoral-level research.</p>

    <div class="hero-roles">
      <span class="hero-role">Supply Chain Leader</span>
      <span class="hero-role">Operations Excellence</span>
      <span class="hero-role">CXO & Board Advisory</span>
      <span class="hero-role">Keynote Speaker</span>
      <span class="hero-role">Doctoral Researcher</span>
    </div>

    <div class="hero-btns">
      <button class="btn-gold" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Book a Consultation</button>
      <button class="btn-ghost" onclick="document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})">View Portfolio</button>
    </div>
  </div>

  <!-- RIGHT — Large photo panel, full height -->
  <div class="hero-right">
    <div class="hero-photo-wrap" id="heroPhotoWrap">
      <div class="hero-corner tl"></div>
      <div class="hero-corner br"></div>
      <!-- Replace src with /photo.jpg once uploaded -->
      <div class="hero-photo-placeholder"></div>
      <div class="hero-name-tag">
        <div class="hero-name-tag-n">Rajendra Royal</div>
        <div class="hero-name-tag-r">Supply Chain & Operations Leader · Doctoral Researcher</div>
      </div>
    </div>
    <div class="hero-stat-bar">
      <div class="h-stat"><div class="h-stat-n" id="hs1">0</div><div class="h-stat-l">Years Exp.</div></div>
      <div class="h-stat"><div class="h-stat-n" id="hs2">0</div><div class="h-stat-l">Credentials</div></div>
      <div class="h-stat"><div class="h-stat-n" id="hs3">0</div><div class="h-stat-l">Domains</div></div>
      <div class="h-stat"><div class="h-stat-n">Dr.</div><div class="h-stat-l">Researcher</div></div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     AVAILABILITY BANNER — Psychological impact,
     immediately after hero (first thing after fold)
═══════════════════════════════════════════ -->
<div class="avail-banner" id="availability">
  <div class="avail-inner">
    <div class="avail-live">
      <span class="avail-live-dot"></span>
      <span class="avail-live-text">Currently Available</span>
    </div>
    <span class="avail-statement">"Open to the right conversation — senior leadership, consulting, or board advisory."</span>
    <div class="avail-div"></div>
    <div class="avail-roles">
      <span class="avail-role">VP / Director Supply Chain</span>
      <span class="avail-role">Head of Operations</span>
      <span class="avail-role">CXO & Board Advisory</span>
      <span class="avail-role">Consulting Engagements</span>
      <span class="avail-role">Speaking & Research</span>
    </div>
  </div>
</div>

<!-- RECOGNITION BAR -->
<div class="media-bar">
  <div class="media-inner">
    <span class="media-label">Recognised By</span>
    <div class="media-divider"></div>
    <div class="media-items">
      <span class="media-item">IIM Calcutta</span>
      <span class="media-item">IIT Delhi</span>
      <span class="media-item">SSBM Geneva</span>
      <span class="media-item">Six Sigma Council</span>
      <span class="media-item">Supply Chain India</span>
      <span class="media-item">Logistics Leaders Network</span>
    </div>
  </div>
</div>

<!-- ═══════════ ABOUT ═══════════ -->
<section class="sec-alt reveal-l" id="about">
  <div class="sl">About Me</div>
  <div class="about-grid">
    <div>
      <div class="portrait-img">
        <div class="pc tl"></div><div class="pc br"></div>
        <div class="portrait-init">RR</div>
        <div class="p-ov"><div class="p-name">Rajendra Royal</div><div class="p-role">Supply Chain & Operations Leader</div></div>
      </div>
      <div class="aq"><span class="aq-dot"></span>📍 India</div>
      <div class="aq"><span class="aq-dot"></span>🔬 Doctoral Researcher · SSBM Geneva</div>
      <div class="aq"><span class="aq-dot"></span>🏛️ IIM Calcutta · IIT Delhi Alumni</div>
      <div class="aq"><span class="aq-dot"></span>📦 20+ Years SC & Operations</div>
      <div class="aq"><span class="aq-dot"></span>🎤 Speaker · Consultant · Researcher</div>
    </div>
    <div class="about-bio">
      <div class="sl">Who I Am</div>
      <h2 class="st">A Leader Shaping the Future of <em>Supply Chain</em></h2>
      <p>Rajendra Royal is a seasoned Supply Chain and Operations professional with over two decades of experience leading warehouse operations, logistics management, inventory optimization, and business transformation across retail and supply chain organizations.</p>
      <p>With a rare blend of strategic vision and hands-on operational mastery, he consistently delivers measurable impact — driving efficiency gains, cost reductions, and performance breakthroughs at enterprise scale. Backed by dual MBAs, executive programs at IIM Calcutta and IIT Delhi, Six Sigma certification, and doctoral research at SSBM Geneva.</p>
      <div class="mission-box">
        <div class="mission-lbl">Mission</div>
        <div class="mission-txt">"To help organizations unlock the full potential of their supply chains — through smart strategy, data-led decisions, and the relentless elimination of waste — so they can grow faster, serve better, and operate with confidence."</div>
      </div>
      <div class="vals">
        <div class="val"><div class="val-icon">🎯</div><div class="val-title">Strategic Clarity</div><div class="val-desc">Translating complex SC challenges into clear, executable strategies aligned with business goals.</div></div>
        <div class="val"><div class="val-icon">📊</div><div class="val-title">Data-Driven Thinking</div><div class="val-desc">Every decision anchored in analytics, KPIs, and evidence — eliminating guesswork.</div></div>
        <div class="val"><div class="val-icon">🤝</div><div class="val-title">People-First Leadership</div><div class="val-desc">Building high-performance cultures where teams are empowered to excel.</div></div>
        <div class="val"><div class="val-icon">♾️</div><div class="val-title">Continuous Improvement</div><div class="val-desc">Relentless pursuit of excellence through Lean, Six Sigma & Kaizen.</div></div>
      </div>
      <div class="offer-row">
        <div class="offer"><div class="offer-lbl">What I Offer</div><div class="offer-txt">Strategic advisory, interim leadership, consulting, speaking, and hands-on transformation delivery.</div></div>
        <div class="offer"><div class="offer-lbl">Who I Serve</div><div class="offer-txt">Retail, logistics, DCs, e-commerce, and orgs undergoing supply chain transformation.</div></div>
        <div class="offer"><div class="offer-lbl">Why Work With Me</div><div class="offer-txt">20+ years of real results. Dual MBA + IIM/IIT + Doctoral Research. Boardroom to shop-floor.</div></div>
      </div>
    </div>
  </div>
</section>

<!-- COUNTERS -->
<div class="sec-dark" style="padding:0">
  <div class="counters">
    <div class="ci"><div class="ci-n" data-t="20" data-s="+">0</div><div class="ci-l">Years Experience</div></div>
    <div class="ci"><div class="ci-n" data-t="6" data-s="">0</div><div class="ci-l">Executive Credentials</div></div>
    <div class="ci"><div class="ci-n" data-t="12" data-s="+">0</div><div class="ci-l">Core Domains</div></div>
    <div class="ci"><div class="ci-n" data-t="2" data-s="×">0</div><div class="ci-l">MBA Degrees</div></div>
    <div class="ci"><div class="ci-n" data-t="100" data-s="%">0</div><div class="ci-l">Commitment</div></div>
    <div class="ci"><div class="ci-n">Dr.</div><div class="ci-l">Doctoral Researcher<br>Business & Operations</div></div>
  </div>
</div>

<!-- CREDENTIALS -->
<div class="creds">
  <div class="cc">
    <div class="cc-logo"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/IIM_Calcutta_Logo.svg/200px-IIM_Calcutta_Logo.svg.png" alt="IIM" onerror="this.style.display='none';this.nextSibling.style.display='block'"/><div class="cc-logo-fb" style="display:none">IIM</div></div>
    <div class="cc-inst">IIM Calcutta</div><div class="cc-name">Executive Programme in Operations Management (EPOM)</div><div class="cc-detail">Operations · Lean · Quality · SC Design · Analytics</div>
  </div>
  <div class="cc">
    <div class="cc-logo"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/IIT_Delhi_logo.svg/200px-IIT_Delhi_logo.svg.png" alt="IIT" onerror="this.style.display='none';this.nextSibling.style.display='block'"/><div class="cc-logo-fb" style="display:none">IIT</div></div>
    <div class="cc-inst">IIT Delhi</div><div class="cc-name">Executive Programme — SC & Operations Analytics</div><div class="cc-detail">SC Strategy · Forecasting · Network Design · Resilience</div><div class="cc-pill">Aug 2025 – Aug 2026</div>
  </div>
  <div class="cc"><div class="cc-badge">MBA</div><div class="cc-inst">Postgraduate</div><div class="cc-name">MBA in Strategy & Leadership</div><div class="cc-detail">Strategic Management · Executive Leadership</div></div>
  <div class="cc"><div class="cc-badge">MBA</div><div class="cc-inst">Postgraduate</div><div class="cc-name">MBA in Business Analytics</div><div class="cc-detail">Data Analytics · Business Intelligence</div></div>
  <div class="cc"><div class="cc-badge">6σ</div><div class="cc-inst">Certification</div><div class="cc-name">Six Sigma — DMAIC · Process Excellence</div><div class="cc-detail">Lean · Kaizen · Quality Management</div></div>
  <div class="cc"><div class="cc-badge active">Dr.</div><div class="cc-inst">SSBM Geneva</div><div class="cc-name">Doctoral Researcher — Business & Operations</div><div class="cc-detail">Operations · Leadership · Organizational Effectiveness</div><div class="cc-pill">🔬 Research Commenced Mar 2026</div></div>
</div>

<!-- SKILLS -->
<section class="sec-alt reveal" id="skills">
  <div class="sl">Skills & Expertise</div>
  <h2 class="st">Competency <em>Depth</em></h2>
  <p class="sd">Proficiency built across two decades of practice, study, and delivery.</p>
  <div class="skills-grid">
    <div>
      <div class="sl" style="margin-bottom:1.5rem">Core Proficiencies</div>
      <div class="skill-bars" id="skillbars">
        <div class="sbi"><div class="sbh"><span class="sbn">Supply Chain Management</span><span class="sbp">95%</span></div><div class="sbt"><div class="sbf" data-pct="95"></div></div></div>
        <div class="sbi"><div class="sbh"><span class="sbn">Warehouse Operations</span><span class="sbp">95%</span></div><div class="sbt"><div class="sbf" data-pct="95"></div></div></div>
        <div class="sbi"><div class="sbh"><span class="sbn">Inventory Optimization</span><span class="sbp">92%</span></div><div class="sbt"><div class="sbf" data-pct="92"></div></div></div>
        <div class="sbi"><div class="sbh"><span class="sbn">Business Analytics</span><span class="sbp">88%</span></div><div class="sbt"><div class="sbf" data-pct="88"></div></div></div>
        <div class="sbi"><div class="sbh"><span class="sbn">Strategic Planning</span><span class="sbp">90%</span></div><div class="sbt"><div class="sbf" data-pct="90"></div></div></div>
        <div class="sbi"><div class="sbh"><span class="sbn">Process Excellence (Six Sigma)</span><span class="sbp">90%</span></div><div class="sbt"><div class="sbf" data-pct="90"></div></div></div>
        <div class="sbi"><div class="sbh"><span class="sbn">Leadership & Team Development</span><span class="sbp">92%</span></div><div class="sbt"><div class="sbf" data-pct="92"></div></div></div>
      </div>
    </div>
    <div class="tag-sec">
      <div class="tag-grp">
        <div class="tag-grp-lbl">Qualifications & Certifications</div>
        <div class="tag-cloud">
          <span class="tag cert">MBA Strategy & Leadership</span><span class="tag cert">MBA Business Analytics</span><span class="tag cert">IIM Calcutta EPOM</span><span class="tag cert">IIT Delhi SC Analytics</span><span class="tag cert">Six Sigma</span><span class="tag cert" style="border-color:var(--gold);background:rgba(201,168,76,.14)">Doctoral Researcher 🔬</span>
        </div>
      </div>
      <div class="tag-grp">
        <div class="tag-grp-lbl">Tools & Technologies</div>
        <div class="tag-cloud">
          <span class="tag tools">SAP SCM</span><span class="tag tools">WMS</span><span class="tag tools">ERP Systems</span><span class="tag tools">Power BI</span><span class="tag tools">Advanced Excel</span><span class="tag tools">Demand Planning</span><span class="tag tools">KPI Dashboards</span><span class="tag tools">TMS</span><span class="tag tools">Lean / Kaizen</span><span class="tag tools">DMAIC</span><span class="tag tools">ABC-XYZ Analysis</span>
        </div>
      </div>
      <div class="tag-grp">
        <div class="tag-grp-lbl">Leadership Strengths</div>
        <div class="tag-cloud">
          <span class="tag soft">Cross-functional Leadership</span><span class="tag soft">Change Management</span><span class="tag soft">Stakeholder Management</span><span class="tag soft">Executive Communication</span><span class="tag soft">Strategic Thinking</span><span class="tag soft">Data-Driven Decisions</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SC INFOGRAPHIC -->
<section class="sec-dark reveal">
  <div class="sl">Supply Chain Mastery</div>
  <h2 class="st">The <em>Complete</em> Supply Chain</h2>
  <p class="sd">End-to-end expertise across every node of the value chain — from procurement to analytics excellence.</p>
  <div class="sc-flow">
    <div class="sc-node"><div class="sc-icon">🛒</div><div class="sc-lbl">Procurement&#10;& Sourcing</div></div>
    <div class="sc-arr"><svg viewBox="0 0 26 13" fill="none"><path d="M0 6.5h22M16 1l6 5.5-6 5.5" stroke="#c9a84c" stroke-width="1.2"/></svg></div>
    <div class="sc-node"><div class="sc-icon">🏭</div><div class="sc-lbl">Warehouse&#10;Operations</div></div>
    <div class="sc-arr"><svg viewBox="0 0 26 13" fill="none"><path d="M0 6.5h22M16 1l6 5.5-6 5.5" stroke="#c9a84c" stroke-width="1.2"/></svg></div>
    <div class="sc-node"><div class="sc-icon">📦</div><div class="sc-lbl">Inventory&#10;Management</div></div>
    <div class="sc-arr"><svg viewBox="0 0 26 13" fill="none"><path d="M0 6.5h22M16 1l6 5.5-6 5.5" stroke="#c9a84c" stroke-width="1.2"/></svg></div>
    <div class="sc-node"><div class="sc-icon">🚛</div><div class="sc-lbl">Logistics &&#10;Transport</div></div>
    <div class="sc-arr"><svg viewBox="0 0 26 13" fill="none"><path d="M0 6.5h22M16 1l6 5.5-6 5.5" stroke="#c9a84c" stroke-width="1.2"/></svg></div>
    <div class="sc-node"><div class="sc-icon">🏪</div><div class="sc-lbl">Retail&#10;Distribution</div></div>
    <div class="sc-arr"><svg viewBox="0 0 26 13" fill="none"><path d="M0 6.5h22M16 1l6 5.5-6 5.5" stroke="#c9a84c" stroke-width="1.2"/></svg></div>
    <div class="sc-node"><div class="sc-icon">📊</div><div class="sc-lbl">Analytics &&#10;Excellence</div></div>
  </div>
  <div class="sc-metrics">
    <div class="sc-m"><div class="sc-mn">30%↑</div><div class="sc-mt">Warehouse Productivity</div><div class="sc-md">Throughput improvement through layout redesign and workflow optimization</div></div>
    <div class="sc-m"><div class="sc-mn">28%↓</div><div class="sc-mt">Excess Inventory</div><div class="sc-md">ABC-XYZ classification with safety stock modeling and reorder automation</div></div>
    <div class="sc-m"><div class="sc-mn">35%↓</div><div class="sc-mt">Forecast Error</div><div class="sc-md">Statistical forecasting models aligned with real demand signals</div></div>
  </div>
</section>

<!-- PORTFOLIO 3x2 -->
<section class="sec-alt reveal" id="portfolio">
  <div class="sl">Portfolio</div>
  <h2 class="st">Transformational <em>Work</em></h2>
  <p class="sd">Selected initiatives demonstrating applied expertise and measurable business impact at enterprise scale.</p>
  <div class="proj-grid">
    <div class="proj-card"><span class="proj-tag">Warehouse</span><div class="proj-title">Warehouse Productivity Improvement</div><div class="proj-desc">Redesigned warehouse layout, slotting strategy, and pick-path workflows to increase throughput while reducing labor hours per unit.</div><div class="proj-impact"><div><div class="impact-n">30%↑</div><div class="impact-d">Throughput</div></div><div><div class="impact-n">22%↓</div><div class="impact-d">Labor cost</div></div></div><a href="#" class="proj-link">Case Study <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a></div>
    <div class="proj-card"><span class="proj-tag">Inventory</span><div class="proj-title">Inventory Optimization Framework</div><div class="proj-desc">ABC-XYZ classification with safety stock modeling — reducing excess stock while lifting fill rates and eliminating stockouts.</div><div class="proj-impact"><div><div class="impact-n">28%↓</div><div class="impact-d">Excess inventory</div></div><div><div class="impact-n">98%</div><div class="impact-d">Fill rate</div></div></div><a href="#" class="proj-link">Case Study <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a></div>
    <div class="proj-card"><span class="proj-tag">Analytics</span><div class="proj-title">Supply Chain Analytics Dashboard</div><div class="proj-desc">Real-time executive KPI dashboards providing end-to-end supply chain visibility from procurement to last-mile delivery.</div><div class="proj-impact"><div><div class="impact-n">40%↓</div><div class="impact-d">Reporting time</div></div><div><div class="impact-n">Live</div><div class="impact-d">Real-time KPIs</div></div></div><a href="#" class="proj-link">Case Study <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a></div>
    <div class="proj-card"><span class="proj-tag">Retail</span><div class="proj-title">Retail KPI Management System</div><div class="proj-desc">Retail performance framework linking store-level metrics to supply chain KPIs — enabling faster exception management.</div><div class="proj-impact"><div><div class="impact-n">15+</div><div class="impact-d">Stores aligned</div></div><div><div class="impact-n">50%↓</div><div class="impact-d">Response time</div></div></div><a href="#" class="proj-link">Case Study <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a></div>
    <div class="proj-card"><span class="proj-tag">Forecasting</span><div class="proj-title">Demand Forecasting Initiative</div><div class="proj-desc">Advanced statistical forecasting models reducing MAPE and aligning procurement with real demand signals across the supply network.</div><div class="proj-impact"><div><div class="impact-n">35%↓</div><div class="impact-d">Forecast error</div></div><div><div class="impact-n">20%↓</div><div class="impact-d">Stockouts</div></div></div><a href="#" class="proj-link">Case Study <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a></div>
    <div class="proj-card"><span class="proj-tag">Process</span><div class="proj-title">Process Excellence Program</div><div class="proj-desc">Six Sigma DMAIC program across warehouse and logistics delivering defect reduction, cycle time compression, and sustainable savings.</div><div class="proj-impact"><div><div class="impact-n">25%↓</div><div class="impact-d">Cycle time</div></div><div><div class="impact-n">Sigma↑</div><div class="impact-d">Process quality</div></div></div><a href="#" class="proj-link">Case Study <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a></div>
  </div>
</section>

<!-- CTA BAND -->
<div class="cta-band">
  <div class="cta-inner">
    <div class="cta-pill"><div class="cta-pill-dot"></div>Available for Consulting & Advisory</div>
    <h3>Ready to <em>Transform</em> Your Supply Chain?</h3>
    <p>Whether you need a strategic review, an interim operations leader, a keynote speaker, or a long-term transformation partner — let's talk about how 20+ years of expertise can move your business forward.</p>
    <div class="cta-btns">
      <button class="btn-gold" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Book a Consultation</button>
      <button class="btn-ghost">Download CV</button>
    </div>
  </div>
</div>

<!-- EXPERTISE 4x3 -->
<section class="sec-dark reveal" id="expertise">
  <div class="sl">Core Expertise</div>
  <h2 class="st">Domains of <em>Mastery</em></h2>
  <div class="exp-grid">
    <div class="exp-card"><div class="exp-n">01</div><div class="exp-t">Supply Chain Management</div><div class="exp-d">End-to-end SC design, strategy, and performance optimization at enterprise scale.</div></div>
    <div class="exp-card"><div class="exp-n">02</div><div class="exp-t">Warehouse Operations</div><div class="exp-d">High-performance warehouse design, throughput optimization, and workforce productivity.</div></div>
    <div class="exp-card"><div class="exp-n">03</div><div class="exp-t">Logistics Management</div><div class="exp-d">Freight optimization, carrier management, and last-mile delivery excellence.</div></div>
    <div class="exp-card"><div class="exp-n">04</div><div class="exp-t">Inventory Optimization</div><div class="exp-d">Demand-driven planning, safety stock modeling, and stockout elimination.</div></div>
    <div class="exp-card"><div class="exp-n">05</div><div class="exp-t">Operations Excellence</div><div class="exp-d">Lean methodologies, continuous improvement, and operational efficiency programs.</div></div>
    <div class="exp-card"><div class="exp-n">06</div><div class="exp-t">Business Analytics</div><div class="exp-d">Data-driven decisions, KPI frameworks, and advanced SC dashboards.</div></div>
    <div class="exp-card"><div class="exp-n">07</div><div class="exp-t">Strategic Planning</div><div class="exp-d">Long-range SC strategy, network design, and capability roadmapping.</div></div>
    <div class="exp-card"><div class="exp-n">08</div><div class="exp-t">Retail Operations</div><div class="exp-d">Omnichannel fulfilment, store replenishment, and retail SC integration.</div></div>
    <div class="exp-card"><div class="exp-n">09</div><div class="exp-t">Process Improvement</div><div class="exp-d">Six Sigma-driven reengineering and waste elimination initiatives.</div></div>
    <div class="exp-card"><div class="exp-n">10</div><div class="exp-t">Cost Optimization</div><div class="exp-d">Structural cost reduction, budget optimization, and ROI-driven decisions.</div></div>
    <div class="exp-card"><div class="exp-n">11</div><div class="exp-t">Leadership Development</div><div class="exp-d">Building high-performance teams and cultivating operational culture.</div></div>
    <div class="exp-card"><div class="exp-n">12</div><div class="exp-t">Continuous Improvement</div><div class="exp-d">Kaizen culture, operational reviews, and performance management systems.</div></div>
  </div>
</section>

<!-- JOURNEY -->
<section class="sec-alt reveal" id="journey">
  <div class="sl">Career Journey</div>
  <h2 class="st">20+ Years of <em>Impact</em></h2>
  <div class="t-line">
    <div class="t-item"><div class="t-period">2018 — Present</div><div class="t-role">Senior Supply Chain Leader</div><div class="t-org">Retail & Logistics Organization</div><div class="t-desc">Leading enterprise-wide supply chain transformation, overseeing warehouse operations, logistics networks, and analytics-driven improvement programs across multiple distribution centers.</div></div>
    <div class="t-item"><div class="t-period">2012 — 2018</div><div class="t-role">Operations Manager</div><div class="t-org">Supply Chain & Distribution</div><div class="t-desc">Managed large-scale warehouse operations with focus on productivity enhancement, inventory accuracy, and process standardization across multiple facilities.</div></div>
    <div class="t-item"><div class="t-period">2006 — 2012</div><div class="t-role">Logistics & Inventory Specialist</div><div class="t-org">Retail Operations</div><div class="t-desc">Developed expertise in logistics coordination, demand planning, and inventory management — laying the foundation for strategic operations leadership.</div></div>
    <div class="t-item"><div class="t-period">2002 — 2006</div><div class="t-role">Operations Executive</div><div class="t-org">Warehouse & Distribution</div><div class="t-desc">Began career in warehouse operations, gaining hands-on experience in inbound/outbound logistics, material handling, and operational planning.</div></div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="sec-dark reveal" id="testimonials">
  <div class="sl">Social Proof</div>
  <h2 class="st">What <em>Colleagues Say</em></h2>
  <div class="testi-grid">
    <div class="testi-card"><div class="testi-q">"</div><div class="testi-text">Rajendra brings an exceptional combination of strategic thinking and operational rigor. His ability to translate complex data into clear business action — and to bring teams with him — sets him apart as a genuinely transformational leader.</div><div class="testi-name">Senior Operations Director</div><div class="testi-role">Retail & Logistics Industry</div></div>
    <div class="testi-card"><div class="testi-q">"</div><div class="testi-text">Working with Rajendra on our warehouse transformation was outstanding. He diagnosed inefficiencies we had lived with for years, built a rigorous improvement roadmap, and drove execution with genuine accountability.</div><div class="testi-name">VP Supply Chain</div><div class="testi-role">E-Commerce & Distribution</div></div>
    <div class="testi-card"><div class="testi-q">"</div><div class="testi-text">Rajendra's depth in inventory optimization and demand planning is among the best I've encountered in two decades. He has a gift for making the complex simple, and his passion for continuous improvement is infectious.</div><div class="testi-name">Head of Planning & Forecasting</div><div class="testi-role">FMCG Supply Chain</div></div>
  </div>
</section>

<!-- EDUCATION -->
<section class="sec-alt reveal" id="education">
  <div class="sl">Education & Certifications</div>
  <h2 class="st">Academic <em>Excellence</em></h2>
  <div class="edu-grid">
    <div class="edu-card"><div class="edu-inst">IIM Calcutta</div><div class="edu-degree">Executive Programme in Operations Management (EPOM)</div><div class="edu-detail">Premier management institution. Operations, Lean, Analytics, Quality, SC Design.</div></div>
    <div class="edu-card"><div class="edu-inst">IIT Delhi</div><div class="edu-degree">Executive Programme — SC & Operations Analytics</div><div class="edu-detail">Advanced analytics and operations strategy. Aug 2025 – Aug 2026.</div></div>
    <div class="edu-card"><div class="edu-inst">MBA</div><div class="edu-degree">MBA in Strategy & Leadership</div><div class="edu-detail">Strategic management and executive leadership for senior CXO roles.</div></div>
    <div class="edu-card"><div class="edu-inst">MBA</div><div class="edu-degree">MBA in Business Analytics</div><div class="edu-detail">Data-driven decision making, analytics frameworks, and business intelligence.</div></div>
    <div class="edu-card"><div class="edu-inst">Six Sigma</div><div class="edu-degree">Six Sigma Certification</div><div class="edu-detail">Certified DMAIC practitioner in process improvement and quality management.</div></div>
    <div class="edu-card" style="border-color:rgba(201,168,76,.4);background:rgba(201,168,76,.03)">
      <div class="edu-active">Active · 2026</div>
      <div class="edu-inst">SSBM Geneva · Swiss School of Business & Management</div>
      <div class="edu-degree">Doctoral Researcher in Business & Operations</div>
      <div class="edu-detail">Exploring contemporary challenges in operations, leadership, and organizational effectiveness. Research commenced March 2026.</div>
    </div>
  </div>
</section>

<!-- QUOTES -->
<section class="sec-dark reveal">
  <div class="sl" style="justify-content:center">Perspective</div>
  <h2 class="st" style="text-align:center">Words Worth <em>Keeping</em></h2>
  <div class="quote-box" id="qbox">
    <div class="qmark">"</div>
    <div class="qtext" id="qtext">Data without strategy is noise. Strategy without data is guesswork. Great operations need both.</div>
    <div class="qauth" id="qauth">— Rajendra Royal</div>
  </div>
  <div class="qdots" id="qdots"></div>
  <div class="q-btns">
    <button class="q-btn" onclick="qGo((qi-1+quotes.length)%quotes.length)">←</button>
    <button class="q-btn" onclick="qGo((qi+1)%quotes.length)">→</button>
  </div>
</section>

<!-- CONTACT -->
<section class="sec-alt reveal" id="contact">
  <div class="sl">Get In Touch</div>
  <h2 class="st">Let's <em>Connect</em></h2>
  <div class="contact-grid">
    <div>
      <div class="contact-h">Open to the Right Conversation</div>
      <p class="contact-p">Whether you're looking for a strategic advisor, guest speaker, research collaborator, or senior operations leader — I'd be glad to explore how we can create value together.</p>
      <a href="https://www.linkedin.com/in/rajendraroyal/" target="_blank" rel="noopener noreferrer" class="soc-link"><div class="soc-icon"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></div><div><div class="soc-name">LinkedIn</div><div class="soc-handle">linkedin.com/in/rajendraroyal</div></div></a>
      <a href="mailto:rajendra@rajendraroyal.com" class="soc-link"><div class="soc-icon"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div><div><div class="soc-name">Email</div><div class="soc-handle">rajendra@rajendraroyal.com</div></div></a>
    </div>
    <div>
      <div class="f-row">
        <div><label class="f-lbl">Name</label><input type="text" class="f-in" placeholder="Your full name"></div>
        <div><label class="f-lbl">Email</label><input type="email" class="f-in" placeholder="your@email.com"></div>
      </div>
      <label class="f-lbl">Phone</label><input type="tel" class="f-in" placeholder="+91 00000 00000">
      <label class="f-lbl">Organisation / Role</label><input type="text" class="f-in" placeholder="Company and your position">
      <label class="f-lbl">How can I help?</label>
      <textarea class="f-area" placeholder="Tell me about your project or inquiry..."></textarea>
      <button class="btn-gold" style="margin-top:1rem">Send Message</button>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="foot-top">
    <div>
      <div class="foot-brand">Rajendra <em>Royal</em></div>
      <div class="foot-tag">Supply Chain & Operations Leader · Doctoral Researcher · Speaker · Consultant</div>
    </div>
    <div>
      <div class="foot-col-h">Navigate</div>
      <a href="#about" class="foot-link">About</a>
      <a href="#skills" class="foot-link">Skills</a>
      <a href="#portfolio" class="foot-link">Portfolio</a>
      <a href="#expertise" class="foot-link">Expertise</a>
      <a href="#education" class="foot-link">Education</a>
      <a href="#contact" class="foot-link">Contact</a>
    </div>
    <div>
      <div class="foot-col-h">Expertise</div>
      <span class="foot-link">Supply Chain Management</span>
      <span class="foot-link">Warehouse Operations</span>
      <span class="foot-link">Business Analytics</span>
      <span class="foot-link">Process Excellence</span>
      <span class="foot-link">Strategic Leadership</span>
    </div>
  </div>
  <div class="foot-bot">
    <div class="foot-copy">© 2025 Rajendra Royal · All Rights Reserved</div>
    <div class="foot-dba">Doctoral Researcher · Business & Operations · SSBM Geneva</div>
  </div>
</footer>

<script>
// Live date/time
function updateDT(){
  const d=new Date();
  const opts={weekday:'short',day:'numeric',month:'short',year:'numeric'};
  const t=d.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
  document.getElementById('navdt').textContent=d.toLocaleDateString('en-IN',opts)+' · '+t;
}
updateDT();setInterval(updateDT,60000);

// Ticker
const items=[
  "🔬 Doctoral Researcher · Business & Operations · SSBM Geneva",
  "📦 20+ Years Supply Chain & Operations Leadership",
  "🏛️ IIM Calcutta EPOM · IIT Delhi Executive Program Alumni",
  "🎤 Available for Speaking, Consulting & Advisory",
  "📊 Six Sigma Certified · MBA Strategy · MBA Analytics",
  "🚀 Open to CXO, Board Advisory & Transformation Mandates"
];
const tr=document.getElementById('ticker-track');
[...items,...items].forEach(t=>{
  const s=document.createElement('span');
  s.className='ticker-item';
  s.innerHTML=t+'<span class="ticker-sep">◆</span>';
  tr.appendChild(s);
});

// Particles
const pc=document.getElementById('particles');
for(let i=0;i<22;i++){
  const p=document.createElement('div');
  p.className='particle';
  p.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()<.5?1:2}px;height:${Math.random()<.5?1:2}px;animation-duration:${8+Math.random()*12}s;animation-delay:${Math.random()*8}s`;
  pc.appendChild(p);
}

// Nav scroll
window.addEventListener('scroll',()=>{
  document.getElementById('mainnav').classList.toggle('scrolled',window.scrollY>80);
  let cur='';
  document.querySelectorAll('section[id]').forEach(s=>{if(window.scrollY>=s.offsetTop-100)cur=s.id;});
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
},{passive:true});

// Hero counters — start immediately
function anim(el,t,s){let c=0;const timer=setInterval(()=>{c=Math.min(c+t/50,t);el.textContent=Math.floor(c)+(c>=t?s:'');if(c>=t)clearInterval(timer);},28);}
setTimeout(()=>{
  anim(document.getElementById('hs1'),20,'+');
  anim(document.getElementById('hs2'),6,'');
  anim(document.getElementById('hs3'),12,'+');
},500);

// Section counters
const cObs=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;const t=+el.dataset.t;const s=el.dataset.s||'+';let c=0;const timer=setInterval(()=>{c=Math.min(c+t/50,t);el.textContent=Math.floor(c)+(c>=t?s:'');if(c>=t)clearInterval(timer);},28);cObs.unobserve(el);});},{threshold:.5});
document.querySelectorAll('.ci-n[data-t]').forEach(c=>cObs.observe(c));

// Skill bars
const sbObs=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;e.target.querySelectorAll('.sbf').forEach((f,i)=>{setTimeout(()=>{f.style.width=f.dataset.pct+'%';},i*130);});sbObs.unobserve(e.target);});},{threshold:.15});
const sb=document.getElementById('skillbars');if(sb)sbObs.observe(sb);

// Reveal on scroll
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on');});},{threshold:.07});
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el=>ro.observe(el));

// Quotes
const quotes=[
  {t:"Data without strategy is noise. Strategy without data is guesswork. Great operations need both.",a:"Rajendra Royal"},
  {t:"The goal is not to be efficient. The goal is to create value — efficiency is just how you get there.",a:"Rajendra Royal"},
  {t:"Leadership is not about being in charge. It is about taking care of those in your charge.",a:"Simon Sinek"},
  {t:"Lean thinking is not a tool. It is a mindset — and mindsets outlast any methodology.",a:"Rajendra Royal"},
];
var qi=0;
function qGo(i){qi=i;document.getElementById('qtext').textContent=quotes[qi].t;document.getElementById('qauth').textContent='— '+quotes[qi].a;document.querySelectorAll('.qdot').forEach((d,x)=>d.classList.toggle('on',x===qi));}
const dd=document.getElementById('qdots');
quotes.forEach((_,i)=>{const d=document.createElement('div');d.className='qdot'+(i===0?' on':'');d.onclick=()=>qGo(i);dd.appendChild(d);});
setInterval(()=>qGo((qi+1)%quotes.length),7000);
</script>
</body>
</html>
