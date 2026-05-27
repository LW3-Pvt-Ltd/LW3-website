// Footer section — solid #0A0A08 background, CSS layout
// Canvas: 1905 × 319.21
//
// Logo SVG (footer-logo.svg): left=9.03%, top=14.72%, width=10.92%
// Description (p): left=9.03%, top=34.93% — D-DIN Regular 13px → 0.68vw
// Copyright (div): left=9.03%, top=74.93% — D-DIN Regular 13px → 0.68vw
// Columns: left=31.70%/54.38%/77.06%, top=20.37% — headers D-DINCondensed-Bold 0.84vw
// List items: D-DIN Regular 0.68vw, gap 30.59px → top steps of 9.58%

import { openContact } from '../Contact/ContactModal'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY)
}

const cols = [
  {
    left: '31.70%',
    heading: 'Product',
    items: [
      { label: 'Battery Passport',       target: 'snap-bpap'    },
      { label: 'Reverse Logistics',      target: 'snap-ydnlyc'  },
      { label: 'Compliance Automation',  target: 'snap-uybpcer' },
    ],
  },
  {
    left: '54.38%',
    heading: 'Technology',
    items: [
      { label: 'Post Quantum Secure Blockchain', target: 'snap-madpp-0' },
      { label: 'Agentic AI',                     target: 'snap-madpp-0' },
    ],
  },
  {
    left: '77.06%',
    heading: 'About',
    items: [
      { label: 'Awards',     target: 'snap-bqegvir-2' },
      { label: 'Regulation', target: 'snap-gap'       },
      { label: 'Contact us', target: 'contact'        },
    ],
  },
]

// List item y positions (abs y on canvas): 103.5, 134.09, 164.69, 195.28
const ITEM_TOPS = ['32.43%', '42.01%', '51.60%', '61.18%']

const TEXT_SM: React.CSSProperties = {
  position: 'absolute',
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '0.68vw',
  lineHeight: 1.6,
  color: '#ffffff',
}

export default function FooterSection() {
  return (
    <footer
      className="relative w-full"
      style={{ aspectRatio: '1905 / 319.21', background: '#0A0A08' }}
    >
      {/* LW3 logo */}
      <img
        src="/Latest updated logo.svg"
        alt="LW3 — accelerating sustainable traceability"
        draggable={false}
        style={{
          position: 'absolute',
          left: '9.03%',
          top: '14.72%',
          width: '10.92%',
          height: 'auto',
        }}
      />

      {/* Description */}
      <div style={{ ...TEXT_SM, left: '9.03%', top: '34.93%', maxWidth: '13.02%' }}>
        Accelerating Sustainable Traceability. India's full-stack cryptographic battery
        passport platform — built for the circular economy.
      </div>

      {/* Copyright / registration */}
      <div style={{ ...TEXT_SM, left: '9.03%', top: '74.93%' }}>
        DPIIT Reg. No. 121125 · Guwahati, Assam, India<br />
        Incubated at T-Hub, Hyderabad
      </div>

      {/* Footer columns */}
      {cols.map((col) => (
        <div key={col.heading}>
          {/* Column heading */}
          <span
            style={{
              position: 'absolute',
              left: col.left,
              top: '20.37%',
              fontFamily: "'D-DINCondensed-Bold', sans-serif",
              fontSize: '0.84vw',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            {col.heading}
          </span>

          {/* List items */}
          {col.items.map(({ label, target }, j) => (
            <a
              key={label}
              href="#"
              onClick={(e) => { e.preventDefault(); if (target === 'contact') openContact(); else scrollTo(target) }}
              style={{
                ...TEXT_SM,
                left: col.left,
                top: ITEM_TOPS[j],
                textDecoration: 'none',
                opacity: 0.7,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.textDecoration = 'underline'; e.currentTarget.style.textUnderlineOffset = '3px' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.textDecoration = 'none' }}
            >
              {label}
            </a>
          ))}
        </div>
      ))}
    </footer>
  )
}
