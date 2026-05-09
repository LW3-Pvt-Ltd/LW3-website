import gapSvg from '@/assets/gap/new-gap-section.svg'

export default function GapSection() {
  return (
    <section style={{ display: 'block', width: '100%', aspectRatio: '1905 / 1233', lineHeight: 0, overflow: 'hidden' }} aria-label="The $2B gap in battery accountability">
      <img src={gapSvg} alt="" aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
    </section>
  )
}
