// YDNLYC section -SVG background + CSS text overlay
// Canvas: 1905 × 1064
//
// Heading:     x=155, y=87  → left=8.14%, top=8.18%
// Description: x=155, y=469 → left=8.14%, top=44.08%
// Button:      x=155, y=902, w=210, h=59 → left=8.14%, top=84.77%
//
// Fields frame (4 main cubes): x=944, y=165, w=805, h=752
//   Top-left:     x=944,  y=165 → left=49.55%, top=15.51%, w=20.31%, h=33.93%
//   Top-right:    x=1362, y=165 → left=71.50%, top=15.51%
//   Bottom-left:  x=944,  y=556 → left=49.55%, top=52.26%
//   Bottom-right: x=1362, y=555 → left=71.50%, top=52.16%
//
// lw3 layer cubes (3 small): frame x=155, y=668
//   Top:          x=155,  y=668        → left=8.14%,  top=62.78%, w=7.97%, h=13.26%
//   Bottom-left:  x=155,  y=827.51     → left=8.14%,  top=77.77%
//   Bottom-right: x=325,  y=827.51     → left=17.07%, top=77.77%

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import InsightsWidget from '../InsightsWidget/InsightsWidget'

const SL = (t: string) => t.split('').map((ch, i) => <span key={i} style={{ display: 'inline-block', opacity: 0 }}>{ch === ' ' ? ' ' : ch}</span>)


const MAIN_CUBES = [
  { left: '49.55%', top: '15.51%', label: 'Circularity',  body: 'Data flows in closed loops - nothing leaks out, everything returns to you.' },
  { left: '71.50%', top: '15.51%', label: 'Traceability', body: 'Every action is logged and auditable - know exactly who touched what, and when.' },
  { left: '49.55%', top: '52.26%', label: 'Provenance',   body: 'Know the origin of every data point - verified sources, no ambiguity.' },
  { left: '71.50%', top: '52.16%', label: 'Transparency', body: 'Full visibility into how your data is used, stored, and protected at every step.' },
]

export default function YDNLYCSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const descRef     = useRef<HTMLParagraphElement>(null)
  const squareRefs  = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const squares = squareRefs.current.filter(Boolean) as HTMLDivElement[]
    gsap.set(el,      { opacity: 0, y: 50 })
    gsap.set(squares, { clipPath: 'inset(0 100% 0 0)' })
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        if (headingRef.current) gsap.fromTo(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.025, ease: 'power3.out' })
        if (descRef.current) gsap.fromTo(Array.from(descRef.current.querySelectorAll('span')), { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: 'power2.out', delay: 0.35 })
        gsap.to(squares, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, stagger: 0.2, ease: 'power3.inOut', delay: 0.3 })
      } else {
        gsap.set(el,      { opacity: 0, y: 50 })
        gsap.set(squares, { clipPath: 'inset(0 100% 0 0)' })
        if (headingRef.current) gsap.set(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 })
        if (descRef.current) gsap.set(Array.from(descRef.current.querySelectorAll('span')), { y: 8, opacity: 0 })
      }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full" style={{ aspectRatio: '1905 / 1064', borderTop: '1px solid #ffffff', background: '#000000' }}>

      {/* Right panel background */}
      <img
        src="/YDNLYC background.webp"
        alt=""
        draggable={false}
        style={{ position: 'absolute', top: 0, left: '41.42%', width: '58.58%', height: '100%', objectFit: 'cover' }}
      />

      {/* Left edge stroke of background image panel */}
      <div style={{ position: 'absolute', left: '41.42%', top: 0, width: '1px', height: '100%', background: '#ffffff' }} />

      {/* ── 4 main cubes ── */}
      {MAIN_CUBES.map((c, i) => (
        <div
          key={i}
          ref={el => { squareRefs.current[i] = el }}
          style={{
            position: 'absolute',
            left: c.left,
            top: c.top,
            width: '20.31%',
            height: '33.93%',
            border: '0.105vw solid #ffffff',
            background: 'rgba(0,0,0,0.5)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.63vw',
            padding: '0 1.5%',
          }}
        >
          <span style={{
            fontFamily: "'D-DINCondensed-Bold', 'D-DINCondensed', sans-serif",
            fontSize: '1.68vw',
            lineHeight: 1.2,
            color: '#ffffff',
            textAlign: 'center',
            whiteSpace: 'pre-line',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            {c.label}
          </span>
          <p style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: '1.26vw',
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.75)',
            textAlign: 'center',
            margin: 0,
          }}>
            {c.body}
          </p>
        </div>
      ))}


      {/* ── 3 small cubes — SVG image, positioned exactly per Figma ── */}
      <img
        ref={el => { squareRefs.current[4] = el as unknown as HTMLDivElement }}
        src="/lw3 layer cubes.svg"
        alt=""
        draggable={false}
        style={{
          position: 'absolute',
          left: '8.14%',
          top: '62.78%',
          width: '16.90%',
          height: 'auto',
          pointerEvents: 'none',
        }}
      />

      {/* Heading -D-DIN Bold 70px */}
      <h2
        ref={headingRef}
        className="absolute"
        style={{
          left: '8.14%',
          top: '8.18%',
          maxWidth: '25.46%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',
          lineHeight: 1.05,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
        }}
      >
        <div>{SL('your data')}</div>
        <div>{SL('never leaves')}</div>
        <div>{SL('your control')}</div>
      </h2>

      {/* Description -word-by-word fade */}
      <p
        ref={descRef}
        className="absolute"
        style={{
          left: '8.14%',
          top: '44.08%',
          maxWidth: '25.46%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          lineHeight: 1.5,
          color: '#ffffff',
          margin: 0,
        }}
      >
        {'Encrypted in transit and at rest. Configurable access permissions. Full compliance with global privacy standards - so your team can move fast without cutting corners on security.'.split(' ').map((word, i, arr) => (
          <span key={i} style={{ display: 'inline-block', opacity: 0, marginRight: i < arr.length - 1 ? '0.25em' : 0 }}>{word}</span>
        ))}
      </p>

<InsightsWidget
        position="bottom-right"
        visibleCards={['/blog/8/post-quantum-secure-blockchain', '/blog/4/phygital-iot-identity', '/blog/5/near-zero-carbon-structure']}
        sectionRef={sectionRef}
        scrollBackTo="snap-ydnlyc"
      />
    </section>
  )
}
