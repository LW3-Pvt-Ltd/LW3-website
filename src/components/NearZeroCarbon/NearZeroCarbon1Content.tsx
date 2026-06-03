// Near Zero Carbon Infrastructure Article 1

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

export default function NearZeroCarbon1Content() {
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
          <KickerTag>Carbon Footprint</KickerTag>
          <KickerDot />
          <KickerTag>Sustainability</KickerTag>
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
        Near Zero Carbon Infrastructure: Building a Verifiable Green Supply Chain for Batteries
      </h1>

      {/* Hero image */}
      <div style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 32px)' }}>
        <img
          src="/Near zero carbon infrastructure.webp"
          alt="Near Zero Carbon Infrastructure"
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
          The battery industry's carbon footprint spans mines, factories, logistics networks, and recycling streams. LW3's Near Zero Carbon Infrastructure layer makes every gram of CO₂ measurable, attributable, and verifiable - directly inside the Battery Passport.
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

      <SectionHeading>The Carbon Problem in Battery Supply Chains</SectionHeading>
      <BodyText>
        A lithium-ion battery cell produced today carries an embedded carbon footprint that spans four continents. Lithium extraction in South America, cathode material processing in China, cell manufacturing in Europe or Asia, and final assembly in the destination market - each step generates emissions that are rarely measured consistently, let alone reported transparently.
      </BodyText>
      <BodyText>
        The EU Battery Regulation changes this fundamentally. From 2025, industrial and EV batteries must declare a carbon footprint per kWh of energy capacity, calculated across the full lifecycle. By 2027, that declaration must be verified and linked to a Battery Passport. Companies that cannot produce credible carbon data will face market access barriers across the EU.
      </BodyText>

      <Callout>
        "Carbon data in battery supply chains is currently fragmented, unverified, and inconsistent. LW3's infrastructure makes it continuous, machine-readable, and tamper-evident."
      </Callout>

      <SectionHeading>What Near Zero Carbon Infrastructure Means</SectionHeading>
      <BodyText>
        LW3's Near Zero Carbon Infrastructure is not a carbon offsetting scheme - it is a measurement and verification layer. The goal is to make the actual carbon intensity of every battery traceable from raw material to end-of-life, and to anchor those measurements immutably on-chain so they cannot be retroactively altered or greenwashed.
      </BodyText>
      <BodyText>
        "Near zero" refers to the target trajectory, not a current claim. The infrastructure is designed to give manufacturers, regulators, and buyers a real-time view of where a battery sits on its carbon reduction journey - and what steps remain to reach the EU's 2030 thresholds.
      </BodyText>

      <Divider />

      <SectionHeading>The Carbon Footprint Engine</SectionHeading>
      <BodyText>
        At the technical core of LW3's approach is the Carbon Footprint Engine - a calculation layer that ingests activity data from across the supply chain (energy consumption, transport distances, material quantities, process emissions) and converts them into standardised carbon intensity figures per kWh of battery capacity.
      </BodyText>
      <BodyText>
        The engine follows the methodology set out in the EU Battery Regulation's delegated acts, specifically the lifecycle assessment (LCA) approach aligned with EN ISO 14040/14044. This means the output is not a proprietary metric - it is a number that regulators, third-party auditors, and downstream customers can independently verify against the same standard.
      </BodyText>
      <BodyText>
        Critically, each carbon calculation is cryptographically signed and written to the Battery Passport on-chain. Any subsequent modification to the underlying activity data breaks the signature, making manipulation immediately detectable.
      </BodyText>

      <Callout>
        "A carbon footprint declaration that cannot be audited is a marketing claim. One that is on-chain and cryptographically signed is a verifiable fact."
      </Callout>

      <SectionHeading>Scope 1, 2, and 3 Coverage</SectionHeading>
      <BodyText>
        <strong style={{ color: '#fff' }}>Scope 1 (Direct emissions):</strong> Manufacturing process emissions captured via IoT-connected energy meters and process sensors at production facilities. Real-time data eliminates the estimation error common in annual reporting.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Scope 2 (Indirect energy emissions):</strong> Grid electricity consumption matched against real-time carbon intensity of the local grid. LW3 integrates with regional grid operators' emission factor data to provide hour-by-hour accuracy rather than annual averages.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Scope 3 (Value chain emissions):</strong> Supply chain emissions captured through supplier data feeds, logistics tracking, and material origin verification. The Battery Passport's supply chain provenance layer feeds directly into Scope 3 calculations.
      </BodyText>

      <Divider />

      <SectionHeading>CIRPASS Alignment and EU Standardisation</SectionHeading>
      <BodyText>
        LW3's carbon infrastructure is built in alignment with the CIRPASS (Common Framework for Circular Product Passport) EU standardisation initiative, in which LW3 participated as a recognised contributor in March 2024. CIRPASS defines the data schema, interoperability standards, and access control requirements for product passports across the EU - including batteries.
      </BodyText>
      <BodyText>
        This alignment means LW3's carbon data outputs are formatted to be directly ingested by EU regulatory systems, OEM sustainability reporting platforms, and third-party ESG data providers - without requiring custom integration work on the buyer's side.
      </BodyText>

      <SectionHeading>From Compliance to Competitive Advantage</SectionHeading>
      <BodyText>
        For manufacturers meeting the EU's carbon thresholds, the Battery Passport becomes a marketing asset - a verifiable proof point that their cells carry a lower carbon footprint than competitors who cannot produce equivalent documentation. In procurement decisions where carbon performance is a scored criterion, this translates directly into contract wins.
      </BodyText>
      <BodyText>
        For second-life operators and recyclers, verified carbon data enables more accurate Scope 3 reporting for their own sustainability disclosures - reducing audit costs and improving the quality of ESG data they provide to investors.
      </BodyText>

      <Divider />

      <SectionHeading>The Road to Near Zero</SectionHeading>
      <BodyText>
        LW3's infrastructure does not just measure current carbon intensity - it models the trajectory toward the EU's 2030 reduction targets and identifies the highest-impact interventions available to each manufacturer. By continuously tracking carbon data across the supply chain, the system can flag when a supplier's emissions intensity increases, when a logistics route becomes more carbon-intensive, or when a shift to renewable energy at a production facility creates a measurable passport improvement.
      </BodyText>
      <BodyText>
        The path to near zero carbon batteries runs through accurate, continuous, verifiable data. LW3's infrastructure provides that foundation - making the target achievable rather than aspirational.
      </BodyText>

      <Divider />

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Near Zero Carbon', 'Carbon Footprint', 'EU Battery Regulation', 'CIRPASS', 'Sustainability', 'LCA', 'Scope 3'].map(tag => (
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
