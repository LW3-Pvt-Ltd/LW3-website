// Battery Story section — SVG background + CSS text overlay
// Canvas: 1905 × 1059
//
// Heading: x=155, y=48.5 → left=8.14%, top=4.58% — D-DIN Bold 70px → 3.67vw
// Boxes (stroke-only, 249×249): left=8.16%/21.86%, top=36.97%/61.52%, w=13.07%, h=23.51%
// Numbers (D-DIN Bold 24px → 1.26vw) + Labels (D-DIN 13px → 0.68vw) — centered in boxes
// Button (Front-CTA): x=156,y=944,w=438,h=67 → left=8.19%, top=89.14%, w=22.99%, h=6.33%

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

const BOX_STYLE: React.CSSProperties = {
  position: 'absolute',
  width: '13.07%',
  height: '23.51%',
  border: '1px solid #ffffff',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.3vw',
}

const boxes = [
  { left: '8.16%',  top: '36.97%', num: 'Upstream',   label: 'Supply Chain Due Diligence'          },
  { left: '8.16%',  top: '61.52%', num: 'Midstream',  label: 'Battery Passport EU central Registry' },
  { left: '21.86%', top: '61.52%', num: 'Downstream', label: 'Refurbishing, Repurposing, Recycling' },
]

function BookPilotBtn() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      onClick={e => { e.preventDefault(); navigate('/book-pilot') }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        left: '8.19%',
        top: '89.14%',
        width: '22.99%',
        height: '6.33%',
        borderRadius: '0.55vw',
        background: hovered ? 'transparent' : '#ffffff',
        border: hovered ? '1px solid #ffffff' : '1px solid transparent',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '6.6%',
        boxSizing: 'border-box',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background 0.2s ease, border-color 0.2s ease',
        overflow: 'hidden',
      }}
    >
      <span style={{
        fontFamily: "'D-DIN', sans-serif",
        fontSize: '0.84vw',
        letterSpacing: '0.05em',
        color: hovered ? '#ffffff' : '#000000',
        transition: 'color 0.2s ease',
        whiteSpace: 'nowrap',
      }}>
        Book a Pilot
      </span>

      {/* Arrow badge — pinned to right edge */}
      <div style={{
        position: 'absolute',
        right: '1.15%',
        top: '50%',
        transform: 'translateY(-50%)',
        height: '85%',
        aspectRatio: '1',
        borderRadius: '0.4vw',
        background: hovered ? '#ffffff' : '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s ease',
      }}>
        <svg viewBox="0 0 20 20" style={{ width: '55%', height: '55%' }} fill="none">
          <path
            d="M4 16L16 4M16 4H8M16 4V12"
            stroke={hovered ? '#000000' : '#ffffff'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  )
}

export default function BatteryStorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const boxRefs    = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el     = sectionRef.current
    const boxEls = boxRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!el) return

    gsap.set(el,     { opacity: 0, y: 50 })
    gsap.set(boxEls, { clipPath: 'inset(0 100% 0 0)' })

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(el,     { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        gsap.to(boxEls, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, stagger: 0.3, ease: 'power3.inOut', delay: 0.35 })
        if (headingRef.current) gsap.fromTo(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.03, ease: 'power3.out' })
      } else {
        gsap.set(el,     { opacity: 0, y: 50 })
        gsap.set(boxEls, { clipPath: 'inset(0 100% 0 0)' })
        if (headingRef.current) gsap.set(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 })
      }
    }, { threshold: 0.15 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full" style={{ aspectRatio: '1905 / 1059', background: '#000000', borderBottom: '1px solid #ffffff' }}>
      {/* Battery illustration — SVG rect: x=1374 y=522 w=531 h=535 on 1905×1059 canvas */}
      <img
        src="/Battery Story background.webp"
        alt=""
        draggable={false}
        style={{ position: 'absolute', left: '72.13%', top: '49.29%', width: '27.87%', height: '50.52%', objectFit: 'cover' }}
      />

      {/* Heading — D-DIN Bold 70px */}
      <div
        ref={headingRef}
        className="absolute"
        style={{
          left: '8.14%',
          top: '4.58%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',
          lineHeight: 1.1,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
        }}
      >
        {["Your Batteries", "Have a Story", "Let's Tell It"].map((line, li) => (
          <div key={li}>{line.split('').map((ch, i) => <span key={i} style={{ display: 'inline-block', opacity: 0 }}>{ch === ' ' ? '\u00A0' : ch}</span>)}</div>
        ))}
      </div>

      {/* Stat boxes — number + label centered */}
      {boxes.map((box, i) => (
        <div key={i} ref={el => { boxRefs.current[i] = el }} style={{ ...BOX_STYLE, left: box.left, top: box.top }}>
          <span style={{
            fontFamily: "'D-DIN-Bold', sans-serif",
            fontSize: '1.26vw',
            lineHeight: 1.1,
            color: '#ffffff',
          }}>
            {box.num}
          </span>
          <span style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: '0.68vw',
            lineHeight: 1.4,
            color: '#ffffff',
            textAlign: 'center',
          }}>
            {box.label}
          </span>
        </div>
      ))}

      {/* Book a Pilot CTA */}
      <BookPilotBtn />
    </section>
  )
}
