// Gap Section — circle-reveal transition between two states
// Canvas: 1905 × 1079
// All circle geometry in CSS (vw units keep circles perfectly round at any viewport width)

import { useState, useEffect } from 'react'

const DUR = 750
const EASING = 'cubic-bezier(0.65, 0, 0.35, 1)'

// SVG canvas circle coords — used for the animated stroke overlay
const C_SMALL = { cx: -220.182, cy: 539.5,  r: 418.082, sw: 0.837   }
const C_LARGE = { cx:  310.078, cy: 541.5,  r: 847.074, sw: 1.69584 }

const CIRCLE_TRANS = `cx ${DUR}ms ${EASING}, cy ${DUR}ms ${EASING}, r ${DUR}ms ${EASING}, stroke-width ${DUR}ms ${EASING}`

type Phase = 'idle-1' | 'growing' | 'idle-2' | 'shrinking'

// All sizes in vw — canvas is 1905px wide, so 1px = (1/1905*100)vw
// This keeps circles perfectly round regardless of section height
function cssCircle(cx: number, cy: number, r: number, sw: number, fill: string): React.CSSProperties {
  return {
    position: 'absolute',
    left:   `${(cx - r) / 1905 * 100}vw`,
    top:    `${(cy - r) / 1905 * 100}vw`,
    width:  `${2 * r   / 1905 * 100}vw`,
    height: `${2 * r   / 1905 * 100}vw`,
    borderRadius: '50%',
    background: fill,
    border: `${sw / 1905 * 100}vw solid #ffffff`,
    boxSizing: 'border-box' as const,
    pointerEvents: 'none' as const,
  }
}

// Small decorative ring — cx=93.53, cy=535.32, r=104.35, sw=0.547 — visible in all states
const SMALL_RING = cssCircle(93.5312, 535.315, 104.351, 0.54719, 'transparent')

export default function GapSection() {
  const [phase, setPhase] = useState<Phase>('idle-1')
  const [target, setTarget] = useState<'small' | 'large'>('small')

  useEffect(() => {
    let raf: number
    if (phase === 'growing')  raf = requestAnimationFrame(() => setTarget('large'))
    if (phase === 'shrinking') raf = requestAnimationFrame(() => setTarget('small'))
    return () => cancelAnimationFrame(raf)
  }, [phase])

  const handleClick = () => {
    if (phase === 'idle-1') {
      setTarget('small')
      setPhase('growing')
      setTimeout(() => setPhase('idle-2'), DUR)
    } else if (phase === 'idle-2') {
      setTarget('large')
      setPhase('shrinking')
      setTimeout(() => setPhase('idle-1'), DUR)
    }
  }

  const isAnimating       = phase === 'growing' || phase === 'shrinking'
  const showState2Content = phase === 'idle-2'  || phase === 'shrinking'

  const c = target === 'large' ? C_LARGE : C_SMALL

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: '1905 / 1079' }}
    >
      {/* ── Layer 0: grainy background WebP ── */}
      <img
        src="/gap-bg.webp"
        alt=""
        className="absolute inset-0 w-full h-full block"
        style={{ objectFit: 'cover' }}
        draggable={false}
      />

      {/* ── Black left panel — idle-1 + animating (x=0..798 = 41.89%) ── */}
      {(phase === 'idle-1' || isAnimating) && (
        <div style={{ position: 'absolute', left: 0, top: 0, width: '41.89%', height: '100%', background: '#000000', pointerEvents: 'none' }} />
      )}

      {/* ── Large circle idle-1: stroke only at C_SMALL position ── */}
      {phase === 'idle-1' && (
        <div style={cssCircle(C_SMALL.cx, C_SMALL.cy, C_SMALL.r, C_SMALL.sw, 'transparent')} />
      )}

      {/* ── Large circle idle-2: black fill + white stroke at C_LARGE position ── */}
      {phase === 'idle-2' && (
        <div style={cssCircle(C_LARGE.cx, C_LARGE.cy, C_LARGE.r, C_LARGE.sw, '#000000')} />
      )}

      {/* ── Small decorative ring — always visible ── */}
      <div style={SMALL_RING} />

      {/* ── Animated circle — only during transitions; black fill + white stroke ── */}
      {isAnimating && (
        <svg
          viewBox="0 0 1905 1079"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none', overflow: 'visible' }}
        >
          <circle
            fill="black"
            stroke="white"
            style={{
              cx: c.cx,
              cy: c.cy,
              r: c.r,
              strokeWidth: c.sw,
              transition: CIRCLE_TRANS,
            } as React.CSSProperties}
          />
        </svg>
      )}

      {/* ── Vertical divider — CSS, only idle-1 ── */}
      {phase === 'idle-1' && (
        <div style={{ position: 'absolute', left: '41.89%', top: 0, width: '1px', height: '100%', background: 'white', pointerEvents: 'none' }} />
      )}

      {/* ── Top & bottom edge strokes ── */}
      <div style={{ position: 'absolute', top: 0,    left: 0, right: 0, height: '1px', background: 'white', zIndex: 20, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'white', zIndex: 20, pointerEvents: 'none' }} />

      {/* ── Arrow button ── */}
      <button
        className="absolute rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
        style={{
          left: '4.98%',
          top: '49.96%',
          transform: 'translate(-50%, -50%)',
          width: '4.06vw',
          height: '4.06vw',
          border: 'none',
          cursor: isAnimating ? 'default' : 'pointer',
          zIndex: 10,
        }}
        onClick={handleClick}
        aria-label={showState2Content ? 'Previous' : 'Next'}
      >
        <svg style={{ width: '38%', height: '38%' }} viewBox="0 0 24 24" fill="none">
          {!showState2Content
            ? <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            : <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          }
        </svg>
      </button>

      {/* ── State 1 content ── */}
      {phase === 'idle-1' && (
        <>
          <img
            src="/4 percent.svg"
            alt=""
            draggable={false}
            style={{ position: 'absolute', left: '22.36%', top: '39.94%', width: '14.17%', height: 'auto', zIndex: 3 }}
          />
          <p
            className="absolute text-white"
            style={{
              left: '48.45%', top: '43.65%', width: '35.38%', zIndex: 3,
              fontFamily: 'D-DIN, sans-serif', fontSize: '1.26vw', lineHeight: 1.4,
            }}
          >
            The global EV transition is accelerating, but the infrastructure to
            track, verify, and manage battery lifecycles is critically absent -
            creating compliance risk, recycling inefficiency, and billions in
            stranded value.
          </p>
        </>
      )}

      {/* ── State 2 content ── */}
      {phase === 'idle-2' && (
        <>
          <img
            src="/4 percent.svg"
            alt=""
            draggable={false}
            style={{ position: 'absolute', left: '71.9%', top: '39.94%', width: '14.17%', height: 'auto', zIndex: 3 }}
          />
          <p
            className="absolute text-white"
            style={{
              left: '14.66%', top: '34.42%', width: '34.3%', zIndex: 3,
              fontFamily: 'D-DIN, sans-serif', fontSize: '1.26vw', lineHeight: 1.4,
            }}
          >
            70,000+ data points are generated per battery site per year. Today's compliance processes are manual, tedious, and unable to scale with the speed of regulation.
          </p>
          <p
            className="absolute text-white"
            style={{
              left: '14.65%', top: '55.74%', width: '34.97%', zIndex: 3,
              fontFamily: 'D-DIN, sans-serif', fontSize: '1.26vw', lineHeight: 1.4,
            }}
          >
            The EU Battery Regulation enters into force in February 2027. India's Battery Aadhaar is imminent. The clock is running.
          </p>
        </>
      )}
    </section>
  )
}
