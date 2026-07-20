// Related links footer — shown at bottom of blog pages 1, 2, 3
// 3-column grid layout, dot separators, footer style

import { useNavigate } from 'react-router-dom'

const ALL_PAGES = [
  { label: 'Compliant by Design',                           path: '/blog/1/compliant-by-design' },
  { label: 'Programmable Money Meets the Battery Passport', path: '/blog/2/programmable-money-battery-passport' },
  { label: 'The Intelligent Passport',                      path: '/blog/3/intelligent-passport' },
  { label: 'Phygital Identity (IoT)',                       path: '/blog/4/phygital-iot-identity' },
  { label: 'Near Zero Carbon Structure',                    path: '/blog/5/near-zero-carbon-structure' },
  { label: 'Agentic AI Intelligence',                       path: '/blog/6/agentic-ai-intelligence' },
  { label: 'Supply Chain Finance',                          path: '/blog/7/supply-chain-finance' },
  { label: 'Post Quantum Secure Blockchain',                path: '/blog/8/post-quantum-secure-blockchain' },
  { label: 'Carbon Footprint Engine',                       path: '/blog/9/carbon-footprint-engine' },
  { label: "Green Hydrogen's Digital Product Passport",     path: '/blog/10/green-hydrogen-digital-product-passport' },
  { label: 'Global Product Traceability Regulations',       path: '/blog/11/global-product-traceability-regulations' },
  { label: 'Product Traceability for Food',                 path: '/blog/12/product-traceability-food' },
  { label: 'How Traceability Enhances Product Safety',      path: '/blog/13/traceability-product-safety' },
  { label: 'Battery Aadhaar: Indian Battery Traceability',  path: '/blog/14/battery-aadhaar-indian-traceability' },
  { label: 'LW3 Validates its Solution in BatteryPass-Ready', path: '/blog/15/batterypass-ready-test-environment' },
]

export default function RelatedLinksFooter({ currentPath }: { currentPath: string }) {
  const navigate = useNavigate()
  const links = ALL_PAGES.filter(p => p.path !== currentPath)

  const handleClick = (path: string) => navigate(path, { state: { from: 'blog', returnTo: currentPath } })

  // Desktop: 3 columns | Mobile: 2 columns with horizontal dividers
  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: 'clamp(32px, 4vw, 56px)',
      paddingTop: 'clamp(24px, 3vw, 40px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)',
    }}>
      <p style={{
        fontFamily: "'D-DINCondensed', 'D-DIN', sans-serif",
        fontSize: 'clamp(10px, 0.84vw, 12px)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.25)',
        margin: '0 0 clamp(20px, 2.5vw, 32px)',
      }}>
        More from LW3
      </p>

      {/* Desktop: 3 columns */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '0 clamp(24px, 3vw, 48px)' }}>
        {[
          links.slice(0, Math.ceil(links.length / 3)),
          links.slice(Math.ceil(links.length / 3), Math.ceil(links.length / 3) * 2),
          links.slice(Math.ceil(links.length / 3) * 2),
        ].map((col, ci) => (
          <div key={ci} style={{ display: 'flex', flexDirection: 'column' }}>
            {col.map(link => (
              <button
                key={link.path}
                onClick={() => handleClick(link.path)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 0.94vw, 13px)', color: 'rgba(255,255,255,0.45)', textAlign: 'left', lineHeight: 1.7, display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s ease', width: '100%' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', flexShrink: 0, display: 'inline-block' }} />
                {link.label}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile: 2 columns with horizontal dividers */}
      <div className="md:hidden grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
        {links.map((link, i) => (
          <button
            key={link.path}
            onClick={() => handleClick(link.path)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '12px 0',
              borderTop: i >= 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              fontFamily: "'D-DIN', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.45)',
              textAlign: 'left',
              lineHeight: 1.5,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px',
            }}
          >
            <span>{link.label}</span>
            <span style={{ opacity: 0.35, flexShrink: 0, fontSize: '10px' }}>↗</span>
          </button>
        ))}
      </div>
    </div>
  )
}
