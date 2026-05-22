// RTWF section — SVG used as full-width image layer
// 1905 × 1064 canvas

export default function RTWFSection() {
  return (
    <section className="relative w-full" style={{ aspectRatio: '1905 / 1064' }}>
      <img
        src="/rtwf-section.svg"
        alt=""
        className="w-full h-auto block"
        draggable={false}
      />
    </section>
  )
}
