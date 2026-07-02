// HeroNav section — SVG background + CSS text overlays
// Nav canvas: 1905×164 (SVG y-offset = 8.667px). Section canvas: 1905×1089.
// All x: item_start + left_inset — section left%.
// All y: (figma_frame_y + 8.667) / 1089 × 100 — section top%.

import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { openRegulationTab } from '../NeedAndRegulation/NeedAndRegulationSection'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY)
}

const REGULATION_ITEMS = [
  'Regulation (EU) 2023/1542',
  'BPAN Draft Guidelines (upcoming)',
  'EU DPP Mandatory Deadline',
  'ESPR Regulation:(EU) 2024/1781',
  'CRMA Regulation:(EU) 2024/1252',
]

// ── BOOK A DEMO button ────────────────────────────────────────────────────
function BookDemoBtn() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={() => navigate('/book-demo')}
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
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'background 0.2s ease, color 0.2s ease',
        zIndex: 2,
      }}
    >
      Book a Demo
    </button>
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
  { label: 'Product',    left: '36.06%', target: 'snap-bpap'    },
  { label: 'Technology', left: '69.92%', target: 'snap-madpp-0' },
  { label: 'Regulation', left: '52.49%', target: 'snap-gap'     },
  { label: 'About',      left: '87.45%', target: 'snap-bqegvir' },
]
const NAV_TOP = '1.47%'

const PROD_LEFT = '36.06%'
const PROD_SUBS = [
  { text: 'battery passport',      top: '9.47%',  target: 'snap-bpap'    },
  { text: 'reverse logistics',     top: '10.88%', target: 'snap-ydnlyc'  },
  { text: 'compliance automation', top: '12.29%', target: 'snap-uybpcer' },
]

const TECH_LEFT = '69.92%'
const TECH_SUBS = [
  { text: 'agentic ai intelligence', top: '10.61%', target: 'snap-madpp-0' },
  { text: 'pq secure blockchain',    top: '12.02%', target: 'snap-madpp-0' },
]

const REG_LEFT = '52.49%'
const REG_SUBS = [
  { text: 'eubr enters force',       top: '4.96%',  tab: 'eubr'       },
  { text: 'carbon declarations',     top: '6.37%',  tab: 'ibpan'      },
  { text: 'implementation window',   top: '7.78%',  tab: 'implwindow' },
  { text: 'full dpp mandatory',      top: '9.20%',  tab: 'eudpp'      },
  { text: 'eu pq mandate',           top: '10.61%', tab: 'pqmandate'  },
  { text: 'circular economy phase',  top: '12.02%', tab: 'circular'   },
]

const ABOUT_LEFT = '87.45%'
const ABOUT_SUBS = [
  { text: 'what is lw3', top: '6.37%',  target: 'what-is-lw3' as string | null },
  { text: 'blogs',       top: '7.78%',  target: 'blogs' as string | null },
  { text: 'book a demo', top: '9.19%',  target: null as string | null },
  { text: 'awards',      top: '10.61%', target: 'snap-bqegvir-2' as string | null },
  { text: 'contact us',  top: '12.02%', target: 'contact' as string | null },
]

const HERO_TYPING_TEXTS = ['Post Quantum Secured', 'Agentic AI']

