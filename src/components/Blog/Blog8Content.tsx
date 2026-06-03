// Blog 8 - "Indian Battery Traceability: Battery Adhaar & Regulations"

function KickerTag({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 1.15vw, 12px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '2px', padding: '3px 10px', display: 'inline-block' }}>{children}</span>
}
function KickerDot() {
  return <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', margin: '0 10px', verticalAlign: 'middle' }} />
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(18px, 2.67vw, 28px)', lineHeight: 1.25, color: '#fff', margin: '0', marginTop: 'clamp(28px, 3.5vw, 42px)', marginBottom: 'clamp(10px, 1.2vw, 16px)', letterSpacing: '-0.01em' }}>{children}</h2>
}
function BodyText({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(13px, 1.62vw, 17px)', lineHeight: 1.82, color: 'rgba(255,255,255,0.85)', margin: '0', marginTop: 'clamp(10px, 1.2vw, 16px)' }}>{children}</p>
}
function Divider() {
  return <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', margin: 'clamp(20px, 2.5vw, 32px) 0' }} />
}
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '3px solid #ffffff', paddingLeft: 'clamp(14px, 2vw, 22px)', margin: 'clamp(20px, 2.5vw, 32px) 0' }}>
      <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(14px, 1.91vw, 20px)', lineHeight: 1.72, color: '#ffffff', margin: 0, fontStyle: 'italic' }}>{children}</p>
    </div>
  )
}

