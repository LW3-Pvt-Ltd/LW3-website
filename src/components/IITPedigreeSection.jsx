import partnersSvg from '@/assets/our-partners.svg'

export default function IITPedigreeSection() {
  return (
    <section style={{ display: 'block', width: '100%', aspectRatio: '1905 / 1263', lineHeight: 0, overflow: 'hidden' }} aria-label="Our partners section">
      <img src={partnersSvg} alt="" aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
    </section>
  )
}
