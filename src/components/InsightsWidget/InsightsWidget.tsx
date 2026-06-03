// Floating "Insights ↗" widget
// - Shows a pulsing tab when section is visible
// - On hover: GSAP stagger animates visible cards in
// - On mouse leave: cards animate out
// - All 14 links always in DOM for SEO (invisible)

import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

const ALL_LINKS = [
  { label: 'Phygital Identity (IoT)',            path: '/phygital-iot/1' },
  { label: 'Near Zero Carbon Infrastructure',    path: '/near-zero-carbon/1' },
  { label: 'Agentic AI Intelligence',            path: '/agentic-ai/1' },
  { label: 'Supply Chain Finance',               path: '/supply-chain-finance/1' },
  { label: 'Carbon Footprint Engine',            path: '/carbon-footprint/1' },
  { label: 'Post Quantum Secure Blockchain',     path: '/post-quantum/1' },
  { label: 'Compliant by Design',                path: '/blog/1' },
  { label: 'Programmable Money & Battery Passport', path: '/blog/2' },
  { label: 'The Intelligent Passport',           path: '/blog/3' },
  { label: "Green Hydrogen's Digital Passport",  path: '/blog/4' },
  { label: 'Global Traceability Regulations',    path: '/blog/5' },
  { label: 'Product Traceability for Food',      path: '/blog/6' },
  { label: 'Traceability & Product Safety',      path: '/blog/7' },
  { label: 'Indian Battery Traceability',        path: '/blog/8' },
]

interface Props {
  position: 'bottom-right' | 'bottom-left'
  visibleCards: string[] // paths of cards to show on hover
  sectionRef: React.RefObject<HTMLElement>
  fixed?: boolean // use fixed positioning (for tall multi-slide sections)
  bottomOffset?: string // override bottom position
  widgetRef?: React.RefObject<HTMLDivElement>
  scrollBackTo?: string // section snap ID to scroll back to on Back
}

export default function InsightsWidget({ position, visibleCards, sectionRef, fixed = false, bottomOffset, widgetRef, scrollBackTo }: Props) {
  const navigate = useNavigate()
  const [sectionVisible, setSectionVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const tabRef = useRef<HTMLButtonElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const pulseAnim = useRef<gsap.core.Tween | null>(null)

  const isRight = position === 'bottom-right'

  // Watch section visibility
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      setSectionVisible(entry.isIntersecting)
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [sectionRef])

  // Pulse animation on tab
  useEffect(() => {
    if (!tabRef.current) return
    if (sectionVisible && !hovered) {
      pulseAnim.current = gsap.to(tabRef.current, {
        scale: 1.06,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    } else {
      pulseAnim.current?.kill()
      gsap.set(tabRef.current, { scale: 1 })
    }
    return () => { pulseAnim.current?.kill() }
  }, [sectionVisible, hovered])

  // Cards animate in/out on hover
  useEffect(() => {
    const container = cardsRef.current
    if (!container) return
    const cards = Array.from(container.querySelectorAll('[data-card]')) as HTMLElement[]
    if (hovered) {
      gsap.fromTo(cards,
        { opacity: 0, x: isRight ? 40 : -40 },
        { opacity: 1, x: 0, duration: 0.35, stagger: 0.07, ease: 'power3.out' }
      )
    } else {
      gsap.to(cards, {
        opacity: 0, x: isRight ? 40 : -40,
        duration: 0.25, stagger: 0.05, ease: 'power2.in'
      })
    }
  }, [hovered, isRight])

  if (!sectionVisible) return null

  const visibleSet = new Set(visibleCards)

  return (
    <div
      ref={widgetRef}
      style={{
        position: fixed ? 'fixed' : 'absolute',
        bottom: fixed ? '3vh' : (bottomOffset ?? '4%'),
        [isRight ? 'right' : 'left']: fixed ? '1.5vw' : '2%',
        zIndex: 50,
        display: 'flex',
        flexDirection: isRight ? 'row-reverse' : 'row',
        alignItems: 'flex-end',
        gap: '8px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pulsing tab */}
      <button
        ref={tabRef}
        style={{
          background: 'rgba(0,0,0,0.85)',
          border: '1px solid rgba(255,255,255,0.35)',
          color: '#fff',
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
          fontSize: 'clamp(10px, 0.84vw, 13px)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '6px 12px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(6px)',
          flexShrink: 0,
        }}
      >
        Deep Dive ↗
      </button>

      {/* Cards container */}
      <div
        ref={cardsRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isRight ? 'flex-end' : 'flex-start',
          gap: '6px',
          pointerEvents: hovered ? 'all' : 'none',
        }}
      >
        {/* Visible cards (animated) */}
        {ALL_LINKS.filter(l => visibleSet.has(l.path)).map(link => (
          <button
            key={link.path}
            data-card
            onClick={() => navigate(link.path, { state: { from: 'homepage-section', scrollTo: scrollBackTo } })}
            style={{
              background: 'rgba(0,0,0,0.85)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff',
              fontFamily: "'D-DIN', sans-serif",
              fontSize: 'clamp(10px, 0.78vw, 12px)',
              letterSpacing: '0.06em',
              padding: '5px 12px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(6px)',
              opacity: 0,
              transition: 'border-color 0.2s ease',
              textAlign: isRight ? 'right' : 'left',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
          >
            {link.label}
          </button>
        ))}

        {/* Hidden DOM links for SEO — invisible to users */}
        {ALL_LINKS.filter(l => !visibleSet.has(l.path)).map(link => (
          <a
            key={link.path}
            href={link.path}
            onClick={e => { e.preventDefault(); navigate(link.path) }}
            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0, overflow: 'hidden' }}
            tabIndex={-1}
            aria-hidden="true"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
