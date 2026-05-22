// YDNLYC section — SVG background + CSS text overlay
// Canvas: 1905 × 1064
//
// Heading:     x=155, y=87,  w=485  → left=8.14%,  top=8.18%,  maxW=25.46%
// Description: x=155, y=483, w=485  → left=8.14%,  top=45.40%, maxW=25.46%
// Button:      x=155, y=902, w=210, h=59 → left=8.14%, top=84.77%, w=11.02%, h=5.55%
//
// Font sizes at 1905px canvas:
//   70px → 3.67vw  |  24px → 1.26vw

import { useState } from 'react'

export default function YDNLYCSection() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1064', borderTop: '1px solid #ffffff' }}>
      <img
        src="/ydnlyc-v2.svg"
        alt=""
        className="w-full h-auto block"
        draggable={false}
      />

      {/* Left edge stroke of background image panel */}
      <div
        style={{
          position: 'absolute',
          left: '41.42%',
          top: 0,
          width: '1px',
          height: '100%',
          background: '#ffffff',
        }}
      />

      {/* Heading — D-DIN Bold 70px */}
      <div
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
        your data never leaves your control
      </div>

      {/* Description — D-DIN Regular 24px */}
      <p
        className="absolute"
        style={{
          left: '8.14%',
          top: '45.40%',
          maxWidth: '25.46%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          lineHeight: 1.5,
          color: '#ffffff',
          margin: 0,
        }}
      >
        Encrypted in transit and at rest. Configurable access permissions. Full compliance with global privacy standards — so your team can move fast without cutting corners on security.
      </p>

      {/* Book a Demo button */}
      <a
        href="#"
        className="absolute flex items-center justify-center"
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          left: '8.14%',
          top: '84.77%',
          width: '11.02%',
          height: '5.55%',
          border: '2px solid #ffffff',
          background: btnHovered ? '#ffffff' : 'transparent',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          color: btnHovered ? '#000000' : '#ffffff',
          textDecoration: 'none',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background 0.2s ease, color 0.2s ease',
        }}
      >
        BOOK A DEMO
      </a>
    </section>
  )
}
