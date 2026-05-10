import { useRef, useEffect, useState } from 'react'
import heroBg         from '@/assets/hero/hero-nav-bg.jpg'
import demoArrow      from '@/assets/hero/book-a-demo-arrow.svg'

// ── Design canvas ──────────────────────────────────────────────────────────
const W = 1905
const H = 1037

// ── Nav links ──────────────────────────────────────────────────────────────
const NAV_LINKS = ['Product', 'Technology', 'Regulation', 'Statistics', 'Partners', 'See Our Pilots']

export default function HeroSection() {
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
      aria-label="Hero section"
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

        {/* ── 1. Background photo (jpg — swap for webp later) ────────────── */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
          }}
        />

        {/* ── 2. Corner L-lines decoration — top left ────────────────────── */}
        <svg
          viewBox="0 0 148.11 148.5"
          width="148.11"
          height="148.5"
          fill="none"
          aria-hidden="true"
          style={{ position: 'absolute', left: 97, top: 166, display: 'block', overflow: 'visible' }}
        >
          <line x1="7.61" y1="8.20" x2="148.11" y2="8.20" stroke="white" strokeWidth="0.390276"/>
          <line x1="7.81" y1="148.5" x2="7.81"  y2="8.00"  stroke="white" strokeWidth="0.390276"/>
        </svg>

        {/* ── 3. POST QUANTUM SECURED ────────────────────────────────────── */}
        <p style={{
          position: 'absolute', left: 157, top: 224,
          margin: 0,
          fontFamily: '"D-DINCondensed", sans-serif',
          fontWeight: 400,
          fontSize: 40,
          lineHeight: 1.1,
          letterSpacing: '4px',
          color: 'white',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>POST QUANTUM SECURED</p>

        {/* ── 4. BaTTERY PASSPORT ────────────────────────────────────────── */}
        <p style={{
          position: 'absolute', left: 153, top: 274,
          margin: 0,
          fontFamily: '"D-DINExp", sans-serif',
          fontWeight: 700,
          fontSize: 80,
          lineHeight: 1.1,
          letterSpacing: '8px',
          color: 'white',
          textTransform: 'uppercase',
          width: 884,
        }}>BaTTERY PASSPORT</p>

        {/* ── 5. "for" + Regulation (EU) 2023/1542 — below BATTERY PASSPORT */}
        <p style={{
          position: 'absolute', left: 157, top: 467,
          margin: 0,
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 24,
          lineHeight: 1.1,
          letterSpacing: '1.6px',
          color: 'white',
        }}>for</p>

        <p style={{
          position: 'absolute', left: 198, top: 467,
          margin: 0,
          fontFamily: '"D-DINCondensed", sans-serif',
          fontWeight: 400,
          fontSize: 24,
          lineHeight: 1.1,
          letterSpacing: '2.4px',
          color: 'white',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>Regulation (EU) 2023/1542</p>

        {/* ── 6. Body text ───────────────────────────────────────────────── */}
        <p style={{
          position: 'absolute', left: 158, top: 797,
          width: 571,
          margin: 0,
          fontFamily: '"D-DINCondensed", sans-serif',
          fontWeight: 400,
          fontSize: 24,
          lineHeight: 1.1,
          letterSpacing: '2.4px',
          color: 'white',
        }}>
          <span style={{ textTransform: 'uppercase' }}>D</span>
          igital compliance Infrastructure to issue, manage &amp; verify battery passports to meet Global Battery Regulation requirements.
        </p>

        {/* ── 7. Book a Demo button ──────────────────────────────────────── */}
        <button
          type="button"
          style={{
            position: 'absolute', left: 155, top: 899,
            width: 271, height: 59,
            background: 'black',
            border: 'none',
            cursor: 'pointer',
            padding: '15px 88px 15px 26px',
            boxSizing: 'border-box',
            display: 'flex', alignItems: 'center',
          }}
        >
          <span style={{
            fontFamily: '"D-DIN", sans-serif',
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 1.2,
            letterSpacing: '1.1864px',
            color: 'white',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>Book a Demo</span>
        </button>

        {/* ── 8. Arrow → inside button right side ────────────────────────── */}
        <img
          src={demoArrow}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', left: 367, top: 921, width: 33, height: 15, display: 'block' }}
        />

        {/* ── 9. Nav bar ─────────────────────────────────────────────────── */}
        {/* backdrop-blur, bg rgba(10,10,8,0.5), h=77 */}
        <nav
          aria-label="Main navigation"
          style={{
            position: 'absolute', top: 0, left: 0,
            width: W, height: 77,
            background: 'rgba(10,10,8,0.5)',
            backdropFilter: 'blur(10.7px)',
            WebkitBackdropFilter: 'blur(10.7px)',
            display: 'flex', alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo — inline SVG */}
          <div style={{ position: 'absolute', left: 108, top: 0, height: 77, display: 'flex', alignItems: 'center' }}>
            <svg
              viewBox="0 0 51 21.6106"
              width="58.6"
              height="24.83"
              fill="white"
              aria-label="LW3"
              style={{ display: 'block', flexShrink: 0, overflow: 'visible' }}
            >
              <path d="M51 3.72559H47.0156V8.94181H51V3.72559Z"/>
              <path d="M47.0156 12.6683V8.94238H39.8438V12.6683H47.0156Z"/>
              <path d="M47.0156 3.72589H35.8594V0H43.5891C45.4164 0 46.9104 1.64774 47.0156 3.72589Z"/>
              <path d="M3.98438 0H0V17.8843H3.98438V0Z"/>
              <path d="M19.125 0H15.1406V21.6102H19.125V0Z"/>
              <path d="M21.5156 0H25.5V21.6102H22.8619C22.1184 21.6102 21.5156 21.0119 21.5156 20.274V0Z"/>
              <path d="M31.875 0H27.8906V21.6102H31.875V0Z"/>
              <path d="M31.875 17.8848V21.6106H16.4588C15.7308 21.6106 15.1406 20.999 15.1406 20.2447V17.8848H31.875Z"/>
              <path d="M12.75 21.6106V17.8848H3.98438V21.6106H12.75Z"/>
              <path d="M51 17.8844H47.0156V12.6681H51V17.8844Z"/>
              <path d="M47.0156 17.8848H35.8594V21.6106H43.5891C45.4164 21.6106 46.9105 19.9629 47.0156 17.8848Z"/>
            </svg>
            {/* "/" divider */}
            <span style={{
              fontFamily: '"SF Pro Display", sans-serif',
              fontWeight: 100,
              fontSize: 41.365,
              lineHeight: 1.1,
              color: 'white',
              marginLeft: 2,
              marginRight: 2,
            }}>/</span>
            {/* Tagline */}
            <span style={{
              fontFamily: '"SF Pro Display", sans-serif',
              fontWeight: 600,
              fontSize: 13.788,
              lineHeight: 1.1,
              color: 'white',
              display: 'flex', flexDirection: 'column',
            }}>
              <span>accelerating</span>
              <span>sustainable traceability</span>
            </span>
          </div>

          {/* Nav links — start at x=972, gap=50px */}
          <div style={{
            position: 'absolute', left: 972, top: 0,
            height: 77,
            display: 'flex', alignItems: 'center',
            gap: 50,
          }}>
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: '"D-DIN", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 'normal',
                  letterSpacing: '2.8px',
                  color: '#F5F2EC',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

      </div>
    </section>
  )
}
