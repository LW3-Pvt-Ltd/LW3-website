import { useEffect, useRef } from 'react'

// VectorFieldDivider — full-width minus site side padding (8.14% each side)
// Height = 25% of inner width (1:4 ratio)
// White dashes on black, mouse-reactive

const SIDE_PAD_PCT = 0.0814   // matches site's 8.14% padding
const COLS = 48               // horizontal grid density
const LINE_LEN_RATIO = 0.38   // dash length as fraction of cell size
const LINE_WIDTH = 1.2
const BASE_ANGLE = 0          // default angle (horizontal)
const INFLUENCE_RADIUS_RATIO = 0.35  // mouse influence as fraction of canvas width

export default function VectorFieldDivider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const mouseRef     = useRef<{ x: number; y: number } | null>(null)
  const rafRef       = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    const canvas    = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')!
    let w = 0, h = 0, cellW = 0, cellH = 0, rows = 0

    function resize() {
      w = container!.offsetWidth
      h = Math.round(w * 0.25)
      canvas!.width  = w
      canvas!.height = h
      container!.style.height = h + 'px'
      cellW = w / COLS
      rows  = Math.ceil(h / cellW)
      cellH = cellW
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = 'rgba(255,255,255,0.7)'
      ctx.lineWidth   = LINE_WIDTH
      ctx.lineCap     = 'round'

      const mouse        = mouseRef.current
      const influenceR   = w * INFLUENCE_RADIUS_RATIO
      const halfLen      = (cellW * LINE_LEN_RATIO) / 2

      for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < rows; row++) {
          const cx = (col + 0.5) * cellW
          const cy = (row + 0.5) * cellH

          let angle = BASE_ANGLE

          if (mouse) {
            const dx   = cx - mouse.x
            const dy   = cy - mouse.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < influenceR) {
              const targetAngle = Math.atan2(dy, dx)
              const blend       = 1 - dist / influenceR
              angle = BASE_ANGLE + (targetAngle - BASE_ANGLE) * blend
            }
          }

          const cos = Math.cos(angle)
          const sin = Math.sin(angle)

          ctx.beginPath()
          ctx.moveTo(cx - cos * halfLen, cy - sin * halfLen)
          ctx.lineTo(cx + cos * halfLen, cy + sin * halfLen)
          ctx.stroke()
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    function onMouseLeave() {
      mouseRef.current = null
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(container)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        padding: `0 ${SIDE_PAD_PCT * 100}% 40px`,
        background: '#000000',
        boxSizing: 'border-box',
      }}
    >
      <div ref={containerRef} style={{ width: '100%', position: 'relative' }}>
        <canvas
          ref={canvasRef}
          style={{ display: 'block', width: '100%', cursor: 'crosshair' }}
        />
      </div>
    </div>
  )
}
