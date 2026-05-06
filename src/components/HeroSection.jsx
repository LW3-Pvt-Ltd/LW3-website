import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '@fontsource/dm-mono/400.css'

import heroBg from '@/assets/hero/hero-bg.png'
import heroGrid from '@/assets/hero/hero-grid.png'
import heroPanel1 from '@/assets/hero/hero-panel.png'
import heroPanel2 from '@/assets/hero/hero-panel-2.png'
import heroPanel3 from '@/assets/hero/hero-panel-3.png'
import heroLogomark from '@/assets/hero/hero-logomark.png'

// ─── Design coordinate system (Figma canvas) ────────────────────────────────
const FW = 1905
const FH = 1167

// ─── SVG paths extracted verbatim from SVG export ───────────────────────────
const CARD_PATH =
  'M158.149 182.434H1538C1557.71 182.434 1573.69 198.411 1573.69 218.119V244.332C1573.69 264.553 1590.08 280.944 1610.3 280.944H1746.85C1766.56 280.945 1782.54 296.922 1782.54 316.63V979.102C1782.54 998.81 1766.56 1014.79 1746.85 1014.79H158.149C138.441 1014.79 122.464 998.81 122.464 979.102V218.119C122.464 198.411 138.441 182.434 158.149 182.434Z'

const PANEL_PATH =
  'M982.16 248.706C982.16 228.741 998.345 212.557 1018.31 212.557H1503.53C1523.5 212.557 1539.68 228.741 1539.68 248.706V268.235C1539.68 288.199 1555.87 304.384 1575.83 304.384H1721.36C1741.33 304.384 1757.51 320.568 1757.51 340.533V953.148C1757.51 973.112 1741.33 989.297 1721.36 989.297H1018.31C998.345 989.297 982.16 973.112 982.16 953.148V248.706Z'

// ─── Slide data ──────────────────────────────────────────────────────────────
const SLIDES = [
  { accentColor: '#0033FF', panel: heroPanel1 },
  { accentColor: '#FFCC00', panel: heroPanel2 },
  { accentColor: '#E24B4A', panel: heroPanel3 },
]

