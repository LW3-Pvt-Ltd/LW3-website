// Blog 1 - "Compliant by Design: How LW3's Battery Passport Meets Europe's Twin Regulatory Frontier"
// Pixel-perfect recreation from Figma node 1:720 (canvas: 1048px wide)
// All sizes expressed as fractions of 1048px → converted to % or em relative to container

import VectorFieldInline from '../VectorField/VectorFieldInline'

export default function Blog1Content() {
  // Scaling: Figma canvas = 1048px wide. We render inside a max-1048px container.
  // Font sizes are kept as px values intended for 1048px layout (they scale via the vw container).
  // We use a CSS-variable-based scaler so fonts scale with container width on smaller screens.
  return (
    <div
      style={{
        background: '#000',
        width: '100%',
        maxWidth: '1048px',
        margin: '0 auto',
        padding: '0',
        boxSizing: 'border-box',
        fontFamily: "'D-DIN', sans-serif",
        color: '#fff',
      }}
    >
      {/* Kicker row */}
      <div style={{ paddingTop: 'clamp(20px, 3.27vw, 34px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0' }}>
          <KickerTag>Regulatory Intelligence</KickerTag>
          <KickerDot />
          <KickerTag>Post-Quantum Security</KickerTag>
        </div>
        <span style={{
          display: 'block',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(12px, 1.58vw, 16.5px)',
          color: '#fff',
          letterSpacing: '0.04em',
          marginTop: 'clamp(10px, 1.2vw, 16px)',
          whiteSpace: 'nowrap',
        }}>April 2026 · LW3 Insights</span>
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: 'clamp(28px, 5.26vw, 55px)',
        lineHeight: 1.36,
        letterSpacing: '-0.012em',
        color: '#fff',
        margin: '0',
        marginTop: 'clamp(14px, 2vw, 22px)',
        width: '100%',
      }}>
        Compliant by Design: How LW3's Battery Passport Meets Europe's Twin Regulatory Frontier
      </h1>

      {/* Standfirst */}
      <div style={{
        borderBottom: '1px solid #fff',
        paddingBottom: 'clamp(14px, 2vw, 24px)',
        marginTop: 'clamp(14px, 2vw, 22px)',
      }}>
        <p style={{
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(14px, 2.1vw, 22px)',
          lineHeight: 1.86,
          color: '#fff',
          margin: 0,
        }}>
          The EU Battery Regulation and emerging post-quantum cryptography mandates are converging into a single compliance challenge. LW3's blockchain-based Battery Passport answers both - simultaneously.
        </p>
      </div>

      {/* Byline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(16px, 2vw, 24px)' }}>
        <div style={{
          width: 'clamp(36px, 4.74vw, 50px)',
          height: 'clamp(36px, 4.74vw, 50px)',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: "'D-DINCondensed', sans-serif", fontSize: 'clamp(11px, 1.71vw, 18px)', color: '#fff' }}>LW3</span>
        </div>
        <div>
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.84vw, 19px)', lineHeight: 1.75, color: '#fff' }}>LW3 Editorial</div>
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 1.71vw, 18px)', color: '#fff' }}>Regulatory &amp; Technology Insights</div>
        </div>
      </div>

      {/* Reading bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(14px, 2vw, 24px)', marginBottom: 'clamp(16px, 2vw, 24px)' }}>
        <span style={{ fontFamily: "'D-DINCondensed', sans-serif", fontSize: 'clamp(12px, 1.58vw, 16.5px)', color: '#fff', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>2 min read</span>
        <div style={{ flex: 1, height: '2px', background: '#fff', borderRadius: '2px' }} />
      </div>

      {/* Body text */}
      <div style={{ marginTop: 'clamp(16px, 2vw, 24px)' }}>

        {/* Section 1 */}
        <Heading2>The EU Battery Regulation: a compliance reckoning</Heading2>
        <BodyPara>
          Regulation (EU) 2023/1542 - the EU Battery Regulation - is not a distant policy concern. It is live, binding, and already reshaping supply chains across Europe. From February 2027, every industrial, EV, and LMT battery placed on the EU market must carry a Digital Battery Passport (DBP): a machine-readable, interoperable record of the battery's origin, chemistry, carbon footprint, recycled content, state of health, and end-of-life instructions.
        </BodyPara>

        {/* Stat cards */}
        <StatRow>
          <StatCard stat="2027" label="DBP mandatory for EV &amp; industrial batteries" />
          <StatCard stat="50+" label="Data attributes required per battery passport" />
          <StatCard stat="€7.7T" label="EU battery value chain by 2030" />
        </StatRow>

        <BodyPara>
          Non-compliance means exclusion from the European market - the world's most stringent and economically significant. For manufacturers, OEMs, and recyclers, the DBP is no longer optional. The question is how to implement one that is auditable, tamper-proof, and built to last.
        </BodyPara>

        {/* Section 2 */}
        <Heading2>The quantum threat hiding in your compliance roadmap</Heading2>
        <BodyPara>
          Here lies a risk most compliance teams have not yet priced in. Battery data vaulted today - provenance records, carbon certificates, health telemetry - must remain verifiable for 20 to 30 years. That is precisely the window in which quantum computers are projected to break the RSA and elliptic-curve cryptography underpinning today's digital infrastructure.
        </BodyPara>

        <PullQuote>
          "Data signed today under classical cryptography may be forged tomorrow under quantum attack. Regulators are moving fast to close that gap."
        </PullQuote>

        <BodyPara>
          The EU has moved accordingly. ENISA's post-quantum roadmap and the NIS2 Directive compel critical infrastructure operators - including energy and mobility - to migrate to NIST-standardised post-quantum cryptographic (PQC) algorithms: ML-KEM, ML-DSA, and SLH-DSA. Draft EU cyber-resilience requirements for connected products are already citing PQC readiness as a baseline. Organisations that deploy classical-crypto-only digital passports today are building a compliance liability into their core infrastructure.
        </BodyPara>

        {/* Highlight box */}
        <HighlightBox title="The converging regulatory stack">
          <BulletItem>EU Battery Regulation (2023/1542) - Digital Battery Passport mandatory from 2027</BulletItem>
          <BulletItem>NIS2 Directive - post-quantum migration obligations for critical sectors</BulletItem>
          <BulletItem>EU Cyber Resilience Act - PQC readiness as a product security baseline</BulletItem>
          <BulletItem>ENISA PQC Roadmap - NIST algorithm adoption timeline for EU entities</BulletItem>
          <BulletItem last>EU Critical Raw Materials Act - traceability and provenance audit requirements</BulletItem>
        </HighlightBox>

        {/* Section 3 */}
        <VectorFieldInline />
        <Heading2>LW3's Battery Passport: one solution, two regulatory fronts</Heading2>
        <BodyPara>
          LW3 has engineered its Battery Passport platform at the intersection of these dual mandates. Built on a permissioned blockchain substrate, every battery record is immutably logged, timestamped, and cryptographically signed using NIST-standardised post-quantum algorithms - not as a future upgrade, but as the default architecture today.
        </BodyPara>
        <BodyPara>
          This means clients meet the EU Battery Regulation's full DBP specification - carbon footprint, supply chain due diligence, state-of-health telemetry, recycled content - while simultaneously satisfying emerging PQC mandates. Data integrity is guaranteed not just for the next audit cycle, but for the full regulatory lifetime of the asset.
        </BodyPara>
        <BodyPara>
          For manufacturers operating across jurisdictions, LW3's interoperability layer maps to the EU's Open Data Spaces framework, ensuring battery records remain readable by authorised parties - recyclers, regulators, second-life operators - without centralised data risk. For procurement teams and ESG leads, the audit trail is machine-verifiable and litigation-grade from day one.
        </BodyPara>

        {/* Section 4 */}
        <Heading2 serif>Resilience is not reactive compliance</Heading2>
        <BodyPara>
          The organisations navigating today's regulatory environment most effectively are those that have stopped treating compliance as a cost centre and started treating it as architecture. LW3's Battery Passport is not a checkbox tool. It is infrastructure that turns regulatory obligation into competitive advantage - reducing audit friction, enabling circularity revenue streams from second-life battery data, and future-proofing digital asset integrity against the cryptographic threats already in motion.
        </BodyPara>
        <BodyPara>
          The EU's regulatory horizon is not approaching. It is here. The question for battery value chain participants is whether their digital infrastructure is built to meet it - today, and for the next three decades.
        </BodyPara>

      </div>

      {/* CTA section */}
      <CTASection
        headline="Built for what comes next."
        body="LW3's Post-Quantum Secure Battery Passport helps clients meet EU regulatory requirements while building cryptographic resilience into the core of their operations."
      />
    </div>
  )
}

