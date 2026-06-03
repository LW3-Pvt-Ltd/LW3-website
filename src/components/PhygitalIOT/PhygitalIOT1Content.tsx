// Phygital IOT Article 1 - "Phygital Identity: Bridging the Physical and Digital in Battery Lifecycle Management"

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

export default function PhygitalIOT1Content() {
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
          <KickerTag>Phygital Identity</KickerTag>
          <KickerDot />
          <KickerTag>IoT</KickerTag>
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
        Phygital Identity: Bridging the Physical and Digital in Battery Lifecycle Management
      </h1>

      {/* Hero image */}
      <div style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 32px)' }}>
        <img
          src="/Phygital Identity bcg.webp"
          alt="Phygital Identity IOT"
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
          Every battery cell has a physical identity - a chemistry, a manufacturing origin, a degradation curve. LW3's Phygital IOT layer anchors that identity on-chain, making it tamper-proof, machine-readable, and globally verifiable across the entire lifecycle.
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
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 1.34vw, 14px)', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>8 min read</div>
        </div>
      </div>

      <Divider />

      <SectionHeading>What Is Phygital Identity?</SectionHeading>
      <BodyText>
        The term "phygital" describes the convergence of physical objects and their digital counterparts. In the context of battery technology, it means every physical cell - manufactured in a factory, installed in a vehicle, decommissioned at end-of-life - carries a corresponding digital identity that travels with it, immutably, across every handoff in the supply chain.
      </BodyText>
      <BodyText>
        LW3 implements this through a combination of IoT sensor data, cryptographic hashing, and post-quantum secure blockchain anchoring. The result is a Battery Passport that is not merely a document, but a living, real-time record of a battery's physical state.
      </BodyText>

      <Callout>
        "A battery without a verifiable digital identity is a liability in the post-EU Battery Regulation world. Phygital IOT makes identity the foundation, not an afterthought."
      </Callout>

      <SectionHeading>The IoT Layer: Real-Time Physical Anchoring</SectionHeading>
      <BodyText>
        At the core of LW3's Phygital IOT architecture is a sensor network that captures state-of-health (SoH), state-of-charge (SoC), temperature profiles, cycle counts, and charge/discharge events directly from the battery management system (BMS). These readings are signed at the device level and written to the blockchain at defined intervals, creating an auditable trail that cannot be retroactively altered.
      </BodyText>
      <BodyText>
        Unlike traditional telematics solutions that store data in centralised databases, LW3's approach ensures that the physical measurements and their on-chain records are cryptographically bound. Any tampering with the physical sensor output or the on-chain record breaks the cryptographic proof - making fraud immediately detectable.
      </BodyText>

      <Divider />

      <SectionHeading>Why Post-Quantum Security Matters for IoT Identity</SectionHeading>
      <BodyText>
        Current IoT security relies heavily on elliptic-curve cryptography (ECC) for device authentication and data signing. With the emergence of quantum computing, ECC-based signatures face a harvest-now-decrypt-later threat: adversaries can collect signed IoT data today and break the signatures once sufficiently powerful quantum processors become available.
      </BodyText>
      <BodyText>
        LW3 embeds NIST-standardised post-quantum cryptographic algorithms (specifically lattice-based schemes from the CRYSTALS family) at the IoT signing layer. This means that even data captured today remains cryptographically valid and tamper-evident decades into the future - critical for batteries with 10-15 year operational lifespans.
      </BodyText>

      <SectionHeading>EU Battery Regulation Compliance Through Phygital IOT</SectionHeading>
      <BodyText>
        The EU Battery Regulation (2023/1542) mandates a Battery Passport for industrial and EV batteries from February 2027. The regulation requires real-time performance data, carbon footprint declarations, recycled content percentages, and supply chain due diligence - all machine-readable and accessible to regulators, recyclers, and second-life operators.
      </BodyText>
      <BodyText>
        LW3's Phygital IOT layer directly fulfils Articles 14 and 77 of the regulation by providing a continuously updated, independently verifiable record of each battery's physical state. The IoT-anchored data satisfies the "real-time performance" requirement, while the blockchain record satisfies the "tamper-proof audit trail" requirement - in a single integrated system.
      </BodyText>

      <Callout>
        "Physical sensors tell you what a battery is doing. Blockchain tells you what it has done. Together, they tell regulators everything they need to know."
      </Callout>

      <SectionHeading>Second-Life Enablement</SectionHeading>
      <BodyText>
        One of the most commercially significant applications of Phygital IOT is second-life battery assessment. Today, the second-life market is constrained by the inability to reliably determine a used battery's remaining capacity and safety profile. Without a trustworthy history, repurposers apply conservative derating factors that destroy value.
      </BodyText>
      <BodyText>
        With LW3's continuous IoT anchoring, a battery arriving at a second-life facility carries its complete operational history on-chain. Repurposers can programmatically query cycle counts, peak temperatures, charge patterns, and SoH trajectory - and price the asset accordingly. This unlocks an estimated 30-40% additional residual value per battery pack compared to current market practices.
      </BodyText>

      <Divider />

      <SectionHeading>Architecture Overview</SectionHeading>
      <BodyText>
        The LW3 Phygital IOT stack operates in three layers:
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Layer 1 - Edge (Device):</strong> Post-quantum signed sensor readings generated at the BMS level. Data is hashed locally before transmission, ensuring raw data integrity even if the communication channel is compromised.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Layer 2 - Network (Aggregation):</strong> Signed data packets are aggregated and batched for efficient on-chain writing. LW3 uses a Cardano-based settlement layer for its combination of formal verification, low-cost transaction settlement, and existing CIRPASS EU standardisation alignment.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Layer 3 - Chain (Immutable Record):</strong> Anchored hashes and metadata form the canonical Battery Passport record. Smart contracts govern access permissions, ensuring that recyclers, regulators, and OEMs each see exactly the data they are entitled to - no more, no less.
      </BodyText>

      <SectionHeading>What Comes Next</SectionHeading>
      <BodyText>
        LW3 is actively piloting the Phygital IOT stack with battery manufacturers across India and the EU under its current cohort programmes. The next phase of development focuses on expanding the sensor coverage to include electrolyte health indicators and cell-level granularity, moving from pack-level to individual cell passports.
      </BodyText>
      <BodyText>
        As the EU Battery Regulation enforcement date approaches, Phygital IOT will transition from a competitive differentiator to a baseline compliance requirement. LW3's early deployment position means its partners will meet that deadline with a system that has already been stress-tested in real-world conditions.
      </BodyText>

      <Divider />

      {/* Tags footer */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Phygital Identity', 'IoT', 'Battery Passport', 'Post-Quantum', 'EU Battery Regulation', 'Cardano', 'Second Life'].map(tag => (
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
