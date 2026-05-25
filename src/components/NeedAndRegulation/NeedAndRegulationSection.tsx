// Need & Regulation Section
// State 1: 4% penalty + GDPR heading + description + circles on left
// State 2: Regulation timeline + large arc on right
// Transition: text + decorative circles slide right; main circle grows & moves right → regulation arc

import { useState } from 'react'

// 'entering-start' = elements mount off-screen (no transition), 'entering' = slide back in
type Phase = 'idle-1' | 'exiting' | 'idle-2' | 'entering-start' | 'entering'

const ANIM = 900
const EASE = 'cubic-bezier(0.65, 0, 0.35, 1)'

// Ellipse 463 (big arc): moves right and grows into regulation arc (diameter 1409 = r≈704)
// C1: actual screen pos of Ellipse 463 in original SVG (matrix transform applied)
// C2: regulation arc position in animation SVG
const C1 = { cx: -164.182, cy: 539.5, r: 418.082, sw: 0.837 }
const C2 = { cx: 432,      cy: 516.5, r: 703.808, sw: 1.384 }

type HoveredTab = 'eubr' | 'ibpan' | 'implwindow' | 'eudpp' | 'pqmandate' | 'circular' | null

const TAB_SRCS: Record<NonNullable<HoveredTab>, string> = {
  eubr:       '/EUBR tab.svg',
  ibpan:      '/IBPAN tab.svg',
  implwindow: '/Implementation window tab.svg',
  eudpp:      '/EU DPPmtab.svg',
  pqmandate:  '/EU Post-quantum cryptography mandatetab.svg',
  circular:   '/EU Post-quantum cryptography mandatetab (1).svg',
}
const TAB_WIDTHS: Record<NonNullable<HoveredTab>, string> = {
  eubr:       '13.91%',
  ibpan:      '19.06%',
  implwindow: '19.06%',
  eudpp:      '19.11%',
  pqmandate:  '25.04%',
  circular:   '18.06%',
}

// Dot positions from animation SVG (cx/1905, cy/1079)
const TIMELINE: { date: string; label: string; sub: string; dotLeft: string; top: string; tab?: HoveredTab }[] = [
  { date: 'AUG 2023',  label: 'EUBR enters force',                   sub: '',                                              dotLeft: '55.3%', top: '17.3%', tab: 'eubr'       },
  { date: 'FEB 2025',  label: 'Carbon Declarations',                  sub: '',                                              dotLeft: '57.1%', top: '24.1%', tab: 'ibpan'      },
  { date: 'NOW',       label: 'Implementation window',                sub: '',                                              dotLeft: '58.4%', top: '31.0%', tab: 'implwindow' },
  { date: 'FEB 2027',  label: 'Full DPP mandatory',                   sub: '',                                              dotLeft: '59.2%', top: '37.9%', tab: 'eudpp'      },
  { date: '2026–2030', label: 'EU Post-quantum cryptography mandate',  sub: 'Critical infrastructure must be quantum safe.', dotLeft: '59.6%', top: '44.7%', tab: 'pqmandate'  },
  { date: '2030',      label: 'Circular Economy Phase',               sub: 'Full lifecycle disclosure required.',            dotLeft: '59.6%', top: '52.3%', tab: 'circular'   },
]

function KnowMoreBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        left: '52%',
        top: '90.9%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ffffff',
        background: hovered ? '#ffffff' : 'transparent',
        color: hovered ? '#000000' : '#ffffff',
        fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
        fontSize: '0.63vw',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        padding: '0.2vw 0.5vw',
        cursor: 'pointer',
        pointerEvents: 'auto',
        transition: 'background 0.2s ease, color 0.2s ease',
      }}
    >
      Know More
    </a>
  )
}

