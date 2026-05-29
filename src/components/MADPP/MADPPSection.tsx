// MADPP section — scroll-driven crossfade into RTWF
//
// Wrapper is 2× the section height so the sticky content has exactly
// one section-height of scroll room.  Progress 0→1 drives the fade.
//
// Canvas reference: 1905 × 1064  (55.88vw tall)
// Wrapper height:   111.76vw     (2 × section height)

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "'D-DINCondensed', sans-serif",
  fontSize: '1.05vw',
  color: 'rgba(255,255,255,0.5)',
  whiteSpace: 'nowrap',
}

const NUMBER_STYLE: React.CSSProperties = {
  fontFamily: "'Winter Sans Trial', sans-serif",
  fontSize: '3.15vw',
  lineHeight: 1,
  color: '#ffffff',
}

const TRIANGLE_STYLE: React.CSSProperties = {
  width: 0,
  height: 0,
  borderLeft: '0.296vw solid transparent',
  borderRight: '0.296vw solid transparent',
  borderBottom: '0.512vw solid #1D9E75',
  flexShrink: 0,
}

const BADGE_TEXT_STYLE: React.CSSProperties = {
  fontFamily: "'D-DINCondensed', sans-serif",
  fontSize: '0.84vw',
  color: '#1D9E75',
  whiteSpace: 'nowrap',
}

function Capsule({ left, top, width, text }: {
  left: string; top: string; width: string; text: string
}) {
  return (
    <div
      className="absolute flex items-center"
      style={{
        left, top, width,
        height: '3.008%',
        border: '1px solid #1D9E75',
        borderRadius: '9999px',
        paddingLeft: '0.754vw',
        gap: '0.41vw',
        boxSizing: 'border-box',
      }}
    >
      <div style={TRIANGLE_STYLE} />
      <span style={BADGE_TEXT_STYLE}>{text}</span>
    </div>
  )
}

