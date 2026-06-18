import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const SIDE_PAD_PCT           = 0.0814
const COLS                   = 36
const ROWS                   = 9
const HALF_W                 = 0.40   // half-length of dash (fraction of cellW)
const HALF_H                 = 0.055  // half-thickness of filled dash
const MIN_SCALE              = 0.15
const LERP                   = 0.06
const INFLUENCE_RADIUS_RATIO = 0.6

// Traveling wave (rope effect)
const RIPPLE_FREQ  = 1.0          // cycles visible across field — 1 crest traveling
const RIPPLE_SPEED = 0.022        // phase increment per frame — controls travel speed
const RIPPLE_AMP   = Math.PI / 5  // max tilt ≈ 36°

export default function VectorFieldDivider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const mouseRef     = useRef<{ x: number; y: number } | null>(null)
  const anglesRef    = useRef<Float32Array | null>(null)
  const targetsRef   = useRef<Float32Array | null>(null)
  const scalesRef    = useRef<Float32Array | null>(null)
  const tScalesRef   = useRef<Float32Array | null>(null)
  const dimsRef      = useRef({ w: 0, h: 0, cellW: 0 })
  const phaseRef     = useRef(0)   // raw phase, increases every frame

  useEffect(() => {
    const container = containerRef.current
    const canvas    = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')!

    function resize() {
      const w     = container!.offsetWidth
      const cellW = w / COLS
      const h     = Math.round(ROWS * cellW)

      canvas!.width  = w
      canvas!.height = h
      container!.style.height = h + 'px'

      dimsRef.current = { w, h, cellW }

      const count = COLS * ROWS
      anglesRef.current  = new Float32Array(count)
      targetsRef.current = new Float32Array(count)
      scalesRef.current  = new Float32Array(count).fill(1)
      tScalesRef.current = new Float32Array(count).fill(1)
    }

    function draw() {
      const { w, h, cellW } = dimsRef.current
      if (!w) return

      // Advance phase continuously — wave travels right to left
      phaseRef.current += RIPPLE_SPEED

      const angles  = anglesRef.current!
      const targets = targetsRef.current!
      const scales  = scalesRef.current!
      const tScales = tScalesRef.current!
      const mouse   = mouseRef.current
      const influenceR = w * INFLUENCE_RADIUS_RATIO
      const hwBase  = cellW * HALF_W

      for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
          const idx = col * ROWS + row
          const cx  = (col + 0.5) * cellW
          const cy  = (row + 0.5) * cellW

          if (mouse) {
            const dx   = cx - mouse.x
            const dy   = cy - mouse.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < influenceR) {
              const blend  = 1 - dist / influenceR
              targets[idx] = Math.atan2(dy, dx) * blend
              tScales[idx] = 1 - blend * (1 - MIN_SCALE)
            } else {
              targets[idx] = Math.sin((col / COLS) * RIPPLE_FREQ * Math.PI * 2 + phaseRef.current) * RIPPLE_AMP
              tScales[idx] = 1
            }
          } else {
            targets[idx] = Math.sin((col / COLS) * RIPPLE_FREQ * Math.PI * 2 + phaseRef.current) * RIPPLE_AMP
            tScales[idx] = 1
          }

          let diff = targets[idx] - angles[idx]
          if (diff >  Math.PI) diff -= 2 * Math.PI
          if (diff < -Math.PI) diff += 2 * Math.PI
          angles[idx] += diff * LERP

          scales[idx] += (tScales[idx] - scales[idx]) * LERP
        }
      }

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = '#ffffff'

      const hh = cellW * HALF_H

      for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
          const idx = col * ROWS + row
          const cx  = (col + 0.5) * cellW
          const cy  = (row + 0.5) * cellW
          const a   = angles[idx]
          const hw  = hwBase * scales[idx]

          ctx.save()
          ctx.translate(cx, cy)
          ctx.rotate(a)
          ctx.fillRect(-hw, -hh, hw * 2, hh * 2)
          ctx.restore()
        }
      }
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    function onMouseLeave() {
      mouseRef.current = null
    }

    resize()
    gsap.ticker.add(draw)

    const ro = new ResizeObserver(resize)
    ro.observe(container)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    return () => {
      gsap.ticker.remove(draw)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        padding: `0 ${SIDE_PAD_PCT * 100}%`,
        background: '#000000',
        boxSizing: 'border-box',
      }}
    >
      <div ref={containerRef} style={{ width: '100%', position: 'relative' }}>
        <canvas ref={canvasRef} style={{ display: 'block', width: '100%' }} />
      </div>
    </div>
  )
}
