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

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'


const blogs = [
  {
    id: '1',
    left: '8.14%',
    tag1: { left: '8.14%',  label: 'Regulatory Intelligence' },
    tag2: { left: '17.87%', label: 'Post-Quantum Security'   },
    titleTop: '45.99%',
    title: 'Compliant by design',
    desc: "How LW3's Battery Passport Meets Europe's Twin Regulatory Frontier",
  },
  {
    id: '2',
    left: '41.47%',
    tag1: { left: '41.47%', label: 'Embedded Finance'  },
    tag2: { left: '51.21%', label: 'Battery Passport'  },
    titleTop: '43.86%',
    title: 'Programmable Money Meets the Battery Passport',
    desc: 'How eRupee and USDC Unlock Financial Traceability and an EoL Marketplace',
  },
  {
    id: '3',
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
  width: '27.57%',   // 9.19% of section / 33.33% card = 27.57% of card
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

function ReadMoreBtn({ left, blogId }: { left: string; blogId: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={`/blog/${blogId}`}
      style={{
        position: 'absolute',
        top: '77.22%',
        left,
        width: '23.94%',   // 7.98% of section / 33.33% card = 23.94% of card
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
    </Link>
  )
}

// Card column left positions in section %
const CARD_COLS = ['0%', '33.33%', '66.67%']
// Card-relative inner left (8.14% of section / 33.33% card width = 24.42%)
const INNER_LEFT = '24.42%'
const INNER_TAG2  = '53.6%'
const INNER_MAX_W = '72.27%'
const CARD_IMGS = [
  '/1 Insight you can act on Data you can trust.webp',
  '/2 Insight you can act on Data you can trust.webp',
  '/3 Insight you can act on Data you can trust.webp',
]

export default function InsightSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el    = sectionRef.current
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!el) return

    gsap.set(el,    { opacity: 0, y: 50 })
    gsap.set(cards, { opacity: 0, y: 60 })

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(el,    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
        gsap.to(cards, { opacity: 1, y: 0, duration: 0.75, stagger: 0.18, ease: 'power3.out', delay: 0.2 })
        if (headingRef.current) gsap.fromTo(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.025, ease: 'power3.out' })
      } else {
        gsap.set(el,    { opacity: 0, y: 50 })
        gsap.set(cards, { opacity: 0, y: 60 })
        if (headingRef.current) gsap.set(Array.from(headingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 })
      }
    }, { threshold: 0.15 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full" style={{ aspectRatio: '1905 / 891', background: '#000000' }}>
      <img
        src="/insight-nobg.svg"
        alt=""
        className="w-full h-auto block"
        draggable={false}
      />
      {/* Heading — D-DIN Bold 70px */}
      <h2
        ref={headingRef}
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
          margin: 0,
        }}
      >
        {['insight you can act on', 'data you can trust'].map((line, li) => (
          <div key={li}>{line.split('').map((ch, i) => <span key={i} style={{ display: 'inline-block', opacity: 0 }}>{ch === ' ' ? '\u00A0' : ch}</span>)}</div>
        ))}
      </h2>

      {/* Blog card columns — each a positioned wrapper for GSAP stagger */}
      {blogs.map((blog, i) => (
        <div
          key={i}
          ref={el => { cardRefs.current[i] = el }}
          style={{ position: 'absolute', top: 0, left: CARD_COLS[i], width: '33.33%', height: '100%' }}
        >
          {/* Card image */}
          <img src={CARD_IMGS[i]} alt="" draggable={false}
            style={{ position: 'absolute', top: '23.46%', left: 0, width: '100%', height: '76.54%', objectFit: 'cover' }} />

          {/* Kicker tag 1 */}
          <span style={{ ...TAG_STYLE, left: INNER_LEFT }}>{blog.tag1.label}</span>
          {/* Kicker tag 2 */}
          <span style={{ ...TAG_STYLE, left: INNER_TAG2 }}>{blog.tag2.label}</span>

          {/* Date */}
          <span style={{ position: 'absolute', left: INNER_LEFT, top: '39.77%', maxWidth: INNER_MAX_W, fontFamily: "'D-DIN', sans-serif", fontSize: '0.84vw', lineHeight: 1.4, color: '#ffffff' }}>
            April 2026 · LW3 Insights
          </span>

          {/* Title */}
          <div style={{ position: 'absolute', left: INNER_LEFT, top: blog.titleTop, maxWidth: INNER_MAX_W, fontFamily: "'D-DINCondensed-Bold', sans-serif", fontSize: '1.68vw', lineHeight: 1.15, color: '#ffffff' }}>
            {blog.title}
          </div>

          {/* Description */}
          <p style={{ position: 'absolute', left: INNER_LEFT, top: '58.75%', maxWidth: INNER_MAX_W, fontFamily: "'D-DIN', sans-serif", fontSize: '1.26vw', lineHeight: 1.5, color: '#ffffff', margin: 0 }}>
            {blog.desc}
          </p>

          {/* Read More */}
          <ReadMoreBtn left={INNER_LEFT} blogId={blog.id} />
        </div>
      ))}
    </section>
  )
}
