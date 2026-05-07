import { useEffect, useRef, useState } from 'react'
import footerSvg from '@/assets/footer.svg'

const FW = 1905
const FH = 321

export default function FooterSection() {
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
    <footer
      ref={containerRef}
      style={{ width: '100%', height: FH * scale, position: 'relative', overflow: 'hidden' }}
      aria-label="Footer"
    >
      <img
        src={footerSvg}
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
    </footer>
  )
}
