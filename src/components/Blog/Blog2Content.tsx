// Blog 2 - "Programmable Money Meets the Battery Passport"
// Pixel-perfect recreation from Figma node 1:796 (canvas: 1048px wide)

import VectorFieldInline from '../VectorField/VectorFieldInline'

export default function Blog2Content() {
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
          <KickerTag>Embedded Finance</KickerTag>
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
        Programmable Money Meets the Battery Passport: How eRupee and USDC Unlock Financial Traceability and an EoL Marketplace
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
          A Battery Passport tells you where a battery came from. An embedded finance layer tells you where the money flowed. By integrating India's eRupee CBDC and the EU's regulated stablecoin rails into the LW3 platform, every battery becomes both a compliance record and a programmable financial asset.
        </p>
      </div>

      {/* Byline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(16px, 2vw, 24px)' }}>
        <div style={{
          width: 'clamp(36px, 4.74vw, 50px)',
          height: 'clamp(36px, 4.74vw, 50px)',
          borderRadius: '50%',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: "'D-DINCondensed', sans-serif", fontSize: 'clamp(11px, 1.71vw, 18px)', color: '#000' }}>LW3</span>
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

      {/* Body */}
      <div style={{ marginTop: 'clamp(16px, 2vw, 24px)' }}>

        <Heading2>The missing layer in battery compliance</Heading2>
        <BodyPara>
          Today's Digital Battery Passport solves for material truth - origin, chemistry, carbon footprint, state of health. What it does not yet solve for is financial truth: who paid whom, when, against which compliance condition, and with what audit trail. Yet every regulatory pillar in the EU Battery Regulation has a payment shadow behind it. Recycled-content sourcing, due diligence audits, second-life transactions, recycler obligations - each of these is a transaction waiting for a programmable settlement layer.
        </BodyPara>
        <BodyPara>
          Embedded finance closes that gap. By wiring sovereign and regulated digital currencies directly into the Battery Passport, LW3 turns compliance events into financial events - settled instantly, on-chain, and provably linked to the underlying battery record.
        </BodyPara>

        <Heading2>Two rails, two jurisdictions, one passport</Heading2>

        {/* Rail grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(8px, 1.81vw, 19px)',
          margin: 'clamp(16px, 2vw, 24px) 0',
        }}>
          <RailCard jurisdiction="India · Sovereign CBDC" name="eRupee (e₹)" subtitle="RBI-issued retail &amp; wholesale CBDC">
            Programmable central bank money, ideal for OEM-supplier settlement, recycler escrow, and customer-facing residual value payouts. Atomic settlement with full RBI auditability across the Indian battery value chain.
          </RailCard>
          <RailCard jurisdiction="EU · Regulated Stablecoin" name="USDC (MiCA-compliant)" subtitle="Fully reserved, EU-regulated digital dollar">
            Cross-border settlement currency for raw material imports, recycled-content procurement, second-life battery exports, and tokenised battery-asset financing - interoperable with the EU's Open Data Spaces framework.
          </RailCard>
        </div>

        <BodyPara>
          Both rails share the same critical property for compliance: every transfer is cryptographically signed, timestamped, and bound - via smart contract - to a specific Battery Passport record. The money does not move unless the data condition is met, and the data record does not update unless the money has cleared.
        </BodyPara>

        <PullQuote>
          "When the passport and the payment share a single source of truth, financial traceability becomes a feature of compliance - not a separate exercise."
        </PullQuote>

        <VectorFieldInline />
        <Heading2>Smart contract settlement across the supply chain</Heading2>
        <BodyPara>
          The supply chain is where embedded finance creates the most immediate operational lift. A cobalt shipment arrives with a verified due-diligence certificate; the Traceability Agent reconciles it against the passport; the smart contract releases payment in eRupee or USDC the same instant - no invoice cycle, no 60-day terms, no reconciliation overhead. A recycled-content threshold is met; the procurement contract auto-settles. A state-of-health milestone triggers a service-provider performance bonus; it is paid atomically against the telemetry update.
        </BodyPara>
        <BodyPara>
          For Tier-2 and Tier-3 suppliers - who today carry the heaviest working-capital burden - this transforms cash flow economics. Payment becomes a function of verified delivery, not negotiated terms.
        </BodyPara>

        {/* Stat cards */}
        <StatRow>
          <StatCard stat="T+0" label="Settlement against verified compliance events, not 30/60/90-day terms" />
          <StatCard stat="2 rails" label="eRupee for India, USDC for EU - single passport, programmable across both" />
          <StatCard stat="100%" label="Of payment events linked on-chain to underlying battery passport records" />
        </StatRow>

        <Heading2>The End-of-Life Battery Marketplace</Heading2>
        <BodyPara>
          The most strategically valuable application of embedded finance in the Battery Passport is the End-of-Life marketplace. Today, EV owners have no clear view of their battery's residual worth. Recyclers face oligopolistic supply uncertainty and high upfront capital risk. Insurers cannot underwrite future degradation. Second-life operators cannot price assets with confidence. The market is opaque on every side.
        </BodyPara>
        <BodyPara>
          The LW3 EoL Marketplace fixes this by tokenising each battery as a Real-World Asset against its passport record, then opening it to bidding in eRupee or USDC. Recyclers can pre-buy future supply at competitive forward prices. Customers receive a transparent, market-set residual value - paid out instantly when the battery reaches end-of-life. Insurers underwrite tokenised positions against verified state-of-health data. Third-party financiers inject liquidity by purchasing forward battery-recycling contracts.
        </BodyPara>

        <HighlightBox title="What embedded finance unlocks for the LW3 ecosystem">
          <BulletItem>Atomic supply chain settlement - payment releases against verified passport events, eliminating reconciliation friction</BulletItem>
          <BulletItem>Customer residual-value payouts in eRupee, giving Indian EV owners transparent end-of-life liquidity</BulletItem>
          <BulletItem>Cross-border procurement and second-life trade settled in USDC under MiCA-compliant rails</BulletItem>
          <BulletItem>Tokenised batteries as forward-tradable Real-World Assets - bid on, financed, and insured pre-EoL</BulletItem>
          <BulletItem>Smart contract incentives that pay customers and operators for verifiable battery health preservation</BulletItem>
          <BulletItem last>Full machine-verifiable audit trail linking every payment to a specific battery, regulator-grade by default</BulletItem>
        </HighlightBox>

        <Heading2>From compliance cost to circular capital</Heading2>
        <BodyPara>
          The strategic shift is profound. Without embedded finance, the Battery Passport is a regulatory obligation. With it, the passport becomes the connective tissue of a circular capital market - where battery health translates directly into financial value, where compliance events trigger liquidity, and where every stakeholder, from customer to recycler to insurer, transacts against a single shared record of truth.
        </BodyPara>
        <BodyPara>
          India's eRupee and EU-regulated USDC are not future infrastructure. They are live, regulated, and ready to be embedded today. LW3's Battery Passport is the layer that turns them from settlement instruments into compliance-grade circular finance.
        </BodyPara>

      </div>

      <CTASection
        headline="Where compliance becomes capital."
        body="LW3's Embedded Finance layer integrates eRupee and regulated stable coins directly into the Battery Passport - turning every battery into a programmable, financially traceable, market-tradable asset."
      />
    </div>
  )
}

