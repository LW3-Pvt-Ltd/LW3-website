// Carbon Footprint Engine Article 1

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

export default function CarbonFootprint1Content() {
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
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0' }}>
          <KickerTag>Carbon Footprint</KickerTag>
          <KickerDot />
          <KickerTag>Engine</KickerTag>
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
        Carbon Footprint Engine: Measuring Every Gram of CO2 Across the Battery Lifecycle
      </h1>

      {/* Hero image */}
      <div style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 32px)' }}>
        <img
          src="/Carbon footprint.webp"
          alt="Carbon Footprint Engine"
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
          The EU Battery Regulation demands a verifiable carbon footprint declaration for every battery. LW3's Carbon Footprint Engine automates that calculation - ingesting real data from across the supply chain, computing lifecycle emissions to ISO standards, and anchoring the result immutably in the Battery Passport.
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

      <SectionHeading>Why Carbon Calculation Is So Hard</SectionHeading>
      <BodyText>
        Calculating the carbon footprint of a battery is not a single measurement - it is the sum of hundreds of individual data points collected across multiple countries, companies, and processes. Mining emissions, refining energy consumption, cell manufacturing electricity, logistics transport modes, and end-of-life processing all contribute to the final figure. No single organisation has direct visibility into all of these.
      </BodyText>
      <BodyText>
        The result is that most carbon footprint declarations today are based on industry averages, proxy data, and estimates rather than actual measurements. Under the EU Battery Regulation, this is no longer acceptable. From 2025, declarations must be based on real activity data, and from 2027, they must be independently verified and linked to a digital Battery Passport.
      </BodyText>

      <Callout>
        "An estimated carbon footprint is an assumption. A measured, verified, on-chain carbon footprint is a fact - and regulators are starting to demand the difference."
      </Callout>

      <SectionHeading>How the Carbon Footprint Engine Works</SectionHeading>
      <BodyText>
        LW3's Carbon Footprint Engine is a calculation layer that sits at the centre of the Battery Passport data architecture. It ingests activity data from connected supply chain participants - energy meters at manufacturing facilities, logistics tracking systems, supplier emission declarations, and grid carbon intensity feeds - and converts that data into a standardised carbon intensity figure expressed in kg CO2-equivalent per kWh of battery capacity.
      </BodyText>
      <BodyText>
        The calculation follows the methodology defined in the EU Battery Regulation's delegated acts, aligned with EN ISO 14040/14044 lifecycle assessment standards. This means the output is not a proprietary metric but an internationally recognised figure that can be independently audited.
      </BodyText>

      <SectionHeading>Lifecycle Stages Covered</SectionHeading>
      <BodyText>
        <strong style={{ color: '#fff' }}>Raw material extraction:</strong> Emissions from lithium, cobalt, nickel, and manganese mining and initial processing, calculated using verified origin data from the Battery Passport provenance layer.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Cell manufacturing:</strong> Energy consumption at production facilities captured via IoT-connected meters, matched against real-time grid carbon intensity for the production location and time period.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Pack assembly and logistics:</strong> Transport emissions calculated from actual shipment records, mode of transport, and distance - not industry average freight factors.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Use phase:</strong> Charging energy consumption modelled against the battery's operational history and the carbon intensity of the grids where it has been charged.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>End of life:</strong> Recycling and recovery emissions estimated from the battery's chemistry and the verified recycling pathway recorded in the Battery Passport.
      </BodyText>

      <Divider />

      <SectionHeading>On-Chain Anchoring and Verification</SectionHeading>
      <BodyText>
        Every carbon footprint calculation produced by the engine is cryptographically signed and written to the Battery Passport on-chain. The signature covers both the result and the underlying input data references, creating an audit trail that shows exactly what data was used, when the calculation was performed, and by which version of the engine methodology.
      </BodyText>
      <BodyText>
        Third-party verifiers - auditors, regulators, or certification bodies - can inspect the on-chain record, retrieve the source data references, and independently reproduce the calculation. If any input data has been tampered with after the fact, the cryptographic signature breaks, making the manipulation immediately detectable.
      </BodyText>

      <Callout>
        "The carbon footprint calculation is only as trustworthy as the data behind it. On-chain anchoring of both the result and the inputs makes manipulation impossible to hide."
      </Callout>

      <SectionHeading>Dynamic Updates Across the Lifecycle</SectionHeading>
      <BodyText>
        Unlike a static carbon declaration made at the point of manufacture, LW3's Carbon Footprint Engine produces a living figure that updates as the battery moves through its lifecycle. When a battery is charged in a region with a higher renewable energy share, the use-phase carbon intensity improves. When it is routed to a certified recycler with a lower-emission process, the end-of-life figure updates accordingly.
      </BodyText>
      <BodyText>
        This dynamic approach means the Battery Passport always reflects the most accurate available picture of the battery's carbon performance - not a snapshot taken at one point in time that becomes increasingly inaccurate as the battery ages.
      </BodyText>

      <Divider />

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Carbon Footprint', 'LCA', 'EU Battery Regulation', 'ISO 14040', 'Blockchain', 'Verification', 'Net Zero'].map(tag => (
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
