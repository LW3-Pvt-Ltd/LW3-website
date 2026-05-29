// Our Partners section — black bg + CSS heading + GSAP infinite scroll carousel
// Canvas: 1905 × 541
// Card band: y=200.5 to y=397.5 → top=36.97% height=36.41%
// Strip SVG: full partner logo strip, viewBox="0 0 3789 198"

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function PartnersSection() {
  const trackRef   = useRef<HTMLDivElement>(null)
  const tweenRef   = useRef<gsap.core.Tween | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    tweenRef.current = gsap.to(track, { x: '-33.333%', duration: 28, ease: 'none', repeat: -1 })
    return () => { tweenRef.current?.kill() }
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (headingRef.current) gsap.fromTo(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.04, ease: 'power3.out' })
      } else {
        if (headingRef.current) gsap.set(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 })
      }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const pause  = () => tweenRef.current?.pause()
  const resume = () => tweenRef.current?.resume()

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: '1905 / 541', background: '#000000', borderTop: '1px solid #ffffff', borderBottom: '1px solid #ffffff' }}
    >
      {/* Heading */}
      <div
        ref={headingRef}
        style={{
          position: 'absolute',
          left: '8.32%',
          top: '16.82%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',
          lineHeight: 1.05,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        {'Our Partners'.split('').map((ch, i) => <span key={i} style={{ display: 'inline-block', opacity: 0 }}>{ch === ' ' ? '\u00A0' : ch}</span>)}
      </div>

      {/* Carousel band */}
      <div
        style={{ position: 'absolute', left: 0, right: 0, top: '36.97%', height: '36.41%', overflow: 'hidden' }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          ref={trackRef}
          style={{ display: 'flex', height: '100%', willChange: 'transform' }}
        >
          {[0, 1, 2].map(i => (
            <img
              key={i}
              src="/Carousel frame.svg"
              alt=""
              draggable={false}
              style={{ height: '100%', width: 'auto', flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
