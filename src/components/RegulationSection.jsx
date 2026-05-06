import { useEffect, useRef, useState } from 'react'
import regulationSvg from '@/assets/regulation/regulation.svg'

// SVG canvas dimensions
const FW = 1912
const FH = 1768

// CTA button position in canvas coordinates (white pill at x=208, y=1545)
const BTN_X = 208.417
const BTN_Y = 1545.29
const BTN_W = 240.552
const BTN_H = 49.5516

export default function RegulationSection() {
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

  return (
    <section
      ref={containerRef}
      style={{ width: '100%', height: FH * scale, position: 'relative', overflow: 'hidden' }}
      aria-label="Regulation"
    >
      {/* Full-bleed SVG image, scaled to match canvas */}
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

      {/* Invisible clickable overlay on the CTA button */}
      <a
        href="#contact"
        style={{
          position: 'absolute',
          left: BTN_X * scale,
          top: BTN_Y * scale,
          width: BTN_W * scale,
          height: BTN_H * scale,
          cursor: 'pointer',
          borderRadius: 22.3771 * scale,
        }}
        aria-label="Explore the regulation"
      />
    </section>
  )
}
