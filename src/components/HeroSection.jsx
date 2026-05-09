import heroSvg from '@/assets/hero/hero-nav-section.svg'

export default function HeroSection() {
  return (
    <section
      style={{ display: 'block', width: '100%', aspectRatio: '1905 / 1037', lineHeight: 0, overflow: 'hidden' }}
      aria-label="Hero section"
    >
      <img
        src={heroSvg}
        alt=""
        aria-hidden="true"
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }}
      />
    </section>
  )
}