/* ── Shared sub-components ── */

function KickerTag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-block',
      background: '#fff',
      color: '#000',
      fontFamily: "'D-DINCondensed', sans-serif",
      fontSize: 'clamp(10px, 1.32vw, 13.8px)',
      letterSpacing: '0.14em',
      padding: 'clamp(4px, 0.53vw, 5.5px) clamp(10px, 2vw, 22px)',
      whiteSpace: 'nowrap',
    }}>{children}</span>
  )
}

function KickerDot() {
  return (
    <span style={{
      display: 'inline-block',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      background: '#fff',
      margin: '0 12px',
      flexShrink: 0,
    }} />
  )
}

function Heading2({ children, serif }: { children: React.ReactNode; serif?: boolean }) {
  return (
    <div style={{ borderTop: '1px solid #fff', paddingTop: 'clamp(36px, 6.3vw, 66px)', marginTop: 'clamp(24px, 3vw, 40px)', marginBottom: 'clamp(10px, 1.5vw, 18px)' }}>
      <h2 style={{
        fontFamily: serif ? "'Cormorant Garamond', serif" : "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontStyle: serif ? 'normal' : 'normal',
        fontSize: 'clamp(18px, 2.9vw, 30px)',
        lineHeight: 1.75,
        color: '#fff',
        margin: 0,
        letterSpacing: serif ? '0' : '0',
      }}>{children}</h2>
    </div>
  )
}

