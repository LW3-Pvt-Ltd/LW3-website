import { useState, useEffect, useRef } from 'react'
import newHeroBg from '@/assets/hero/new-hero-section.svg'
import img1 from '@/assets/hero/new-hero-image-1.png'
import img2 from '@/assets/hero/new-hero-image-2.jpg'
import img3 from '@/assets/hero/new-hero-image-3.jpg'
import img4 from '@/assets/hero/new-hero-image-4.jpg'

const FW = 1905
const FH = 1167

const CARD_PATH = 'M982.16 248.706C982.16 228.741 998.345 212.557 1018.31 212.557H1503.53C1523.5 212.557 1539.68 228.741 1539.68 248.706V268.235C1539.68 288.199 1555.87 304.384 1575.83 304.384H1721.36C1741.33 304.384 1757.51 320.568 1757.51 340.533V953.148C1757.51 973.112 1741.33 989.297 1721.36 989.297H1018.31C998.345 989.297 982.16 973.112 982.16 953.148V248.706Z'

const IMAGES = [img1, img2, img3, img4]

const BTN_X = 187.809
const BTN_Y = 908.461
const BTN_W = 267.815
const BTN_H = 43.376


export default function HeroSection() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [imgIndex, setImgIndex] = useState(0)
  const [btnHovered, setBtnHovered] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new ResizeObserver(entries => {
      setScale(entries[0].contentRect.width / FW)
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const t = setInterval(() => setImgIndex(i => (i + 1) % IMAGES.length), 2000)
    return () => clearInterval(t)
  }, [])

  const px = v => v * scale

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: FH * scale * 2 }}
      aria-label="Hero section"
    >
      <div style={{ position: 'sticky', top: 0, height: FH * scale, overflow: 'hidden' }}>
        {/* SVG background — carries all text, decoration, card frame */}
        <img
          src={newHeroBg}
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

        {/* Cycling card images, clipped to card shape */}
        <svg
          width={FW * scale}
          height={FH * scale}
          viewBox={`0 0 ${FW} ${FH}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
          aria-hidden="true"
        >
          <defs>
            <clipPath id="hero-card-clip">
              <path d={CARD_PATH} />
            </clipPath>
          </defs>
          {IMAGES.map((src, i) => (
            <image
              key={i}
              href={src}
              x={982}
              y={212}
              width={776}
              height={778}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#hero-card-clip)"
              style={{
                opacity: i === imgIndex ? 1 : 0,
                transition: 'opacity 0.7s ease',
              }}
            />
          ))}
        </svg>

        {/* Primary CTA button overlay — "Book a Demo" */}
        <div
          role="button"
          tabIndex={0}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            position: 'absolute',
            left: px(BTN_X),
            top: px(BTN_Y),
            width: px(BTN_W),
            height: px(BTN_H),
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: btnHovered ? '#3B82F6' : 'transparent',
            transition: 'background-color 0.2s ease',
          }}
        >
          {btnHovered && (
            <span
              style={{
                color: '#ffffff',
                fontFamily: '"SF Pro Display", system-ui, sans-serif',
                fontSize: px(13),
                fontWeight: 600,
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              Book a Demo
            </span>
          )}
        </div>

      </div>
    </section>
  )
}
