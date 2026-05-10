import { useRef, useEffect, useState } from 'react'
import RegEllipse from '@/assets/regulation/reg-ellipse.svg?react'
import RegCornerLines from '@/assets/regulation/reg-corner-lines.svg?react'
import regCardBg from '@/assets/regulation/reg-card-img.png'
import regArrow from '@/assets/regulation/reg-arrow.svg'

const W = 1905
const H = 1716

const TIMELINE_LEFT = 122.5
const TIMELINE_TOP = 590
const CARD_W = 360
const CARD_H = 447.857

const CARDS = [
  {
    offsetLeft: 0, offsetTop: 0,
    date: 'Aug 2023', status: '— In Force',
    title: 'EU Battery Regulation (2023/1542)',
    descTop: 325.71,
    desc: 'Replaces EU Battery Directive. Legal framework mandating battery passports for all EV, LMT, and industrial batteries over 2 kWh.',
    badge: 'LW3 Compliant',
  },
  {
    offsetLeft: 420, offsetTop: 150,
    date: '2025', status: '— Upcoming',
    title: 'India Battery Aadhaar (BPAN)',
    descTop: 294.64,
    desc: "India's national battery identity framework aligning with international DPP standards. LW3 achieved 80% alignment in pilot deployments.",
    badge: '80% Aligned  in Pilots',
  },
  {
    offsetLeft: 840, offsetTop: 0,
    date: 'Feb 2027', status: '— Mandatory',
    title: 'EU DPP Mandatory Deadline',
    descTop: 294.64,
    desc: 'All EV, LMT and industrial batteries sold in or exported to the EU must carry a fully compliant digital product passport from this date.',
    badge: 'LW3 Targeted Completion',
  },
  {
    offsetLeft: 1260, offsetTop: 150,
    date: '2027+', status: '— Emerging',
    title: 'US, UK, China, Japan',
    descTop: 294.64,
    desc: "Battery passport initiatives are advancing across all major markets. LW3's multi-region compliance engine is designed for global scalability.",
    badge: 'Platform Ready',
  },
]

