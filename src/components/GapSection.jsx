import { useRef, useEffect, useState } from 'react'
import CirclesArrow  from '@/assets/gap/gap-circles-arrow.svg?react'
import textBlock     from '@/assets/gap/2b-text.svg'
import gapAnimation  from '@/assets/gap/gap-animation.svg'

const W = 1905
const H = 1233

export default function GapSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(null)
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / W)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      aria-label="The $2B gap in battery accountability"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: `${W} / ${H}`,
        overflow: 'hidden',
        lineHeight: 0,
        backgroundColor: '#000',
      }}
    >
      <div
        style={{
          position: 'absolute', top: 0, left: 0,
          width: W, height: H,
          transform: scale ? `scale(${scale})` : undefined,
          transformOrigin: 'top left',
          opacity: scale ? 1 : 0,
        }}
      >

        {/* ── Initial state (fades out on click) ───────────────────────── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: W, height: H,
          opacity: activated ? 0 : 1,
          transform: activated ? 'translateX(-40px)' : 'translateX(0)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          pointerEvents: activated ? 'none' : 'auto',
        }}>
          <CirclesArrow
            aria-hidden="true"
            style={{ position: 'absolute', left: -638.68, top: 198, width: 837.837, height: 837, display: 'block' }}
          />
          <img
            src={textBlock}
            alt="the $2 BILLION GAP battery accounting"
            style={{ position: 'absolute', left: 279, top: 442, width: 454, height: 349, display: 'block' }}
          />
          <svg aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: W, height: H, pointerEvents: 'none', overflow: 'visible' }}>
            <line x1="887" y1="396" x2="769" y2="837" stroke="white" strokeWidth="1" />
          </svg>
          <p style={{
            position: 'absolute', left: 923, top: 518, width: 674, margin: 0,
            fontFamily: '"D-DIN", sans-serif', fontWeight: 400, fontSize: 35, lineHeight: 1.1, color: 'white',
          }}>
            The global EV transition is accelerating, but the infrastructure to track, verify, and manage battery lifecycles is critically absent — creating compliance risk, recycling inefficiency, and billions in stranded value.
          </p>
        </div>

        {/* ── Animated final state (fades in on click) ─────────────────── */}
        <img
          src={gapAnimation}
          alt="Gap section animated state"
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, width: W, height: H,
            display: 'block', objectFit: 'fill',
            opacity: activated ? 1 : 0,
            transform: activated ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            pointerEvents: 'none',
          }}
        />

        {/* ── Arrow click target (initial state) ───────────────────────── */}
        <div
          onClick={() => setActivated(true)}
          style={{
            position: 'absolute',
            left: 56, top: 578,
            width: 78, height: 78,
            cursor: 'pointer',
            borderRadius: '50%',
            zIndex: 10,
            display: activated ? 'none' : 'block',
          }}
        />

        {/* ── Back arrow click target (animated state) ──────────────────── */}
        <div
          onClick={() => setActivated(false)}
          style={{
            position: 'absolute',
            left: 67, top: 578,
            width: 78, height: 78,
            cursor: 'pointer',
            borderRadius: '50%',
            zIndex: 10,
            display: activated ? 'block' : 'none',
          }}
        />

      </div>
    </section>
  )
}
