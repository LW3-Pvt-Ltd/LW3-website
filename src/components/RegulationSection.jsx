import { useEffect, useRef, useState } from 'react'
import regulationSvg from '@/assets/regulation/regulation.svg'

const FW = 1912
const FH = 1768

const BTN_X = 208.417
const BTN_Y = 1545.29
const BTN_W = 240.552
const BTN_H = 49.5516
const BTN_R = 22.3771

export default function RegulationSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(entries => {
      setScale(entries[0].contentRect.width / FW)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const px = v => v * scale

  return (
    <section
      ref={containerRef}
      style={{ width: '100%', height: FH * scale, position: 'relative', overflow: 'hidden' }}
      aria-label="Regulation"
    >
      {/* Full-bleed SVG background */}
      <img
        src={regulationSvg}
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

      {/* See Patents Here button */}
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'absolute',
          left: px(BTN_X),
          top: px(BTN_Y),
          width: px(BTN_W),
          height: px(BTN_H),
          borderRadius: px(BTN_R),
          border: 'none',
          cursor: 'pointer',
          backgroundColor: hovered ? '#3B82F6' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s ease',
        }}
      >
        {hovered && (
          <span
            style={{
              color: '#ffffff',
              fontFamily: '"SF Pro Display", system-ui, sans-serif',
              fontSize: px(14),
              fontWeight: 600,
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
            }}
          >
            See Patents Here →
          </span>
        )}
      </button>
    </section>
  )
}
