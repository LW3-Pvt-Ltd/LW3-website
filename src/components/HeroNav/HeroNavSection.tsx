// HeroNav section — SVG background + CSS text overlays
// Nav canvas: 1905×164 (SVG y-offset = 8.667px). Section canvas: 1905×1089.
// All x: item_start + left_inset — section left%.
// All y: (figma_frame_y + 8.667) / 1089 × 100 — section top%.

import React, { useState, useEffect } from 'react'

const REGULATION_ITEMS = [
  'Regulation (EU) 2023/1542',
  'INDIA Battery Aadhar',
  'EU DPP Mendatory Deadline',
]

// ── BOOK A DEMO button ────────────────────────────────────────────────────
function BookDemoBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        left: '8.14%',
        top: '78.76%',
        width: '11.02%',
        height: '5.42%',
        border: '1px solid #ffffff',
        background: hovered ? '#ffffff' : 'transparent',
        color: hovered ? '#000000' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
        fontSize: '1.26vw',
        fontWeight: 400,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'background 0.2s ease, color 0.2s ease',
        zIndex: 2,
      }}
    >
      Book a Demo
    </a>
  )
}

// ── Shared styles ──────────────────────────────────────────────────────────
const NAV_LINK: React.CSSProperties = {
  position: 'absolute',
  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
  fontSize: '1.26vw',       // 24px / 1905
  fontWeight: 400,
  textTransform: 'lowercase',
  fontVariant: 'small-caps',
  letterSpacing: '0.1em',
  color: '#ffffff',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  lineHeight: 1.1,
  zIndex: 3,
}

const SUB_LINK: React.CSSProperties = {
  ...NAV_LINK,
  fontSize: '0.735vw',      // 14px / 1905
  letterSpacing: '0.1em',
  display: 'block',
}

// For date/number sub-items — no small-caps, no case transform
const DATE_LINK: React.CSSProperties = {
  position: 'absolute',
  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
  fontSize: '0.735vw',      // 14px / 1905
  fontWeight: 400,
  letterSpacing: '0.1em',
  color: '#ffffff',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  lineHeight: 1.1,
  zIndex: 3,
  transition: 'color 0.15s ease',
}

// ── Nav link positions (Figma node 15:91) ─────────────────────────────────
// x = item_start + left_inset% × item_width, all / 1905
// y ≈ 10px on nav canvas → 10/1089 = 0.92%
const NAV_LINKS = [
  { label: 'Technology',  left: '36.06%' },  // x=687
  { label: 'Regulations', left: '52.49%' },  // x=1000
  { label: 'Statistics',  left: '69.92%' },  // x=1332
  { label: 'Our Pilots',  left: '87.45%' },  // x=1666
]
const NAV_TOP = '1.47%'   // 16px / 1089 — aligns label top with icon box top

// ── Technology sub-items (separately positioned) ──────────────────────────
// Figma: item starts y=16px, products inset top=76.47% of 119px=91px → canvas y=107px
//        battery passport inset top=89.92% of 119px=107px → canvas y=123px
const TECH_LEFT = '36.06%'
const TECH_SUBS = [
  { text: 'products',         top: '10.38%' },  // (107+6)/1089
  { text: 'battery passport', top: '11.84%' },  // (123+6)/1089
]

// ── Sub-item line height: 14px × 1.1 = 15.4px per line ───────────────────
// Each sub-item individually positioned (SUB_LINK inherits position:absolute)
// Figma: item y=16px + container top → canvas y; top% = canvas_y / 1089

const REG_LEFT = '52.49%'
const REG_SUBS = [
  { text: 'aug 2023',    top: '4.96%'  },  // (16+32+6)/1089
  { text: 'feb 2025',    top: '6.37%'  },
  { text: 'now',         top: '7.78%'  },
  { text: 'feb 2027',    top: '9.20%'  },
  { text: '2026 - 2030', top: '10.61%' },
  { text: '2030',        top: '12.02%' },
]

const STAT_LEFT = '69.92%'
const STAT_SUBS = [
  { text: 'blockchain transaction',  top: '7.53%'  },  // (16+60+6)/1089
  { text: 'payments',                top: '8.94%'  },
  { text: 'avoided carbon emmision', top: '10.36%' },
  { text: 'battery modules tracked', top: '11.77%' },
]

const PILOTS_LEFT = '87.45%'
const PILOTS_SUBS = [
  { text: 'book a pilot', top: '9.09%'  },  // (16+77+6)/1089
  { text: 'contact us',   top: '10.51%' },
  { text: 'book a demo',  top: '11.92%' },
]

