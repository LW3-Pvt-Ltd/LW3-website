import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import statsSvg from '@/assets/stats/stats-partners.svg'

const FW = 1948
const FH = 1521

export default function StatsPartnersSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [patentHovered, setPatentHovered] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(entries => {
      setScale(entries[0].contentRect.width / FW)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Canvas coords → scaled screen pixels
  const px = v => v * scale

  return (
    <section
      ref={containerRef}
      style={{ width: '100%', height: FH * scale, position: 'relative', overflow: 'hidden' }}
      aria-label="Stats and Partners"
    >
      <img
        src={statsSvg}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: FW * scale,
          height: FH * scale,
          display: 'block',
          pointerEvents: 'none',
        }}
      />

      {/* See Patents Here — fills blue on hover */}
      <button
        onMouseEnter={() => setPatentHovered(true)}
        onMouseLeave={() => setPatentHovered(false)}
        style={{
          position: 'absolute',
          left: px(200),
          top: px(1350),
          display: 'inline-flex',
          alignItems: 'center',
          gap: px(10),
          padding: `${px(12)}px ${px(28)}px`,
          border: `${px(1.5)}px solid #3B82F6`,
          borderRadius: px(4),
          backgroundColor: patentHovered ? '#3B82F6' : 'transparent',
          color: patentHovered ? '#ffffff' : '#3B82F6',
          fontFamily: '"SF Pro Display", system-ui, sans-serif',
          fontSize: px(18),
          fontWeight: 500,
          letterSpacing: '0.5px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease, color 0.2s ease',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        See Patents Here →
      </button>

      {/* CIRPASS — shakes on hover */}
      <motion.button
        whileHover={{
          x: [0, -px(8), px(8), -px(6), px(6), -px(4), px(4), 0],
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        style={{
          position: 'absolute',
          left: px(1220),
          top: px(1350),
          display: 'inline-flex',
          alignItems: 'center',
          padding: `${px(12)}px ${px(28)}px`,
          border: `${px(1.5)}px solid #ffffff`,
          borderRadius: px(4),
          backgroundColor: 'transparent',
          color: '#ffffff',
          fontFamily: '"Monument Extended", sans-serif',
          fontSize: px(18),
          fontWeight: 400,
          letterSpacing: px(2) + 'px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        CIRPASS
      </motion.button>
    </section>
  )
}
