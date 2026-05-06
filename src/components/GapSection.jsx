import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import heroBg from '@/assets/gap/gap-image0_19_89.png'
import heroGrid from '@/assets/gap/gap-image1_19_89.png'
import ellipse450 from '@/assets/gap/ellipse-450.svg'
import ellipse451 from '@/assets/gap/ellipse-451.svg'
import ellipse452 from '@/assets/gap/ellipse-452.svg'

const FW = 1905
const FH = 1233

// Bar chart data — [left%, right%, color]
const BARS = [
  [0,      80.6,  '#2e3032'],
  [22.39,  61.69, '#2e3032'],
  [41.29,  46.27, '#2e3032'],
  [55.72,  35.82, '#e24b4a'],
  [66.17,  26.87, '#2e3032'],
  [75.12,  19.4,  '#2e3032'],
  [82.59,  13.93, '#2e3032'],
  [88.06,  8.96,  '#2e3032'],
  [93.03,  5.47,  '#2e3032'],
  [96.52,  2.49,  '#2e3032'],
  [99.5,   0,     '#2e3032'],
]

export default function GapSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(entries => {
      setScale(entries[0].contentRect.width / FW)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Scroll progress: 0 = section top hits viewport bottom, 1 = section top hits viewport top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  // Left group slides in from left (-900 canvas units → 0)
  const leftX = useTransform(scrollYProgress, [0, 1], [-900, 0])
  // Right group slides in from right (+900 canvas units → 0)
  const rightX = useTransform(scrollYProgress, [0, 1], [900, 0])

  return (
    <section
      ref={containerRef}
      style={{ width: '100%', height: FH * scale, overflow: 'hidden', position: 'relative', zIndex: 1 }}
      aria-label="The $2B gap in battery accountability"
    >
      <div
        style={{
          width: FW,
          height: FH,
          position: 'absolute',
          top: 0,
          left: 0,
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
          backgroundColor: '#0A0A08',
        }}
      >
        {/* Background texture */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 33,
            width: FW,
            height: 1200,
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />

        {/* Grid overlay */}
        <img
          src={heroGrid}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-10.25%',
            top: 33,
            width: '120.5%',
            height: 1200,
            objectFit: 'cover',
            opacity: 0.07,
            pointerEvents: 'none',
          }}
        />

        {/* ── Circular ellipse arcs (decorative) ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: -443.96,
            top: -189.69,
            width: 1392.461,
            height: 1392.461,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={ellipse450}
            alt=""
            style={{ width: 1000, height: 1000, transform: 'rotate(124.94deg)', flexShrink: 0 }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: -228.48,
            top: 103.3,
            width: 1044.346,
            height: 1044.346,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={ellipse451}
            alt=""
            style={{ width: 750, height: 750, transform: 'rotate(124.94deg)', flexShrink: 0 }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: -47.25,
            top: -19.36,
            width: 348.115,
            height: 348.115,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={ellipse452}
            alt=""
            style={{ width: 250, height: 250, transform: 'rotate(124.94deg)', flexShrink: 0 }}
          />
        </div>

        {/* LEFT GROUP: White card + "The" — slides in from left */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: -114.2,
            top: 91.22,
            width: 609,
            height: 414,
            backgroundColor: 'white',
            x: leftX,
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            left: 260,
            top: 327,
            fontFamily: '"Monument Extended", sans-serif',
            fontSize: 56,
            fontWeight: 400,
            color: '#4A4A45',
            letterSpacing: '5.6px',
            lineHeight: 1.15,
            x: leftX,
          }}
        >
          The
        </motion.div>

        {/* "$2B" — static */}
        <p
          style={{
            position: 'absolute',
            left: 617,
            top: 321,
            margin: 0,
            fontFamily: '"Monument Extended", sans-serif',
            fontSize: 96,
            fontWeight: 400,
            letterSpacing: '9.6px',
            lineHeight: 0.93,
          }}
        >
          <span style={{ color: '#FFCC00' }}>$</span>
          <span style={{ color: 'white' }}>2</span>
          <span style={{ color: '#FFCC00' }}>B</span>
        </p>

        {/* RIGHT GROUP: "gap in battery accountability" — slides in from right */}
        <motion.div
          style={{
            position: 'absolute',
            left: 1129,
            top: 283,
            width: 657,
            fontFamily: '"Monument Extended", sans-serif',
            fontSize: 56,
            fontWeight: 400,
            color: 'white',
            letterSpacing: '5.6px',
            lineHeight: 1.15,
            zIndex: 2,
            x: rightX,
          }}
        >
          <p style={{ margin: 0 }}>gap in</p>
          <p style={{ margin: 0 }}>battery accountability</p>
        </motion.div>

        {/* LEFT GROUP: Left body text — slides in from left */}
        <motion.p
          style={{
            position: 'absolute',
            left: 58,
            top: 529,
            width: 331,
            margin: 0,
            fontFamily: '"SF Pro Display", system-ui, sans-serif',
            fontSize: 24,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#888780',
            lineHeight: 1.1,
            x: leftX,
          }}
        >
          The global EV transition is accelerating, but the infrastructure to track, verify, and manage battery lifecycles is critically absent — creating compliance risk, recycling inefficiency, and billions in stranded value.
        </motion.p>

        {/* RIGHT GROUP: Bar chart — slides in from right */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 1072.39,
            top: 143,
            width: 768,
            height: 714.507,
            x: rightX,
          }}
        >
          {BARS.map(([leftPct, rightPct, color], i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${leftPct}%`,
                right: `${rightPct}%`,
                backgroundColor: color,
                borderRadius: 100,
              }}
            />
          ))}
        </motion.div>

        {/* RIGHT GROUP: Bottom-right stat text — slides in from right */}
        <motion.p
          style={{
            position: 'absolute',
            left: 1361,
            top: 936,
            width: 486,
            margin: 0,
            fontFamily: '"SF Pro Display", system-ui, sans-serif',
            fontSize: 24,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#888780',
            lineHeight: 1.1,
            textAlign: 'right',
            x: rightX,
          }}
        >
          70,000+ data points are generated per battery site per year. Today&apos;s compliance processes are manual, tedious, and unable to scale with the speed of regulation.
        </motion.p>

        {/* Footer text — static */}
        <p
          style={{
            position: 'absolute',
            left: 1361,
            top: 1061,
            width: 486,
            margin: 0,
            fontFamily: '"SF Pro Display", system-ui, sans-serif',
            fontSize: 24,
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.1,
            textAlign: 'right',
          }}
        >
          <span style={{ color: '#F5F2EC' }}>The EU Battery Regulation enters into force in </span>
          <span style={{ color: '#C9A84C' }}>February 2027</span>
          <span style={{ color: '#F5F2EC' }}>. India&apos;s Battery Aadhaar is imminent. The clock is running.</span>
        </p>
      </div>
    </section>
  )
}
