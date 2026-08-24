import { Link } from 'react-router-dom'
import FlagshipCards from '../shared/FlagshipCards'
import { Reveal } from '../motion/Reveal'

// Homepage teaser for the two flagship platforms (BreastVision TOMO, Mobile
// DR). Renders the shared spec cards and points to their canonical home in
// the Products hub. Takes no props.
function Flagships() {
  return (
    <section className="ledger-sec" id="flagships" style={{ background: '#fff' }}>
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">Flagship Platforms · Line 02 — ME-MI</div>
          <h2>Two platforms. Full documentation.</h2>
          <p>Specification sheets, user manuals, and service documentation available for every system on request.</p>
        </Reveal>

        <FlagshipCards />

        <div style={{ marginTop: 28 }}>
          <Link to="/products#line-02" style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-blue)' }}>
            View the full product portfolio →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Flagships
