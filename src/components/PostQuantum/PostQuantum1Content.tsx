// Post Quantum Secure Blockchain Article 1

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

export default function PostQuantum1Content() {
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
          <KickerTag>Post-Quantum</KickerTag>
          <KickerDot />
          <KickerTag>Blockchain</KickerTag>
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
        Post Quantum Secure Blockchain: Future-Proofing the Battery Passport Against Quantum Threats
      </h1>

      {/* Hero image */}
      <div style={{ width: '100%', marginTop: 'clamp(20px, 2.5vw, 32px)' }}>
        <img
          src="/Quantum.webp"
          alt="Post Quantum Secure Blockchain"
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
          Quantum computers will break the cryptography that secures today's blockchains. LW3 builds its Battery Passport on a post-quantum secure foundation - using NIST-standardised algorithms that remain unbreakable even as quantum hardware advances, protecting battery data for the full 15-year lifecycle and beyond.
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

      <SectionHeading>The Quantum Threat to Blockchain Security</SectionHeading>
      <BodyText>
        Current blockchain systems - including most major public chains - rely on elliptic-curve cryptography (ECC) to secure transactions, verify signatures, and protect stored data. ECC derives its security from the computational difficulty of solving the elliptic-curve discrete logarithm problem. For classical computers, this problem is effectively unsolvable at practical key sizes. For a sufficiently powerful quantum computer running Shor's algorithm, it is not.
      </BodyText>
      <BodyText>
        The timeline for quantum computers capable of breaking 256-bit ECC keys is debated, but credible estimates from NIST and national security agencies place it within the 2030-2040 window. For data that must remain secure for decades - like battery lifecycle records - the threat is present today through the harvest-now-decrypt-later attack model: adversaries collect encrypted data now and decrypt it once quantum hardware matures.
      </BodyText>

      <Callout>
        "A Battery Passport secured only by classical cryptography is a liability. Records signed today will still need to be trusted in 2040 - by which point quantum computers may be able to forge those signatures."
      </Callout>

      <SectionHeading>NIST Post-Quantum Standards</SectionHeading>
      <BodyText>
        In 2024, the US National Institute of Standards and Technology (NIST) finalised its first set of post-quantum cryptographic standards. The primary standards are CRYSTALS-Kyber for key encapsulation and CRYSTALS-Dilithium for digital signatures - both based on the hardness of lattice problems, which are believed to be resistant to both classical and quantum attacks.
      </BodyText>
      <BodyText>
        LW3 implements CRYSTALS-Dilithium for all Battery Passport signatures and CRYSTALS-Kyber for encrypted data transmission between supply chain participants. These are the same algorithms now being adopted by governments, defence agencies, and financial institutions preparing for the post-quantum transition.
      </BodyText>

      <Divider />

      <SectionHeading>Why Cardano for the Settlement Layer</SectionHeading>
      <BodyText>
        LW3 uses Cardano as its primary blockchain settlement layer for Battery Passport records. Cardano was selected over alternatives for three specific reasons relevant to post-quantum security:
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Formal verification:</strong> Cardano's smart contracts are written in Plutus, a language designed for formal mathematical verification. This means the security properties of the contract logic can be proven, not just tested.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>Research-driven development:</strong> Cardano's development is led by peer-reviewed academic research, including active work on post-quantum cryptographic integration at the protocol level.
      </BodyText>
      <BodyText>
        <strong style={{ color: '#fff' }}>CIRPASS alignment:</strong> Cardano's architecture aligns with the interoperability requirements of the EU's CIRPASS standardisation framework, in which LW3 participated as a contributor.
      </BodyText>

      <SectionHeading>Protecting the Full 15-Year Battery Lifecycle</SectionHeading>
      <BodyText>
        An EV battery manufactured today may still be in service - in its first or second life - in 2040. The Battery Passport records created at manufacture need to remain trustworthy and tamper-evident for that entire period. Classical cryptographic signatures created today may be forgeable by 2035.
      </BodyText>
      <BodyText>
        LW3's post-quantum signatures are designed to remain secure well beyond that window. Each signature written to the Battery Passport uses Dilithium-3, providing a security level estimated to require quantum resources orders of magnitude beyond any currently projected hardware roadmap.
      </BodyText>

      <Callout>
        "Post-quantum security is not a future upgrade for LW3 - it is a day-one design requirement. Every Battery Passport signed on the platform is already quantum-resistant."
      </Callout>

      <VectorFieldInline />
      <SectionHeading>Regulatory and Compliance Implications</SectionHeading>
      <BodyText>
        The EU's NIS2 directive and the forthcoming Cyber Resilience Act both push critical infrastructure operators toward post-quantum cryptographic readiness. Battery supply chain data - covering provenance, carbon emissions, financial transactions, and compliance records - falls squarely within the scope of critical data that regulators expect to be secured against emerging threats.
      </BodyText>
      <BodyText>
        LW3's post-quantum implementation positions its customers ahead of this regulatory curve, avoiding the costly migration projects that organisations relying on classical cryptography will face when compliance timelines tighten.
      </BodyText>

      <Divider />

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Post-Quantum', 'Blockchain', 'CRYSTALS-Dilithium', 'Cardano', 'Battery Passport', 'NIS2', 'Cryptography'].map(tag => (
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
