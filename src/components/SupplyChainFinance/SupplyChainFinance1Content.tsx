// Supply Chain Finance Article 1

import VectorFieldInline from '../VectorField/VectorFieldInline'

function KickerTag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: "'D-DIN', sans-serif",
      fontSize: 'clamp(10px, 1.15vw, 12px)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.25)',
      borderRadius: '2px',
      padding: '3px 10px',
      display: 'inline-block',
    }}>{children}</span>
  )
}

function KickerDot() {
  return <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', margin: '0 10px', verticalAlign: 'middle' }} />
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif",
      fontSize: 'clamp(18px, 2.67vw, 28px)',
      lineHeight: 1.25,
      color: '#fff',
      margin: '0',
      marginTop: 'clamp(28px, 3.5vw, 42px)',
      marginBottom: 'clamp(10px, 1.2vw, 16px)',
      letterSpacing: '-0.01em',
    }}>{children}</h2>
  )
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'D-DIN', sans-serif",
      fontSize: 'clamp(13px, 1.62vw, 17px)',
      lineHeight: 1.82,
      color: 'rgba(255,255,255,0.85)',
      margin: '0',
      marginTop: 'clamp(10px, 1.2vw, 16px)',
    }}>{children}</p>
  )
}

function Divider() {
  return <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', margin: 'clamp(20px, 2.5vw, 32px) 0' }} />
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      borderLeft: '3px solid #ffffff',
      paddingLeft: 'clamp(14px, 2vw, 22px)',
      margin: 'clamp(20px, 2.5vw, 32px) 0',
    }}>
      <p style={{
        fontFamily: "'D-DIN', sans-serif",
        fontSize: 'clamp(14px, 1.91vw, 20px)',
        lineHeight: 1.72,
        color: '#ffffff',
        margin: 0,
        fontStyle: 'italic',
      }}>{children}</p>
    </div>
  )
}

