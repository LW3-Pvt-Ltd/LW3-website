// Insight section — SVG background + CSS text overlay
// Canvas: 1905 × 891
//
// Heading:  left=8.14%, top=3.14%, maxW=54.44% — D-DIN Bold 70px → 3.67vw
//
// Blog columns (each 635px wide):
//   Blog 1: left=8.14% (x=155)
//   Blog 2: left=41.47% (x=790)
//   Blog 3: left=74.80% (x=1425)
//
// Per-blog (y as % of 891):
//   Kicker tags: y=350–351 → top=39.28–39.39%   w=175px=9.19%  h=25px=2.81%  gap=11px=0.58%
//   Date:        y=409     → top=45.93%  — D-DIN 16px → 0.84vw
//   Title:       y=445–464 → top varies  — D-DINCondensed-Bold 32px → 1.68vw
//   Desc:        y=578     → top=64.91%  — D-DIN 24px → 1.26vw
//   Button:      y=688     → top=77.22%  — D-DIN 16px

import { useState } from 'react'

const CARD_MAX_WIDTH = '24.09%'

const blogs = [
  {
    left: '8.14%',
    tag1: { left: '8.14%',  label: 'Regulatory Intelligence' },
    tag2: { left: '17.87%', label: 'Post-Quantum Security'   },
    titleTop: '45.99%',
    title: 'Compliant by design',
    desc: "How LW3's Battery Passport Meets Europe's Twin Regulatory Frontier",
  },
  {
    left: '41.47%',
    tag1: { left: '41.47%', label: 'Embedded Finance'  },
    tag2: { left: '51.21%', label: 'Battery Passport'  },
    titleTop: '43.86%',
    title: 'Programmable Money Meets the Battery Passport',
    desc: 'How eRupee and USDC Unlock Financial Traceability and an EoL Marketplace',
  },
  {
    left: '74.80%',
    tag1: { left: '74.80%', label: 'Agentic AI'         },
    tag2: { left: '84.54%', label: 'Battery Regulation' },
    titleTop: '44.06%',
    title: 'The Intelligent Passport',
    desc: 'How Agentic AI Transforms EU Battery Compliance from Record-Keeping to Real-Time Intelligence',
  },
]

const TAG_STYLE: React.CSSProperties = {
  position: 'absolute',
  top: '33.19%',
  width: '9.19%',
  height: '2.81%',
  background: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "'D-DINCondensed', sans-serif",
  fontSize: '0.68vw',
  color: '#000000',
  whiteSpace: 'nowrap',
}

function ReadMoreBtn({ left }: { left: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      style={{
        position: 'absolute',
        top: '77.22%',
        left,
        width: '7.98%',
        height: '4.04%',
        border: '2px solid #ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'D-DIN', sans-serif",
        fontSize: '0.84vw',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background 0.2s ease, color 0.2s ease',
        background: hovered ? '#ffffff' : 'transparent',
        color: hovered ? '#000000' : '#ffffff',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      READ MORE
    </a>
  )
}

export default function InsightSection() {
  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 891' }}>
      <img
        src="/insight-v3.svg"
        alt=""
        className="w-full h-auto block"
        draggable={false}
      />

      {/* Heading — D-DIN Bold 70px */}
      <div
        className="absolute"
        style={{
          left: '8.14%',
          top: '3.14%',
          maxWidth: '54.44%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',
          lineHeight: 1.05,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
        }}
      >
        insight you can act on data you can trust
      </div>

      {/* Blog cards */}
      {blogs.map((blog, i) => (
        <div key={i}>
          {/* Kicker tag 1 — D-DINCondensed Regular 13px */}
          <span style={{ ...TAG_STYLE, left: blog.tag1.left }}>{blog.tag1.label}</span>
          {/* Kicker tag 2 */}
          <span style={{ ...TAG_STYLE, left: blog.tag2.left }}>{blog.tag2.label}</span>

          {/* Date — D-DIN Regular 16px */}
          <span
            style={{
              position: 'absolute',
              left: blog.left,
              top: '39.77%',
              maxWidth: CARD_MAX_WIDTH,
              fontFamily: "'D-DIN', sans-serif",
              fontSize: '0.84vw',
              lineHeight: 1.4,
              color: '#ffffff',
            }}
          >
            April 2026 · LW3 Insights
          </span>

          {/* Title — D-DINCondensed-Bold 32px */}
          <div
            style={{
              position: 'absolute',
              left: blog.left,
              top: blog.titleTop,
              maxWidth: CARD_MAX_WIDTH,
              fontFamily: "'D-DINCondensed-Bold', sans-serif",
              fontSize: '1.68vw',
              lineHeight: 1.15,
              color: '#ffffff',
            }}
          >
            {blog.title}
          </div>

          {/* Description — D-DIN Regular 24px */}
          <p
            style={{
              position: 'absolute',
              left: blog.left,
              top: '58.75%',
              maxWidth: CARD_MAX_WIDTH,
              fontFamily: "'D-DIN', sans-serif",
              fontSize: '1.26vw',
              lineHeight: 1.5,
              color: '#ffffff',
              margin: 0,
            }}
          >
            {blog.desc}
          </p>

          {/* Read More button */}
          <ReadMoreBtn left={blog.left} />
        </div>
      ))}
    </section>
  )
}
