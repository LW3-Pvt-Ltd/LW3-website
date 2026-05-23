// Our Partners section — black bg + CSS heading + infinite scroll carousel
// Canvas: 1905 × 541
// Card band: y=200.5 to y=397.5 → top=36.97% height=36.41%
// Strip SVG: full partner logo strip, viewBox="0 0 3789 198"

export default function PartnersSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: '1905 / 541', background: '#000000' }}
    >
      <style>{`
        @keyframes partnersScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .partners-track {
          display: flex;
          height: 100%;
          animation: partnersScroll 28s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Heading — D-DIN Bold 70px */}
      <div
        style={{
          position: 'absolute',
          left: '8.32%',
          top: '16.82%',
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: '3.67vw',
          lineHeight: 1.05,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.01em',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        Our Partners
      </div>

      {/* Carousel band — 3 copies for seamless infinite loop */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '36.97%',
          height: '36.41%',
          overflow: 'hidden',
        }}
      >
        <div className="partners-track">
          {[0, 1, 2].map(i => (
            <img
              key={i}
              src="/Carousel frame.svg"
              alt=""
              draggable={false}
              style={{ height: '100%', width: 'auto', flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