function BodyPara({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'D-DIN', sans-serif",
      fontSize: 'clamp(14px, 2.1vw, 22px)',
      lineHeight: 1.86,
      color: '#fff',
      margin: '0 0 clamp(12px, 1.5vw, 22px) 0',
    }}>{children}</p>
  )
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff',
      padding: 'clamp(24px, 3.16vw, 33px) clamp(24px, 4.08vw, 43px)',
      margin: 'clamp(20px, 2.5vw, 32px) 0',
    }}>
      <p style={{
        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
        fontStyle: 'italic',
        fontSize: 'clamp(14px, 2.1vw, 22px)',
        lineHeight: 1.86,
        color: '#0f1117',
        margin: 0,
      }}>{children}</p>
    </div>
  )
}

function HighlightBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff',
      padding: 'clamp(24px, 3.82vw, 40px)',
      margin: 'clamp(20px, 2.5vw, 32px) 0',
    }}>
      <p style={{
        fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: 'clamp(14px, 2.1vw, 22px)',
        lineHeight: 1.75,
        color: '#000',
        letterSpacing: '0.02em',
        margin: '0 0 clamp(16px, 2vw, 24px) 0',
      }}>{title}</p>
      <div>{children}</div>
    </div>
  )
}

function BulletItem({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'clamp(12px, 1.5vw, 18px)',
      padding: 'clamp(8px, 1.05vw, 11px) 0',
      borderBottom: last ? 'none' : '1px solid #fff',
    }}>
      <span style={{
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#000',
        flexShrink: 0,
        marginTop: 'clamp(6px, 0.9vw, 10px)',
      }} />
      <p style={{
        fontFamily: "'D-DIN', sans-serif",
        fontSize: 'clamp(13px, 1.97vw, 20.7px)',
        lineHeight: 1.6,
        color: '#000',
        margin: 0,
      }}>{children}</p>
    </div>
  )
}

function StatRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(8px, 1.81vw, 19px)',
      margin: 'clamp(16px, 2vw, 24px) 0',
    }}>{children}</div>
  )
}

function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #d8d2c8',
      padding: 'clamp(12px, 2.1vw, 22px)',
    }}>
      <div style={{
        fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: 'clamp(22px, 3.68vw, 38.6px)',
        lineHeight: 1,
        color: '#1a3a5c',
        marginBottom: 'clamp(6px, 1vw, 12px)',
      }}>{stat}</div>
      <div style={{
        fontFamily: "'D-DINCondensed', sans-serif",
        fontSize: 'clamp(11px, 1.58vw, 16.5px)',
        lineHeight: 1.4,
        color: '#4a4e5a',
      }} dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  )
}

function CTASection({ headline, body }: { headline: string; body: string }) {
  return (
    <div style={{
      background: '#fff',
      padding: 'clamp(28px, 4.21vw, 44px) clamp(24px, 4vw, 40px)',
      margin: 'clamp(32px, 4vw, 56px) 0 0 0',
    }}>
      <p style={{
        fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 510,
        fontSize: 'clamp(18px, 2.63vw, 27.6px)',
        lineHeight: 1.75,
        color: '#000',
        textAlign: 'center',
        margin: '0 auto clamp(12px, 1.5vw, 16px) auto',
        maxWidth: '849px',
      }}>{headline}</p>
      <p style={{
        fontFamily: "'D-DIN', sans-serif",
        fontSize: 'clamp(14px, 2.1vw, 22px)',
        lineHeight: 1.5,
        color: 'rgba(0,0,0,0.85)',
        textAlign: 'center',
        margin: '0 auto clamp(24px, 3vw, 40px) auto',
        maxWidth: '849px',
      }}>{body}</p>
      <div style={{
        border: '1px solid #000',
        borderRadius: '3px',
        padding: 'clamp(8px, 1.05vw, 11px) clamp(20px, 3vw, 40px)',
        display: 'table',
        margin: '0 auto',
      }}>
        <span style={{
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(11px, 1.45vw, 15.2px)',
          color: '#000',
          letterSpacing: '0.16em',
          whiteSpace: 'nowrap',
        }}>LW3 - Layer 3 Technologies</span>
      </div>
    </div>
  )
}