export default function RegulationSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(null)

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
      aria-label="The Regulation Race Is On"
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

        {/* ── 1. Large decorative circle arc (SVG) ──────────────────────── */}
        <div style={{
          position: 'absolute',
          left: -419.09,
          top: -221.89,
          width: 1704.244,
          height: 1704.244,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{ flexShrink: 0, transform: 'rotate(124.94deg)' }}>
            <RegEllipse
              aria-hidden="true"
              style={{ width: 1223.908, height: 1223.908, display: 'block' }}
            />
          </div>
        </div>

        {/* ── 2. Headline ────────────────────────────────────────────────── */}
        <p style={{
          position: 'absolute',
          left: 172,
          top: 145,
          width: 884,
          margin: 0,
          fontFamily: '"D-DIN", sans-serif',
          fontWeight: 700,
          fontSize: 70,
          lineHeight: 1.1,
          letterSpacing: '7px',
          color: '#f5f2ec',
          textTransform: 'uppercase',
        }}>
          The Regulation<br />Race Is On
        </p>

        {/* ── 3. Italic subtext ──────────────────────────────────────────── */}
        <p style={{
          position: 'absolute',
          left: 522,
          top: 383,
          width: 319,
          margin: 0,
          fontFamily: '"D-DIN", sans-serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 13,
          lineHeight: 1.1,
          color: 'white',
        }}>
          Battery passport mandates are converging globally. LW3 is the only Indian platform purpose-built to deliver compliance across all three major jurisdictions simultaneously.
        </p>

        {/* ── 4. Timeline cards ─────────────────────────────────────────── */}
        {CARDS.map((card, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: TIMELINE_LEFT + card.offsetLeft,
              top: TIMELINE_TOP + card.offsetTop,
              width: CARD_W,
              height: CARD_H,
              overflow: 'hidden',
            }}
          >
            {/* Date / status */}
            <p style={{
              position: 'absolute', left: 0, top: 11.79,
              margin: 0,
              fontFamily: '"D-DIN", sans-serif',
              fontWeight: 700,
              fontSize: 13,
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
            }}>
              <span style={{ color: 'white' }}>{card.date}</span>
              {' '}
              <span style={{ color: '#ffcc00' }}>{card.status}</span>
            </p>

            {/* Card background image */}
            <img
              src={regCardBg}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0, top: 43.93,
                width: CARD_W, height: 160.714,
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Title */}
            <p style={{
              position: 'absolute', left: 0, top: 217.5,
              width: 363,
              margin: 0,
              fontFamily: '"D-DIN", sans-serif',
              fontWeight: 700,
              fontSize: 28,
              lineHeight: 1.2,
              color: '#f5f2ec',
            }}>
              {card.title}
            </p>

            {/* Description */}
            <p style={{
              position: 'absolute', left: 0, top: card.descTop,
              width: 344,
              margin: 0,
              fontFamily: '"D-DIN", sans-serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 13,
              lineHeight: '21.857px',
              color: 'white',
            }}>
              {card.desc}
            </p>

            {/* Green compliance badge */}
            <div style={{
              position: 'absolute', left: 0, top: 410.36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5.357px 11.786px',
              background: 'rgba(29,158,117,0.15)',
              border: '1.071px solid rgba(29,158,117,0.3)',
            }}>
              <p style={{
                margin: 0,
                fontFamily: '"D-DIN", sans-serif',
                fontWeight: 700,
                fontSize: 13,
                lineHeight: 1.2,
                color: '#1d9e75',
                whiteSpace: 'pre',
              }}>
                {card.badge}
              </p>
            </div>
          </div>
        ))}

        {/* ── 5. "See Patent Here" button ────────────────────────────────── */}
        <button
          type="button"
          style={{
            position: 'absolute',
            left: 192,
            top: 1493,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 16px',
            background: 'transparent',
            border: '0.581px solid white',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          <span style={{
            fontFamily: '"D-DIN", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.1,
            color: 'white',
            whiteSpace: 'nowrap',
          }}>See Patent Here</span>
          <div style={{ flexShrink: 0, transform: 'rotate(180deg)' }}>
            <img
              src={regArrow}
              alt=""
              aria-hidden="true"
              style={{ width: 34.133, height: 34.133, display: 'block' }}
            />
          </div>
        </button>

        {/* ── 6. CIRPASS reference text ──────────────────────────────────── */}
        <p style={{
          position: 'absolute',
          left: 1347,
          top: 1320,
          width: 296,
          margin: 0,
          fontFamily: '"D-DIN", sans-serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 13,
          lineHeight: 2,
          color: 'white',
        }}>
          LW3 is a participant in the EU-funded CIRPASS standardisation initiative, featured in the Final Report D3.1 Annex V9 (March 2024) — the global DPP standards roadmap.
        </p>

        {/* ── 7. CIRPASS button ──────────────────────────────────────────── */}
        <button
          type="button"
          style={{
            position: 'absolute',
            left: 1554,
            top: 1316,
            height: 29,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 16.482px',
            background: 'white',
            border: '0.581px solid #f5f2ec',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          <span style={{
            fontFamily: '"D-DIN", sans-serif',
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1.1,
            color: 'black',
            whiteSpace: 'nowrap',
            letterSpacing: '1px',
          }}>CIRPASS</span>
        </button>

        {/* ── 8. Corner L-lines decoration (SVG) ────────────────────────── */}
        <div style={{
          position: 'absolute',
          left: 154,
          top: 1547,
          width: 38,
          height: 35,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(180deg)',
        }}>
          <RegCornerLines
            aria-hidden="true"
            style={{ width: 38, height: 35, display: 'block' }}
          />
        </div>

      </div>
    </section>
  )
}
