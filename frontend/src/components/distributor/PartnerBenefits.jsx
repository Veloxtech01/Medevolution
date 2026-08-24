import { LuGraduationCap, LuWrench, LuPackage, LuMegaphone } from 'react-icons/lu'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

// The four things authorized distributors receive, per the partner
// standards described in the company profile. Takes no props.
const benefits = [
  {
    icon: LuGraduationCap,
    title: 'Clinical applications training',
    body: 'Product, positioning, and clinical-protocol training for distributor teams.',
  },
  {
    icon: LuWrench,
    title: 'Certified service program',
    body: 'Engineer certification, service documentation, diagnostic tools, and escalation support.',
  },
  {
    icon: LuPackage,
    title: 'Spare-parts logistics',
    body: 'Regional parts availability with defined lead times from the Shenzhen production facility.',
  },
  {
    icon: LuMegaphone,
    title: 'Market development',
    body: 'Co-branded marketing assets, tender support, and territory protection for qualified partners.',
  },
]

function PartnerBenefits() {
  return (
    <section>
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">What Partners Receive</div>
          <h2>Qualified against our partner standards.</h2>
          <p>
            Distributors are qualified against MedEvolution&rsquo;s partner standards and supported with clinical
            applications training, service certification, spare-parts logistics, and co-branded market development.
          </p>
        </Reveal>

        <RevealGroup as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((benefit) => (
            <RevealItem
              as="div"
              style={{ border: '1px solid var(--color-line)', padding: 28, background: '#fff' }}
              key={benefit.title}
            >
              <benefit.icon size={22} color="var(--color-blue)" style={{ marginBottom: 14 }} />
              <b style={{ display: 'block', fontSize: 15, marginBottom: 6 }}>{benefit.title}</b>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--color-gray)' }}>{benefit.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default PartnerBenefits
