// Blog 6 - "Food Traceability: Ensuring Safety & Transparency"

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

export default function Blog6Content() {
  return (
    <article style={{ background: '#000', width: '100%', maxWidth: '1048px', margin: '0 auto', padding: '0', boxSizing: 'border-box', fontFamily: "'D-DIN', sans-serif", color: '#fff' }}>
      <header>
        <div style={{ paddingTop: 'clamp(20px, 3.27vw, 34px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '4px', rowGap: '8px' }}>
            <KickerTag>Food Safety</KickerTag>
            <KickerDot />
            <KickerTag>Traceability</KickerTag>
            <KickerDot />
            <KickerTag>Supply Chain</KickerTag>
          </div>
          <span style={{ display: 'block', fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 1.58vw, 16.5px)', color: '#fff', letterSpacing: '0.04em', marginTop: 'clamp(10px, 1.2vw, 16px)', whiteSpace: 'nowrap' }}>June 2026 · LW3 Insights</span>
        </div>
        <h1 style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(28px, 5.26vw, 55px)', lineHeight: 1.36, letterSpacing: '-0.012em', color: '#fff', margin: '0', marginTop: 'clamp(14px, 2vw, 22px)', width: '100%' }}>
          Product Traceability for Food: Ensuring Safety and Supply Chain Transparency
        </h1>
        <div style={{ borderBottom: '1px solid #fff', paddingBottom: 'clamp(14px, 2vw, 24px)', marginTop: 'clamp(14px, 2vw, 22px)' }}>
          <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(14px, 2.1vw, 22px)', lineHeight: 1.86, color: '#fff', margin: 0 }}>
            Product traceability for food is a cornerstone of the modern food industry - tracking every product from origin to consumer, ensuring safety, building trust, and enabling rapid response when things go wrong.
          </p>
        </div>
      </header>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(16px, 2vw, 24px)' }}>
        <div style={{ width: 'clamp(36px, 4.74vw, 50px)', height: 'clamp(36px, 4.74vw, 50px)', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: "'D-DIN-Bold', sans-serif", fontSize: 'clamp(14px, 1.72vw, 18px)', color: '#fff' }}>LW3</div>
        <div>
          <div style={{ fontFamily: "'D-DIN-Bold', sans-serif", fontSize: 'clamp(12px, 1.53vw, 16px)', color: '#fff' }}>LW3 Research</div>
          <div style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(11px, 1.34vw, 14px)', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>7 min read</div>
        </div>
      </div>

      <Divider />

      <SectionHeading>What Is Product Traceability for Food?</SectionHeading>
      <BodyText>Product traceability for food involves tracking the journey of food products from the source to the end consumer - monitoring every stage of production, processing, and distribution. The concept emphasises the ability to trace forward (where a product has gone) and backward (where it originated), enhancing both transparency and accountability.</BodyText>
      <BodyText>Traceability systems record source of raw materials, processing and storage conditions, transportation details, and distribution channels. These systems are critical for managing product recalls effectively - fast identification of contaminated products reduces health risks and financial losses.</BodyText>

      <Callout>"Knowing where food came from is no longer a luxury - it is a baseline consumer expectation and a regulatory requirement."</Callout>

      <SectionHeading>Why Food Safety and Supply Chain Transparency Matter</SectionHeading>
      <BodyText>Food safety is a critical concern in today's global market. Traceability allows stakeholders to quickly identify and eliminate contaminated products, preventing widespread consumer harm. Supply chain transparency builds consumer trust by providing insight into food production processes - and traceability systems deter food fraud by verifying product authenticity.</BodyText>
      <BodyText>Regulatory bodies worldwide mandate traceability to ensure compliance with food safety standards. The Global Food Safety Initiative (GFSI), ISO 22000, and the FDA Food Safety Modernization Act all require traceability as a core component. By meeting these standards, companies improve recall efficiency and protect both consumers and brand reputation.</BodyText>

      <Divider />

      <SectionHeading>Key Components of Food Traceability Systems</SectionHeading>
      <BodyText><strong style={{ color: '#fff' }}>Unique identification:</strong> Each product carries a unique identifier - barcode or RFID tag - allowing precise tracking through the supply chain.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Systematic data collection:</strong> Production dates, locations, and processing times are recorded systematically, ensuring accurate and accessible records.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Supply chain connectivity:</strong> Seamless communication among supply chain partners enables real-time tracking. Integration with existing systems enhances operational efficiency.</BodyText>
      <BodyText><strong style={{ color: '#fff' }}>Analytics:</strong> Analysing traceability data reveals trends and opportunities for improvement, helping businesses make informed decisions and reduce waste.</BodyText>

      <SectionHeading>Technologies Powering Food Traceability</SectionHeading>
      <BodyText>RFID technology facilitates automatic tracking throughout the product journey, minimising human error. Barcodes provide a cost-effective solution for product identification. Blockchain is becoming a game-changer - its immutable ledger enhances transparency and trust, allowing stakeholders to verify the integrity of each product's journey.</BodyText>
      <BodyText>IoT devices enable real-time monitoring of environmental conditions like temperature during transportation, ensuring products remain in optimal condition. Cloud-based platforms provide accessible data storage and sharing across the supply chain. Together, these technologies make the food supply chain more transparent and reliable.</BodyText>

      <Callout>"Blockchain in food traceability creates a tamper-proof record - when a contamination event occurs, the source can be identified in seconds rather than days."</Callout>

      <Divider />

      <SectionHeading>Benefits for Businesses and Consumers</SectionHeading>
      <BodyText>For businesses, traceability enhances supply chain efficiency, enables swift identification of issues, and reduces the financial impact of recalls. It supports sustainable practices by monitoring environmental impacts and improving resource management. Companies with transparent supply chains enjoy stronger brand loyalty and a competitive advantage.</BodyText>
      <BodyText>For consumers, traceability means safer food and the ability to make informed purchasing decisions. Knowing the origin and handling of food products reassures consumers about their choices and supports preferences for ethically sourced products. In a globalized market, this transparency is no longer a differentiator - it is an expectation.</BodyText>

      <Divider />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: 'clamp(32px, 4vw, 56px)' }}>
        {['Food Traceability', 'Food Safety', 'Supply Chain Transparency', 'Blockchain', 'IoT', 'RFID', 'Regulatory Compliance'].map(tag => (
          <span key={tag} style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(10px, 1.05vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2px', padding: '4px 10px' }}>{tag}</span>
        ))}
      </div>
    </article>
  )
}
