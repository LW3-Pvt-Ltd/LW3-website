// Blog 15 - "LW3 Successfully Validates its Solution in the BatteryPass-Ready Test Environment"
// Same structural pattern as Blog1Content.tsx (Figma-derived scaling, shared sub-components)

import VectorFieldInline from '../VectorField/VectorFieldInline'

export default function Blog9Content() {
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
          <KickerTag>Company News</KickerTag>
          <KickerDot />
          <KickerTag>Battery Passport</KickerTag>
        </div>
        <span style={{
          display: 'block',
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(12px, 1.58vw, 16.5px)',
          color: '#fff',
          letterSpacing: '0.04em',
          marginTop: 'clamp(10px, 1.2vw, 16px)',
          whiteSpace: 'nowrap',
        }}>16 July 2026 · LW3 News</span>
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
        LW3 Successfully Validates its Solution in the BatteryPass-Ready Test Environment
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
          With mandatory Battery Passports approaching in February 2027, LW3 has tested its solution in the BatteryPass-Ready Test Environment, demonstrating alignment with the technical and data requirements underpinning Europe's Battery Passports.
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
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 1.71vw, 18px)', color: '#fff' }}>Company &amp; Regulatory News</div>
        </div>
      </div>

      {/* Reading bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(14px, 2vw, 24px)', marginBottom: 'clamp(16px, 2vw, 24px)' }}>
        <span style={{ fontFamily: "'D-DINCondensed', sans-serif", fontSize: 'clamp(12px, 1.58vw, 16.5px)', color: '#fff', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>4 min read</span>
        <div style={{ flex: 1, height: '2px', background: '#fff', borderRadius: '2px' }} />
      </div>

      {/* Body text */}
      <div style={{ marginTop: 'clamp(16px, 2vw, 24px)' }}>

        <BodyPara>
          16 July, 2026 - With mandatory Battery Passports approaching in February 2027, preparations are rapidly moving past piloting, to implementation at production scale.
        </BodyPara>
        <BodyPara>
          One of the biggest questions organisations now face is no longer how to implement Digital Product Passports (DPPs), but whether their solution will integrate seamlessly with the DPP Registry to prove product conformity and ensure compliance.
        </BodyPara>
        <BodyPara>
          We're pleased to share that LW3 has successfully tested its Battery Passport solution in the BatteryPass-Ready Test Environment, using product data based on the DIN SPEC 99100 and BatteryPass Longlist Version 1.3. This demonstrates alignment with both the technical and data requirements underpinning Europe's Battery Passports and readiness to support manufacturers, OEMs and supply chain partners to reduce implementation risk as regulatory deadlines approach.
        </BodyPara>

        <Heading2>What the BatteryPass-Ready Test Environment validates</Heading2>
        <BodyPara>
          The BatteryPass-Ready Test Environment is more than a software sandbox. It provides OEMs and solution providers with the opportunity to validate their Battery Passport systems and data against the technical requirements under the EU's Battery and Ecodesign for Sustainable Products (ESPR) Regulations before the official DPP Registry becomes operational.
        </BodyPara>
        <BodyPara>
          The Test Environment validates against the defined test scenarios for three use cases - Place DPP on the Market, Read and Update - providing access to a mock-up EU Registry and Back-Up Provider. It also validates battery passport data against standardised JSON Schema files across five battery categories defined under the test framework.
        </BodyPara>

        <HighlightBox title="What the Test Environment actually checks">
          <BulletItem>Place DPP on the Market, Read, and Update - the three defined test-scenario use cases</BulletItem>
          <BulletItem>Access to a mock-up EU Registry and Back-Up Provider</BulletItem>
          <BulletItem>Battery passport data validated against standardised JSON Schema files</BulletItem>
          <BulletItem last>Coverage across five battery categories defined under the test framework</BulletItem>
        </HighlightBox>

        <BodyPara>
          Rather than simply checking whether a passport can be generated, the Test Environment verifies whether a DPP system can successfully register DPPs in the mock DPP Registry, exchange information and update data in the passport using the required standards and interfaces.
        </BodyPara>

        <Heading2>Getting ready for the official DPP Registry</Heading2>
        <BodyPara>
          The official DPP Registry is scheduled to launch on 19 July 2026, marking an important milestone for OEMs, solution providers and many other stakeholders across the DPP ecosystem.
        </BodyPara>

        <PullQuote>
          "By completing interoperability testing ahead of the Registry launch, LW3 has positioned itself to identify and resolve any technical deviations early, enabling rapid updates as the production environment becomes available."
        </PullQuote>

        <BodyPara>
          The successful completion of BatteryPass-Ready testing is important but it is only the beginning. As additional DPP Registry functionality is introduced over the coming months and technical specifications are finalised, testing will continue to play a critical role in ensuring Battery Passport solutions remain aligned with European requirements.
        </BodyPara>
        <BodyPara>
          This proactive approach reduces deployment risk for clients implementing Battery Passport over the coming months.
        </BodyPara>

        <VectorFieldInline />
        <Heading2 serif noTopBorder>Beyond Europe: preparing for a global digital passport landscape</Heading2>
        <BodyPara>
          Successfully integrating with the European Battery Passport system is key, but it is only one piece of a larger global puzzle.
        </BodyPara>
        <BodyPara>
          As global governments introduce DPP and traceability requirements, businesses are navigating an increasingly fragmented regulatory landscape. Alongside the EU Battery Regulation, initiatives such as India's Battery Pack Aadhaar, as well as emerging frameworks in the UK, Japan, China and the US, are evolving independently. This creates the risk of multiple compliance systems, duplicated reporting, higher implementation costs and greater complexity across global supply chains.
        </BodyPara>
        <BodyPara>
          LW3 addresses this challenge by providing a cross-border digital passport infrastructure designed to reduce regulatory friction across multiple jurisdictions.
        </BodyPara>
        <BodyPara>
          Through collaborations with BatteryPass-Ready and India's Battery360 Alliance, LW3 is helping advance interoperability between emerging DPP systems and infrastructure to reduce compliance costs and enable global manufacturers to scale efficiently.
        </BodyPara>
        <BodyPara>
          For manufacturers preparing for Battery Passport compliance, choosing a solution provider that has already demonstrated interoperability with emerging infrastructure can significantly reduce implementation risk and future-proof compliance investments.
        </BodyPara>

      </div>

      {/* CTA section */}
      <CTASection
        headline="Interoperability, proven ahead of the Registry."
        body="LW3's Battery Passport platform is validated in the BatteryPass-Ready Test Environment and built for a global, cross-border digital passport landscape."
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

function Heading2({ children, serif, noTopBorder }: { children: React.ReactNode; serif?: boolean; noTopBorder?: boolean }) {
  return (
    <div style={{ borderTop: noTopBorder ? 'none' : '1px solid #fff', paddingTop: 'clamp(36px, 6.3vw, 66px)', marginTop: 'clamp(24px, 3vw, 40px)', marginBottom: 'clamp(10px, 1.5vw, 18px)' }}>
      <h2 style={{
        fontFamily: serif ? "'Cormorant Garamond', serif" : "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: 'clamp(18px, 2.9vw, 30px)',
        lineHeight: 1.75,
        color: '#fff',
        margin: 0,
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
