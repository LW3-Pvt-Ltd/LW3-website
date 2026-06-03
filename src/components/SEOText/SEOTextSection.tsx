// What is LW3 - Circulor-inspired about page design
// Large hero text, bold metrics strip, 3-column content, vertical logo accent

import { useNavigate } from 'react-router-dom'

const METRICS = [
  { value: '5',    label: 'Global Recognitions' },
  { value: '3',    label: 'Awards Won' },
  { value: '80%',  label: 'BPAN Alignment in Pilots' },
  { value: '2',    label: 'Continents Served (India & EU)' },
  { value: '2027', label: 'EU Battery Passport Mandatory Deadline' },
]

const TECH_ARTICLES = [
  { label: 'Post Quantum Secure Blockchain', path: '/post-quantum/1' },
  { label: 'Phygital Identity (IoT)',        path: '/phygital-iot/1' },
  { label: 'Carbon Footprint Engine',        path: '/carbon-footprint/1' },
  { label: 'Agentic AI Intelligence',        path: '/agentic-ai/1' },
  { label: 'Near Zero Carbon Infrastructure',path: '/near-zero-carbon/1' },
  { label: 'Supply Chain Finance',           path: '/supply-chain-finance/1' },
]

const REGULATIONS = [
  'EU Battery Regulation (2023/1542)',
  'ESPR - Ecodesign for Sustainable Products',
  'EUDR - EU Deforestation Regulation',
  'CIRPASS EU Standardisation',
  'India Battery Adhaar (BPAN)',
  'Battery Waste Management Rules',
  'EU Post-Quantum Cryptography Mandate',
  'NIS2 Directive',
]

const USE_CASES = [
  'EV Battery Traceability',
  'Digital Product Passport Compliance',
  'Carbon Footprint Declaration',
  'Second-Life Battery Assessment',
  'Supply Chain Finance & Working Capital',
  'Product Recall Management',
  'Battery Waste Management',
  'Circular Economy Reporting',
]

