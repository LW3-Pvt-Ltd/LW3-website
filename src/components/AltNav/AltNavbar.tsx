// AltNavbar — fixed navbar after scrolling past hero
// Figma: node 69:2266 canvas 1905×92 | expanded 1905×216
// Nav links + dropdowns use absolute x positions so they align exactly

import { useState, useEffect, useRef } from 'react'

function BookDemoBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        right: '8.14vw',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '11.02vw',
        minWidth: '120px',
        height: '3.1vw',
        minHeight: '40px',
        border: '1px solid white',
        background: hovered ? '#ffffff' : 'transparent',
        color: hovered ? '#000000' : '#ffffff',
        fontFamily: 'D-DINCondensed, D-DIN, sans-serif',
        fontSize: '0.84vw',
        letterSpacing: '0.08em',
        cursor: 'pointer',
        transition: 'background 0.2s ease, color 0.2s ease',
      }}
    >
      BOOK A DEMO
    </button>
  )
}

interface Props { visible: boolean }

type Key = 'technology' | 'regulations' | 'statistics' | 'our-pilots'

// Absolute x positions from Figma (in 1905px canvas) → converted to %
// Nav link x: Technology=675, Regulations=858, Statistics=1045, Our pilots=1234
const LINKS: { key: Key; label: string; left: string }[] = [
  { key: 'technology',   label: 'technology',   left: '35.43%' }, // 675/1905
  { key: 'regulations',  label: 'regulations',  left: '45.04%' }, // 858/1905
  { key: 'statistics',   label: 'statistics',   left: '54.86%' }, // 1045/1905
  { key: 'our-pilots',   label: 'our pilots',   left: '64.78%' }, // 1234/1905
]

// Dropdown links — same x as parent link, top=10px within dropdown panel (y=92)
const DROPDOWNS: Record<Key, string[]> = {
  technology:   ['products', 'battery passport'],
  regulations:  ['aug 2023', 'feb 2025', 'now', 'feb 2027', '2026 – 2030', '2030'],
  statistics:   ['blockchain . transaction', 'payments', 'avoided carbon emmison', 'battery modules tracked'],
  'our-pilots': ['book a pilot', 'contact us', 'book a demo', 'battery modules tracked'],
}

const BAR_H  = '4.83vw'   // 92 / 1905
const DROP_H = '7.32vw'
const DROP_MIN = '75px'

export default function AltNavbar({ visible }: Props) {
  const [active, setActive]   = useState<Key | null>(null)
  const [hidden, setHidden]   = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80) // hide when scrolling down past 80px
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed top-0 left-0 w-full z-50"
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
      }}
      onMouseLeave={() => setActive(null)}
    >
      {/* ── Main bar ── */}
      <nav
        className="relative w-full"
        style={{
          height: BAR_H,
          minHeight: '60px',
          backgroundColor: '#000',
          borderBottom: active ? 'none' : '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {/* Logo SVG */}
        <img
          src="/Logo ultimate.svg"
          alt="LW3"
          draggable={false}
          style={{ position: 'absolute', left: '8.14vw', top: '50%', transform: 'translateY(-50%)', width: '18.11vw', minWidth: '180px', height: 'auto' }}
        />

        {/* Nav links — each absolutely positioned at exact Figma x */}
        {LINKS.map(({ key, label, left }) => (
          <a
            key={key}
            href="#"
            onMouseEnter={() => setActive(key)}
            className="no-underline"
            style={{
              position: 'absolute',
              left,
              bottom: '1.0vw',
              color: 'white',
              borderBottom: active === key ? '1px solid white' : '1px solid transparent',
              paddingBottom: '0.1vw',
              fontFamily: 'D-DINCondensed, D-DIN, sans-serif',
              fontSize: '0.84vw',
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </a>
        ))}

        {/* Book a Demo button */}
        <BookDemoBtn />
      </nav>

      {/* ── Dropdown panel — expands below bar, same x as parent link ── */}
      {active && (
        <div
          className="relative w-full"
          style={{
            backgroundColor: '#000',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            height: DROP_H,
            minHeight: DROP_MIN,
          }}
        >
          {/* Links left-aligned directly under their column heading */}
          <div
            className="absolute flex flex-col"
            style={{
              left: LINKS.find(l => l.key === active)!.left,
              top: '0.05vw',
              gap: '0.13vw',
            }}
          >
            {DROPDOWNS[active].map(link => (
              <a
                key={link}
                href="#"
                className="text-white no-underline hover:opacity-60 transition-opacity"
                style={{
                  fontFamily: 'D-DINCondensed, D-DIN, sans-serif',
                  fontSize: '0.74vw',   // 14px / 1905
                  whiteSpace: 'nowrap',
                  lineHeight: 1.2,
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
