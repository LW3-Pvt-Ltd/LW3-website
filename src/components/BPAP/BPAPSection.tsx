// BPAP section — SVG background + CSS text/buttons/video overlay
// Canvas: 1905 × 1026   All positions as % of canvas dimensions

import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

const BPAP_LINES = [
  'Material to market visibility',
  'Structured compliance records',
  'Product-level emissions intelligence',
  'End-of-life and reverse flow coordination',
]

// Splits a word into letter spans for GSAP targeting
function SplitWord({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={className}
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </>
  )
}

export default function BPAPSection() {
  const navigate = useNavigate()
  const [demoHovered, setDemoHovered]   = useState(false)
  const sectionRef  = useRef<HTMLElement>(null)
  const agenticRef  = useRef<HTMLParagraphElement>(null)
  const batteryRef  = useRef<HTMLHeadingElement>(null)
  const linesRef    = useRef<HTMLDivElement>(null)
  const linesAnimRef = useRef<gsap.core.Timeline | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // IntersectionObserver + section fade
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    gsap.set(el, { opacity: 0, y: 50 })
    const obs = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
      if (entry.isIntersecting) gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      else gsap.set(el, { opacity: 0, y: 50 })
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Letter split + stagger lines animation on visibility change
  useEffect(() => {
    const agentic = agenticRef.current
    const battery = batteryRef.current
    const container = linesRef.current
    if (!agentic || !battery || !container) return

    const letterEls = [
      ...Array.from(agentic.querySelectorAll('span')),
      ...Array.from(battery.querySelectorAll('span')),
    ] as HTMLElement[]
    const lineEls = Array.from(container.children) as HTMLElement[]

    if (isVisible) {
      // Kill any previous
      gsap.killTweensOf(letterEls)
      linesAnimRef.current?.kill()

      // Letters: stagger in from below
      gsap.fromTo(
        letterEls,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.03, ease: 'power3.out' }
      )

      // Lines: stagger in after letters finish (~letterEls.length * 0.03 + 0.55)
      const linesDelay = letterEls.length * 0.03 + 0.2
      gsap.set(lineEls, { y: 40, opacity: 0 })
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2, delay: linesDelay })
      tl.to(lineEls, { y: 0, opacity: 1, duration: 0.65, stagger: 0.18, ease: 'power3.out' })
        .to({}, { duration: 2.2 })
        .to(lineEls, { y: -30, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'power2.in' })
      linesAnimRef.current = tl

    } else {
      // Reset on leave
      linesAnimRef.current?.kill()
      gsap.killTweensOf(letterEls)
      gsap.set(letterEls, { y: 40, opacity: 0 })
      gsap.set(lineEls,   { y: 40, opacity: 0 })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative w-full" style={{ aspectRatio: '1905 / 1026' }}>

      {/* Background video — lazy loaded */}
      <video
        className="absolute inset-0 w-full h-full block"
        style={{ objectFit: 'cover', zIndex: 0 }}
        autoPlay loop muted playsInline
      >
        {isVisible && <source src="/section3.webm" type="video/webm" />}
        {isVisible && <source src="/section3.mp4" type="video/mp4" />}
      </video>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.68)', zIndex: 0 }} />

      {/* ── "AGENTIC" — split letters ── */}
      <p
        ref={agenticRef}
        className="absolute text-[#f5f2ec] whitespace-nowrap"
        style={{
          zIndex: 1,
          left: '8.82%',
          top: '8.48%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '2.1vw',
          fontWeight: 'normal',
          lineHeight: 1.1,
          letterSpacing: '4px',
          margin: 0,
        }}
      >
        <SplitWord text="AGENTIC" />
      </p>

      {/* ── "BATTERY PASSPORT" — split letters ── */}
      <h2
        ref={batteryRef}
        className="absolute text-[#f5f2ec]"
        style={{
          zIndex: 1,
          left: '8.77%',
          top: '14.72%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',
          fontWeight: 'normal',
          lineHeight: 1.1,
          letterSpacing: '7px',
          margin: 0,
        }}
      >
        <span style={{ display: 'block' }}><SplitWord text="BATTERY" /></span>
        <span style={{ display: 'block' }}><SplitWord text="PASSPORT" /></span>
      </h2>

      {/* ── "Book a Demo" button ── */}
      <button
        onClick={() => navigate('/book-demo')}
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

      {/* ── GSAP stagger lines ── */}
      <div
        style={{
          position: 'absolute',
          left: '60%',
          top: '45%',
          transform: 'translateY(-50%)',
          width: '31.86%',
          zIndex: 1,
          textAlign: 'right',
          overflow: 'hidden',
        }}
      >
        <div
          ref={linesRef}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.6vw' }}
        >
          {BPAP_LINES.map((line, i) => (
            <p
              key={i}
              style={{
                margin: 0,
                fontFamily: "'D-DINCondensed-Bold', sans-serif",
                fontSize: '1.68vw',
                fontWeight: 'normal',
                lineHeight: 1.3,
                color: '#ffffff',
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

    </section>
  )
}
