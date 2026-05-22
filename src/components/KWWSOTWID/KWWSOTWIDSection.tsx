// KWWSOTWID section — SVG background + CSS text overlay
// Canvas: 1905 × 1140
//
// Heading:     x=155, y=49, w=849  → left=8.14%,  top=4.30%, maxW=44.57%
// Description: x=1262, y=59, w=526 → left=66.25%, top=5.18%, maxW=27.61%
//
// Font sizes at 1905px canvas:
//   70px → 3.67vw  |  24px → 1.26vw

export default function KWWSOTWIDSection() {
  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1140', borderTop: '1px solid #ffffff' }}>
      <img
        src="/kwwsotwid-notxt.svg"
        alt=""
        className="w-full h-auto block"
        draggable={false}
      />

      {/* Heading — D-DIN Bold 70px */}
      <div
        className="absolute"
        style={{
          left: '8.14%',
          top: '4.30%',
          maxWidth: '44.57%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',
          lineHeight: 1.05,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
        }}
      >
        know when work stays on track &amp; when it drifts
      </div>

      {/* Description — D-DIN Regular 24px */}
      <p
        className="absolute"
        style={{
          left: '66.25%',
          top: '5.18%',
          maxWidth: '27.61%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          lineHeight: 1.5,
          color: '#ffffff',
          margin: 0,
        }}
      >
        Compare expected steps to actual execution across every workflow. Spot drift, flag inconsistencies, and stay ahead of compliance risks before they escalate
      </p>
    </section>
  )
}
