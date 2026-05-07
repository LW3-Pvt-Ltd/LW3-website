import { useEffect, useRef, useState } from 'react'
import bqeSvg from '@/assets/bqe/bqe-gvir.svg'

const FW = 1917
const FH = 2367

const TEXTS = [
  { id: 'phygital', x: 831,  y: 351,  w: 112, h: 72, href: '#' },
  { id: 'nearzero', x: 960,  y: 346,  w: 115, h: 95, href: '#' },
  { id: 'agentic',  x: 554,  y: 505,  w: 148, h: 52, href: '#' },
  { id: 'supply',   x: 1128, y: 506,  w: 143, h: 52, href: '#' },
  { id: 'pqsb',    x: 665,  y: 780,  w: 165, h: 72, href: '#' },
  { id: 'carbon',  x: 1060, y: 781,  w: 132, h: 72, href: '#' },
  { id: 'blue1',   x: 832,  y: 1376, w: 112, h: 72, href: '#' },
  { id: 'blue2',   x: 960,  y: 1376, w: 115, h: 72, href: '#' },
  { id: 'blue3',   x: 625,  y: 1490, w: 165, h: 72, href: '#' },
  { id: 'blue4',   x: 1058, y: 1490, w: 132, h: 72, href: '#' },
  { id: 'blue5',   x: 715,  y: 1720, w: 150, h: 72, href: '#' },
  { id: 'blue6',   x: 960,  y: 1720, w: 132, h: 72, href: '#' },
]

export default function BQEGVIRSection() {
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

  const px = v => v * scale

  return (
    <section
      ref={containerRef}
      style={{ width: '100%', height: FH * scale, position: 'relative', overflow: 'hidden' }}
      aria-label="BQE GVIR"
    >
      <img
        src={bqeSvg}
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

      {TEXTS.map(text => (
        <a
          key={text.id}
          href={text.href}
          style={{
            position: 'absolute',
            left: px(text.x),
            top: px(text.y),
            width: px(text.w),
            height: px(text.h),
            cursor: 'pointer',
            display: 'block',
          }}
        />
      ))}
    </section>
  )
}
