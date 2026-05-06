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

      {/* Scaled overlay for interactive buttons */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: FW,
          height: FH,
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
          pointerEvents: 'none',
        }}
      >
        {/* See Patents Here — fills blue on hover, text turns white */}
        <button
          onMouseEnter={() => setPatentHovered(true)}
          onMouseLeave={() => setPatentHovered(false)}
          onClick={e => e.preventDefault()}
          style={{
            position: 'absolute',
            left: 200,
            top: 1370,
            pointerEvents: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 32px',
            border: '1.5px solid #3B82F6',
            borderRadius: 4,
            backgroundColor: patentHovered ? '#3B82F6' : 'transparent',
            color: patentHovered ? '#ffffff' : '#3B82F6',
            fontFamily: '"SF Pro Display", system-ui, sans-serif',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '0.5px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, color 0.2s ease',
            whiteSpace: 'nowrap',
          }}
        >
          See Patents Here →
        </button>

        {/* CIRPASS — shakes on hover */}
        <motion.button
          whileHover={{
            x: [0, -8, 8, -6, 6, -4, 4, 0],
            transition: { duration: 0.5, ease: 'easeInOut' },
          }}
          onClick={e => e.preventDefault()}
          style={{
            position: 'absolute',
            left: 1220,
            top: 1370,
            pointerEvents: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '14px 32px',
            border: '1.5px solid #ffffff',
            borderRadius: 4,
            backgroundColor: 'transparent',
            color: '#ffffff',
            fontFamily: '"Monument Extended", sans-serif',
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: '2px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          CIRPASS
        </motion.button>
      </div>
    </section>
  )
}