export default function SupplyChainFinance1Content() {
  return (
    <article style={{
      background: '#000',
      width: '100%',
      maxWidth: '1048px',
      margin: '0 auto',
      padding: '0',
      boxSizing: 'border-box',
      fontFamily: "'D-DIN', sans-serif",
      color: '#fff',
    }}>
      <header>
      {/* Kicker row */}
      <div style={{ paddingTop: 'clamp(20px, 3.27vw, 34px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '4px', rowGap: '8px' }}>
          <KickerTag>Supply Chain</KickerTag>
          <KickerDot />
          <KickerTag>Finance</KickerTag>
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
        }}>May 2026 · LW3 Insights</span>
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
        Supply Chain Finance: Unlocking Capital Against Verified Battery Passport Data
      </h1>

      {/* Hero image */}
      <div style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 32px)' }}>
        <img
          src="/Supply chain Logistics.webp"
          alt="Supply Chain Finance"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          draggable={false}
        />
      </div>

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
          Battery supply chains are capital-intensive and data-poor. LW3's Supply Chain Finance layer changes that equation - using verified Battery Passport data as the basis for dynamic financing, invoice discounting, and asset-backed lending across the full battery value chain.
        </p>
      </div>

      </header>

      {/* Byline */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(16px, 2vw, 24px)' }}>
        <div style={{
          width: 'clamp(36px, 4.74vw, 50px)',
          height: 'clamp(36px, 4.74vw, 50px)',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          fontFamily: "'D-DIN-Bold', sans-serif",
          fontSize: 'clamp(14px, 1.72vw, 18px)',
          color: '#fff',
        }}>LW3</div>
        <div>
          <div style={{ fontFamily: "'D-DIN-Bold', sans-serif", fontSize: 'clamp(12px, 1.53vw, 16px)', color: '#fff' }}>LW3 Research</div>
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 1.34vw, 14px)', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>7 min read</div>
        </div>
      </div>

      <Divider />

      <SectionHeading>The Capital Gap in Battery Supply Chains</SectionHeading>
      <BodyText>
        Battery manufacturing is one of the most capital-intensive industries in the world. Cell manufacturers, pack assemblers, and recyclers all operate on long working capital cycles - raw materials must be purchased months before finished products are sold, and payment terms across the supply chain can stretch to 90-120 days. For smaller suppliers and emerging market participants, this creates a chronic liquidity gap that limits growth and increases supply chain fragility.
      </BodyText>
      <BodyText>
        Traditional supply chain finance instruments exist to bridge this gap, but they rely on paper-based documentation, manual verification, and counterparty trust. In a battery supply chain spanning multiple continents and dozens of entities, those processes are slow, expensive, and error-prone.
      </BodyText>

      <Callout>
        "A Battery Passport with verified provenance, carbon data, and state-of-health is not just a compliance document - it is a financial asset. LW3 makes it function as one."
      </Callout>

      <SectionHeading>How Verified Data Enables New Financing Models</SectionHeading>
      <BodyText>
        LW3's Battery Passport creates a continuously updated, cryptographically verified record of each battery's provenance, composition, carbon footprint, and physical condition. This data can serve as the basis for financing instruments that were previously impractical:
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Dynamic invoice discounting:</strong> Suppliers can discount invoices at rates tied to the verified quality and compliance status of the underlying battery assets. A passport showing full EU Battery Regulation compliance commands a lower risk premium than one with outstanding data gaps.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Asset-backed lending:</strong> Lenders can extend credit against battery inventory with confidence, because the passport provides real-time state-of-health data that makes the collateral value calculable rather than estimated.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Reverse factoring:</strong> Large OEMs can extend their payment terms while giving suppliers early payment access, with the passport data providing the audit trail that financial institutions require for risk assessment.
      </BodyText>

      <Divider />

      <VectorFieldInline />
      <SectionHeading>Blockchain Settlement and Smart Contract Automation</SectionHeading>
      <BodyText>
        LW3's supply chain finance layer uses the same Cardano-based blockchain infrastructure as the rest of the Battery Passport stack. Smart contracts govern payment triggers - for example, releasing funds to a supplier when the Battery Passport records that a shipment has passed a compliance check, or automatically adjusting a credit line when a battery's state-of-health crosses a defined threshold.
      </BodyText>
      <BodyText>
        This automation removes the manual reconciliation step that typically adds days to traditional supply chain finance transactions. Settlement that previously took 3-5 business days can be completed in minutes, with the on-chain record providing an immutable audit trail for all parties.
      </BodyText>

      <Callout>
        "Smart contracts tied to Battery Passport data mean payment terms can be triggered by verified physical events - not by paperwork that takes days to process."
      </Callout>

      <SectionHeading>Emerging Market Access</SectionHeading>
      <BodyText>
        One of the most significant applications of LW3's supply chain finance layer is enabling battery supply chain participants in emerging markets - particularly India - to access global capital markets on competitive terms. Historically, suppliers in these markets face higher financing costs because their data is opaque to international lenders.
      </BodyText>
      <BodyText>
        A verified Battery Passport changes this. An Indian cell manufacturer whose passport shows full EU compliance, verified carbon data, and a clean provenance record is presenting the same quality of financial information as a European peer. The data levels the playing field, reducing the information asymmetry that drives emerging market risk premiums.
      </BodyText>

      <Divider />

      <SectionHeading>Integration with the Wider LW3 Ecosystem</SectionHeading>
      <BodyText>
        Supply chain finance does not operate in isolation within the LW3 stack. Carbon footprint data from the Near Zero Carbon Infrastructure layer feeds directly into green finance instruments - batteries that meet specific carbon intensity thresholds can qualify for green bonds or sustainability-linked loans with preferential rates. Agentic AI monitors the financial health indicators across the supply chain and flags early warning signals before they become defaults.
      </BodyText>
      <BodyText>
        The result is a financing ecosystem where the quality of the underlying physical asset - as recorded in the Battery Passport - directly and continuously influences the cost of capital available to every participant in the supply chain.
      </BodyText>

      <Divider />

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Supply Chain Finance', 'Working Capital', 'Battery Passport', 'Blockchain', 'Smart Contracts', 'Cardano', 'Emerging Markets'].map(tag => (
          <span key={tag} style={{
            fontFamily: "'D-DIN', sans-serif",
            fontSize: 'clamp(10px, 1.05vw, 11px)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '2px',
            padding: '4px 10px',
          }}>{tag}</span>
        ))}
      </div>
    </article>
  )
}
