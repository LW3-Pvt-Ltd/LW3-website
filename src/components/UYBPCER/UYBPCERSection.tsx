// UYBPCER section — SVG background + CSS text overlay
// Canvas: 1905 × 1064
//
// Heading:     x=155, y=49,  w=735 → left=8.14%, top=4.61%, maxW=38.58%
// Description: x=1048, y=59, w=740 → left=55.02%, top=5.55%, maxW=38.85%
//
// Font sizes at 1905px canvas:
//   70px → 3.67vw  |  24px → 1.26vw  |  12px → 0.63vw

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import InsightsWidget from '../InsightsWidget/InsightsWidget'

// Shimmer gradient: narrow grey stripe on white, sweeps left→right across 1905px canvas.
// x1/x2 define a 200px-wide band; animateTransform translates it from -200 to +2105.
// begin offsets stagger spatially left→right across the sankey layout.
const SHIMMER_BANDS = [
  { id: 'sg0', begin: '0s',   d: 'M149 690.005C335.28 689.346 439.72 663.664 626 663.005',  stroke: true,  sw: 400 },
  { id: 'sg1', begin: '0.3s', d: 'M472.247 876.5L626 869V880H382L472.247 876.5Z',           stroke: false, sw: 0   },
  { id: 'sg2', begin: '0.6s', d: 'M631 462H1108V775H980L750.5 760L711.5 758.024H631V462Z',  stroke: false, sw: 0   },
  { id: 'sg3', begin: '0.9s', d: 'M631 818C817.5 817 921 835 1108 835',                     stroke: true,  sw: 91  },
  { id: 'sg4', begin: '1.2s', d: 'M1115 545C1301.28 545 1405.72 609 1592 609',             stroke: true,  sw: 167 },
  { id: 'sg5', begin: '1.5s', d: 'M1115 683C1301.28 683 1405.72 748 1592 748',             stroke: true,  sw: 97  },
  { id: 'sg6', begin: '1.8s', d: 'M1115 744C1301.28 744 1405.72 809 1592 809',             stroke: true,  sw: 17  },
  { id: 'sg7', begin: '2.1s', d: 'M1115 760C1301.28 760 1405.72 825 1592 825',             stroke: true,  sw: 9   },
  { id: 'sg8', begin: '2.4s', d: 'M1115 771C1301.28 771 1405.72 836 1592 836',             stroke: true,  sw: 9   },
] as const

const SANKEY_LABEL: React.CSSProperties = {
  fontFamily: "'D-DINCondensed', sans-serif",
  fontSize: '0.63vw',
  lineHeight: 1.4,
  color: '#ffffff',
  position: 'absolute',
}

const SL = (t: string) => t.split('').map((ch, i) => <span key={i} style={{ display: 'inline-block', opacity: 0 }}>{ch === ' ' ? ' ' : ch}</span>)

