import { Link } from 'react-router-dom'
import Photo from './Photo'

// The four stages of the engineering model, numbered in the dark band.
const STAGES = [
  {
    n: '01',
    title: 'Design Specification',
    copy: 'Detector performance, dose profiles, mechanical tolerances and UI defined to MedEvolution engineering documents.',
  },
  {
    n: '02',
    title: 'Pre-Production Approval',
    copy: 'Four-stage sample review covering imaging performance, branding, safety and packaging integrity.',
  },
  {
    n: '03',
    title: 'Batch Quality Control',
    copy: 'Unit-level inspection and imaging QA against acceptance criteria before release for export.',
  },
  {
    n: '04',
    title: 'Lifecycle Support',
    copy: 'Installation, applications training, spare-parts logistics and preventive maintenance via authorized partners.',
  },
]

// "Technology & Engineering" band: dark full-width section pairing the
// engineering-model narrative with the numbered four-stage list. Anchor
// target for the nav's #technology link. Takes no props.
function Technology() {
  return (
    <section className="tech" id="technology">
      <div className="wrap tech-grid">
        {/* Narrative column */}
        <div>
          <div className="eyebrow">Technology &amp; Engineering</div>
          <h2>Specification-driven. Clinically validated.</h2>
          <p>
            MedEvolution operates a specification-first engineering model: every system is designed,
            branded, and quality-controlled to MedEvolution standards through our audited OEM
            manufacturing network, with a four-stage approval gate from prototype to production
            release.
          </p>
          <Link to="/our-standard" className="btn btn-blue">
            Our Engineering Model
          </Link>
          <Photo
            className="tech-visual"
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80"
            alt="Engineering and quality inspection"
          />
        </div>

        {/* Numbered stage list */}
        <div className="tech-list">
          {STAGES.map((stage) => (
            <div className="tech-item" key={stage.n}>
              <div className="dot">{stage.n}</div>
              <div>
                <b>{stage.title}</b>
                <span>{stage.copy}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technology
