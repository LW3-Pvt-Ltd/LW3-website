import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

// BQEGVIR section — SVG background + CSS text overlay
// Canvas: 1905 × 2969 | Frame "Main circle bodies" offset: x=-264, y=270
//
// "Built for The Quantum Era":          → left=8.35%,  top=1.52%,  maxW=46%  — D-DIN Bold 70px → 3.67vw
// "Globally validated, India-Rooted":   → left=53.51%, top=94.34%, maxW=41%  — D-DIN Bold 70px → 3.67vw
// "Phygital Identity (IOT)":  node 27:1657 canvas=(813,396) → left=42.68%, top=13.35%, maxW=5.47%  — D-DIN 19px → 1.00vw
// "Near Zero Carbon Infrastructure": node 27:1660 canvas=(962,396) → left=50.49%, top=13.35%, maxW=6.78%  — D-DIN 19px → 1.00vw
// "Agentic AI Intelligence":  node 27:1656 canvas=(431,563) → left=22.62%, top=18.97%, maxW=15.1% — D-DIN 19px → 1.00vw

const animLetters = (el: HTMLElement, enter: boolean) => {
  const spans = Array.from(el.querySelectorAll('span')) as HTMLElement[]
  if (enter) gsap.fromTo(spans, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.028, ease: 'power3.out' })
  else gsap.set(spans, { y: 30, opacity: 0 })
}