export default function HeroNavSection() {
  const [regIdx, setRegIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setRegIdx(i => (i + 1) % REGULATION_ITEMS.length), 3000)
    return () => clearInterval(t)
  }, [])
  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1089' }}>
      <style>{`.nav-sub:hover { text-shadow: 0 0 8px rgba(255,255,255,0.9), 0 0 2px #ffffff; }`}</style>

      {/* ── Hero background video ── */}
      <div className="absolute left-0 right-0 overflow-hidden bg-black" style={{ top: '14.6%', bottom: 0 }}>
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/hero background.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.63)' }} />
      </div>

      {/* ── Hero SVG (nav elements only, background stripped) ── */}
      <img src="/nav-hero-nobg.svg" alt="" className="relative w-full h-auto block" style={{ zIndex: 1 }} draggable={false} />

      {/* ── Nav bar SVG (background, icon boxes — no text, no logo) ── */}
      <img src="/nav-top-notxt.svg" alt="" className="absolute w-full h-auto block" style={{ top: 0, left: 0, zIndex: 2 }} draggable={false} />

      {/* ── POST QUANTUM SECURED ── */}
      {/* Figma node 10:11 — hero frame x=151 y=139 → SVG top=27.79% left=7.93% */}
      <p
        style={{
          position: 'absolute',
          left: '7.93%',
          top: '27.79%',
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
          fontSize: '2.10vw',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '0.28em',
          color: '#ffffff',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          margin: 0,
          zIndex: 2,
        }}
      >
        Post Quantum Secured
      </p>

      {/* ── BATTERY PASSPORT heading ── */}
      {/* Figma node 10:10 — hero frame x=147 y=189, canvas 1905×1089 with 8.667px SVG offset */}
      <h1
        style={{
          position: 'absolute',
          left: '7.72%',
          top: '32.38%',
          fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
          fontSize: '3.67vw',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.01em',
          color: '#ffffff',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          margin: 0,
          zIndex: 2,
        }}
      >
        Battery Passport
      </h1>

      {/* ── "for" + rotating regulation label ── */}
      {/* Figma: hero frame y=282 → SVG top=41.35%; for x=151, regulation x=192 */}
      <style>{`
        @keyframes wheelIn {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .reg-wheel-item {
          animation: wheelIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <p style={{ position: 'absolute', left: '7.93%', top: '41.35%', margin: 0, zIndex: 2,
                  display: 'flex', alignItems: 'center', gap: '0.5em', whiteSpace: 'nowrap' }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: 'italic',
          fontSize: '1.26vw',
          fontWeight: 400,
          color: '#ffffff',
        }}>for</span>
        <span style={{ overflow: 'hidden', display: 'inline-block', lineHeight: 1.2 }}>
          <span
            key={regIdx}
            className="reg-wheel-item"
            style={{
              display: 'block',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '1.26vw',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            {REGULATION_ITEMS[regIdx]}
          </span>
        </span>
      </p>

      {/* ── BOOK A DEMO button ── */}
      {/* Figma: hero frame x=155 y=694, w=210 h=59 → SVG top=78.76% left=8.14% */}
      <BookDemoBtn />

      {/* ── Description ── */}
      {/* Figma: hero frame x=158 y=592, w=571 → SVG top=69.33% left=8.30% */}
      <p style={{
        position: 'absolute',
        left: '8.30%',
        top: '69.33%',
        width: '29.97%',
        fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
        fontSize: '1.26vw',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#ffffff',
        margin: 0,
        zIndex: 2,
      }}>
        Digital compliance Infrastructure to issue, manage &amp; verify battery passports to meet Global Battery Regulation requirements
      </p>

      {/* ── Logo ── */}
      <img
        src="/Logo ultimate.svg"
        alt="LW3"
        draggable={false}
        style={{ position: 'absolute', left: '8.14vw', top: '2.29vw', width: '18.11vw', height: 'auto', zIndex: 3 }}
      />

      {/* ── Nav links (24px, small-caps) ── */}
      {NAV_LINKS.map(({ label, left }) => (
        <a key={label} href="#" style={{ ...NAV_LINK, left, top: NAV_TOP }}>{label}</a>
      ))}

      {/* ── Technology sub-items ── */}
      {TECH_SUBS.map(({ text, top }) => (
        <a key={text} href="#" className="nav-sub" style={{ ...DATE_LINK, left: TECH_LEFT, top }}>{text}</a>
      ))}

      {/* ── Regulations sub-items ── */}
      {REG_SUBS.map(({ text, top }) => (
        <a key={text} href="#" className="nav-sub" style={{ ...DATE_LINK, left: REG_LEFT, top }}>{text}</a>
      ))}

      {/* ── Statistics sub-items ── */}
      {STAT_SUBS.map(({ text, top }) => (
        <a key={text} href="#" className="nav-sub" style={{ ...DATE_LINK, left: STAT_LEFT, top }}>{text}</a>
      ))}

      {/* ── Our Pilots sub-items ── */}
      {PILOTS_SUBS.map(({ text, top }) => (
        <a key={text} href="#" className="nav-sub" style={{ ...DATE_LINK, left: PILOTS_LEFT, top }}>{text}</a>
      ))}

    </section>
  )
}
