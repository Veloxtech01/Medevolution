import MotionLink from '../motion/MotionLink'
import { Reveal } from '../motion/Reveal'
import { hoverLift } from '../../lib/motion'

// Closing distributor-partnership call-to-action banner. Takes no props.
function CtaBanner() {
  return (
    <Reveal as="div" className="cta">
      <div className="wrap cta-inner">
        <div>
          <div className="mono-note">PARTNERSHIP INQUIRY — FORM MEDEV-DIST-01</div>
          <h2>Distribute a brand built on documentation.</h2>
          <p>
            Territory availability, training programs, and commercial terms for qualified medical equipment
            distributors on every continent.
          </p>
        </div>
        <MotionLink
          to="/become-a-distributor"
          className="btn"
          style={{ background: '#fff', color: 'var(--color-ink)', flexShrink: 0 }}
          {...hoverLift}
        >
          Request Partnership Pack
        </MotionLink>
      </div>
    </Reveal>
  )
}

export default CtaBanner