export default function SEOTextSection() {
  const navigate = useNavigate()

  return (
    <section style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>


      {/* ── Hero block ── */}
      <div style={{ padding: 'clamp(28px, 3.5vw, 48px) 8.14% clamp(20px, 2.5vw, 32px)' }}>
        <p style={{
          fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
          fontSize: 'clamp(11px, 0.84vw, 13px)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          margin: '0 0 clamp(12px, 1.5vw, 20px)',
        }}>
          About
        </p>
        <h2 style={{
          fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
          fontSize: 'clamp(32px, 4.2vw, 64px)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: '#fff',
          margin: '0 0 clamp(20px, 2.5vw, 36px)',
          maxWidth: '820px',
        }}>
          What is LW3?
        </h2>
        <p style={{
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(14px, 1.15vw, 17px)',
          lineHeight: 1.85,
          color: 'rgba(255,255,255,0.65)',
          margin: 0,
          maxWidth: '680px',
        }}>
          LW3 is India's full-stack Battery Passport platform - built for the EU Battery Regulation (2023/1542), ESPR, and EUDR compliance. We combine post-quantum secure blockchain, agentic AI intelligence, and phygital IoT identity to deliver a digital product passport that meets the strictest regulatory requirements for EV batteries, industrial batteries, and energy storage systems. Our platform enables complete product traceability, carbon footprint tracking, and supply chain transparency - from raw material extraction through to second-life and recycling.
        </p>
      </div>

      {/* ── Metrics strip ── */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        padding: 'clamp(28px, 3.5vw, 48px) 8.14%',
        gap: '0',
      }}>
        {METRICS.map(({ value, label }, i) => (
          <div key={label} style={{
            borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            paddingLeft: i > 0 ? 'clamp(20px, 2.5vw, 40px)' : '0',
          }}>
            <div style={{
              fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
              fontSize: 'clamp(28px, 3.67vw, 52px)',
              lineHeight: 1,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}>{value}</div>
            <div style={{
              fontFamily: "'D-DIN', sans-serif",
              fontSize: 'clamp(11px, 0.84vw, 13px)',
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>{label}</div>
          </div>
        ))}
      </div>

      {/* ── Three columns ── */}
      <div id="core-technology" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'clamp(24px, 3vw, 48px)',
        padding: 'clamp(40px, 5vw, 64px) 8.14% clamp(48px, 6vw, 80px)',
      }}>

        {/* Technology */}
        <div>
          <h3 style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
            fontSize: 'clamp(11px, 0.84vw, 13px)',
            color: 'rgba(255,255,255,0.4)',
            margin: '0 0 clamp(16px, 1.5vw, 24px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>Core Technology</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {TECH_ARTICLES.map(({ label, path }) => (
              <li key={label}>
                <button
                  onClick={() => navigate(path, { state: { from: 'what-is-lw3', scrollSection: 'core-technology' } })}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                    textAlign: 'left',
                    fontFamily: "'D-DIN', sans-serif",
                    fontSize: 'clamp(13px, 1.05vw, 15px)',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.5,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  → {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Regulatory alignment */}
        <div>
          <h3 style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
            fontSize: 'clamp(11px, 0.84vw, 13px)',
            color: 'rgba(255,255,255,0.4)',
            margin: '0 0 clamp(16px, 1.5vw, 24px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>Regulatory Alignment</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {REGULATIONS.map(item => (
              <li key={item} style={{
                fontFamily: "'D-DIN', sans-serif",
                fontSize: 'clamp(13px, 1.05vw, 15px)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.5,
              }}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Use cases */}
        <div>
          <h3 style={{
            fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
            fontSize: 'clamp(11px, 0.84vw, 13px)',
            color: 'rgba(255,255,255,0.4)',
            margin: '0 0 clamp(16px, 1.5vw, 24px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>Use Cases</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {USE_CASES.map(item => (
              <li key={item} style={{
                fontFamily: "'D-DIN', sans-serif",
                fontSize: 'clamp(13px, 1.05vw, 15px)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.5,
              }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── From Our Insights (existing 3 blogs) ── */}
      <div id="from-insights" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: 'clamp(40px, 5vw, 64px) 8.14% clamp(20px, 2.5vw, 32px)' }}>
        <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', color: 'rgba(255,255,255,0.4)', margin: '0 0 clamp(24px, 3vw, 40px)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>From Our Insights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 2.5vw, 36px)' }}>
          {[
            { id: '1', tag1: 'Regulatory Intelligence', tag2: 'Post-Quantum Security', title: 'Compliant by Design', desc: "How LW3's Battery Passport meets Europe's twin regulatory frontier - EU Battery Regulation and post-quantum cryptography mandates simultaneously." },
            { id: '2', tag1: 'Embedded Finance', tag2: 'Battery Passport', title: 'Programmable Money Meets the Battery Passport', desc: 'How eRupee and USDC unlock financial traceability and an end-of-life marketplace for batteries.' },
            { id: '3', tag1: 'Agentic AI', tag2: 'Battery Regulation', title: 'The Intelligent Passport', desc: 'How Agentic AI transforms EU Battery Compliance from record-keeping to real-time intelligence.' },
          ].map(({ id, tag1, tag2, title, desc }) => (
            <div key={id} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 'clamp(16px, 2vw, 24px)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(9px, 0.73vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '2px 8px' }}>{tag1}</span>
                <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(9px, 0.73vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '2px 8px' }}>{tag2}</span>
              </div>
              <div style={{ fontFamily: "'D-DINCondensed-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(14px, 1.26vw, 20px)', lineHeight: 1.2, color: '#fff' }}>{title}</div>
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0, flexGrow: 1 }}>{desc}</p>
              <button onClick={() => navigate(`/blog/${id}`, { state: { from: 'what-is-lw3', scrollSection: 'from-insights' } })} style={{ alignSelf: 'flex-start', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.6)', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 0.84vw, 12px)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.2s ease' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Image ── */}
      <div style={{
        margin: 'clamp(16px, 2vw, 28px) 8.14% clamp(32px, 4vw, 56px)',
        height: 'clamp(160px, 20vw, 320px)',
        overflow: 'hidden',
      }}>
        <img
          src="/what is lw3 image.webp"
          alt="What is LW3"
          draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* ── Industry Perspectives (5 new blogs) ── */}
      <div id="industry-perspectives" style={{ padding: '0 8.14% clamp(40px, 5vw, 64px)' }}>
        <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.84vw, 13px)', color: 'rgba(255,255,255,0.4)', margin: '0 0 clamp(24px, 3vw, 40px)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Industry Perspectives</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px, 2.5vw, 36px)' }}>
          {[
            { id: '4', tag1: 'Digital Product Passport', tag2: 'Green Hydrogen', title: "Green Hydrogen's Digital Product Passport", desc: 'How digital product passports are revolutionising the green hydrogen supply chain - enhancing transparency, traceability, and certification.' },
            { id: '5', tag1: 'Traceability', tag2: 'Global Regulations', title: 'Global Product Traceability Regulations', desc: 'Key insights on product traceability regulations across the EU, US, and Asia-Pacific and what they mean for global supply chain compliance.' },
            { id: '6', tag1: 'Food Safety', tag2: 'Traceability', title: 'Product Traceability for Food', desc: 'Tracking food products from origin to consumer - ensuring safety, building trust, and enabling rapid response when things go wrong.' },
            { id: '7', tag1: 'Product Safety', tag2: 'Digital Passports', title: 'How Traceability Enhances Product Safety', desc: 'Traceability is a fundamental pillar of modern business survival. Blockchain, IoT, and digital passports are reshaping safety standards.' },
            { id: '8', tag1: 'Battery Adhaar', tag2: 'India', title: 'Indian Battery Traceability: Battery Adhaar', desc: 'How Battery Adhaar and Indian regulations are building digital traceability infrastructure for battery manufacturers going global.' },
          ].map(({ id, tag1, tag2, title, desc }) => (
            <div key={id} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 'clamp(16px, 2vw, 24px)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(9px, 0.73vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '2px 8px' }}>{tag1}</span>
                <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(9px, 0.73vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#fff', padding: '2px 8px' }}>{tag2}</span>
              </div>
              <div style={{ fontFamily: "'D-DINCondensed-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(14px, 1.26vw, 20px)', lineHeight: 1.2, color: '#fff' }}>{title}</div>
              <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0, flexGrow: 1 }}>{desc}</p>
              <button
                onClick={() => navigate(`/blog/${id}`, { state: { from: 'what-is-lw3', scrollSection: 'industry-perspectives' } })}
                style={{ alignSelf: 'flex-start', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.6)', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 0.84vw, 12px)', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Awards / validation strip ── */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: 'clamp(24px, 3vw, 40px) 8.14%',
      }}>
        <p style={{
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(12px, 0.94vw, 14px)',
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.35)',
          margin: 0,
        }}>
          DPIIT Reg. No. 121125 · Incubated at T-Hub, Hyderabad · Top 3 Global - Cardano Venture Hub (Feb 2023) · Global Startup Pitch Winner (Dec 2023) · India-EU EV Battery Technologies Winner (Sep 2024) · TechBBQ Copenhagen Top 10 (Aug 2025) · Forbes DGEMS S200 Cohort (Nov 2025) · CIRPASS EU Standardisation Contributor
        </p>
      </div>

    </section>
  )
}