export default function UYBPCERSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef    = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    gsap.set(el, { opacity: 0, y: 50 })
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        if (headingRef.current) gsap.fromTo(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.025, ease: 'power3.out' })
        if (descRef.current) {
          const words = Array.from(descRef.current.querySelectorAll('span')) as HTMLElement[]
          gsap.fromTo(words, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: 'power2.out', delay: 0.35 })
        }
      } else {
        gsap.set(el, { opacity: 0, y: 50 })
        if (headingRef.current) gsap.set(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 })
        if (descRef.current) gsap.set(Array.from(descRef.current.querySelectorAll('span')), { y: 8, opacity: 0 })
      }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full" style={{ aspectRatio: '1905 / 1064', background: '#000000' }}>
      <img
        src="/uybpcer-nobg.svg"
        alt=""
        className="w-full h-auto block"
        draggable={false}
      />
      {/* Top band background — y=0 to y=398 on 1064 canvas = 37.41% */}
      <img
        src="/UYBPCER background.webp"
        alt=""
        draggable={false}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '37.41%', objectFit: 'cover' }}
      />

      {/* ── Sankey shimmer — grey stripe sweeps left→right on each white band ── */}
      <svg
        viewBox="0 0 1905 1064"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {SHIMMER_BANDS.map(({ id, begin }) => (
            <linearGradient key={id} id={id} gradientUnits="userSpaceOnUse" x1="-100" y1="0" x2="100" y2="0">
              <stop offset="0%"   stopColor="white" stopOpacity="0" />
              <stop offset="50%"  stopColor="#b0b0b0" stopOpacity="0.55" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
              {/* @ts-ignore — SMIL from/to are valid SVG attrs */}
              <animateTransform attributeName="gradientTransform" type="translate"
                from="-200 0" to="2105 0" dur="3.5s" begin={begin} repeatCount="indefinite" />
            </linearGradient>
          ))}
        </defs>

        {SHIMMER_BANDS.map(({ id, d, stroke, sw }) =>
          stroke ? (
            <path key={id} d={d} stroke={`url(#${id})`} strokeWidth={sw} fill="none" />
          ) : (
            <path key={id} d={d} fill={`url(#${id})`} />
          )
        )}
      </svg>

      {/* Heading — D-DIN Bold 70px */}
      <h2
        ref={headingRef}
        className="absolute"
        style={{
          left: '8.14%',
          top: '4.61%',
          maxWidth: '38.58%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',
          lineHeight: 1.05,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
        }}
      >
        <div>{SL('understand your')}</div>
        <div>{SL('battery passport')}</div>
        <div>{SL('compliance effort')}</div>
        <div>{SL('reduction')}</div>
      </h2>

      {/* Description — word-by-word fade */}
      <p
        ref={descRef}
        className="absolute"
        style={{
          left: '55.02%',
          top: '5.55%',
          maxWidth: '38.85%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          lineHeight: 1.5,
          color: '#ffffff',
          margin: 0,
        }}
      >
        {'Prioritize the highest-impact reverse logistics workflows, eliminate manual custody handovers, and achieve EPR compliance with measurable, blockchain-verified ROI.'.split(' ').map((word, i, arr) => (
          <span key={i} style={{ display: 'inline-block', opacity: 0, marginRight: i < arr.length - 1 ? '0.25em' : 0 }}>{word}</span>
        ))}
      </p>

      {/* ── Sankey diagram labels — D-DINCondensed Regular 12px = 0.63vw ── */}

      <span style={{ ...SANKEY_LABEL, left: '9.29%', top: '62.46%', color: '#000000' }}>
        For EUBR compliance
      </span>

      <span style={{ ...SANKEY_LABEL, left: '33.91%', top: '57.80%', color: '#000000' }}>
        Battery passport platform
      </span>

      <span style={{ ...SANKEY_LABEL, left: '59.99%', top: '51.22%', color: '#000000' }}>
        Handle time
      </span>

      <span style={{ ...SANKEY_LABEL, left: '84.25%', top: '51.88%', maxWidth: '7.77%' }}>
        • Identification and basic information<br />
        • Performance and durability data<br />
        • Material composition and sourcing<br />
        • Battery carbon footprint calculation<br />
        • Traceability
      </span>

      <span style={{ ...SANKEY_LABEL, left: '84.25%', top: '67.01%', maxWidth: '8.19%' }}>
        • Co-pilot<br />
        • Vehicle passport readiness<br />
        • AI based performance class<br />
        • Multi-region interoperability
      </span>

      <span style={{ ...SANKEY_LABEL, left: '84.67%', top: '75.47%' }}>
        Post quantum secured smart contracts
      </span>

      <span style={{ ...SANKEY_LABEL, left: '84.67%', top: '76.88%' }}>
        Embedded Finance
      </span>

      <span style={{ ...SANKEY_LABEL, left: '84.67%', top: '78.29%' }}>
        Agentic AI assistance
      </span>

      <span style={{ ...SANKEY_LABEL, left: '33.75%', top: '81.77%', maxWidth: '6.51%' }}>
        Third party compliance<br />
        Through accredited, notified<br />
        Bodies and auditors in EU
      </span>

      <span style={{ ...SANKEY_LABEL, left: '59.06%', top: '77.82%' }}>
        Reverse logistics
      </span>
      <InsightsWidget
        position="bottom-right"
        visibleCards={['/blog/4/phygital-iot-identity', '/blog/5/near-zero-carbon-structure', '/blog/10/green-hydrogen-digital-product-passport']}
        sectionRef={sectionRef}
        scrollBackTo="snap-uybpcer"
      />
    </section>
  )
}
