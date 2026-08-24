import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

// "Why these locations" narrative — each office sits inside a recognized
// innovation ecosystem for its region. Takes no props.
const reasons = [
  { place: 'Cambridge, MA', tag: 'Kendall Square', body: 'The center of gravity for US medtech leadership.' },
  { place: 'Shenzhen, China', tag: "Nanshan Hi-Tech Park", body: 'Advanced electronics manufacturing at scale.' },
  { place: 'Berlin, Germany', tag: 'Berlin Adlershof', body: 'European scientific and regulatory proximity.' },
  { place: 'Daejeon, South Korea', tag: 'Daedeok Techno Valley', body: "Korea's bio-health R&D corridor." },
  { place: 'Hyderabad, India', tag: 'Genome Valley', body: "South Asia's life-science market." },
]

function WhyLocations() {
  return (
    <section className="ledger-sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">Why These Locations</div>
          <h2>MedEvolution goes where the science is.</h2>
          <p>Each site is positioned inside a recognized innovation ecosystem for its region.</p>
        </Reveal>

        <RevealGroup as="div" className="gdir">
          {reasons.map((reason) => (
            <RevealItem as="div" className="row" key={reason.place}>
              <div className="r">{reason.place}</div>
              <b>{reason.tag}</b>
              <div className="role-txt">{reason.body}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default WhyLocations
