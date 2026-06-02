// SEO text section — keyword-rich readable content for Google indexing
// Sits between BatteryStory and Footer. Black bg, white text, consistent with site design.

import { useNavigate } from 'react-router-dom'

export default function SEOTextSection() {
  const navigate = useNavigate()

  return (
    <section style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.1)', padding: 'clamp(48px, 6vw, 80px) 8.14%' }}>

      {/* Main intro */}
      <div style={{ maxWidth: '900px', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
        <h2 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(22px, 2.1vw, 28px)', color: '#fff', margin: '0 0 clamp(16px, 1.5vw, 24px)', letterSpacing: '-0.01em' }}>
          What is LW3?
        </h2>
        <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(14px, 1.15vw, 16px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
          LW3 (Logistics W3) is India's full-stack Battery Passport platform — built for the EU Battery Regulation (2023/1542), ESPR, and EUDR compliance. We combine post-quantum secure blockchain, agentic AI intelligence, and phygital IoT identity to deliver a digital product passport that meets the strictest regulatory requirements for EV batteries, industrial batteries, and energy storage systems. Our platform enables complete product traceability, carbon footprint tracking, and supply chain transparency — from raw material extraction through to second-life and recycling.
        </p>
      </div>

      {/* Three columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(24px, 3vw, 48px)', marginBottom: 'clamp(40px, 5vw, 64px)' }}>

        {/* Technology */}
        <div>
          <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.05vw, 15px)', color: '#fff', margin: '0 0 12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Core Technology
          </h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { label: 'Post Quantum Secure Blockchain', path: '/post-quantum/1' },
              { label: 'Phygital Identity (IoT)', path: '/phygital-iot/1' },
              { label: 'Carbon Footprint Engine', path: '/carbon-footprint/1' },
              { label: 'Agentic AI Intelligence', path: '/agentic-ai/1' },
              { label: 'Near Zero Carbon Infrastructure', path: '/near-zero-carbon/1' },
              { label: 'Supply Chain Finance', path: '/supply-chain-finance/1' },
            ].map(({ label, path }) => (
              <li key={label}>
                <button
                  onClick={() => navigate(path)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Regulatory alignment */}
        <div>
          <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.05vw, 15px)', color: '#fff', margin: '0 0 12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Regulatory Alignment
          </h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              'EU Battery Regulation (2023/1542)',
              'ESPR — Ecodesign for Sustainable Products',
              'EUDR — EU Deforestation Regulation',
              'CIRPASS EU Standardisation',
              'India Battery Adhaar (BPAN)',
              'Battery Waste Management Rules',
              'EU Post-Quantum Cryptography Mandate',
              'NIS2 Directive',
            ].map(item => (
              <li key={item} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Use cases */}
        <div>
          <h3 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.05vw, 15px)', color: '#fff', margin: '0 0 12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Use Cases
          </h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              'EV Battery Traceability',
              'Digital Product Passport Compliance',
              'Carbon Footprint Declaration',
              'Second-Life Battery Assessment',
              'Supply Chain Finance & Working Capital',
              'Product Recall Management',
              'Battery Waste Management',
              'Circular Economy Reporting',
            ].map(item => (
              <li key={item} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom description */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'clamp(24px, 3vw, 40px)', maxWidth: '900px' }}>
        <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 0.94vw, 14px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
          LW3 is DPIIT-registered and incubated at T-Hub, Hyderabad. Our Battery Passport platform is validated globally — recognised as a Top 3 finalist at the Cardano Venture Hub, winner of the Global Startup Pitch (Dec 2023), India-EU EV Battery Technologies winner (Sep 2024), TechBBQ Copenhagen Top 10 (Aug 2025), and Forbes DGEMS S200 Cohort (Nov 2025). We are an active contributor to the CIRPASS EU standardisation initiative and aligned with India's Battery Adhaar (BPAN) framework. LW3 serves battery manufacturers, EV OEMs, recyclers, and regulators across India and the European Union.
        </p>
      </div>

    </section>
  )
}
