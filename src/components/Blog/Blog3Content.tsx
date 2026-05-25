// Blog 3 - "The Intelligent Passport: How Agentic AI Transforms EU Battery Compliance"
// Pixel-perfect recreation from Figma node 1:888 (canvas: 1048px wide)

export default function Blog3Content() {
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
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0', paddingTop: 'clamp(20px, 3.27vw, 34px)' }}>
        <KickerTag>Agentic AI</KickerTag>
        <KickerDot />
        <KickerTag>Battery Regulation</KickerTag>
        <KickerDot />
        <span style={{
          fontFamily: "'D-DIN', sans-serif",
          fontSize: 'clamp(12px, 1.58vw, 16.5px)',
          color: '#fff',
          letterSpacing: '0.04em',
          marginLeft: '20px',
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
        The Intelligent Passport: How Agentic AI Transforms EU Battery Compliance from Record-Keeping to Real-Time Intelligence
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
          A Digital Battery Passport that merely stores data is a filing cabinet. One powered by Agentic AI is an active compliance engine - autonomously monitoring, reporting, and optimising across every dimension the EU Battery Regulation demands.
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

        <Heading2>From passive record to active intelligence</Heading2>
        <BodyPara>
          The EU Battery Regulation (2023/1542) does not ask manufacturers to archive data. It demands living, auditable proof - continuously updated, machine-verifiable, and accurate across a battery's entire operational lifetime. That is a fundamentally different challenge from traditional compliance documentation, and it calls for a fundamentally different tool.
        </BodyPara>
        <BodyPara>
          Agentic AI - autonomous AI systems that perceive data environments, reason across them, and act without constant human instruction - is precisely that tool. LW3 has built a suite of purpose-designed agents that sit inside its Battery Passport platform, each assigned to one of the Regulation's core compliance pillars. Together, they turn the passport from a static ledger into a living system of record.
        </BodyPara>

        <PullQuote>
          "Compliance at this scale cannot be managed by spreadsheet or quarterly audit. It demands agents that never sleep, never miss an event, and act the moment thresholds are crossed."
        </PullQuote>

        <Heading2 serif>Five agents, five regulatory pillars</Heading2>

        {/* Agent grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(8px, 1.81vw, 19px)',
          margin: 'clamp(16px, 2vw, 24px) 0',
        }}>
          <AgentCard pillar="Pillar 01" name="Traceability Agent">
            Continuously maps raw material provenance - from mine to cell to pack - reconciling supplier declarations against due diligence standards and flagging chain-of-custody anomalies in real time.
          </AgentCard>
          <AgentCard pillar="Pillar 02" name="Performance Agent">
            Ingests state-of-health telemetry across the battery's operational life, autonomously updating capacity fade, cycle data, and remaining useful life - keeping the passport accurate without manual intervention.
          </AgentCard>
          <AgentCard pillar="Pillar 03" name="Circular Materials Agent">
            Tracks recycled content thresholds - cobalt, lithium, nickel, lead - verifying incoming material certifications and alerting procurement teams when sourcing decisions risk non-compliance.
          </AgentCard>
          <AgentCard pillar="Pillar 04" name="Carbon Footprint Agent">
            Calculates and updates lifecycle carbon declarations across manufacturing, logistics, and use-phase, aligned to the Regulation's Product Carbon Footprint methodology and EU taxonomy thresholds.
          </AgentCard>
          <AgentCard pillar="Pillar 05" name="End-of-Life Agent">
            Identifies second-life eligibility windows, routes batteries to certified refurbishers, and ensures dismantling and recycling instructions are accurate and up to date for regulators and operators alike.
          </AgentCard>
        </div>

        <Heading2>Why agents, not dashboards</Heading2>
        <BodyPara>
          The distinction matters. A dashboard shows you what has happened. An agent acts on what is happening - and, increasingly, on what is about to happen. When a supplier updates a material certification, the Traceability Agent reconciles it against the passport record and flags discrepancies before they become audit findings. When a battery's capacity drops below a regulatory performance threshold, the Performance Agent updates the passport and triggers the End-of-Life Agent to assess second-life routing. The system operates as an interconnected compliance loop, not a set of siloed reports.
        </BodyPara>

        {/* Stat cards */}
        <StatRow>
          <StatCard stat="5" label="Purpose-built LW3 agents covering every DBP compliance pillar" />
          <StatCard stat="24/7" label="Continuous monitoring across supplier, telemetry &amp; regulatory data streams" />
          <StatCard stat="2027" label="DBP mandatory - organisations deploying agents now gain a structural head start" />
        </StatRow>

        <Heading2>Already built, already deployed</Heading2>
        <BodyPara>
          LW3's agentic layer is not a roadmap item. These agents are operational inside the LW3 Battery Passport platform and deployed with clients today. The underlying blockchain infrastructure - post-quantum secured and interoperable with the EU's Open Data Spaces framework - provides the tamper-proof foundation on which agents write every update, ensuring that autonomous actions are as auditable as human ones.
        </BodyPara>

        <HighlightBox title="What LW3 agents deliver for your compliance programme">
          <BulletItem>Real-time traceability reconciliation across multi-tier supply chains, reducing due diligence audit preparation from weeks to hours</BulletItem>
          <BulletItem>Automated state-of-health updates eliminating manual telemetry processing and ensuring passport accuracy at all times</BulletItem>
          <BulletItem>Recycled content tracking with threshold alerting, keeping procurement decisions aligned to the Regulation's 2030 and 2035 targets</BulletItem>
          <BulletItem>Lifecycle carbon footprint calculations updated continuously, supporting both regulatory disclosure and internal ESG reporting</BulletItem>
          <BulletItem last>Second-life routing intelligence that converts end-of-life obligations into circular revenue opportunities</BulletItem>
        </HighlightBox>

        <Heading2>The competitive logic of acting now</Heading2>
        <BodyPara>
          Organisations that deploy agentic compliance infrastructure before the 2027 deadline do not merely avoid market exclusion - they accumulate a structural advantage. Clean, machine-verifiable passport data builds the audit history that regulators, insurers, and secondhand market buyers will require. Battery assets with richer, more accurate data will command better second-life valuations. Supply chains with proven traceability will face fewer disruptions under the Critical Raw Materials Act's tightening scrutiny.
        </BodyPara>
        <BodyPara>
          The EU Battery Regulation is not a reporting exercise. It is a market access condition underpinned by data. Agentic AI is the only mechanism capable of keeping that data accurate, current, and audit-ready at scale - and LW3 has already built it.
        </BodyPara>

      </div>

      <CTASection
        headline="Your agents are ready."
        body="LW3's Agentic AI Battery Passport platform is live and deployed - combining post-quantum secure blockchain infrastructure with autonomous compliance agents built for every pillar of the EU Battery Regulation."
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

function Heading2({ children, serif }: { children: React.ReactNode; serif?: boolean }) {
  return (
    <div style={{ borderTop: '1px solid #fff', paddingTop: 'clamp(36px, 6.3vw, 66px)', marginTop: 'clamp(24px, 3vw, 40px)', marginBottom: 'clamp(10px, 1.5vw, 18px)' }}>
      <h2 style={{
        fontFamily: serif ? "'Cormorant Garamond', serif" : "'D-DIN-Bold', 'D-DIN', sans-serif",
        fontSize: 'clamp(18px, 2.9vw, 30px)',
        lineHeight: 1.75,
        color: '#fff',
        margin: 0,
        fontWeight: serif ? 600 : 'normal',
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
      borderRadius: '0 6px 6px 0',
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

function AgentCard({ pillar, name, children }: { pillar: string; name: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff',
      color: '#000',
      padding: 'clamp(16px, 2.76vw, 29px)',
      overflow: 'hidden',
    }}>
      <div style={{ fontFamily: "'D-DINCondensed', sans-serif", fontSize: 'clamp(10px, 1.32vw, 13.8px)', letterSpacing: '0.13em', marginBottom: 'clamp(8px, 1.3vw, 14px)' }}>{pillar}</div>
      <div style={{ fontFamily: "'D-DIN-Bold', 'D-DIN', sans-serif", fontSize: 'clamp(14px, 2.1vw, 22px)', lineHeight: 1.3, marginBottom: 'clamp(8px, 1.3vw, 14px)' }}>{name}</div>
      <p style={{ fontFamily: "'D-DIN', sans-serif", fontSize: 'clamp(12px, 1.78vw, 18.6px)', lineHeight: 1.55, margin: 0 }}>{children}</p>
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
      borderBottom: last ? 'none' : '1px solid #f0ede6',
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