/* ── Sub-components ── */

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

function Heading2({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderTop: '1px solid #fff', paddingTop: 'clamp(36px, 6.3vw, 66px)', marginTop: 'clamp(24px, 3vw, 40px)', marginBottom: 'clamp(10px, 1.5vw, 18px)' }}>
      <h2 style={{
        fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
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

function RailCard({ jurisdiction, name, subtitle, children }: { jurisdiction: string; name: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff',
      color: '#000',
      padding: 'clamp(16px, 3.02vw, 32px)',
      overflow: 'hidden',
    }}>
      <div style={{ fontFamily: "'D-DINCondensed', sans-serif", fontSize: 'clamp(10px, 1.32vw, 13.8px)', letterSpacing: '0.13em', marginBottom: 'clamp(6px, 1vw, 10px)' }}
        dangerouslySetInnerHTML={{ __html: jurisdiction }} />
      <div style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(16px, 2.37vw, 24.8px)', lineHeight: 1.3, marginBottom: 'clamp(6px, 1vw, 10px)' }}>{name}</div>
      <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 1.58vw, 16.5px)', letterSpacing: '0.02em', marginBottom: 'clamp(8px, 1.3vw, 14px)' }}
        dangerouslySetInnerHTML={{ __html: subtitle }} />
      <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 1.84vw, 19.3px)', lineHeight: 1.6, margin: 0 }}>{children}</p>
    </div>
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
        fontFamily: "'D-DIN-Italic', 'D-DIN', sans-serif",
        fontSize: 'clamp(14px, 2.1vw, 22px)',
        lineHeight: 1.86,
        color: '#0f1117',
        margin: 0,
        fontStyle: 'normal',
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
      borderBottom: last ? 'none' : '1px solid rgba(0,0,0,0.15)',
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
      padding: 'clamp(12px, 2.1vw, 22px)',
    }}>
      <div style={{
        fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: 'clamp(22px, 3.68vw, 38.6px)',
        lineHeight: 1,
        color: '#000',
        marginBottom: 'clamp(6px, 1vw, 12px)',
      }}>{stat}</div>
      <div style={{
        fontFamily: "'D-DIN', sans-serif",
        fontSize: 'clamp(11px, 1.58vw, 16.5px)',
        lineHeight: 1.4,
        color: '#000',
      }}>{label}</div>
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
