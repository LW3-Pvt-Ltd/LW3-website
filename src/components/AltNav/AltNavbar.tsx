// AltNavbar — fixed navbar after scrolling past hero
// Figma: node 69:2266 canvas 1905×92 | expanded 1905×216
// Nav links + dropdowns use absolute x positions so they align exactly

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { openBookDemo } from '../BookDemo/BookDemoModal'
import { openContact } from '../Contact/ContactModal'
import { openRegulationTab } from '../NeedAndRegulation/NeedAndRegulationSection'

function useScrollTo() {
  const navigate = useNavigate()
  return (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }
}

function BookDemoBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={openBookDemo}
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

type Key = 'product' | 'technology' | 'regulation' | 'about'

const LINKS: { key: Key; label: string; left: string; target: string }[] = [
  { key: 'product',    label: 'product',    left: '35.43%', target: 'snap-bpap'    },
  { key: 'technology', label: 'technology', left: '54.86%', target: 'snap-madpp-0' },
  { key: 'regulation', label: 'regulation', left: '45.04%', target: 'snap-gap'     },
  { key: 'about',      label: 'about',      left: '64.78%', target: 'snap-bqegvir' },
]

type DropdownItem = { label: string; target: string | null; regTab?: string }

const DROPDOWNS: Record<Key, DropdownItem[]> = {
  product: [
    { label: 'battery passport',      target: 'snap-bpap'    },
    { label: 'reverse logistics',     target: 'snap-ydnlyc'  },
    { label: 'compliance automation', target: 'snap-uybpcer' },
  ],
  technology: [
    { label: 'agentic ai intelligence', target: 'snap-madpp-0' },
    { label: 'pq secure blockchain',    target: 'snap-madpp-0' },
  ],
  regulation: [
    { label: 'eubr enters force',      target: 'snap-gap', regTab: 'eubr'       },
    { label: 'carbon declarations',    target: 'snap-gap', regTab: 'ibpan'      },
    { label: 'implementation window',  target: 'snap-gap', regTab: 'implwindow' },
    { label: 'full dpp mandatory',     target: 'snap-gap', regTab: 'eudpp'      },
    { label: 'eu pq mandate',          target: 'snap-gap', regTab: 'pqmandate'  },
    { label: 'circular economy phase', target: 'snap-gap', regTab: 'circular'   },
  ],
  about: [
    { label: 'book a demo', target: null },
    { label: 'awards',      target: 'snap-bqegvir-2' },
    { label: 'contact us',  target: 'contact'      },
  ],
}

const BAR_H = '4.83vw'   // 92 / 1905

export default function AltNavbar({ visible }: Props) {
  const [active, setActive]   = useState<Key | null>(null)
  const [hidden, setHidden]   = useState(false)
  const lastY = useRef(0)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!visible) setActive(null)
  }, [visible])

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
          borderBottom: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {/* Logo SVG */}
        <img
          src="/Latest updated logo.svg"
          alt="LW3"
          draggable={false}
          style={{ position: 'absolute', left: '8.14vw', top: '50%', transform: 'translateY(-50%)', width: '18.11vw', minWidth: '180px', height: 'auto' }}
        />

        {/* Nav links */}
        {LINKS.map(({ key, label, left, target }) => (
          <a
            key={key}
            href="#"
            onMouseEnter={() => setActive(key)}
            onClick={(e) => { e.preventDefault(); scrollTo(target); setActive(null) }}
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
              textTransform: 'uppercase',
            }}
          >
            {label}
          </a>
        ))}

        {/* Book a Demo button */}
        <BookDemoBtn />
      </nav>

      {/* ── Dropdown island ── */}
      {active && (
        <div
          className="absolute flex flex-col"
          style={{
            left: LINKS.find(l => l.key === active)!.left,
            top: BAR_H,
            backgroundColor: '#000',
            border: '1px solid rgba(255,255,255,0.18)',
            padding: '0.7vw 1vw',
            gap: '0.4vw',
            minWidth: '160px',
          }}
        >
          {DROPDOWNS[active].map(({ label, target, regTab }) => (
            <a
              key={label}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setActive(null)
                if (target === null) openBookDemo()
                else if (target === 'contact') openContact()
                else {
                  scrollTo(target)
                  if (regTab) openRegulationTab(regTab as Parameters<typeof openRegulationTab>[0])
                }
              }}
              className="text-white no-underline hover:opacity-60 transition-opacity"
              style={{
                fontFamily: 'D-DINCondensed, D-DIN, sans-serif',
                fontSize: '0.74vw',
                whiteSpace: 'nowrap',
                lineHeight: 1.4,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
