// BPAP section — SVG background + CSS text/buttons/video overlay
// Canvas: 1905 × 1026   All positions as % of canvas dimensions

import { useState, useEffect } from 'react'
import { openBookDemo } from '../BookDemo/BookDemoModal'

const BPAP_LINES = [
  'Material to market visibility',
  'Structured compliance records',
  'Product-level emissions intelligence',
  'End-of-life and reverse flow coordination',
]

export default function BPAPSection() {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentTyped, setCurrentTyped] = useState('')
  const [demoHovered, setDemoHovered] = useState(false)

  useEffect(() => {
    let textIdx = 0
    let charIdx = 0
    let timer: ReturnType<typeof setTimeout>

    const typeNext = () => {
      const current = BPAP_LINES[textIdx]
      if (charIdx <= current.length) {
        setCurrentTyped(current.slice(0, charIdx))
        charIdx++
        timer = setTimeout(typeNext, 60)
      } else {
        // Line done — lock it in, start next
        setVisibleLines(prev => [...prev, current])
        setCurrentTyped('')
        textIdx++
        charIdx = 0
        if (textIdx < BPAP_LINES.length) {
          timer = setTimeout(typeNext, 300)
        } else {
          // All 4 shown — wait, then remove one by one quickly, then loop
          timer = setTimeout(() => {
            const clearOneByOne = (remaining: number) => {
              setVisibleLines(prev => prev.slice(0, remaining))
              if (remaining > 0) {
                timer = setTimeout(() => clearOneByOne(remaining - 1), 150)
              } else {
                textIdx = 0
                charIdx = 0
                timer = setTimeout(typeNext, 500)
              }
            }
            clearOneByOne(BPAP_LINES.length - 1)
          }, 2000)
        }
      }
    }

    typeNext()
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1026' }}>

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full block"
        style={{ objectFit: 'cover', zIndex: 0 }}
        autoPlay loop muted playsInline
      >
        <source src="/section3.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 0 }} />


{/* ── Left-side text + buttons (z-index: 1 ensures they sit above SVG) ── */}

      {/* "AGENTIC" — D-DIN Regular 40px */}
      <p
        className="absolute text-[#f5f2ec] whitespace-nowrap"
        style={{
          zIndex: 1,
          left: '8.82%',
          top: '8.48%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '2.1vw',          /* 40px at 1905px canvas */
          fontWeight: 'normal',
          lineHeight: 1.1,
          letterSpacing: '4px',
          margin: 0,
        }}
      >
        AGENTIC
      </p>

      {/* "BATTERY PASSPORT" — D-DIN Bold 70px, two lines */}
      <p
        className="absolute text-[#f5f2ec]"
        style={{
          zIndex: 1,
          left: '8.77%',
          top: '14.72%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',         /* 70px at 1905px canvas */
          fontWeight: 'normal',       /* weight is baked into D-DIN-Bold face */
          lineHeight: 1.1,
          letterSpacing: '7px',
          margin: 0,
        }}
      >
        BATTERY<br />PASSPORT
      </p>

      {/* ── Buttons ───────────────────────────────────────────────── */}

      {/* "Book a Demo" — outlined white button */}
      <button
        onClick={openBookDemo}
        onMouseEnter={() => setDemoHovered(true)}
        onMouseLeave={() => setDemoHovered(false)}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: '8.19%',
          top: '85.87%',
          width: '10.92%',
          height: '5.56%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #ffffff',
          background: demoHovered ? '#ffffff' : 'transparent',
          color: demoHovered ? '#000000' : '#ffffff',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          fontWeight: 'normal',
          letterSpacing: '1.19px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background 0.2s ease, color 0.2s ease',
        }}
      >
        Book a Demo
      </button>


      {/* ── Stacking typing animation ── */}
      <div
        style={{
          position: 'absolute',
          left: '60%',
          top: '45%',
          transform: 'translateY(-50%)',
          width: '31.86%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6vw',
          zIndex: 1,
          textAlign: 'right',
        }}
      >
        {visibleLines.map((line, i) => (
          <p key={i} style={{ margin: 0, fontFamily: "'D-DINCondensed-Bold', sans-serif", fontSize: '1.68vw', fontWeight: 'normal', lineHeight: 1.3, color: '#ffffff' }}>
            {line}
          </p>
        ))}
        {currentTyped && (
          <p style={{ margin: 0, fontFamily: "'D-DINCondensed-Bold', sans-serif", fontSize: '1.68vw', fontWeight: 'normal', lineHeight: 1.3, color: '#ffffff' }}>
            {currentTyped}
            <span style={{ borderRight: '2px solid #ffffff', marginLeft: '2px', animation: 'blink 0.7s step-end infinite' }} />
          </p>
        )}
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

    </section>
  )
}
