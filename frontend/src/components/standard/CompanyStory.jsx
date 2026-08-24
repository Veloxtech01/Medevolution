import { LuCrosshair, LuShieldCheck, LuGlobe, LuHandshake } from 'react-icons/lu'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

// The mission/vision/values grid — the founding-story content that would
// otherwise live on an About page, kept here since Our Standard is this
// site's designated trust-building destination. Takes no props.
const values = [
  { icon: LuCrosshair, name: 'Precision', body: 'Built to a written standard, not a marketing claim.' },
  { icon: LuShieldCheck, name: 'Integrity', body: 'Transparent engineering, auditable quality.' },
  { icon: LuGlobe, name: 'Access', body: 'World-class technology for every market we serve.' },
  { icon: LuHandshake, name: 'Partnership', body: 'We grow through the distributors and clinicians who trust us.' },
]

const cardStyle = { border: '1px solid var(--color-line)', padding: 28, background: '#fff' }
const bodyStyle = { fontSize: 15, lineHeight: 1.7, color: 'var(--color-gray)' }

function CompanyStory() {
  return (
    <section>
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">Three Decades of Engineering Trust</div>
          <h2>Founded 1990. Cambridge, Massachusetts.</h2>
          <p>
            MedEvolution Inc is a US-based medical equipment manufacturer headquartered at the Cambridge Innovation
            Center — one of the world&rsquo;s most concentrated hubs of medical technology and life-science
            innovation. For over three decades we&rsquo;ve designed and delivered precision medical equipment for
            hospitals, diagnostic centres, and screening programs across the globe.
          </p>
        </Reveal>

        <RevealGroup as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <RevealItem as="div" style={cardStyle}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Mission
            </div>
            <p style={bodyStyle}>
              To advance the standard of care by putting precision medical equipment within reach of every
              healthcare system — engineered without compromise, delivered without excuses.
            </p>
          </RevealItem>
          <RevealItem as="div" style={cardStyle}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Vision
            </div>
            <p style={bodyStyle}>
              A world where geography never determines the quality of care — where a hospital in Lagos, Hyderabad,
              or Berlin runs on the same standard of equipment as one in Boston.
            </p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup as="div" className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value) => (
            <RevealItem as="div" style={cardStyle} key={value.name}>
              <value.icon size={22} color="var(--color-blue)" style={{ marginBottom: 14 }} />
              <b style={{ display: 'block', fontSize: 15, marginBottom: 6 }}>{value.name}</b>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--color-gray)' }}>{value.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default CompanyStory
