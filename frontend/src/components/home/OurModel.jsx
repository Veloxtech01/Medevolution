import { Link } from 'react-router-dom'
import EngineeringModel from '../shared/EngineeringModel'
import { Reveal } from '../motion/Reveal'

// Homepage teaser for the four-phase engineering model, linking through to
// the full Our Standard page. Takes no props.
function OurModel() {
  return (
    <section id="model">
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">The MedEvolution Model</div>
          <h2>How a MedEvolution system gets made.</h2>
          <p>
            We are transparent about our model: engineering and design control from Cambridge, production at our
            Shenzhen facility, and nothing ships until it passes our gate.
          </p>
        </Reveal>

        <EngineeringModel />

        <div style={{ marginTop: 32 }}>
          <Link to="/our-standard" style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-blue)' }}>
            Read our full quality & compliance standard →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurModel
