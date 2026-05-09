import navSvg from '@/assets/nav-new.svg'

export default function NavBar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        width: '100%',
        aspectRatio: '1905 / 77',
        lineHeight: 0,
        overflow: 'hidden',
      }}
      aria-label="Navigation"
    >
      <img
        src={navSvg}
        alt=""
        aria-hidden="true"
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }}
      />
    </nav>
  )
}
