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
import { openBookDemo } from '../BookDemo/BookDemoModal'

export default function YDNLYCSection() {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1064', borderTop: '1px solid #ffffff', background: '#000000' }}>
      {/* Right panel background — x=789 to x=1905 = left 41.42%, width 58.58% */}
      <img
        src="/YDNLYC background.webp"
        alt=""
        draggable={false}
        style={{ position: 'absolute', top: 0, left: '41.42%', width: '58.58%', height: '100%', objectFit: 'cover' }}
      />

      {/* 4 white squares — CSS divs, canvas 1905×1064 coords → % */}
      {/* top-left:     x=946,  y=146, w=385, h=359 */}
      {/* bottom-left:  x=946,  y=537, w=385, h=359 */}
      {/* top-right:    x=1364, y=146, w=385, h=359 */}
      {/* bottom-right: x=1364, y=536, w=385, h=359 */}
      {[
        { left: '49.66%', top: '13.72%' },
        { left: '49.66%', top: '50.47%' },
        { left: '71.60%', top: '13.72%' },
        { left: '71.60%', top: '50.38%' },
      ].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: pos.left,
          top: pos.top,
          width: '20.21%',
          height: '33.74%',
          border: '0.105vw solid #ffffff',
          pointerEvents: 'none',
        }} />
      ))}

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
      <button
        onClick={openBookDemo}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          position: 'absolute',
          left: '8.14%',
          top: '84.77%',
          width: '11.02%',
          height: '5.55%',
          border: '2px solid #ffffff',
          background: btnHovered ? '#ffffff' : 'transparent',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          color: btnHovered ? '#000000' : '#ffffff',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background 0.2s ease, color 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        BOOK A DEMO
      </button>
    </section>
  )
}
