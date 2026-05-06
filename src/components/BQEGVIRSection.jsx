import { useEffect, useRef, useState } from 'react'
import bqeSvg from '@/assets/bqe/bqe-gvir.svg'

const FW = 1917
const FH = 2367

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
    </section>
  )
}
