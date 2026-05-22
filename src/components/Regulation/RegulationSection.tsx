// Regulation section — SVG background + CSS text overlay
// Canvas: 1905 × 1080
//
// Heading:         left=8.14%,  top=7.94%   — D-DIN Bold    70px → 3.67vw
// Description:     left=8.77%,  top=31.75%  — D-DIN Regular 24px → 1.26vw
// Bottom text:     left=8.35%,  top=69.39%  — D-DIN Regular 24px → 1.26vw
// Timeline labels: D-DIN Regular 24px → 1.26vw  (exact, from SVG glyph cap-height)
// Date labels:     D-DIN Regular 16px → 0.84vw
// Sub-labels:      D-DIN Regular 13px → 0.68vw

import { useState } from 'react'

type HoveredTab = 'eubr' | 'ibpan' | 'eudpp' | null

const T: React.CSSProperties = { position: 'absolute', whiteSpace: 'nowrap' }

const MAIN_LABEL: React.CSSProperties = {
  ...T,
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '1.26vw',
  lineHeight: 1.2,
  color: '#ffffff',
}

const DATE_LABEL: React.CSSProperties = {
  ...T,
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '0.84vw',
  lineHeight: 1.2,
}

const SUB_LABEL: React.CSSProperties = {
  ...T,
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '0.68vw',
  lineHeight: 1.3,
  color: 'rgba(255,255,255,0.6)',
}

function BookDemoBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        left: '8.19%',
        top: '84.54%',
        width: '10.92%',
        height: '5.28%',
        border: '2px solid #ffffff',
        background: hovered ? '#ffffff' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background 0.2s ease',
        boxSizing: 'border-box',
      }}
    >
      <span style={{
        fontFamily: "'D-DIN', sans-serif",
        fontSize: '0.84vw',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: hovered ? '#000000' : '#ffffff',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap',
      }}>
        Book a Demo
      </span>
    </a>
  )
}

const TAB_SRCS: Record<NonNullable<HoveredTab>, string> = {
  eubr:  '/EUBR tab.svg',
  ibpan: '/IBPAN tab.svg',
  eudpp: '/EU DPPmtab.svg',
}

// Natural dimensions on canvas (px / 1905 × 100)
const TAB_WIDTHS: Record<NonNullable<HoveredTab>, string> = {
  eubr:  '13.91%',   // 265/1905
  ibpan: '19.06%',   // 363/1905
  eudpp: '19.11%',   // 364/1905
}

export default function RegulationSection() {
  const [hoveredTab, setHoveredTab] = useState<HoveredTab>('eubr')

  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: '1905 / 1080' }}>
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full block"
        style={{ objectFit: 'cover', zIndex: 0 }}
        autoPlay loop muted playsInline
      >
        <source src="/Regulation background.webm" type="video/webm" />
      </video>

      {/* Circular arc + timeline dots (background stripped) */}
      <img
        src="/regulation-circles.svg"
        alt=""
        className="absolute inset-0 w-full h-full block"
        draggable={false}
      />

      {/* ── Heading ── */}
      <div className="absolute" style={{
        left: '8.14%', top: '7.94%',
        fontFamily: "'D-DIN-Bold', sans-serif",
        fontSize: '3.67vw', lineHeight: 1.1,
        color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.01em',
      }}>
        The<br />Regulation<br />Race Is On
      </div>

      {/* ── Description ── */}
      <p className="absolute text-white" style={{
        left: '8.77%', top: '31.75%', width: '24%',
        fontFamily: "'D-DIN', sans-serif", fontSize: '1.26vw', lineHeight: 1.5,
      }}>
        Battery passport mandates are converging globally. LW3 is the only Indian platform purpose-built to deliver compliance across all three major jurisdictions simultaneously.
      </p>

      {/* ── Bottom text ── */}
      <p className="absolute text-white" style={{
        left: '8.35%', top: '69.39%', width: '24%',
        fontFamily: "'D-DIN', sans-serif", fontSize: '1.26vw', lineHeight: 1.5,
      }}>
        LW3 is a participant in the EU-funded CIRPASS standardisation initiative, featured in the Final Report D3.1 Annex V9 (March 2024) - the global DPP standards roadmap.
      </p>

      {/* ── Timeline: main labels — right-aligned, uniform 20px gap from each dot ── */}
      <span
        style={{ ...MAIN_LABEL, right: '36.85%', top: '15.94%', cursor: 'default', textDecoration: hoveredTab === 'eubr' ? 'underline' : 'none', textUnderlineOffset: '3px' }}
        onMouseEnter={() => setHoveredTab('eubr')}
      >EUBR enters force</span>
      <span
        style={{ ...MAIN_LABEL, right: '38.64%', top: '22.79%', cursor: 'default', textDecoration: hoveredTab === 'ibpan' ? 'underline' : 'none', textUnderlineOffset: '3px' }}
        onMouseEnter={() => setHoveredTab('ibpan')}
      >Carbon Declarations</span>
      <span style={{ ...MAIN_LABEL, right: '39.95%', top: '29.64%' }}>Implementation window</span>
      <span
        style={{ ...MAIN_LABEL, right: '40.73%', top: '36.49%', cursor: 'default', textDecoration: hoveredTab === 'eudpp' ? 'underline' : 'none', textUnderlineOffset: '3px' }}
        onMouseEnter={() => setHoveredTab('eudpp')}
      >Full DPP mandatory</span>
      <span style={{ ...MAIN_LABEL, right: '41.15%', top: '43.34%' }}>EU Post-quantum cryptography mandate</span>
      <span style={{ ...MAIN_LABEL, right: '41.10%', top: '50.94%' }}>Circular Economy Phase</span>

      {/* ── Hover tabs — inside the circle arc ── */}
      {hoveredTab && (
        <img
          key={hoveredTab}
          src={TAB_SRCS[hoveredTab]}
          alt=""
          draggable={false}
          style={{
            position: 'absolute',
            left: '74%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: TAB_WIDTHS[hoveredTab],
            height: 'auto',
            pointerEvents: 'auto',
            opacity: 1,
            zIndex: 10,
          }}
        />
      )}

      {/* ── Timeline: date labels ── */}
      <span style={{ ...DATE_LABEL, left: '66.04%', top: '16.38%', color: '#ffffff' }}>AUG 2023</span>
      <span style={{ ...DATE_LABEL, left: '64.25%', top: '23.23%', color: '#ffffff' }}>FEB 2025</span>
      <span style={{ ...DATE_LABEL, left: '62.94%', top: '30.08%', color: '#00FF15' }}>NOW</span>
      <span style={{ ...DATE_LABEL, left: '62.15%', top: '36.94%', color: '#ffffff' }}>FEB 2027</span>
      <span style={{ ...DATE_LABEL, left: '61.73%', top: '43.79%', color: '#ffffff' }}>2026 - 2030</span>
      <span style={{ ...DATE_LABEL, left: '61.78%', top: '51.38%', color: '#ffffff' }}>2030</span>

      {/* ── Timeline: sub-descriptions ── */}
      <span style={{ ...SUB_LABEL, right: '41.15%', top: '46.47%' }}>Critical infrastructure must be quantum safe.</span>
      <span style={{ ...SUB_LABEL, right: '41.10%', top: '54.06%' }}>Full lifecycle disclosure required.</span>

      {/* ── Book a Demo button ── */}
      <BookDemoBtn />
    </section>
  )
}
