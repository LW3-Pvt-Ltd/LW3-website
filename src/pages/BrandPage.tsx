import { useNavigate } from 'react-router-dom'
import { useLayoutEffect, useState, useEffect } from 'react'
import AltNavbar from '../components/AltNav/AltNavbar'
import FooterSection from '../components/Footer/FooterSection'
import MobileFooter from '../components/Mobile/MobileFooter'
import { setSeoMeta } from '../lib/seo'

const seo = {
  title: 'Brand Kit | LW3 - Logistics W3',
  description: 'Official LW3 brand assets - logos, colors, and typography guidelines.',
  canonicalUrl: 'https://www.lw3.world/brand',
  ogType: 'website',
  keywords: 'LW3 brand kit, LW3 logo download, Logistics W3 brand assets',
}

// ── Color swatch component ───────────────────────────────────────────────────
function ColorSwatch({ c, mobile }: { c: { name: string; hex: string; bg: string }; mobile?: boolean }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(c.hex).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div>
      <div style={{
        width: '100%',
        height: '100px',
        background: c.bg,
        borderRadius: '0',
        border: mobile
          ? '2px solid rgba(255,255,255,0.5)'
          : c.hex === '#FFFFFF' ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.04)',
        marginBottom: mobile ? '3px' : '12px',
      }} />
      <p style={{
        fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: '13px',
        color: '#ffffff',
        marginBottom: '3px',
      }}>{c.name}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
          fontSize: '12px',
          color: copied ? '#1D9E75' : 'rgba(255,255,255,0.35)',
          letterSpacing: '0.06em',
          margin: 0,
          transition: 'color 0.2s',
        }}>{copied ? 'Copied!' : c.hex}</p>
        <button
          onClick={handleCopy}
          title="Copy hex"
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
            color: copied ? '#1D9E75' : 'rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', transition: 'color 0.2s',
          }}
          onMouseEnter={e => { if (!copied) e.currentTarget.style.color = '#ffffff' }}
          onMouseLeave={e => { if (!copied) e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}
        >
          {copied ? (
            <svg width={mobile ? '26' : '13'} height={mobile ? '26' : '13'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : (
            <svg width={mobile ? '26' : '13'} height={mobile ? '26' : '13'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

// ── Colors ──────────────────────────────────────────────────────────────────
const BRAND_COLORS = [
  { name: 'Primary Black',  hex: '#000000', bg: '#000000' },
  { name: 'Primary White',  hex: '#FFFFFF', bg: '#FFFFFF' },
  { name: 'Surface Dark',   hex: '#0A0A08', bg: '#0A0A08' },
]

const STATUS_COLORS = [
  { name: 'Success',  hex: '#1D9E75', bg: '#1D9E75' },
  { name: 'High',     hex: '#FF6663', bg: '#FF6663' },
  { name: 'Medium',   hex: '#FFDF2D', bg: '#FFDF2D' },
]

// ── Logo variants ────────────────────────────────────────────────────────────
const LOGOS = [
  {
    label: 'Logo - White',
    desc: 'Use on dark backgrounds',
    file: '/Logo white final.svg',
    bg: '#000000',
    border: 'rgba(255,255,255,0.1)',
    download: 'LW3-Logo-White.svg',
    imgW: 220,
  },
  {
    label: 'Logo - Dark',
    desc: 'Use on light backgrounds',
    file: '/Logo dark final.svg',
    bg: '#F5F2EC',
    border: 'rgba(0,0,0,0.1)',
    download: 'LW3-Logo-Dark.svg',
    imgW: 220,
  },
  {
    label: 'Mark - White',
    desc: 'Symbol only, dark backgrounds',
    file: '/White Logo no text.svg',
    bg: '#000000',
    border: 'rgba(255,255,255,0.1)',
    download: 'LW3-Mark-White.svg',
    imgW: 220,
  },
  {
    label: 'Mark - Dark',
    desc: 'Symbol only, light backgrounds',
    file: '/Dark Logo no text.svg',
    bg: '#F5F2EC',
    border: 'rgba(0,0,0,0.1)',
    download: 'LW3-Mark-Dark.svg',
    imgW: 220,
  },
]

// ── Typography ───────────────────────────────────────────────────────────────
const FONTS = [
  {
    family: 'D-DIN',
    role: 'Primary Typeface',
    desc: 'Used across all UI, headings, body copy, and navigation.',
    weights: [
      { label: 'Regular', style: "'D-DIN', sans-serif", weight: 400 },
      { label: 'Bold',    style: "'D-DIN-Bold', 'D-DIN', sans-serif", weight: 700 },
      { label: 'Italic',  style: "'D-DIN', sans-serif", weight: 400, italic: true },
    ],
  },
  {
    family: 'D-DIN Condensed',
    role: 'Condensed Typeface',
    desc: 'Used for labels, captions, data panels, and tight layouts.',
    weights: [
      { label: 'Regular', style: "'D-DINCondensed', 'D-DIN', sans-serif", weight: 400 },
      { label: 'Bold',    style: "'D-DINCondensed-Bold', 'D-DINCondensed', sans-serif", weight: 700 },
    ],
  },
  {
    family: 'Winter Sans Trial',
    role: 'Display Typeface',
    desc: 'Used for large numerals, display headlines, and impact statements.',
    weights: [
      { label: 'ExtraLight', style: "'Winter Sans Trial', sans-serif", weight: 200 },
      { label: 'Regular',    style: "'Winter Sans Trial', sans-serif", weight: 400 },
      { label: 'ExtraBold',  style: "'Winter Sans Trial', sans-serif", weight: 800 },
    ],
  },
  {
    family: 'Cormorant Garamond',
    role: 'Accent Typeface',
    desc: 'Used sparingly for italic accent text and editorial moments.',
    weights: [
      { label: 'Italic', style: "'Cormorant Garamond', serif", weight: 400, italic: true },
    ],
  },
]

// ── Reusable styles ──────────────────────────────────────────────────────────
const label: React.CSSProperties = {
  fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '28px',
}

const sectionTitle: React.CSSProperties = {
  fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
  fontSize: 'clamp(22px, 1.8vw, 32px)',
  color: '#ffffff',
  marginBottom: '8px',
}

const divider: React.CSSProperties = {
  width: '100%',
  height: '1px',
  background: 'rgba(255,255,255,0.08)',
  margin: '80px 0',
}

export default function BrandPage() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    setSeoMeta(seo)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#000', paddingTop: 'max(4.83vw, 60px)' }}>
      <div className="hidden md:block">
        <AltNavbar visible={true} />
      </div>

      {/* Mobile top bar */}
      <div className="flex items-center md:hidden" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '60px', background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '0 20px', gap: '12px',
      }}>
        <button onClick={() => navigate('/')} style={{
          background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff',
          display: 'flex', alignItems: 'center', gap: '6px',
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
          fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
        <img src="/Latest updated logo.svg" alt="LW3" style={{ height: '24px', width: 'auto', marginLeft: 'auto' }} draggable={false} />
      </div>

      {/* Desktop back */}
      <div className="hidden md:block" style={{ padding: '1vw 8.14%' }}>
        <button onClick={() => navigate('/')} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4em',
          padding: '0.4vw 0.9vw',
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
          fontSize: 'clamp(10px, 0.84vw, 14px)',
          color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em',
          textTransform: 'uppercase', background: 'none',
          border: '1px solid rgba(255,255,255,0.25)',
          cursor: 'pointer', transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
        >
          ← Back
        </button>
      </div>

      {/* ── Page content ── */}
      <div style={{ padding: '60px 8.14% 120px' }}>

        {/* Hero */}
        <div style={{ marginBottom: '80px', maxWidth: '560px' }}>
          <p style={label}>Brand Kit</p>
          <h1 style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
            fontSize: 'clamp(32px, 3.5vw, 56px)',
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            LW3 Brand Assets
          </h1>
          <p style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: 'clamp(14px, 0.94vw, 16px)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7,
          }}>
            Official logos, colors, and typography for LW3. Please follow these guidelines when representing LW3 in any context.
          </p>
        </div>

        {/* ── LOGOS ── */}
        <div>
          <p style={label}>Logos</p>
          <h2 style={sectionTitle}>Logo Variants</h2>
          <p style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: 'clamp(13px, 0.84vw, 15px)',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '40px',
          }}>
            Always maintain clear space around the logo equal to the height of the "L" in LW3.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {LOGOS.map(logo => (
              <div key={logo.label} style={{
                border: `1px solid ${logo.border}`,
                borderRadius: '0',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.02)',
              }}>
                {/* Preview area */}
                <div style={{
                  background: logo.bg,
                  height: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '32px',
                }}>
                  <img
                    src={logo.file}
                    alt={logo.label}
                    draggable={false}
                    style={{ width: `${logo.imgW}px`, height: '54px', objectFit: 'contain' }}
                  />
                </div>

                {/* Meta + download */}
                <div style={{
                  padding: '20px 24px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <p style={{
                      fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
                      fontSize: '13px',
                      color: '#ffffff',
                      marginBottom: '3px',
                    }}>{logo.label}</p>
                    <p style={{
                      fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.35)',
                      letterSpacing: '0.04em',
                    }}>{logo.desc}</p>
                  </div>
                  <a
                    href={logo.file}
                    download={logo.download}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '0',
                      fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#fff'
                      ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.2)'
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                    SVG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={divider} />

        {/* ── COLORS ── */}
        <div>
          <p style={label}>Colors</p>
          <h2 style={sectionTitle}>Color Palette</h2>
          <p style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: 'clamp(13px, 0.84vw, 15px)',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '40px',
          }}>
            Primary Black and White are the foundation of all LW3 communications.
          </p>

          {/* Brand colors */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}>
            {BRAND_COLORS.map(c => (
              <ColorSwatch key={c.hex} c={c} mobile={isMobile} />
            ))}
          </div>

          {/* Status colors */}
          <p style={{
            fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '8px',
          }}>Status / Data Indicators</p>
          <p style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: 'clamp(13px, 0.84vw, 15px)',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '24px',
          }}>
            Used exclusively as status indicators in data dashboards. Not for general brand use.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '16px',
          }}>
            {STATUS_COLORS.map(c => (
              <ColorSwatch key={c.hex} c={c} mobile={isMobile} />
            ))}
          </div>
        </div>

        <div style={divider} />

        {/* ── TYPOGRAPHY ── */}
        <div>
          <p style={label}>Typography</p>
          <h2 style={sectionTitle}>Typefaces</h2>
          <p style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: 'clamp(13px, 0.84vw, 15px)',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '40px',
          }}>
            D-DIN is the primary typeface across all LW3 communications.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {FONTS.map(font => (
              <div key={font.family} style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '0',
                overflow: 'hidden',
              }}>
                {/* Specimen */}
                <div style={{
                  padding: '40px 40px 32px',
                  background: 'rgba(255,255,255,0.02)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  {font.weights.map(w => (
                    <p key={w.label} style={{
                      fontFamily: w.style,
                      fontWeight: w.weight,
                      fontStyle: w.italic ? 'italic' : 'normal',
                      fontSize: 'clamp(28px, 3vw, 48px)',
                      color: '#ffffff',
                      lineHeight: 1.15,
                      margin: 0,
                    }}>
                      Aa Bb Cc Dd Ee Ff 0 1 2 3
                    </p>
                  ))}
                </div>

                {/* Meta */}
                <div style={{
                  padding: '24px 40px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}>
                  <div>
                    <p style={{
                      fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
                      fontSize: '15px',
                      color: '#ffffff',
                      marginBottom: '4px',
                    }}>{font.family}</p>
                    <p style={{
                      fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.35)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}>{font.role}</p>
                    <p style={{
                      fontFamily: "'D-DIN', sans-serif",
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.45)',
                      maxWidth: '420px',
                      lineHeight: 1.6,
                    }}>{font.desc}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {font.weights.map(w => (
                      <span key={w.label} style={{
                        padding: '4px 12px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '0',
                        fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
                        fontSize: '11px',
                        letterSpacing: '0.06em',
                        color: 'rgba(255,255,255,0.5)',
                      }}>{w.label}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={divider} />

        {/* ── CONTACT ── */}
        <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
          <p style={{ ...label, textAlign: 'center' }}>Questions?</p>
          <h2 style={{ ...sectionTitle, textAlign: 'center', marginBottom: '12px' }}>Need something specific?</h2>
          <p style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: 'clamp(13px, 0.84vw, 15px)',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '28px',
          }}>
            Reach out for custom sizes, formats, or brand partnership enquiries.
          </p>
          <a
            href="mailto:abhijit.pegu@logisticsw3.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '0',
              fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
          >
            abhijit.pegu@logisticsw3.com
          </a>
        </div>

      </div>
      <div className="hidden md:block"><FooterSection /></div>
      <div className="md:hidden"><MobileFooter /></div>
    </div>
  )
}
