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

export function openContact() {
  window.dispatchEvent(new CustomEvent('open-contact'))
}

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xqeowwla', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, organisation, subject, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setOrganisation(''); setSubject(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-contact', handler)
    return () => window.removeEventListener('open-contact', handler)
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
              Contact
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', fontSize: '1.4rem', cursor: 'pointer', lineHeight: 1, padding: 0 }}
            >
              ×
            </button>
          </div>
          <h2 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', margin: '12px 0 0' }}>
            Get in touch.
          </h2>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} style={{ padding: '32px 40px 28px' }}>

          {/* Name + Organisation */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={LABEL}>Name</label>
              <input style={INPUT} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Organisation</label>
              <input style={INPUT} placeholder="Company or institution" value={organisation} onChange={e => setOrganisation(e.target.value)} />
            </div>
          </div>

          {/* Email + Subject */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={LABEL}>Email</label>
              <input type="email" style={INPUT} placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label style={LABEL}>Subject</label>
              <input style={INPUT} placeholder="How can we help?" value={subject} onChange={e => setSubject(e.target.value)} />
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: '28px' }}>
            <label style={LABEL}>Message</label>
            <textarea
              rows={5}
              placeholder="Tell us what you're working on..."
              style={{ ...INPUT, resize: 'vertical', fontFamily: "'D-DIN', sans-serif" }}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          {/* Submit */}
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '20px 0', marginBottom: '20px' }}>
              <p style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: '1.1rem', color: '#1D9E75', marginBottom: '8px' }}>Message sent.</p>
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>We'll get back to you within one business day.</p>
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '18px',
                background: '#f0ede8',
                border: 'none',
                borderRadius: '0',
                fontFamily: "'D-DIN', sans-serif",
                fontSize: '1rem',
                color: '#0d0e1a',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: status === 'sending' ? 0.6 : 1,
                marginBottom: '20px',
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          )}

          {status === 'error' && (
            <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '0.8rem', color: '#FF6663', marginBottom: '12px' }}>
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, margin: 0 }}>
            We typically respond within one business day.
          </p>
        </form>
      </div>
    </div>
  )
}