export default function NeedAndRegulationSection() {
  const [phase, setPhase] = useState<Phase>('idle-1')
  const [circleTarget, setCircleTarget] = useState(C1)
  const [hoveredTab, setHoveredTab] = useState<HoveredTab>('eubr')

  const handleClick = () => {
    if (phase === 'idle-1') {
      // Forward: slide out → grow circle → show state 2
      setPhase('exiting')
      requestAnimationFrame(() => setCircleTarget(C2))
      setTimeout(() => setPhase('idle-2'), ANIM)
    } else if (phase === 'idle-2') {
      // Reverse: mount elements off-screen, then slide back in + shrink circle
      setCircleTarget(C2)
      setPhase('entering-start')
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setPhase('entering')
        setCircleTarget(C1)
      }))
      setTimeout(() => setPhase('idle-1'), ANIM)
    }
  }

  const exiting  = phase === 'exiting'
  const entering = phase === 'entering'
  const animating = exiting || entering

  // Forward: slides to 130%. Reverse: mounts at 130% (no transition), then slides to 0%
  const slideOut: React.CSSProperties =
    phase === 'exiting'
      ? { transform: 'translateX(130%)', transition: `transform ${ANIM}ms ${EASE}` }
      : phase === 'entering-start'
      ? { transform: 'translateX(130%)', transition: 'none' }
      : phase === 'entering'
      ? { transform: 'translateX(0)',    transition: `transform ${ANIM}ms ${EASE}` }
      : { transform: 'translateX(0)',    transition: 'none' }

  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: '1905 / 1079' }}>

      {/* ── Background video (same as Regulation section) ── */}
      <video className="absolute inset-0 w-full h-full block" style={{ objectFit: 'cover' }} autoPlay loop muted playsInline>
        <source src="/Regulation background.webm" type="video/webm" />
      </video>

      {/* ── Animated main circle (grows & moves right into regulation arc) ── */}
      {phase !== 'idle-2' && (
        <svg viewBox="0 0 1905 1079" className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', overflow: 'visible' }}>
          <circle
            fill="none"
            stroke="white"
            style={{
              cx: circleTarget.cx,
              cy: circleTarget.cy,
              r: circleTarget.r,
              strokeWidth: circleTarget.sw,
              transition: animating ? `cx ${ANIM}ms ${EASE}, cy ${ANIM}ms ${EASE}, r ${ANIM}ms ${EASE}, stroke-width ${ANIM}ms ${EASE}` : 'none',
            } as React.CSSProperties}
          />
        </svg>
      )}

      {/* ── Ellipse 466 (medium ring) + tiny dot — fixed, never slides ── */}
      {phase !== 'idle-2' && (
        <img
          src="/need-reg-original-nobg.svg?v=3"
          alt=""
          className="absolute inset-0 w-full h-full block"
          style={{ pointerEvents: 'none' }}
          draggable={false}
        />
      )}

      {/* ── Ellipse 465 (large circle, cx=118 cy=540 r=684.5) — slides right on exit ── */}
      {phase !== 'idle-2' && (
        <svg viewBox="0 0 1905 1079" className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', overflow: 'visible', ...slideOut }}>
          {/* Right-half arc only: top (118, -144.5) → clockwise through right → bottom (118, 1224.5) */}
          <path d="M 118 -144.5 A 684.5 684.5 0 0 1 118 1224.5" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      )}

      {/* ── State 2 SVG (timeline dots + small circles + regulation arc) ── */}
      {phase === 'idle-2' && (
        <img
          src="/need-reg-animation-nobg.svg"
          alt=""
          className="absolute inset-0 w-full h-full block"
          style={{ pointerEvents: 'none' }}
          draggable={false}
        />
      )}

      {/* ── Bottom-right CIRPASS text — State 2 only ── */}
      {phase === 'idle-2' && <p style={{
        position: 'absolute',
        right: '8.14%',
        bottom: '12%',
        width: '26%',
        margin: 0,
        fontFamily: "'D-DIN', sans-serif",
        fontSize: '1.26vw',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#ffffff',
        textAlign: 'right',
        zIndex: 2,
        pointerEvents: 'none',
      }}>
        LW3 is a participant in the EU-funded CIRPASS standardisation initiative, featured in the Final Report D3.1 Annex V9 (March 2024) - the global DPP standards roadmap.
      </p>}

      {/* ── Top & bottom borders ── */}
      <div style={{ position: 'absolute', top: 0,    left: 0, right: 0, height: '1px', background: 'white', zIndex: 20, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'white', zIndex: 20, pointerEvents: 'none' }} />

      {/* ── Arrow button ── */}
      <button
        className="absolute rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
        style={{ left: '4.98%', top: '50%', transform: 'translate(-50%, -50%)', width: '4.06vw', height: '4.06vw', border: 'none', cursor: animating ? 'default' : 'pointer', zIndex: 10 }}
        onClick={handleClick}
        disabled={animating}
        aria-label={phase === 'idle-1' ? 'Next' : 'Previous'}
      >
        <svg style={{ width: '38%', height: '38%' }} viewBox="0 0 24 24" fill="none">
          {phase === 'idle-1' || phase === 'exiting' || phase === 'entering-start'
            ? <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            : <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          }
        </svg>
      </button>

      {/* ── STATE 1 text — slides right on exit ── */}
      {phase !== 'idle-2' && (
        <div style={{ position: 'absolute', inset: 0, ...slideOut, zIndex: 2, pointerEvents: 'none' }}>
          {/* 4% */}
          <p style={{ position: 'absolute', left: '22.36%', top: '39.85%', margin: 0, lineHeight: 1, color: '#ffffff' }}>
            <span style={{ fontFamily: "'SF Pro Display', 'SF Pro', -apple-system, sans-serif", fontSize: '6.3vw', fontWeight: 700 }}>4%</span>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '2.1vw', marginLeft: '0.3em' }}>of</span>
          </p>
          <p style={{ position: 'absolute', left: '22.36%', top: '52.85%', margin: 0, fontFamily: "-apple-system, 'SF Pro', sans-serif", fontSize: '0.945vw', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#ffffff' }}>
            Global Turnover
          </p>

          {/* Heading */}
          <p style={{ position: 'absolute', left: '50.03%', top: '42.35%', width: '35.38%', margin: 0, fontFamily: "-apple-system, 'SF Pro', sans-serif", fontSize: '1.68vw', fontWeight: 500, lineHeight: 1.1, textTransform: 'uppercase', color: '#ffffff' }}>
            GDPR Moment for Supply Chain is Here
          </p>

          {/* Description */}
          <p style={{ position: 'absolute', left: '50.03%', top: '47.73%', width: '35.38%', margin: 0, fontFamily: "'D-DIN', sans-serif", fontSize: '1.26vw', fontWeight: 400, lineHeight: 1.4, color: '#ffffff' }}>
            Non-compliance with ESPR/EUDR regulations is subject to GDPR-style enforcement-carrying financial penalties of up to 4% of global annual turnover, compounded by market bans and mandatory product recalls.
          </p>
        </div>
      )}

      {/* ── STATE 2 timeline text ── */}
      {phase === 'idle-2' && TIMELINE.map(({ date, label, sub, dotLeft, top, tab }) => (
        <div key={label} style={{ position: 'absolute', top, width: '100%', zIndex: 2 }}>
          <span style={{ position: 'absolute', right: `calc(100% - ${dotLeft} + 0.6vw)`, top: 0, transform: 'translateY(-50%)', fontFamily: "-apple-system, 'SF Pro', sans-serif", fontSize: '0.84vw', fontWeight: 100, color: '#ffffff', whiteSpace: 'nowrap', textAlign: 'right' }}>
            {date}
          </span>
          <span
            onMouseEnter={() => tab && setHoveredTab(tab)}
            style={{
              position: 'absolute', left: `calc(${dotLeft} + 0.6vw)`, top: 0, transform: 'translateY(-50%)',
              fontFamily: "'D-DINCondensed', sans-serif", fontSize: '1.26vw', color: '#ffffff', whiteSpace: 'nowrap',
              cursor: tab ? 'default' : undefined,
              textDecoration: tab && hoveredTab === tab ? 'underline' : 'none',
              textUnderlineOffset: '3px',
            }}
          >
            {label}
          </span>
          {sub && (
            <span style={{ position: 'absolute', left: `calc(${dotLeft} + 0.6vw)`, top: '1.3vw', transform: 'translateY(-50%)', fontFamily: "-apple-system, 'SF Pro', sans-serif", fontSize: '0.68vw', fontWeight: 100, color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>
              {sub}
            </span>
          )}
        </div>
      ))}

      {/* ── STATE 2 hover tab — inside the regulation arc on the left ── */}
      {phase === 'idle-2' && hoveredTab && (
        <div
          key={hoveredTab}
          style={{
            position: 'absolute',
            left: '22%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: TAB_WIDTHS[hoveredTab],
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <img src={TAB_SRCS[hoveredTab]} alt="" draggable={false} style={{ width: '100%', height: 'auto', display: 'block' }} />
          {/* Know More CTA — CSS button beside LW3 targeted completion row */}
          {hoveredTab === 'implwindow' && <KnowMoreBtn />}
        </div>
      )}

    </section>
  )
}
