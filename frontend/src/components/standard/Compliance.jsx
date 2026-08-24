import { LuBadgeCheck, LuActivity, LuFileText } from 'react-icons/lu'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

// Quality & compliance callouts: ISO 13485, IEC 60601, and the
// documentation that ships with every installed system. Takes no props.
const items = [
  {
    icon: LuBadgeCheck,
    tag: 'ISO 13485',
    body: "MedEvolution's quality system is aligned with ISO 13485 medical device quality management practices.",
  },
  {
    icon: LuActivity,
    tag: 'IEC 60601',
    body: 'Systems are engineered against IEC 60601 electrical safety and electromagnetic compatibility standards.',
  },
  {
    icon: LuFileText,
    tag: 'Full documentation',
    body: 'Technical files, user manuals, and service documentation are maintained and supplied with every installed system.',
  },
]

function Compliance() {
  return (
    <section className="ledger-sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">Quality & Compliance</div>
          <h2>Every unit inspected. Every claim documented.</h2>
        </Reveal>

        <RevealGroup as="div" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <RevealItem as="div" style={{ border: '1px solid var(--color-line)', padding: 28 }} key={item.tag}>
              <item.icon size={24} color="var(--color-blue)" style={{ marginBottom: 16 }} />
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  color: 'var(--color-blue)',
                  marginBottom: 8,
                }}
              >
                {item.tag}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-gray)' }}>{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default Compliance
