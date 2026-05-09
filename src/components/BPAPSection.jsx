import bpapSvg from '@/assets/bpap/new-bpap-section.svg'

export default function BPAPSection() {
  return (
    <section style={{ display: 'block', width: '100%', aspectRatio: '1905 / 1474', lineHeight: 0, overflow: 'hidden' }} aria-label="BPAP section">
      <img src={bpapSvg} alt="" aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
    </section>
  )
}
