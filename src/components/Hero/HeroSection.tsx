/**
 * HeroSection — full-viewport hero with video background.
 *
 * All positions are derived from the Figma SVG (1905 × 1117 canvas):
 *   left margin : 152px → 7.98vw
 *   POST QUANTUM SECURED  : top 19.8vh  cap-h 33px  font ~2vw
 *   BATTERY PASSPORT      : top 24.9vh  cap-h 56px  font ~4.1vw  (single line)
 *   "for" + REGULATION    : top 32.2vh
 *   Description           : top 72.6vh  max-w 28.8vw
 *   BOOK A DEMO button    : top 81.5vh  208×57px → 10.9vw × 5.1vh
 *
 * Video: drop /public/hero-video.mp4 and uncomment the <video> block.
 */

const LEFT = '7.98vw'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '640px' }}
    >
      {/* ── Video background ──────────────────────────────────────────────
          Uncomment when hero-video.mp4 is available in /public:

          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay loop muted playsInline
            src="/hero-video.mp4"
          />
      ──────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-black" aria-hidden="true" />

      {/* ── Overlay gradient (keeps text legible over video) ─────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(105deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.12) 100%)',
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT  (lg+)
          All elements are absolutely positioned using vw/vh ratios derived
          directly from the Figma SVG bounding boxes.
          ══════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block">

        {/* ── POST QUANTUM SECURED ──────────────────────────────────────── */}
        {/* SVG: path [3]  x=153–568  y=221–254  w=415  h=33 */}
        <p
          aria-label="Post Quantum Secured"
          style={{
            position: 'absolute',
            left: LEFT,
            top: '19.8vh',
            fontFamily: 'D-DINCondensed, sans-serif',
            fontSize: 'clamp(14px, 2vw, 38px)',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '0.28em',
            color: 'rgba(255,255,255,0.65)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Post Quantum Secured
        </p>

        {/* ── BATTERY PASSPORT ──────────────────────────────────────────── */}
        {/* SVG: path [2]  x=151–945  y=278–334  w=794  h=56  (one line) */}
        <h1
          style={{
            position: 'absolute',
            left: LEFT,
            top: '24.9vh',
            fontFamily: 'D-DINCondensed-Bold, D-DINCondensed, sans-serif',
            fontSize: 'clamp(32px, 4.1vw, 82px)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.01em',
            color: 'rgba(255,255,255,1)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            margin: 0,
          }}
        >
          Battery Passport
        </h1>

        {/* ── for REGULATION (EU) 2023/1542 ────────────────────────────── */}
        {/* SVG: path [6] "for" x=148–180 y=360–384  h=24
                 path [4] "REG" x=193–472 y=360–380  h=20
            Both at the same baseline → inline flex          */}
        <p
          style={{
            position: 'absolute',
            left: LEFT,
            top: '32.2vh',
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.55em',
            lineHeight: 1,
            margin: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(12px, 1.5vw, 30px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.60)',
              letterSpacing: '0.01em',
            }}
          >
            for
          </span>
          <span
            style={{
              fontFamily: 'D-DIN, sans-serif',
              fontSize: 'clamp(10px, 1.47vw, 28px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.82)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              whiteSpace: 'nowrap',
            }}
          >
            Regulation (EU) 2023/1542
          </span>
        </p>

        {/* ── Description ───────────────────────────────────────────────── */}
        {/* SVG: path [5]  x=158–707  y=811–884  w=549  h=73  (~3 lines) */}
        <p
          style={{
            position: 'absolute',
            left: LEFT,
            top: '72.6vh',
            fontFamily: 'D-DIN, sans-serif',
            fontSize: 'clamp(11px, 0.88vw, 18px)',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.60)',
            maxWidth: 'clamp(260px, 28.8vw, 560px)',
            margin: 0,
          }}
        >
          End-to-end post-quantum secured Battery Passport infrastructure —
          built for the EU's upcoming regulation mandating full lifecycle
          traceability of electric vehicle batteries.
        </p>

        {/* ── BOOK A DEMO button ────────────────────────────────────────── */}
        {/* SVG rect: x=156  y=910  w=208  h=57  stroke=white
                text: x=183–335  y=929–946  (centered in rect)           */}
        <a
          href="#demo"
          style={{
            position: 'absolute',
            left: LEFT,
            top: '81.5vh',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'clamp(140px, 10.92vw, 218px)',
            height: 'clamp(40px, 5.1vh, 62px)',
            border: '1px solid rgba(255,255,255,1)',
            fontFamily: 'D-DIN, sans-serif',
            fontSize: 'clamp(9px, 1.24vw, 24px)',
            fontWeight: 400,
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,1)',
            textTransform: 'uppercase',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: 'background 0.28s ease, color 0.28s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.background = 'rgba(255,255,255,1)'
            el.style.color = 'rgba(0,0,0,1)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.background = 'transparent'
            el.style.color = 'rgba(255,255,255,1)'
          }}
        >
          Book a Demo
        </a>

      </div>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (<lg)
          Flow layout, full-width, stacked with padding-top for navbar.
          ══════════════════════════════════════════════════════════════════ */}
      <div
        className="lg:hidden flex flex-col justify-between h-full"
        style={{ padding: '0 6vw' }}
      >
        {/* Upper cluster */}
        <div style={{ paddingTop: 'calc(14.7vh + 32px)' }}>

          <p
            style={{
              fontFamily: 'D-DINCondensed, sans-serif',
              fontSize: 'clamp(11px, 3.2vw, 22px)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '0.28em',
              color: 'rgba(255,255,255,0.65)',
              textTransform: 'uppercase',
              marginBottom: '0.9em',
            }}
          >
            Post Quantum Secured
          </p>

          <h1
            style={{
              fontFamily: 'D-DINCondensed-Bold, D-DINCondensed, sans-serif',
              fontSize: 'clamp(32px, 9vw, 72px)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.01em',
              color: 'rgba(255,255,255,1)',
              textTransform: 'uppercase',
              margin: '0 0 0.45em',
            }}
          >
            Battery Passport
          </h1>

          <p
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.45em',
              flexWrap: 'wrap',
              lineHeight: 1,
              margin: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(13px, 3.5vw, 26px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.60)',
              }}
            >
              for
            </span>
            <span
              style={{
                fontFamily: 'D-DIN, sans-serif',
                fontSize: 'clamp(10px, 2.8vw, 20px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.82)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              Regulation (EU) 2023/1542
            </span>
          </p>
        </div>

        {/* Lower cluster */}
        <div style={{ paddingBottom: 'clamp(48px, 8vh, 80px)' }}>
          <p
            style={{
              fontFamily: 'D-DIN, sans-serif',
              fontSize: 'clamp(12px, 3.2vw, 16px)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.60)',
              maxWidth: '520px',
              marginBottom: '1.8em',
            }}
          >
            End-to-end post-quantum secured Battery Passport infrastructure —
            built for the EU's upcoming regulation mandating full lifecycle
            traceability of electric vehicle batteries.
          </p>

          <a
            href="#demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 28px',
              border: '1px solid rgba(255,255,255,1)',
              fontFamily: 'D-DIN, sans-serif',
              fontSize: 'clamp(10px, 2.8vw, 14px)',
              fontWeight: 400,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,1)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'background 0.28s ease, color 0.28s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(255,255,255,1)'
              el.style.color = 'rgba(0,0,0,1)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'transparent'
              el.style.color = 'rgba(255,255,255,1)'
            }}
          >
            Book a Demo
          </a>
        </div>
      </div>

      {/* ── Bottom gradient fade to black ─────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{
          height: '18vh',
          background: 'linear-gradient(to bottom, transparent, #000000)',
        }}
      />
    </section>
  )
}