function SplitLine({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((ch, i) => (
        <span key={i} style={{ display: 'inline-block', opacity: 0 }}>
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </>
  )
}

function NumberWheel({ value, triggered, style }: { value: string; triggered: boolean; style?: React.CSSProperties }) {
  return (
    <span style={{ overflow: 'hidden', display: 'inline-block', lineHeight: 1 }}>
      <span
        key={triggered ? 'in' : 'out'}
        style={{
          display: 'block',
          ...NUMBER_STYLE,
          ...style,
          animation: triggered ? 'madppWheelIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
          transform: triggered ? undefined : 'translateY(110%)',
          opacity: triggered ? undefined : 0,
        }}
      >
        {value}
      </span>
    </span>
  )
}

export default function MADPPSection() {
  const [progress, setProgress] = useState(0)
  const [sectionInView, setSectionInView] = useState(false)
  const wrapperRef   = useRef<HTMLDivElement>(null)
  const circlesRef   = useRef<SVGCircleElement[]>([])
  const linesRef     = useRef<SVGLineElement[]>([])
  const num30Ref     = useRef<HTMLDivElement>(null)
  const num28Ref     = useRef<HTMLDivElement>(null)
  const madppHeadingRef = useRef<HTMLDivElement>(null)
  const prevTriggered = useRef(false)

  // RTWF refs
  const rtwfHeadingRef  = useRef<HTMLDivElement>(null)
  const rtwf5400Ref     = useRef<HTMLSpanElement>(null)
  const rtwf28Ref       = useRef<HTMLSpanElement>(null)
  const rtwf02Ref       = useRef<HTMLSpanElement>(null)
  const rtwfStepsRef    = useRef<(HTMLDivElement | null)[]>([])
  const prevRtwf        = useRef(false)

  // DDAt refs
  const ddatHeadingRef  = useRef<HTMLDivElement>(null)
  const ddatHeadersRef  = useRef<(HTMLDivElement | null)[]>([])
  const ddatRowsRef     = useRef<(HTMLDivElement | null)[]>([])
  const ddatPillsRef    = useRef<(HTMLDivElement | null)[]>([])
  const ddatSavingsRef  = useRef<(HTMLSpanElement | null)[]>([])
  const prevDdat        = useRef(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      // Wrapper = 3× section height → available scroll = 2× section height
      const scrollRange = wrapperRef.current.offsetHeight * 2 / 3
      const p = Math.max(0, Math.min(1, -rect.top / scrollRange))
      setProgress(p)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // True crossfades — incoming layer starts exactly when outgoing begins, no dark gap
  // MADPP  exits:  0.20 → 0.35
  // RTWF   enters: 0.20 → 0.35  |  exits: 0.65 → 0.80
  // DDAt   enters: 0.65 → 0.80
  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))
  const fade = (p: number, start: number, width = 0.15) => clamp((p - start) / width, 0, 1)

  const madppOpacity = 1 - fade(progress, 0.20)
  const numbersTriggered = sectionInView && madppOpacity > 0.5
  const madppY = -fade(progress, 0.20) * 50

  // ── GSAP: circles scale-in, lines draw, numbers count-up ──────────────────
  const LINE_LENGTHS = [75, 174, 114, 129, 32]
  useEffect(() => {
    const circles = circlesRef.current.filter(Boolean)
    const lines   = linesRef.current.filter(Boolean)

    if (numbersTriggered && !prevTriggered.current) {
      prevTriggered.current = true

      // 0. MADPP heading letter split
      if (madppHeadingRef.current) gsap.fromTo(Array.from(madppHeadingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.028, ease: 'power3.out' })

      // 1. Circles scale in from center with stagger
      gsap.set(circles, { scale: 0, transformOrigin: '50% 50%' })
      gsap.to(circles, {
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.4)',
      })

      // 2. Connector lines draw via stroke-dashoffset
      lines.forEach((line, i) => {
        gsap.set(line, { strokeDasharray: LINE_LENGTHS[i], strokeDashoffset: LINE_LENGTHS[i] })
      })
      gsap.to(lines, {
        strokeDashoffset: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.inOut',
        delay: circles.length * 0.1 + 0.3,
      })

      // 3. Capsule numbers count up
      const obj30 = { val: 0 }
      gsap.to(obj30, {
        val: 30, duration: 1.5, ease: 'power2.out', delay: 0.4,
        onUpdate() { if (num30Ref.current) num30Ref.current.textContent = Math.round(obj30.val) + '%' },
      })
      const obj28 = { val: 0 }
      gsap.to(obj28, {
        val: 2.8, duration: 1.5, ease: 'power2.out', delay: 0.5,
        onUpdate() { if (num28Ref.current) num28Ref.current.textContent = obj28.val.toFixed(1) + '%' },
      })

    } else if (!numbersTriggered && prevTriggered.current) {
      prevTriggered.current = false
      if (madppHeadingRef.current) gsap.set(Array.from(madppHeadingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 })
      gsap.killTweensOf([...circles, ...lines])
      gsap.set(circles, { scale: 0 })
      lines.forEach((line, i) => {
        gsap.set(line, { strokeDashoffset: LINE_LENGTHS[i] })
      })
      if (num30Ref.current) num30Ref.current.textContent = '0%'
      if (num28Ref.current) num28Ref.current.textContent = '0.0%'
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numbersTriggered])

  const rtwfEnter = fade(progress, 0.20)
  const rtwfExit  = fade(progress, 0.65)
  const rtwfOpacity = Math.min(rtwfEnter, 1 - rtwfExit)
  const rtwfTriggered = rtwfOpacity > 0.5
  const rtwfY = (1 - rtwfEnter) * 50 - rtwfExit * 50

  const ddatOpacity = fade(progress, 0.65)
  const ddatTriggered = ddatOpacity > 0.5
  const ddatY = (1 - fade(progress, 0.65)) * 50

  // ── RTWF animations ──────────────────────────────────────────────────────────
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (rtwfTriggered && !prevRtwf.current) {
      prevRtwf.current = true
      const letters = rtwfHeadingRef.current ? Array.from(rtwfHeadingRef.current.querySelectorAll('span')) as HTMLElement[] : []
      gsap.fromTo(letters, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.028, ease: 'power3.out' })
      if (rtwf5400Ref.current) { const o = { v: 0 }; gsap.to(o, { v: 5400, duration: 1.8, ease: 'power2.out', delay: 0.3, onUpdate() { if (rtwf5400Ref.current) rtwf5400Ref.current.textContent = Math.round(o.v).toString() } }) }
      if (rtwf28Ref.current)   { const o = { v: 0 }; gsap.to(o, { v: 2.8,  duration: 1.5, ease: 'power2.out', delay: 0.4, onUpdate() { if (rtwf28Ref.current)   rtwf28Ref.current.textContent   = o.v.toFixed(1) + ' sec' } }) }
      if (rtwf02Ref.current)   { const o = { v: 0 }; gsap.to(o, { v: 0.2,  duration: 1.5, ease: 'power2.out', delay: 0.5, onUpdate() { if (rtwf02Ref.current)   rtwf02Ref.current.textContent   = o.v.toFixed(1) + '%' } }) }
      const steps = rtwfStepsRef.current.filter(Boolean) as HTMLDivElement[]
      gsap.set(steps, { opacity: 0, y: 18 })
      gsap.to(steps, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out', delay: 0.35 })
    } else if (!rtwfTriggered && prevRtwf.current) {
      prevRtwf.current = false
      if (rtwfHeadingRef.current) gsap.set(Array.from(rtwfHeadingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 })
      if (rtwf5400Ref.current) rtwf5400Ref.current.textContent = '0'
      if (rtwf28Ref.current)   rtwf28Ref.current.textContent   = '0.0 sec'
      if (rtwf02Ref.current)   rtwf02Ref.current.textContent   = '0.0%'
      gsap.set(rtwfStepsRef.current.filter(Boolean), { opacity: 0, y: 18 })
    }
  }, [rtwfTriggered])

  // ── DDAt animations ───────────────────────────────────────────────────────────
  const DDAT_SAVINGS = [96.0, 87.1, 63.3, 48.5, 38.2, 23.1, 23.1]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (ddatTriggered && !prevDdat.current) {
      prevDdat.current = true
      const letters = ddatHeadingRef.current ? Array.from(ddatHeadingRef.current.querySelectorAll('span')) as HTMLElement[] : []
      gsap.fromTo(letters, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.028, ease: 'power3.out' })
      const headers = ddatHeadersRef.current.filter(Boolean) as HTMLDivElement[]
      gsap.set(headers, { opacity: 0, y: 12 })
      gsap.to(headers, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.2 })
      const pills = ddatPillsRef.current.filter(Boolean) as HTMLDivElement[]
      gsap.set(pills, { scale: 0, opacity: 0 })
      gsap.to(pills, { scale: 1, opacity: 1, duration: 0.35, stagger: 0.09, ease: 'back.out(2)', delay: 0.55 })
      ddatSavingsRef.current.filter(Boolean).forEach((el, i) => {
        const o = { v: 0 }
        gsap.to(o, { v: DDAT_SAVINGS[i], duration: 1.5, ease: 'power2.out', delay: 0.4 + i * 0.09, onUpdate() { if (el) el.textContent = o.v.toFixed(1) + ' h/mo' } })
      })
    } else if (!ddatTriggered && prevDdat.current) {
      prevDdat.current = false
      if (ddatHeadingRef.current) gsap.set(Array.from(ddatHeadingRef.current.querySelectorAll('span')), { y: 30, opacity: 0 })
      gsap.set(ddatHeadersRef.current.filter(Boolean), { opacity: 0, y: 12 })
      gsap.set(ddatPillsRef.current.filter(Boolean),   { scale: 0, opacity: 0 })
      ddatSavingsRef.current.filter(Boolean).forEach((el, i) => { if (el) el.textContent = DDAT_SAVINGS[i].toFixed(1) + ' h/mo' })
    }
  }, [ddatTriggered])

  const layerBase: React.CSSProperties = {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    willChange: 'opacity, transform',
  }

  const madppStyle: React.CSSProperties = {
    ...layerBase,
    opacity: madppOpacity,
    transform: `translateY(${madppY}px)`,
    pointerEvents: madppOpacity < 0.05 ? 'none' : 'auto',
  }

  const rtwfStyle: React.CSSProperties = {
    ...layerBase,
    opacity: rtwfOpacity,
    transform: `translateY(${rtwfY}px)`,
    pointerEvents: rtwfOpacity < 0.05 ? 'none' : 'auto',
  }

  const ddatStyle: React.CSSProperties = {
    ...layerBase,
    opacity: ddatOpacity,
    transform: `translateY(${ddatY}px)`,
    pointerEvents: ddatOpacity < 0.05 ? 'none' : 'auto',
  }

  return (
    // 3× section height → 3 × (1064/1905 × 100)vw = 167.64vw
    // Sentinel divs at 0, 1/3, 2/3 of wrapper height — used as scroll snap points
    <div ref={wrapperRef} id="snap-madpp-0" style={{ height: '167.64vw', position: 'relative' }}>
      <div id="snap-madpp-1" style={{ position: 'absolute', top: '55.88vw'  }} />
      <div id="snap-madpp-2" style={{ position: 'absolute', top: '111.76vw' }} />

      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          aspectRatio: '1905 / 1064',
          overflow: 'hidden',
          borderBottom: '1px solid #ffffff',
          background: '#000000',
        }}
      >

        <style>{`
          @keyframes madppWheelIn {
            from { transform: translateY(110%); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
          }
        `}</style>

        {/* ── MADPP LAYER ── */}
        <div style={madppStyle}>
          {/* Left panel grainy background */}
          <img
            src="/MADPP background.webp"
            alt=""
            draggable={false}
            style={{ position: 'absolute', left: 0, top: 0, width: '34.86%', height: '100%', objectFit: 'cover' }}
          />
          {/* Inline SVG — circles + connector lines (GSAP-animated) */}
          <svg
            viewBox="0 0 1905 1064"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible' }}
          >
            {/* Concentric rings */}
            <circle ref={el => { if (el) circlesRef.current[0] = el }} cx="1406" cy="449" r="374.5" stroke="white" />
            <circle ref={el => { if (el) circlesRef.current[1] = el }} cx="1405.5" cy="527" r="296.105" stroke="white" strokeWidth="0.790667" />
            <circle ref={el => { if (el) circlesRef.current[2] = el }} cx="1407" cy="615" r="207.5" stroke="white" />
            {/* Coloured content circles */}
            <circle ref={el => { if (el) circlesRef.current[3] = el }} cx="1348.5" cy="651.5" r="138" fill="#0A68FF" fillOpacity="0.1" stroke="#0A68FF" />
            <circle ref={el => { if (el) circlesRef.current[4] = el }} cx="1513.5" cy="526.5" r="69" fill="#D9D9D9" fillOpacity="0.1" stroke="white" />
            <circle ref={el => { if (el) circlesRef.current[5] = el }} cx="1548.5" cy="652" r="61.0576" fill="#D9D9D9" fillOpacity="0.1" stroke="white" strokeWidth="0.884892" />
            <circle ref={el => { if (el) circlesRef.current[6] = el }} cx="1504" cy="747" r="43.6835" fill="#FF6663" fillOpacity="0.1" stroke="#FF6663" strokeWidth="0.633094" />
            {/* Connector lines */}
            <line ref={el => { if (el) linesRef.current[0] = el }} x1="1423" y1="963.5" x2="1348" y2="963.5" stroke="white" />
            <line ref={el => { if (el) linesRef.current[1] = el }} x1="1348.5" y1="963" x2="1348.5" y2="789" stroke="white" />
            <line ref={el => { if (el) linesRef.current[2] = el }} x1="1548" y1="747.5" x2="1662" y2="747.5" stroke="white" />
            <line ref={el => { if (el) linesRef.current[3] = el }} x1="1661.5" y1="876" x2="1661.5" y2="747" stroke="white" />
            <line ref={el => { if (el) linesRef.current[4] = el }} x1="1662" y1="875.5" x2="1694" y2="875.5" stroke="white" />
            {/* Endpoint dots */}
            <circle cx="1549" cy="748" r="3" fill="white" />
            <circle cx="1696" cy="875" r="3" fill="white" />
            <circle cx="1348" cy="791" r="3" fill="white" />
            <circle cx="1425" cy="963" r="3" fill="white" />
          </svg>

          {/* vertical divider x=664.5 → 34.88% */}
          <div
            className="absolute top-0"
            style={{ left: '34.88%', width: '1px', height: '100%', background: '#ffffff' }}
          />

          {/* ── LEFT PANEL heading — letter split ── */}
          <div ref={madppHeadingRef} className="absolute" style={{ left: '8.35%', top: '7.59%', maxWidth: '18.74vw', fontFamily: "'D-DIN-Bold', sans-serif", fontSize: '3.67vw', lineHeight: 1.02, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.01em' }}>
            {['MOST', 'ADVANCED', 'DIGITAL', 'PRODUCT', 'PASSPORT'].map((word, wi) => (
              <div key={wi}><SplitLine text={word} /></div>
            ))}
          </div>

          <div key={numbersTriggered ? 'in2' : 'out2'} className="absolute" style={{ left: '8.23%', top: '47.62%', maxWidth: '18.74vw', fontFamily: "'D-DIN', sans-serif", fontSize: '1.26vw', lineHeight: 1.5, color: '#ffffff', animation: numbersTriggered ? 'madppWheelIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' : 'none', transform: numbersTriggered ? undefined : 'translateY(40px)', opacity: numbersTriggered ? undefined : 0 }}>
            Secure your present compliance and prepare you for future regulations on a unified platform across multiple regions
          </div>

          {/* ── DATA PANEL ── */}
          <div className="absolute" style={{ ...LABEL_STYLE, left: '37.45%', top: '6.79%' }}>SMART CONTRACTS DEPLOYED</div>
          <div className="absolute" style={{ left: '37.46%', top: '11.34%' }}><NumberWheel value="10+" triggered={numbersTriggered} /></div>
          <Capsule left="42.81%" top="12.656%" width="7.40%" text="100% on main net" />

          <div className="absolute" style={{ ...LABEL_STYLE, left: '37.76%', top: '19.94%' }}>THROUGHPUT</div>
          <div className="absolute" style={{ left: '37.04%', top: '23.36%' }}><NumberWheel value="10K TPS" triggered={numbersTriggered} /></div>
          <Capsule left="49.16%" top="24.676%" width="4.20%" text="+30%" />

          <div className="absolute" style={{ ...LABEL_STYLE, left: '37.76%', top: '33.10%' }}>TRANSACTION FINALITY TIME</div>
          <div className="absolute" style={{ left: '37.10%', top: '37.84%' }}><NumberWheel value="<3 S" triggered={numbersTriggered} /></div>
          <Capsule left="43.80%" top="39.156%" width="3.83%" text="2.8 S" />

          <div className="absolute" style={{ ...LABEL_STYLE, left: '37.44%', top: '46.92%' }}>DPP ISSUED</div>
          <div className="absolute" style={{ left: '37.10%', top: '50.43%' }}><NumberWheel value="20K" triggered={numbersTriggered} /></div>
          <Capsule left="43.80%" top="51.746%" width="3.46%" text="3, 5" />

          {/* Insight */}
          <div className="absolute" style={{ left: '37.44%', top: '81.69%', fontFamily: "'D-DIN', sans-serif", fontSize: '0.84vw', color: '#ffffff', whiteSpace: 'nowrap' }}>
            Insight
          </div>
          <div className="absolute" style={{ left: '37.40%', top: '86.09%', maxWidth: '14.33vw', fontFamily: "'D-DIN', sans-serif", fontSize: '0.84vw', lineHeight: 1.5, color: '#ffffff' }}>
            Leveraging asymmetric benefits for our partners via embedded emerging technologies PQS AI agent and post web UX
          </div>

          {/* ── CIRCLES PANEL ── */}
          <div className="absolute" style={{ left: '73.81%', top: '9.87%', transform: 'translateX(-50%)', textAlign: 'center', fontFamily: "'D-DINCondensed', sans-serif", fontSize: '1.05vw', lineHeight: 1.35, color: '#ffffff', whiteSpace: 'nowrap' }}>
            Post Quantum<br />Security
          </div>

          <div className="absolute" style={{ left: '73.81%', top: '24.44%', transform: 'translateX(-50%)', textAlign: 'center', fontFamily: "'D-DINCondensed', sans-serif", fontSize: '1.05vw', color: '#ffffff', whiteSpace: 'nowrap' }}>
            Agentic AI
          </div>

          <div className="absolute" style={{ left: '73.81%', top: '41.82%', transform: 'translateX(-50%)', textAlign: 'center', fontFamily: "'D-DINCondensed', sans-serif", fontSize: '1.05vw', color: '#ffffff', whiteSpace: 'nowrap' }}>
            Block chain
          </div>

          {/* 30% — blue circle */}
          <div ref={num30Ref} className="absolute" style={{ left: '70.79%', top: '61.23%', transform: 'translate(-50%, -50%)', fontFamily: "'Winter Sans Trial', sans-serif", fontSize: '2.52vw', fontWeight: 'normal', lineHeight: 1, color: '#ffffff', whiteSpace: 'nowrap' }}>
            0%
          </div>

          {/* 2.8% — red circle */}
          <div ref={num28Ref} className="absolute" style={{ left: '78.95%', top: '70.21%', transform: 'translate(-50%, -50%)', fontFamily: "'Winter Sans Trial', sans-serif", fontSize: '1.05vw', fontWeight: 'normal', lineHeight: 1, color: '#ffffff', whiteSpace: 'nowrap' }}>
            0.0%
          </div>

          <div className="absolute" style={{ left: '75.22%', top: '89.66%', width: '6.93%', fontFamily: "'D-DINCondensed', sans-serif", fontSize: '1.05vw', lineHeight: 1.3, color: '#ffffff' }}>
            Automation in<br />reverse logistics
          </div>

          <div className="absolute" style={{ left: '89.40%', top: '81.39%', width: '6.93%', fontFamily: "'D-DINCondensed', sans-serif", fontSize: '1.05vw', lineHeight: 1.3, color: '#ffffff' }}>
            Component<br />Circularity
          </div>
        </div>

        {/* ── RTWF LAYER ── */}
        <div style={rtwfStyle}>
          {/* Left panel grainy background */}
          <img
            src="/MADPP background.webp"
            alt=""
            draggable={false}
            style={{ position: 'absolute', left: 0, top: 0, width: '34.86%', height: '100%', objectFit: 'cover' }}
          />
          <img
            src="/rtwf-nobg.svg"
            alt=""
            className="w-full h-full block"
            style={{ objectFit: 'fill' }}
            draggable={false}
          />
          {/* Right panel values — GSAP counters */}
          <div className="absolute" style={{ left: '39.95%', top: '26.88%' }}>
            <span ref={rtwf5400Ref} style={{ fontFamily: "'Winter Sans Trial', sans-serif", fontSize: '3.73vw', fontWeight: 'normal', color: '#ffffff', lineHeight: 1 }}>0</span>
          </div>

          <div className="absolute" style={{ left: '39.05%', top: '42.48%', display: 'flex', flexDirection: 'column', gap: '0.4vw' }}>
            <span ref={rtwf28Ref} style={{ fontFamily: "'Winter Sans Trial', sans-serif", fontSize: '3.73vw', fontWeight: 'normal', color: '#ffffff', lineHeight: 1 }}>0.0 sec</span>
            <span style={{ fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif", fontSize: '1.05vw', fontWeight: 400, lineHeight: 1, color: '#ffffff', textTransform: 'uppercase' }}>per BPT</span>
          </div>

          <div className="absolute" style={{ left: '39.16%', top: '61.35%' }}>
            <span ref={rtwf02Ref} style={{ fontFamily: "'Winter Sans Trial', sans-serif", fontSize: '3.73vw', fontWeight: 'normal', color: '#ffffff', lineHeight: 1 }}>0.0%</span>
          </div>

          {/* Right panel labels — D-DINCondensed Regular 20px (1.05vw) */}
          {[
            { text: 'monthly battery passport', top: '22.65%' },
            { text: 'average mint time',        top: '38.34%' },
            { text: 'average error',            top: '57.03%' },
          ].map(({ text, top }) => (
            <div key={text} className="absolute" style={{
              left: '39.63%',
              top,
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '1.05vw',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              {text}
            </div>
          ))}

          {/* Description — Figma x=128 y=470.92 on 1905×1064 canvas */}
          <p key={rtwfTriggered ? 'in2' : 'out2'} className="absolute" style={{
            left: '6.72%',
            top: '44.26%',
            width: '21.52%',
            fontFamily: "'D-DIN', sans-serif",
            fontSize: '1.26vw',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#ffffff',
            margin: 0,
            animation: rtwfTriggered ? 'madppWheelIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' : 'none',
            transform: rtwfTriggered ? undefined : 'translateY(40px)',
            opacity: rtwfTriggered ? undefined : 0,
          }}>
            See the anatomy of your workflows: every step taken, skipped, repeated, or delayed, displayed with precision.
          </p>

          {/* Workflow labels — stagger in with GSAP */}
          {[
            { text: 'STEP 1 - DATA INGEST',      left: '72.94%', top: '8.12%',  color: '#ffffff' },
            { text: 'STEP 2 - PQ SIGN & ANCHOR', left: '72.94%', top: '51.85%', color: '#ffffff' },
            { text: 'DEVIATION',                  left: '55.12%', top: '27.92%', color: '#FF6663' },
            { text: 'DEVIATION',                  left: '93.07%', top: '26.78%', color: '#FF6663' },
            { text: 'LOOP',                       left: '93.07%', top: '73.78%', color: '#0A68FF' },
          ].map(({ text, left, top, color }, idx) => (
            <div key={idx} ref={el => { rtwfStepsRef.current[idx] = el }} className="absolute" style={{
              left, top,
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '0.945vw',
              fontWeight: 400,
              color,
              whiteSpace: 'nowrap',
              opacity: 0,
            }}>
              {text}
            </div>
          ))}

          {/* Real Time Work Flow heading — letter split */}
          <div ref={rtwfHeadingRef} className="absolute" style={{
            left: '6.68%', top: '23.47%',
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
            fontSize: '3.67vw', fontWeight: 700, lineHeight: 1,
            color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.01em',
          }}>
            <div><SplitLine text="REAL TIME" /></div>
            <div><SplitLine text="WORK FLOW" /></div>
          </div>
        </div>

        {/* ── DDAt LAYER ── */}
        <div style={ddatStyle}>
          {/* Left panel grainy background */}
          <img
            src="/MADPP background.webp"
            alt=""
            draggable={false}
            style={{ position: 'absolute', left: 0, top: 0, width: '34.86%', height: '100%', objectFit: 'cover' }}
          />
          <img
            src="/ddat-nobg.svg"
            alt=""
            className="w-full h-full block"
            style={{ objectFit: 'fill' }}
            draggable={false}
          />

          {/* ── Left panel heading — letter split ── */}
          <div ref={ddatHeadingRef} className="absolute" style={{
            left: '6.88%', top: '23.47%',
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
            fontSize: '3.67vw', fontWeight: 700, lineHeight: 1.02,
            color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.01em',
          }}>
            <div><SplitLine text="DATA DRIVEN" /></div>
            <div><SplitLine text="AUTOMATION" /></div>
          </div>

          {/* ── Left panel description ── */}
          <p key={ddatTriggered ? 'in2' : 'out2'} className="absolute" style={{
            left: '6.67%', top: '42.92%', width: '27%',
            fontFamily: "'D-DIN', sans-serif",
            fontSize: '1.26vw', fontWeight: 400, lineHeight: 1.5,
            color: '#ffffff', margin: 0,
            animation: ddatTriggered ? 'madppWheelIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' : 'none',
            transform: ddatTriggered ? undefined : 'translateY(40px)',
            opacity: ddatTriggered ? undefined : 0,
          }}>
            Prioritize the highest-impact reverse logistics workflows, eliminate manual custody handovers, and achieve EPR compliance with measurable, blockchain-verified ROI.
          </p>

          {/* ── Column headers — GSAP stagger ── */}
          {[
            { text: 'AUTOMATION IMPACT', left: '40.63%' },
            { text: 'RUNS',              left: '66.67%' },
            { text: 'AVG RUN',           left: '72.44%' },
            { text: 'AVG DEVIATION',     left: '79.11%' },
            { text: 'SAVINGS',           left: '87.24%' },
          ].map(({ text, left }, idx) => (
            <div key={text} ref={el => { ddatHeadersRef.current[idx] = el }} className="absolute" style={{
              left, top: '9.02%',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '0.63vw', fontWeight: 400, letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
              whiteSpace: 'nowrap', opacity: 0,
            }}>{text}</div>
          ))}

          {/* ── Table rows ── */}
          {[
            // labelBottom = (1064 - dashed_y + 8) / 1064 * 100  — anchors text bottom 8px above dashed line
            // dashed lines at y = 185.5, 295.5, 405.5, 515.5, 625.5, 735.5, 845.5
            {
              label: 'Custody Transfer-QR scan to on-chain',
              pillText: 'HIGH 94', pillColor: '#FF6663',
              runs: '465', avgRun: '4s 2ms', avgDev: '0s (0 fail)', savings: '96.0 h/mo',
              labelBottom: '83.32%', pillTop: '18.56%', dataTop: '20.77%',
            },
            {
              label: 'EPR compliance report generation',
              pillText: 'HIGH 88', pillColor: '#FF6663',
              runs: '18', avgRun: '38s avg', avgDev: '0s 0ms', savings: '87.1 h/mo',
              labelBottom: '72.98%', pillTop: '28.90%', dataTop: '31.11%',
            },
            {
              label: 'Smart contract deposit & payout (E-INR)',
              pillText: 'HIGH 82', pillColor: '#FF6663',
              runs: '620', avgRun: '4s 2ms', avgDev: '0m 0s', savings: '63.3 h/mo',
              labelBottom: '62.64%', pillTop: '39.24%', dataTop: '41.45%',
            },
            {
              label: 'Battery passport field population (IN-EU-BP-v1.8)',
              pillText: 'MED 71', pillColor: '#FFDF2D',
              runs: '155', avgRun: '6m 10s', avgDev: '1m 12s', savings: '48.5 h/mo',
              labelBottom: '52.30%', pillTop: '49.58%', dataTop: '51.79%',
            },
            {
              label: 'CO₂e footprint calculation (CFF/PEF)',
              pillText: 'MED 66', pillColor: '#FFDF2D',
              runs: '155', avgRun: '9m 40s', avgDev: '2m 18s', savings: '38.2 h/mo',
              labelBottom: '41.96%', pillTop: '59.92%', dataTop: '62.12%',
            },
            {
              label: 'Battery passport field population (IN-EU-BP-v1.8)',
              pillText: 'FULL 100', pillColor: '#1D9E75',
              runs: '1085', avgRun: '0m 4ms', avgDev: '0s (100%)', savings: '23.1 h/mo',
              labelBottom: '31.63%', pillTop: '70.26%', dataTop: '72.47%',
            },
            {
              label: 'Battery passport field population (IN-EU-BP-v1.8)',
              pillText: 'FULL 92', pillColor: '#1D9E75',
              runs: '1085', avgRun: '0m 4ms', avgDev: '0s (100%)', savings: '23.1 h/mo',
              labelBottom: '21.29%', pillTop: '80.59%', dataTop: '82.80%',
              faded: true,
            },
          ].map(({ label, pillText, pillColor, runs, avgRun, avgDev, savings, labelBottom, pillTop, dataTop, faded }, i) => (
            <div key={i} ref={el => { ddatRowsRef.current[i] = el }} style={{ opacity: faded ? 0.5 : 1 }}>
              <div className="absolute" style={{
                left: '40.63%', bottom: labelBottom,
                fontFamily: "'D-DIN', sans-serif",
                fontSize: '0.84vw', color: '#ffffff', whiteSpace: 'nowrap',
              }}>{label}</div>
              {/* Pill — scale-pop ref */}
              <div ref={el => { ddatPillsRef.current[i] = el }} className="absolute" style={{
                left: '42.36%', top: pillTop,
                fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
                fontSize: '0.63vw', fontWeight: 400, letterSpacing: '0.06em',
                color: pillColor, whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center',
                height: `${32/1064*100}%`, opacity: 0,
              }}>{pillText}</div>
              <div className="absolute" style={{ left: '66.67%', top: dataTop, fontFamily: "'D-DIN', sans-serif", fontSize: '0.84vw', color: '#ffffff', whiteSpace: 'nowrap' }}>{runs}</div>
              <div className="absolute" style={{ left: '72.44%', top: dataTop, fontFamily: "'D-DIN', sans-serif", fontSize: '0.84vw', color: '#ffffff', whiteSpace: 'nowrap' }}>{avgRun}</div>
              <div className="absolute" style={{ left: '79.11%', top: dataTop, fontFamily: "'D-DIN', sans-serif", fontSize: '0.84vw', color: '#ffffff', whiteSpace: 'nowrap' }}>{avgDev}</div>
              {/* Savings — count-up ref */}
              <span ref={el => { ddatSavingsRef.current[i] = el }} className="absolute" style={{ left: '87.24%', top: dataTop, fontFamily: "'D-DIN', sans-serif", fontSize: '0.84vw', color: '#1D9E75', whiteSpace: 'nowrap' }}>{savings}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
