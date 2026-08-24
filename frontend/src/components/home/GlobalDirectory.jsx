import { Link } from 'react-router-dom'
import OfficesDirectory from '../shared/OfficesDirectory'
import GmbeSpotlight from '../shared/GmbeSpotlight'
import { Reveal } from '../motion/Reveal'

// Homepage teaser for the 5 regional offices plus the featured GMBE
// (Nigeria/West Africa) distributor, each linking through to its full page.
// Takes no props.
function GlobalDirectory() {
  return (
    <section id="global">
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">Global Directory</div>
          <h2>Five locations. Four regions. One standard.</h2>
        </Reveal>

        <OfficesDirectory />

        <div style={{ marginTop: 18, marginBottom: 26 }}>
          <Link to="/global-presence" style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-blue)' }}>
            View the full global presence →
          </Link>
        </div>

        <GmbeSpotlight>
          <Link
            to="/become-a-distributor"
            style={{ display: 'inline-block', marginTop: 14, fontSize: 14, fontWeight: 600, color: 'var(--color-blue)' }}
          >
            Become a distributor →
          </Link>
        </GmbeSpotlight>
      </div>
    </section>
  )
}

export default GlobalDirectory