// ─── Shared inline style helpers ────────────────────────────────────────────
const abs = (l, t, extra = {}) => ({
  position: 'absolute',
  left: l,
  top: t,
  ...extra,
})

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0)
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)

  // Responsive scale tied to container width
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setScale(containerRef.current.offsetWidth / FW)
      }
    }
    update()
    const ro = new ResizeObserver(update)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // Auto-advance carousel every 5 s
  useEffect(() => {
    const t = setInterval(() => setSlideIndex(i => (i + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  const currentSlide = SLIDES[slideIndex]

  return (
    <>
      {/* ── Desktop / Tablet: scale-based pixel-perfect layout ── */}
      <section
        ref={containerRef}
        className="relative w-full overflow-hidden hidden sm:block"
        style={{ height: FH * scale }}
        aria-label="Hero section"
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{ width: FW, height: FH, transform: `scale(${scale})` }}
        >
          {/* ── SVG LAYER: all visual geometry ── */}
          <svg
            width={FW}
            height={FH}
            viewBox={`0 0 ${FW} ${FH}`}
            className="absolute inset-0"
            style={{ pointerEvents: 'none' }}
            aria-hidden="true"
          >
            <defs>
              <clipPath id="lw3-outer-clip">
                <rect width={FW} height={FH} />
              </clipPath>
              <clipPath id="lw3-panel-clip" clipPathUnits="userSpaceOnUse">
                <path d={PANEL_PATH} />
              </clipPath>
            </defs>

            {/* Dark textured background */}
            <image
              href={heroBg}
              x="0" y="0"
              width={FW} height="1200"
              preserveAspectRatio="xMidYMid slice"
            />

            {/* Grid overlay @ 7% opacity */}
            <image
              href={heroGrid}
              x="0" y="0"
              width={FW} height="1200"
              opacity="0.07"
              preserveAspectRatio="xMidYMid slice"
            />

            {/* Red L-bracket — decorative top-left marker */}
            <line x1="38" y1="144.5" x2="38" y2="106.5" stroke="#E24B4A" strokeWidth="1" />
            <line x1="73.5" y1="107" x2="38.5" y2="107" stroke="#E24B4A" strokeWidth="1" />

            {/* White decorative rule lines */}
            <line x1="72"    y1="151.5"  x2="497"  y2="151.5"  stroke="white" strokeWidth="1" />
            <line x1="84.5"  y1="141"    x2="84.5"  y2="547"    stroke="white" strokeWidth="1" />
            <line x1="1190"  y1="1080.5" x2="1918"  y2="1080.5" stroke="white" strokeWidth="1" />
            <line x1="1853.5" y1="688"   x2="1853.5" y2="1416"  stroke="white" strokeWidth="1" />

            {/* White card with stepped top-right notch */}
            <path d={CARD_PATH} fill="white" stroke="#222220" strokeWidth="0.926897" />

            {/* Battery render — clipped to stepped panel shape, animated per slide */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.image
                key={slideIndex}
                href={currentSlide.panel}
                x="982.16" y="212.557"
                width="775.35" height="776.74"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#lw3-panel-clip)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Gold accent bar preceding tagline */}
            <rect x="187.809" y="245.382" width="29.6607" height="0.926897" fill="#C9A84C" />

            {/* Primary CTA button — background rect */}
            <rect
              x="187.809" y="908.461"
              width="267.815" height="43.3759"
              fill="#F5F2EC"
            />
            <rect
              x="188.272" y="908.924"
              width="266.888" height="42.449"
              fill="none" stroke="#0A0A08" strokeWidth="0.926897"
            />

            {/* BOOK A DEMO pill (sits in dark notch area, top-right) */}
            <rect
              x="1602.71" y="188.916"
              width="174.268" height="63.9676"
              rx="31.9838"
              fill="white"
              stroke="#F5F2EC" strokeWidth="0.915228"
            />
          </svg>

          {/* ── TEXT + INTERACTIVE LAYER ── */}

          {/* Tagline: India's Battery Passport Platform */}
          <span
            style={abs(228.598, 245.382, {
              fontFamily: '"DM Mono", monospace',
              fontSize: 9.64,
              letterSpacing: '1.928px',
              color: '#1A1A16',
              whiteSpace: 'nowrap',
              lineHeight: 1.2,
            })}
          >
            India&apos;s Battery Passport Platform
          </span>

          {/* Headline — Monument Extended */}
          <div
            style={abs(187.809, 270.87, {
              width: 873.137,
              fontFamily: '"Monument Extended", sans-serif',
              fontSize: 66.737,
              fontWeight: 400,
              color: '#4A4A45',
              letterSpacing: '6.6737px',
              lineHeight: 1.1,
            })}
          >
            <p style={{ margin: 0 }}>Every battery</p>
            <p style={{ margin: 0 }}>has a&nbsp;</p>
            <p style={{ margin: 0 }}>We write it.</p>
          </div>

          {/* "story." — animated accent word (Cormorant Garamond Bold Italic) */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={`story-${slideIndex}`}
              style={abs(518.71, 316.37, {
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 103.813,
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: 0,
                lineHeight: 0.93,
                width: 232.651,
                color: currentSlide.accentColor,
                display: 'block',
              })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              story.
            </motion.span>
          </AnimatePresence>

          {/* Body text */}
          <p
            style={abs(187.809, 773.22, {
              width: 452.326,
              fontFamily: '"SF Pro Display", system-ui, sans-serif',
              fontSize: 17.611,
              fontWeight: 400,
              color: '#4A4A45',
              lineHeight: 1.2,
              margin: 0,
            })}
          >
            LW3 is the full-stack digital infrastructure for EV battery traceability — built on Post-Quantum Secure Blockchain, Agentic AI, and IoT. Compliant with EU Battery Regulation 2027 and India&apos;s Battery Aadhaar.
          </p>

          {/* Primary CTA — transparent overlay on the SVG-drawn rect */}
          <button
            style={abs(187.809, 908.461, {
              width: 267.815,
              height: 43.376,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"SF Pro Display", system-ui, sans-serif',
              fontSize: 11.864,
              fontWeight: 700,
              color: '#0A0A08',
              letterSpacing: '1.1864px',
              lineHeight: 1.2,
              paddingLeft: 31.7,
              textAlign: 'left',
            })}
          >
            Explore the Platform ↗
          </button>

          {/* Secondary CTA */}
          <button
            style={abs(470.457, 919.294, {
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"SF Pro Display", system-ui, sans-serif',
              fontSize: 11.061,
              fontWeight: 510,
              color: '#888780',
              letterSpacing: '1.1123px',
              lineHeight: 1.2,
              display: 'flex',
              alignItems: 'center',
              gap: 27.418,
              padding: 0,
            })}
          >
            <span>See our pilots</span>
            <span
              style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: 16.313,
                letterSpacing: 0,
              }}
            >
              →
            </span>
          </button>

          {/* BOOK A DEMO — text overlay on SVG-drawn pill */}
          <button
            style={abs(1602.71, 188.916, {
              width: 174.268,
              height: 63.9676,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
              padding: 0,
            })}
          >
            <span
              style={{
                fontFamily: '"SF Pro Display", system-ui, sans-serif',
                fontSize: 11.024,
                fontWeight: 510,
                letterSpacing: '1.1024px',
                color: '#4A4A45',
                lineHeight: 1.2,
                display: 'block',
              }}
            >
              BOOK A
            </span>
            <span
              style={{
                fontFamily: '"Monument Extended", sans-serif',
                fontSize: 29.398,
                fontWeight: 400,
                letterSpacing: '1.3826px',
                color: '#4A4A45',
                lineHeight: 1.0,
                display: 'block',
                marginTop: 3,
              }}
            >
              DEMO
            </span>
          </button>

          {/* Slide dots */}
          <div
            style={abs(187.809, 1048, {
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            })}
          >
            {SLIDES.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setSlideIndex(i)}
                animate={{
                  width: i === slideIndex ? 24 : 8,
                  backgroundColor:
                    i === slideIndex ? '#C9A84C' : 'rgba(255,255,255,0.3)',
                }}
                transition={{ duration: 0.3 }}
                style={{
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile layout (< 640px) ── */}
      <section
        className="relative w-full overflow-hidden sm:hidden"
        style={{ backgroundColor: '#0A0A08' }}
        aria-label="Hero section"
      >
        {/* Background */}
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          aria-hidden="true"
        />
        <img
          src={heroGrid}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.07 }}
          aria-hidden="true"
        />

        {/* Content card */}
        <div className="relative z-10 mx-4 my-8 bg-white rounded-2xl overflow-hidden">
          {/* Battery panel image */}
          <div className="relative w-full h-48 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={`m-panel-${slideIndex}`}
                src={currentSlide.panel}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>

          {/* Text content */}
          <div className="px-6 py-8">
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C9A84C] flex-shrink-0" />
              <span
                className="text-[#1A1A16] uppercase tracking-[0.2em]"
                style={{ fontFamily: '"DM Mono", monospace', fontSize: 9 }}
              >
                India&apos;s Battery Passport Platform
              </span>
            </div>

            {/* Headline */}
            <div
              className="text-[#4A4A45] leading-[1.1] mb-6"
              style={{
                fontFamily: '"Monument Extended", sans-serif',
                fontSize: 'clamp(28px, 8vw, 44px)',
                letterSpacing: '0.05em',
              }}
            >
              <p className="m-0">Every battery</p>
              <p className="m-0">
                has a{' '}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.em
                    key={`m-story-${slideIndex}`}
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: 'clamp(42px, 12vw, 66px)',
                      fontStyle: 'italic',
                      fontWeight: 700,
                      color: currentSlide.accentColor,
                      letterSpacing: 0,
                      lineHeight: 0.93,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    story.
                  </motion.em>
                </AnimatePresence>
              </p>
              <p className="m-0">We write it.</p>
            </div>

            {/* Body */}
            <p
              className="text-[#4A4A45] leading-[1.4] mb-8 text-sm"
              style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif' }}
            >
              LW3 is the full-stack digital infrastructure for EV battery traceability — built on Post-Quantum Secure Blockchain, Agentic AI, and IoT.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button
                className="w-full py-3 px-6 bg-[#F5F2EC] border border-black text-[#0A0A08] text-xs tracking-widest font-bold min-h-[44px]"
                style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif' }}
              >
                Explore the Platform ↗
              </button>
              <button
                className="flex items-center gap-3 text-[#888780] text-xs tracking-wider min-h-[44px]"
                style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif', background: 'none', border: 'none' }}
              >
                <span>See our pilots</span>
                <span style={{ fontFamily: '"DM Mono", monospace', fontSize: 16 }}>→</span>
              </button>
            </div>

            {/* Slide dots */}
            <div className="flex items-center gap-2 mt-6">
              {SLIDES.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  animate={{
                    width: i === slideIndex ? 24 : 8,
                    backgroundColor:
                      i === slideIndex ? '#C9A84C' : 'rgba(0,0,0,0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0 }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* BOOK A DEMO — mobile fab */}
        <div className="relative z-10 flex justify-center pb-8">
          <button
            className="bg-white rounded-full flex flex-col items-center justify-center min-w-[120px] py-3 px-6 min-h-[44px]"
            style={{ border: '1px solid #F5F2EC' }}
          >
            <span
              className="text-[#4A4A45] tracking-widest"
              style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif', fontSize: 9 }}
            >
              BOOK A
            </span>
            <span
              className="text-[#4A4A45]"
              style={{ fontFamily: '"Monument Extended", sans-serif', fontSize: 20 }}
            >
              DEMO
            </span>
          </button>
        </div>
      </section>
    </>
  )
}