export default function BQEGVIRSection() {
  const navigate = useNavigate()
  const sectionRef  = useRef<HTMLElement>(null)
  const heading1Ref = useRef<HTMLDivElement>(null)
  const heading2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    gsap.set(el, { opacity: 0, y: 50 })
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        if (heading1Ref.current) animLetters(heading1Ref.current, true)
      } else {
        gsap.set(el, { opacity: 0, y: 50 })
        if (heading1Ref.current) animLetters(heading1Ref.current, false)
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Separate observer for the bottom heading (at 94.34% of tall section)
  useEffect(() => {
    const el = heading2Ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      animLetters(el, entry.isIntersecting)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const [rightHalfHovered, setRightHalfHovered] = useState(false)
  const [leftHalfHovered, setLeftHalfHovered] = useState(false)
  const [scHovered, setScHovered] = useState(false)
  const [agHovered, setAgHovered] = useState(false)
  const [pqHovered, setPqHovered] = useState(false)
  const [cfHovered, setCfHovered] = useState(false)
  const [cirpassHovered, setCirpassHovered] = useState(false)
  const [cardanoHovered, setCardanoHovered] = useState(false)
  const [gspHovered, setGspHovered] = useState(false)
  const [indiaEuHovered, setIndiaEuHovered] = useState(false)
  const [techBbqHovered, setTechBbqHovered] = useState(false)
  const [forbesHovered, setForbesHovered] = useState(false)
  return (
    <section ref={sectionRef} className="relative w-full" style={{ aspectRatio: '1905 / 2969', borderTop: '1px solid #ffffff', borderBottom: '1px solid #ffffff', background: '#000000' }}>
      <img
        src="/bqegvir-v14.svg"
        alt=""
        className="w-full h-auto block"
        draggable={false}
      />
      {/* Top grainy band — y=0 to y=209 on 2969 canvas = 7.04% */}
      <img
        src="/bqegvir-top-bg.webp"
        alt=""
        draggable={false}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '7.04%', objectFit: 'cover', zIndex: 1 }}
      />
      {/* Bottom grainy band — y=2760 to y=2969 on 2969 canvas = 7.04% */}
      <img
        src="/bottom BQE GVIR.webp"
        alt=""
        draggable={false}
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '7.04%', objectFit: 'cover', zIndex: 1 }}

      />

      {/* "Built for The Quantum Era" — letter split */}
      <div
        ref={heading1Ref}
        className="absolute"
        style={{ left: '8.35%', top: '1.52%', maxWidth: '46%', fontFamily: "'D-DIN-Bold', sans-serif", fontSize: '3.67vw', lineHeight: 1.05, color: '#ffffff', letterSpacing: '0.01em', zIndex: 3 }}
      >
        {'Built for The Quantum Era'.split('').map((ch, i) => <span key={i} style={{ display: 'inline-block', opacity: 0 }}>{ch === ' ' ? ' ' : ch}</span>)}
      </div>

      {/* "Globally validated, India-Rooted" — letter split, own observer */}
      <div
        ref={heading2Ref}
        className="absolute"
        style={{ left: '53.51%', top: '94.34%', maxWidth: '41%', fontFamily: "'D-DIN-Bold', sans-serif", fontSize: '3.67vw', lineHeight: 1.05, color: '#ffffff', letterSpacing: '0.01em', zIndex: 3 }}
      >
        {'Globally validated, India-Rooted'.split('').map((ch, i) => <span key={i} style={{ display: 'inline-block', opacity: 0 }}>{ch === ' ' ? '\u00A0' : ch}</span>)}
      </div>

      {/* "Phygital Identity (IOT)" — D-DIN Regular 19px — node 27:1657, left of top intersection */}
      <div
        className="absolute"
        style={{
          left: '42.68%',
          top: '13.35%',
          maxWidth: '5.47%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.00vw',
          lineHeight: 1.3,
          color: leftHalfHovered ? '#000000' : '#ffffff',
          textAlign: 'center',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Phygital Identity (IOT)
      </div>

      {/* "Near Zero Carbon Infrastructure" — D-DIN Regular 19px — node 27:1660, right of top intersection */}
      <div
        className="absolute"
        style={{
          left: '50.49%',
          top: '13.35%',
          maxWidth: '6.78%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.00vw',
          lineHeight: 1.3,
          color: rightHalfHovered ? '#000000' : '#ffffff',
          textAlign: 'center',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Near Zero Carbon Infrastructure
      </div>

      {/* "Post Quantum Secure Blockchain" — D-DIN Regular 41px — node 27:1649, inner left */}
      <div
        className="absolute"
        style={{
          left: '31.73%',
          top: '32.50%',
          maxWidth: '15.1%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '2.15vw',
          lineHeight: 1.3,
          color: pqHovered ? '#000000' : '#ffffff',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Post Quantum Secure Blockchain
      </div>

      {/* "Carbon Footprint Engine" — D-DIN Regular 41px — node 27:1654, inner right */}
      <div
        className="absolute"
        style={{
          left: '53.11%',
          top: '32.50%',
          maxWidth: '15.1%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '2.15vw',
          lineHeight: 1.3,
          color: cfHovered ? '#000000' : '#ffffff',
          textAlign: 'right',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Carbon Footprint Engine
      </div>

      {/* "CIRPASS EU Standardisation" — D-DIN Regular 25px — node 27:1658, left of middle intersection */}
      <div
        className="absolute"
        style={{
          left: '42.46%',
          top: '60.39%',
          maxWidth: '7.22%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.10vw',
          lineHeight: 1.3,
          color: cirpassHovered ? '#000000' : '#ffffff',
          textAlign: 'left',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        CIRPASS EU Standardisation
      </div>
      <div
        className="absolute"
        style={{
          left: '42.46%',
          top: '63.5%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '0.94vw',
          lineHeight: 1.3,
          color: cirpassHovered ? '#000000' : '#ffffff',
          textAlign: 'center',
          width: '7.22%',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Mar-2024
      </div>

      {/* "Top 3 Global — Cardano Venture Hub" — D-DIN Regular 21px — node 27:1659, right of middle intersection */}
      <div
        className="absolute"
        style={{
          left: '50.70%',
          top: '60.35%',
          maxWidth: '7.00%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.10vw',
          lineHeight: 1.3,
          color: cardanoHovered ? '#000000' : '#ffffff',
          textAlign: 'right',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Top 3 Global - Cardano Venture Hub
      </div>
      <div
        className="absolute"
        style={{
          left: '50.70%',
          top: '63.5%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '0.94vw',
          lineHeight: 1.3,
          color: cardanoHovered ? '#000000' : '#ffffff',
          textAlign: 'center',
          width: '7.00%',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Feb-2023
      </div>

      {/* "Global Startup Pitch Winner" — D-DIN Regular 34px — node 27:1651, far left bottom */}
      <div
        className="absolute"
        style={{
          left: '27.36%',
          top: '65.73%',
          maxWidth: '15.1%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.79vw',
          lineHeight: 1.3,
          color: gspHovered ? '#000000' : '#ffffff',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Global Startup<br />Pitch<br />Winner
      </div>

      {/* "Dec-2023" date below Global Startup Pitch Winner */}
      <div
        className="absolute"
        style={{
          left: '27.36%',
          top: '72%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '0.94vw',
          lineHeight: 1.3,
          color: gspHovered ? '#000000' : '#ffffff',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Dec-2023
      </div>

      {/* "India-EU EV Battery Technologies Winner" — D-DIN Regular 34px — node 27:1653, far right bottom */}
      <div
        className="absolute"
        style={{
          left: '58.00%',
          top: '65.73%',
          maxWidth: '15.1%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.79vw',
          lineHeight: 1.3,
          color: indiaEuHovered ? '#000000' : '#ffffff',
          textAlign: 'right',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        India-EU EV Battery Technologies Winner
      </div>

      {/* "Sep-2024" date below India-EU EV Battery Technologies Winner */}
      <div
        className="absolute"
        style={{
          right: '26.9%',
          top: '72%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '0.94vw',
          lineHeight: 1.3,
          color: indiaEuHovered ? '#000000' : '#ffffff',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Sep-2024
      </div>

      {/* "TechBBQ Copenhagen Top 10" — D-DIN Regular 41px — node 27:1650, inner left bottom */}
      <div
        className="absolute"
        style={{
          left: '34.87%',
          top: '76.49%',
          maxWidth: '15.1%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '2.15vw',
          lineHeight: 1.3,
          color: techBbqHovered ? '#000000' : '#ffffff',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        TechBBQ Copenhagen <span style={{ whiteSpace: 'nowrap' }}>Top 10</span>
      </div>

      {/* "Aug-2025" date below TechBBQ Copenhagen Top 10 */}
      <div
        className="absolute"
        style={{
          left: '34.87%',
          top: '83%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '0.94vw',
          lineHeight: 1.3,
          color: techBbqHovered ? '#000000' : '#ffffff',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Aug-2025
      </div>

      {/* "Forbes DGEMS S200 Cohort" — D-DIN Regular 41px — node 27:1652, inner right bottom */}
      <div
        className="absolute"
        style={{
          right: '36%',
          top: '76.49%',
          whiteSpace: 'nowrap',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '2.15vw',
          lineHeight: 1.3,
          color: forbesHovered ? '#000000' : '#ffffff',
          textAlign: 'right',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Forbes<br />DGEMS S200<br />Cohort
      </div>

      {/* "Nov-2025" date below Forbes DGEMS S200 Cohort */}
      <div
        className="absolute"
        style={{
          right: '36%',
          top: '83%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '0.94vw',
          lineHeight: 1.3,
          color: forbesHovered ? '#000000' : '#ffffff',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Nov-2025
      </div>

      {/* "Supply Chain Finance" — D-DIN Regular 34px — node 27:1655, far right */}
      <div
        className="absolute"
        style={{
          left: '61%',
          top: '19.25%',
          maxWidth: '15.1%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.79vw',
          lineHeight: 1.3,
          color: scHovered ? '#000000' : '#ffffff',
          textAlign: 'right',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Supply Chain Finance
      </div>

      {/* "Agentic AI Intelligence" — D-DIN Regular 19px — node 27:1656, far left */}
      <div
        className="absolute"
        style={{
          left: '22.62%',
          top: '18.97%',
          maxWidth: '15.1%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.79vw',
          lineHeight: 1.3,
          color: agHovered ? '#000000' : '#ffffff',
          pointerEvents: 'none',
          transition: 'color 0.25s ease',
          zIndex: 3,
        }}
      >
        Agentic AI Intelligence
      </div>

      {/* Combined crescent hover overlay — single SVG to avoid multiple compositing layers */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1905 2969"
        style={{ pointerEvents: 'none', zIndex: 2 }}
      >
        {/* Left crescent — Agentic AI Intelligence */}
        <path
          d="M 952 270.692 A 694.164 694.164 0 0 0 952 1659.02 L 954 1659.02 L 954 270.692 Z M 952 618.121 A 520.449 520.449 0 0 0 952 1659.019 L 954 1659.019 L 954 618.121 Z M 952 270.691 A 173.02 173.02 0 0 0 952 616.731 L 954 616.731 L 954 270.691 Z"
          fillRule="evenodd"
          fill={agHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setAgHovered(true)}
          onMouseLeave={() => setAgHovered(false)}
          onClick={() => navigate('/agentic-ai/1')}
        />
        {/* Right crescent — Supply Chain Finance */}
        <path
          d="M 952 270.692 A 694.164 694.164 0 0 1 952 1659.02 Z M 952 618.121 A 520.449 520.449 0 0 1 952 1659.019 Z M 952 270.691 A 173.02 173.02 0 0 1 952 616.731 Z"
          fillRule="evenodd"
          fill={scHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setScHovered(true)}
          onMouseLeave={() => setScHovered(false)}
          onClick={() => navigate('/supply-chain-finance/1')}
        />
        {/* Left half of small intersection circle — Phygital Identity (IOT) */}
        <path
          d="M 952 270.691 A 173.02 173.02 0 0 0 952 616.731 L 954 616.731 L 954 270.691 Z"
          fill={leftHalfHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setLeftHalfHovered(true)}
          onMouseLeave={() => setLeftHalfHovered(false)}
          onClick={() => navigate('/phygital-iot/1')}
        />
        <path d="M 952 270.691 A 173.02 173.02 0 0 0 952 616.731" fill="none" stroke="white" strokeWidth="1.38972" style={{ pointerEvents: 'none' }} />
        {/* Right half of small intersection circle — Near Zero Carbon Infrastructure */}
        <path
          d="M 952 270.691 A 173.02 173.02 0 0 1 952 616.731 Z"
          fill={rightHalfHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setRightHalfHovered(true)}
          onMouseLeave={() => setRightHalfHovered(false)}
          onClick={() => navigate('/near-zero-carbon/1')}
        />
        <path d="M 952 270.691 A 173.02 173.02 0 0 1 952 616.731" fill="none" stroke="white" strokeWidth="1.38972" style={{ pointerEvents: 'none' }} />
        {/* Left half of inner circle [1] — Post Quantum Secure Blockchain */}
        <path
          d="M 952 618.121 A 520.449 520.449 0 0 0 952 1659.019 L 954 1659.019 L 954 618.121 Z"
          fill={pqHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setPqHovered(true)}
          onMouseLeave={() => setPqHovered(false)}
          onClick={() => navigate('/post-quantum/1')}
        />
        {/* Right half of inner circle [1] — Carbon Footprint Engine */}
        <path
          d="M 952 618.121 A 520.449 520.449 0 0 1 952 1659.019 Z"
          fill={cfHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setCfHovered(true)}
          onMouseLeave={() => setCfHovered(false)}
          onClick={() => navigate('/carbon-footprint/1')}
        />
        {/* Left half of small middle circle [3] — CIRPASS EU Standardisation */}
        <path
          d="M 952 1660.41 A 173.02 173.02 0 0 0 952 2006.45 L 954 2006.45 L 954 1660.41 Z"
          fill={cirpassHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setCirpassHovered(true)}
          onMouseLeave={() => setCirpassHovered(false)}
        />
        {/* Right half of small middle circle [3] — Top 3 Global Cardano Venture Hub */}
        <path
          d="M 952 1660.41 A 173.02 173.02 0 0 1 952 2006.45 Z"
          fill={cardanoHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setCardanoHovered(true)}
          onMouseLeave={() => setCardanoHovered(false)}
        />
        {/* Left crescent of circle [2] minus circle [3] minus circle [4] — Global Startup Pitch Winner */}
        <path
          d="M 952 1660.411 A 520.449 520.449 0 0 0 952 2701.309 L 954 2701.309 L 954 1660.411 Z M 952 1660.41 A 173.02 173.02 0 0 0 952 2006.45 L 954 2006.45 L 954 1660.41 Z M 952 2007.835 A 346.735 346.735 0 0 0 952 2701.305 L 954 2701.305 L 954 2007.835 Z"
          fillRule="evenodd"
          fill={gspHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setGspHovered(true)}
          onMouseLeave={() => setGspHovered(false)}
        />
        {/* Right half of inner lower circle [4] — Forbes DGEMS S200 Cohort */}
        <path
          d="M 952 2007.835 A 346.735 346.735 0 0 1 952 2701.305 Z"
          fill={forbesHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setForbesHovered(true)}
          onMouseLeave={() => setForbesHovered(false)}
        />
        {/* Left half of inner lower circle [4] — TechBBQ Copenhagen Top 10 */}
        <path
          d="M 952 2007.835 A 346.735 346.735 0 0 0 952 2701.305 L 954 2701.305 L 954 2007.835 Z"
          fill={techBbqHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setTechBbqHovered(true)}
          onMouseLeave={() => setTechBbqHovered(false)}
        />
        {/* Right crescent of circle [2] minus circle [3] minus circle [4] — India-EU EV Battery Technologies Winner */}
        <path
          d="M 952 1660.411 A 520.449 520.449 0 0 1 952 2701.309 Z M 952 1660.41 A 173.02 173.02 0 0 1 952 2006.45 Z M 952 2007.835 A 346.735 346.735 0 0 1 952 2701.305 Z"
          fillRule="evenodd"
          fill={indiaEuHovered ? '#ffffff' : 'none'}
          stroke="none"
          style={{ pointerEvents: 'all', cursor: 'pointer', transition: 'fill 0.25s ease' }}
          onMouseEnter={() => setIndiaEuHovered(true)}
          onMouseLeave={() => setIndiaEuHovered(false)}
        />
      </svg>
    </section>
  )
}
