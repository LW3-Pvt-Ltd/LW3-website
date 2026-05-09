import footerSvg from '@/assets/new-footer-section.svg'

export default function FooterSection() {
  return (
    <footer style={{ display: 'block', width: '100%', aspectRatio: '1905 / 320', lineHeight: 0, overflow: 'hidden' }} aria-label="Footer">
      <img src={footerSvg} alt="" aria-hidden="true" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
    </footer>
  )
}
