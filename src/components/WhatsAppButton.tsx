import { useState } from 'react'

const WHATSAPP_NUMBER = 'PLACEHOLDER'

const WHATSAPP_ICON = (color: string) => (
  <img
    src="/whatapp logo.svg"
    alt="WhatsApp"
    style={{ width: '20px', height: '20px', filter: color === '#000000' ? 'invert(1)' : 'none' }}
  />
)

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        padding: '18px',
        background: hovered ? '#ffffff' : '#000000',
        border: '1px solid #ffffff',
        borderRadius: '0',
        fontFamily: "'D-DIN', sans-serif",
        fontSize: '1rem',
        color: hovered ? '#000000' : '#ffffff',
        cursor: 'pointer',
        textDecoration: 'none',
        marginTop: '12px',
        transition: 'background 0.2s ease, color 0.2s ease',
        boxSizing: 'border-box',
      }}
    >
      {WHATSAPP_ICON(hovered ? '#000000' : '#ffffff')}
      Contact on WhatsApp
    </a>
  )
}
