import regulationSvg from '@/assets/regulation/new-regulation-section.svg'

export default function RegulationSection() {
  return (
    <section style={{ display: 'block', width: '100%', aspectRatio: '1906 / 1684', lineHeight: 0, overflow: 'hidden' }} aria-label="Regulation section">
      <img src={regulationSvg} alt="" aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
    </section>
  )
}
