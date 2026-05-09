import batterySvg from '@/assets/bpap1/new-battery-story-section.svg'

export default function BPAP1Section() {
  return (
    <section style={{ display: 'block', width: '100%', aspectRatio: '1905 / 1428', lineHeight: 0, overflow: 'hidden' }} aria-label="Battery story section">
      <img src={batterySvg} alt="" aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
    </section>
  )
}
