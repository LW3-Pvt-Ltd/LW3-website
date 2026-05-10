import { useRef, useEffect, useState } from 'react'
import bpapCard     from '@/assets/bpap/bpp-card.svg'
import bpapCardBack from '@/assets/bpap/bpp-card-back.svg'
import CirclesArrow from '@/assets/gap/gap-circles-arrow.svg?react'

const W = 1905
const H = 1474

export default function BPAPSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(null)
  const [flipped, setFlipped] = useState(false)

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
      aria-label="Agentic Battery Passport section"
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

        {/* ── 1. "Agentic" label ─────────────────────────────────────────── */}
        <p style={{
          position: 'absolute', left: 168, top: 111,
          margin: 0,
          fontFamily: '"D-DIN", sans-serif',
          fontWeight: 400,
          fontSize: 32,
          lineHeight: 1.1,
          letterSpacing: '3.2px',
          color: '#F5F2EC',
          whiteSpace: 'nowrap',
        }}>Agentic</p>

        {/* ── 2. "BATTERY PASSPORT" headline ────────────────────────────── */}
        <p style={{
          position: 'absolute', left: 168, top: 191,
          width: 704,
          margin: 0,
          fontFamily: '"D-DIN", sans-serif',
          fontWeight: 700,
          fontSize: 70,
          lineHeight: 1.1,
          letterSpacing: '7px',
          color: '#F5F2EC',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>BATTERY PASSPORT</p>

        {/* ── 3. Battery passport card (flippable) ──────────────────────── */}
        <div
          onClick={() => setFlipped(f => !f)}
          style={{
            position: 'absolute', left: 172, top: 333,
            width: 743, height: 909,
            cursor: 'pointer',
            perspective: 1200,
          }}
        >
          <div style={{
            width: '100%', height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}>
            {/* Front */}
            <img
              src={bpapCard}
              alt="LW3 Battery Passport card"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                display: 'block',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            />
            {/* Back — offset to cancel the SVG drop-shadow padding (832-743)/2=44.5 x, (992-909)/2=41.5 y */}
            <img
              src={bpapCardBack}
              alt="LW3 Battery Passport card back"
              style={{
                position: 'absolute',
                left: '-6%', top: '-4.6%',
                width: '112%', height: '109.1%',
                display: 'block',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            />
          </div>
        </div>

        {/* ── 4. Circles + arrow (SVG, rotated 180° so arrow points left) ─ */}
        <CirclesArrow
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 1695.58,
            top: 381,
            width: 837.837,
            height: 837,
            display: 'block',
            transform: 'rotate(180deg)',
            transformOrigin: 'center center',
          }}
        />

      </div>
    </section>
  )
}
