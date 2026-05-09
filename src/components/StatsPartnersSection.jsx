import statsSvg from '@/assets/stats/new-stats-section.svg'

export default function StatsPartnersSection() {
  return (
    <section style={{ display: 'block', width: '100%', aspectRatio: '1905 / 1367', lineHeight: 0, overflow: 'hidden' }} aria-label="Statistics and partners section">
      <img src={statsSvg} alt="" aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
    </section>
  )
}
