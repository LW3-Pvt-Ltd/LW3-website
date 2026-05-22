// BPAP section — SVG background + CSS text/buttons/video overlay
// Canvas: 1905 × 1026   All positions as % of canvas dimensions
// Passport card placeholder: will be replaced with live card component

export default function BPAPSection() {
  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1026' }}>

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full block"
        style={{ objectFit: 'cover', zIndex: 0 }}
        autoPlay loop muted playsInline
      >
        <source src="/BPAP background.webm" type="video/webm" />
        <source src="/BPAP background.mp4" type="video/mp4" />
      </video>

      {/* Card SVG (background stripped) */}
      <img
        src="/bpap-card.svg"
        alt=""
        className="absolute inset-0 w-full h-full block"
        draggable={false}
      />

      {/* ── Left-side text + buttons (z-index: 1 ensures they sit above SVG) ── */}

      {/* "AGENTIC" — D-DIN Regular 40px */}
      <p
        className="absolute text-[#f5f2ec] whitespace-nowrap"
        style={{
          zIndex: 1,
          left: '8.82%',
          top: '8.48%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '2.1vw',          /* 40px at 1905px canvas */
          fontWeight: 'normal',
          lineHeight: 1.1,
          letterSpacing: '4px',
          margin: 0,
        }}
      >
        AGENTIC
      </p>

      {/* "BATTERY PASSPORT" — D-DIN Bold 70px, two lines */}
      <p
        className="absolute text-[#f5f2ec]"
        style={{
          zIndex: 1,
          left: '8.77%',
          top: '14.72%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',         /* 70px at 1905px canvas */
          fontWeight: 'normal',       /* weight is baked into D-DIN-Bold face */
          lineHeight: 1.1,
          letterSpacing: '7px',
          margin: 0,
        }}
      >
        BATTERY<br />PASSPORT
      </p>

      {/* ── Buttons ───────────────────────────────────────────────── */}

      {/* "Book a Demo" — outlined white button */}
      <a
        href="#"
        className="absolute flex items-center justify-center border-2 border-white text-white uppercase hover:bg-white hover:text-black transition-colors duration-200"
        style={{
          zIndex: 1,
          left: '8.19%',
          top: '85.87%',
          width: '10.92%',
          height: '5.56%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          fontWeight: 'normal',
          letterSpacing: '1.19px',
        }}
      >
        Book a Demo
      </a>

      {/* "See Patent Here" — solid white button */}
      <a
        href="#"
        className="absolute flex items-center justify-center bg-white text-black hover:bg-[#2a2a2a] hover:text-white transition-colors duration-200"
        style={{
          zIndex: 1,
          left: '20.14%',
          top: '85.80%',
          width: '10.15%',
          height: '5.69%',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: '1.26vw',
          fontWeight: 'normal',
          border: '0.581px solid white',
        }}
      >
        See Patent Here
      </a>

      {/* ── Passport card placeholder (swap with live component later) ── */}
      {/* Video placeholder: drop /public/bpap-video.mp4 and uncomment
      <video
        className="absolute object-cover"
        style={{ left: '52.28%', top: '8.48%', width: '36.55%', height: '83.04%' }}
        autoPlay loop muted playsInline
      >
        <source src="/bpap-video.mp4" type="video/mp4" />
      </video>
      */}

    </section>
  )
}
