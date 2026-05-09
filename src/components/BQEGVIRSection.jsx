import bqeSvg from '@/assets/bqe/new-bqe-gvir-section.svg'

export default function BQEGVIRSection() {
  return (
    <section style={{ display: 'block', width: '100%', aspectRatio: '1905 / 2367', lineHeight: 0, overflow: 'hidden' }} aria-label="BQE GVIR section">
      <img src={bqeSvg} alt="" aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
    </section>
  )
}