export default function Blog8Content() {
  return (
    <article style={{ background: '#000', width: '100%', maxWidth: '1048px', margin: '0 auto', padding: '0', boxSizing: 'border-box', fontFamily: "'D-DIN', sans-serif", color: '#fff' }}>
      <header>
        <div style={{ paddingTop: 'clamp(20px, 3.27vw, 34px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0' }}>
            <KickerTag>Battery Adhaar</KickerTag>
            <KickerDot />
            <KickerTag>India</KickerTag>
            <KickerDot />
            <KickerTag>Battery Traceability</KickerTag>
          </div>
          <span style={{ display: 'block', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 1.58vw, 16.5px)', color: '#fff', letterSpacing: '0.04em', marginTop: 'clamp(10px, 1.2vw, 16px)', whiteSpace: 'nowrap' }}>June 2026 · LW3 Insights</span>
        </div>
        <h1 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(28px, 5.26vw, 55px)', lineHeight: 1.36, letterSpacing: '-0.012em', color: '#fff', margin: '0', marginTop: 'clamp(14px, 2vw, 22px)', width: '100%' }}>
          Product Traceability for Indian Battery Manufacturers: Battery Adhaar and Regulations
        </h1>
        <div style={{ borderBottom: '1px solid #fff', paddingBottom: 'clamp(14px, 2vw, 24px)', marginTop: 'clamp(14px, 2vw, 22px)' }}>
          <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(14px, 2.1vw, 22px)', lineHeight: 1.86, color: '#fff', margin: 0 }}>
            Product traceability is becoming essential for Indian battery manufacturers. Battery Adhaar - a unique digital identification system - is transforming how India tracks, certifies, and exports batteries in an increasingly regulated global market.
          </p>
        </div>
      </header>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(16px, 2vw, 24px)' }}>
        <div style={{ width: 'clamp(36px, 4.74vw, 50px)', height: 'clamp(36px, 4.74vw, 50px)', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: "'D-DIN-Bold', sans-serif", fontSize: 'clamp(14px, 1.72vw, 18px)', color: '#fff' }}>LW3</div>
        <div>
          <div style={{ fontFamily: "'D-DIN-Bold', sans-serif", fontSize: 'clamp(12px, 1.53vw, 16px)', color: '#fff' }}>LW3 Research</div>
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 1.34vw, 14px)', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>8 min read</div>
        </div>
      </div>

      <Divider />

      <SectionHeading>Understanding Product Traceability in Indian Battery Manufacturing</SectionHeading>
      <BodyText>Product traceability is vital for India's battery industry. It ensures tracking of each battery's journey - from raw material sourcing through production, packaging, distribution, and eventually end-of-life management. This comprehensive approach improves quality control, prevents defective products from reaching consumers, and enables faster, more targeted recall management.</BodyText>
      <BodyText>Adopting traceability systems strengthens India's position in the global market. As the EU Battery Regulation (2023/1542) mandates digital product passports for batteries sold in Europe from February 2027, Indian manufacturers that implement robust traceability today will have a significant competitive advantage in accessing European markets.</BodyText>

      <Callout>"Indian battery manufacturers that build traceability infrastructure today are not just meeting regulations - they are positioning for the global EV supply chain."</Callout>

      <SectionHeading>The Role of Battery Adhaar in Traceability</SectionHeading>
      <BodyText>Battery Adhaar is a transformative concept for Indian manufacturers - a unique identifier for every battery that facilitates detailed tracking through every manufacturing and distribution stage. Similar in principle to Aadhaar for individuals, Battery Adhaar provides each battery with a verifiable digital identity that travels with it throughout its lifecycle.</BodyText>
      <BodyText>Using Battery Adhaar improves product authentication, reduces counterfeit risks, and simplifies tracking and management. By integrating Battery Adhaar, manufacturers gain control over the supply chain, leading to enhanced quality assurance and safety. LW3 achieved 80% alignment with the BPAN (Battery Passport Adhaar Number) framework in pilot deployments - demonstrating the practical viability of this approach for Indian manufacturers.</BodyText>

      <Divider />

      <SectionHeading>Key Regulations Shaping Battery Traceability in India</SectionHeading>
      <BodyText><strong style={{ color: '#fff' }}>Battery Waste Management Rules:</strong> Emphasise efficient recycling and proper disposal, mandating tracking of batteries through their lifecycle to ensure compliance with environmental standards.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Bureau of Indian Standards (BIS) Certification:</strong> Sets quality standards for batteries, demanding rigorous testing, certification processes, and detailed tracking of components.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Environmental Protection Regulations:</strong> Push for reduced carbon footprint, encouraging manufacturers to implement traceability to adhere to environmental laws and support sustainability goals.</BodyText>
      <BodyText>Together, these regulations provide a framework for safe, transparent, and responsible battery manufacturing. Indian manufacturers are aligning their processes to meet these increasing demands - and those that do will be better positioned to meet international standards including the EU Battery Regulation.</BodyText>

      <SectionHeading>Technologies Powering Indian Battery Traceability</SectionHeading>
      <BodyText>IoT devices provide real-time tracking and monitoring of battery components throughout the supply chain. Blockchain technology ensures data integrity and transparency - creating immutable records that prove authenticity and origin, preventing counterfeit products from entering the market. Advanced software platforms facilitate seamless data analytics, real-time collection, secure sharing among stakeholders, and automated traceability documentation.</BodyText>
      <BodyText>LW3's post-quantum secure blockchain infrastructure provides Indian manufacturers with a future-proof foundation for battery traceability - securing records against both current and emerging quantum computing threats across 15-year battery lifespans.</BodyText>

      <Callout>"A Battery Adhaar-linked digital product passport is India's bridge between domestic regulatory compliance and EU market access."</Callout>

      <Divider />

      <SectionHeading>The Future: Traceability as Standard in Indian Battery Manufacturing</SectionHeading>
      <BodyText>The future of battery manufacturing in India is closely tied to traceability. Growing consumer demand for transparency, evolving industry standards, and technological improvements lowering implementation costs will make traceability an integral - and mandatory - part of the industry.</BodyText>
      <BodyText>As global competition intensifies and the EU Battery Regulation enforcement date approaches, Indian manufacturers must adopt traceability to stay competitive. Companies that implement Battery Adhaar and digital product passport frameworks today will meet the February 2027 deadline with systems already stress-tested in real-world conditions - turning a compliance requirement into a competitive advantage.</BodyText>

      <Divider />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Battery Adhaar', 'BPAN', 'India', 'Battery Traceability', 'EU Battery Regulation', 'Digital Product Passport', 'EV Battery'].map(tag => (
          <span key={tag} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 1.05vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2px', padding: '4px 10px' }}>{tag}</span>
        ))}
      </div>
    </article>
  )
}
