// Statistics section — SVG background + CSS text overlay
// Canvas: 1905 × 1080
//
// Grid lines (kept in SVG):
//   Horizontal: y=260.5, y=699.5, y=970.5
//   Vertical:   x=155.5, x=619.5, x=974.5
//
// Heading:  x=155, y=83.7  → left=8.16%, top=7.75%   — D-DIN Bold 70px → 3.67vw
// Numbers (D-DIN Bold 70px → 3.67vw):
//   155+  left=11.73%  top=30.90%
//   21T   left=42.81%  top=31.10%
//   90%   left=11.92%  top=75.27%
//   1K    left=44.28%  top=75.06%
// Labels (D-DIN Regular 13px → 0.68vw):
//   EV Battery Modules Tracked          left=11.76%  top=37.41%
//   Tonnes CO₂e Avoided (Documented)   left=35.46%  top=37.26%
//   Faster Payments in Pilots           left=11.96%  top=82.32%
//   Mainnet Blockchain Transactions     left=36.25%  top=82.04%

const NUM_STYLE: React.CSSProperties = {
  position: 'absolute',
  fontFamily: "'D-DIN-Bold', sans-serif",
  fontSize: '3.67vw',
  lineHeight: 1.05,
  color: '#ffffff',
  textTransform: 'uppercase',
  letterSpacing: '0.01em',
}

const LABEL_STYLE: React.CSSProperties = {
  position: 'absolute',
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '0.68vw',
  lineHeight: 1.4,
  color: '#ffffff',
}

export default function StatisticsSection() {
  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1080', background: '#000000', borderBottom: '1px solid #ffffff' }}>

      {/* Heading — D-DIN Bold 70px, two lines */}
      <div
        style={{
          ...NUM_STYLE,
          left: '8.16%',
          top: '7.75%',
          maxWidth: '30%',
        }}
      >
        THE<br />STATISTICS
      </div>

      {/* ── Data frame box — CSS grid lines replacing SVG <line> elements ── */}
      {/* Outer box: x=155.5–974.5 (left=8.16%, w=43.00%), y=260.5–970.5 (top=24.12%, h=65.74%) */}
      <div style={{
        position: 'absolute',
        left: '8.16%',
        top: '24.12%',
        width: '43.00%',
        height: '65.74%',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        pointerEvents: 'none',
      }}>
        {/* Middle vertical — x=619.5 → 56.65% across box */}
        <div style={{
          position: 'absolute',
          left: '56.65%',
          top: 0,
          width: '1px',
          height: '100%',
          background: '#ffffff',
        }} />
        {/* Middle horizontal — y=699.5 → 61.83% down box */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: '61.83%',
          width: '100%',
          height: '1px',
          background: '#ffffff',
        }} />
      </div>

      {/* ── Numbers ── */}
      <span style={{ ...NUM_STYLE, left: '11.73%', top: '30.90%' }}>155+</span>
      <span style={{ ...NUM_STYLE, left: '42.81%', top: '31.10%' }}>21T</span>
      <span style={{ ...NUM_STYLE, left: '11.92%', top: '75.27%' }}>90%</span>
      <span style={{ ...NUM_STYLE, left: '44.28%', top: '75.06%' }}>1K</span>

      {/* ── Labels — D-DIN Regular 13px ── */}
      <span style={{ ...LABEL_STYLE, left: '11.76%', top: '37.41%' }}>
        EV Battery Modules Tracked
      </span>
      <span style={{ ...LABEL_STYLE, right: '52.46%', top: '37.26%', whiteSpace: 'nowrap' }}>
        Tonnes CO<sub style={{ fontSize: '0.55vw' }}>2</sub>e Avoided (Documented)
      </span>
      <span style={{ ...LABEL_STYLE, left: '11.96%', top: '82.32%' }}>
        Faster Payments in Pilots
      </span>
      <span style={{ ...LABEL_STYLE, right: '52.35%', top: '82.04%', whiteSpace: 'nowrap' }}>
        Mainnet Blockchain Transactions
      </span>
    </section>
  )
}