export default function HeroNavSection() {
  const navigate = useNavigate()
  const [typed, setTyped] = useState('')
  const tickerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    let idx = 0

    const cycle = () => {
      const next = REGULATION_ITEMS[(idx + 1) % REGULATION_ITEMS.length]

      // slide current out upward, then swap text and slide in from below
      gsap.to(el, {
        y: '-110%',
        opacity: 0,
        duration: 0.45,
        ease: 'power2.in',
        onComplete: () => {
          idx = (idx + 1) % REGULATION_ITEMS.length
          el.textContent = next
          gsap.fromTo(el,
            { y: '110%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 0.7, ease: 'power3.out' }
          )
        },
      })
    }

    // set initial text
    el.textContent = REGULATION_ITEMS[0]
    gsap.set(el, { y: '0%', opacity: 1 })

    const interval = setInterval(cycle, 3000)
    return () => {
      clearInterval(interval)
      gsap.killTweensOf(el)
    }
  }, [])

  useEffect(() => {
    let textIdx = 0
    let charIdx = 0
    let timer: ReturnType<typeof setTimeout>

    const typeNext = () => {
      const current = HERO_TYPING_TEXTS[textIdx]
      if (charIdx <= current.length) {
        setTyped(current.slice(0, charIdx))
        charIdx++
        timer = setTimeout(typeNext, 80)
      } else {
        timer = setTimeout(() => {
          setTyped('')
          timer = setTimeout(() => {
            textIdx = (textIdx + 1) % HERO_TYPING_TEXTS.length
            charIdx = 0
            typeNext()
          }, 400)
        }, 1500)
      }
    }

    typeNext()
    return () => clearTimeout(timer)
  }, [])
  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1089' }}>
      <style>{`.nav-sub:hover { text-shadow: 0 0 8px rgba(255,255,255,0.9), 0 0 2px #ffffff; }`}</style>

      {/* ── Hero background video ── */}
      <div className="absolute left-0 right-0 overflow-hidden bg-black" style={{ top: '14.6%', bottom: 0 }}>
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/section1.webm" type="video/webm" />
          <source src="/section1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.73)' }} />
      </div>

      {/* ── Hero SVG (vectors only, background stripped) ── */}
      <img src="/nav-hero-nobg.svg" alt="" className="relative w-full h-auto block" style={{ zIndex: 1 }} draggable={false} />

      {/* ── Nav bar background texture — height capped to nav bar (164/1089 = 15.06%) ── */}
      <img src="/nav-top-bg.webp" alt="" draggable={false}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '15.06%', objectFit: 'cover', zIndex: 2 }} />
      {/* ── Nav bar SVG (vectors only, icon boxes — no text, no logo) ── */}
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
        {typed}
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

      {/* ── "for" + rotating regulation label (GSAP wheel) ── */}
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
            ref={tickerRef}
            style={{
              display: 'block',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '1.26vw',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          />
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
      <a
        href="/"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{ position: 'absolute', left: '8.14%', top: '7.53%', transform: 'translateY(-50%)', zIndex: 3, display: 'inline-block', width: '18.11%', lineHeight: 0 }}
      >
        <img
          src="/Latest updated logo.svg"
          alt="LW3 Logistics W3"
          draggable={false}
          style={{ width: '100%', height: 'auto' }}
        />
      </a>

      {/* ── Nav links (24px, small-caps) ── */}
      {NAV_LINKS.map(({ label, left, target }) => (
        <a key={label} href="#" onClick={e => { e.preventDefault(); scrollTo(target) }} style={{ ...NAV_LINK, left, top: NAV_TOP }}>{label}</a>
      ))}

      {/* ── Product sub-items ── */}
      {PROD_SUBS.map(({ text, top, target }) => (
        <a key={text} href="#" className="nav-sub" onClick={e => { e.preventDefault(); scrollTo(target) }} style={{ ...DATE_LINK, left: PROD_LEFT, top }}>{text}</a>
      ))}

      {/* ── Technology sub-items ── */}
      {TECH_SUBS.map(({ text, top, target }) => (
        <a key={text} href="#" className="nav-sub" onClick={e => { e.preventDefault(); scrollTo(target) }} style={{ ...DATE_LINK, left: TECH_LEFT, top }}>{text}</a>
      ))}

      {/* ── Regulation sub-items ── */}
      {REG_SUBS.map(({ text, top, tab }) => (
        <a key={text} href="#" className="nav-sub" onClick={e => { e.preventDefault(); scrollTo('snap-gap'); openRegulationTab(tab as Parameters<typeof openRegulationTab>[0]) }} style={{ ...DATE_LINK, left: REG_LEFT, top }}>{text}</a>
      ))}

      {/* ── About sub-items ── */}
      {ABOUT_SUBS.map(({ text, top, target }) => (
        <a key={text} href="#" className="nav-sub" onClick={e => { e.preventDefault(); if (target === null) navigate('/book-demo'); else if (target === 'contact') navigate('/contact'); else if (target === 'what-is-lw3') navigate('/what-is-lw3', { state: { scrollY: window.scrollY } }); else if (target === 'blogs') navigate('/blog/1/compliant-by-design'); else scrollTo(target) }} style={{ ...DATE_LINK, left: ABOUT_LEFT, top }}>{text}</a>
      ))}

    </section>
  )
}
