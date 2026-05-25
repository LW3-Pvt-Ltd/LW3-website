import { useState, useEffect, useRef } from 'react'

const LABEL: React.CSSProperties = {
  display: 'block',
  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
  fontSize: '0.72rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '8px',
}

const INPUT: React.CSSProperties = {
  width: '100%',
  background: '#0d0e1a',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '0',
  padding: '14px 16px',
  fontFamily: "'D-DIN', sans-serif",
  fontSize: '1rem',
  color: '#ffffff',
  outline: 'none',
  boxSizing: 'border-box',
}

const CHEVRON = (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1l5 5 5-5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
  </svg>
)

function CustomSelect({ options, value, onChange }: {
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const isPlaceholder = !value

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          ...INPUT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          color: isPlaceholder ? 'rgba(255,255,255,0.4)' : '#ffffff',
          padding: '14px 16px',
        }}
      >
        <span>{value || 'Select'}</span>
        <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>
          {CHEVRON}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          right: 0,
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.12)',
          zIndex: 100,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          {/* Placeholder row */}
          <div
            onClick={() => { onChange(''); setOpen(false) }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              fontFamily: "'D-DIN', sans-serif",
              fontSize: '1rem',
              color: 'rgba(0,0,0,0.45)',
              cursor: 'pointer',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <span style={{ width: '16px', color: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>
              {isPlaceholder ? '✓' : ''}
            </span>
            Select
          </div>

          {options.map(opt => (
            <div
              key={opt}
              onClick={() => { onChange(opt); setOpen(false) }}
              onMouseEnter={() => setHovered(opt)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                fontFamily: "'D-DIN', sans-serif",
                fontSize: '1rem',
                color: hovered === opt ? '#ffffff' : '#000000',
                background: hovered === opt ? '#2563eb' : value === opt ? 'rgba(37,99,235,0.15)' : 'transparent',
                cursor: 'pointer',
                transition: 'background 0.12s',
              }}
            >
              <span style={{ width: '16px', fontSize: '0.9rem' }}>
                {value === opt ? '✓' : ''}
              </span>
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function openBookDemo() {
  window.dispatchEvent(new CustomEvent('open-book-demo'))
}

const ROLE_OPTIONS = [
  'Battery Manufacturer',
  'EV OEM',
  'Recycler / Reverse Logistics',
  'Compliance Officer',
  'ESG / Sustainability',
  'Government / Policy',
  'Other',
]

const INTEREST_OPTIONS = [
  'Battery Passport',
  'Reverse Logistics',
  'Compliance Engine',
  'Carbon Reporting',
  'Full Platform',
]

export default function BookDemoModal() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-book-demo', handler)
    return () => window.removeEventListener('open-book-demo', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  if (!open) return null

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#13141f',
          borderRadius: '0',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <div style={{ padding: '32px 40px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: "'D-DINCondensed', sans-serif", fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              Request
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', fontSize: '1.4rem', cursor: 'pointer', lineHeight: 1, padding: 0 }}
            >
              ×
            </button>
          </div>
          <h2 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', margin: '12px 0 0' }}>
            Book a demo.
          </h2>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

        {/* Form */}
        <form onSubmit={e => e.preventDefault()} style={{ padding: '32px 40px 28px' }}>
          {/* Name + Company */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={LABEL}>Name</label>
              <input style={INPUT} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Company</label>
              <input style={INPUT} placeholder="Company name" value={company} onChange={e => setCompany(e.target.value)} />
            </div>
          </div>

          {/* Work Email + Role */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={LABEL}>Work Email</label>
              <input type="email" style={INPUT} placeholder="Work email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Role</label>
              <CustomSelect options={ROLE_OPTIONS} value={role} onChange={setRole} />
            </div>
          </div>

          {/* Primary Interest */}
          <div style={{ marginBottom: '20px' }}>
            <label style={LABEL}>Primary Interest</label>
            <CustomSelect options={INTEREST_OPTIONS} value={interest} onChange={setInterest} />
          </div>

          {/* Message */}
          <div style={{ marginBottom: '28px' }}>
            <label style={LABEL}>Message</label>
            <textarea
              rows={4}
              placeholder="Tell us where you are in your compliance journey..."
              style={{ ...INPUT, resize: 'vertical', fontFamily: "'D-DIN', sans-serif" }}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '18px',
              background: '#f0ede8',
              border: 'none',
              borderRadius: '0',
              fontFamily: "'D-DIN', sans-serif",
              fontSize: '1rem',
              color: '#0d0e1a',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            Send inquiry
          </button>

          <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, margin: 0 }}>
            You do not need perfect data to begin. The first step is understanding where structure and traceability will create the most value.
          </p>
        </form>
      </div>
    </div>
  )
}
