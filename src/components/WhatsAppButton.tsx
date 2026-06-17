import { useState } from 'react'

const WHATSAPP_NUMBER = 'PLACEHOLDER'

const WHATSAPP_ICON = (color: string) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      d="M8.5 9.5c0-.5.5-2 1.5-2 .4 0 .7.3.8.7l.7 2c.1.3 0 .6-.2.8l-.6.6c.5 1 1.2 1.8 2.2 2.2l.6-.6c.2-.2.5-.3.8-.2l2 .7c.4.1.7.4.7.8 0 1-1.5 1.5-2 1.5-2.5 0-6.5-4-6.5-6.5z"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
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
