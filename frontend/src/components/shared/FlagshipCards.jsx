import { RevealGroup, RevealItem } from '../motion/Reveal'
import { hoverLift } from '../../lib/motion'

// The two flagship platforms (BreastVision TOMO, Mobile DR), shared between
// the homepage feature section and the Products hub's Line 02 entry so the
// spec data isn't duplicated across pages. Written out literally rather
// than data-driven — only two cards, each with a differently-shaped spec
// table, so a shared shape would add abstraction without saving real
// duplication. Takes no props.
function FlagshipCards() {
  return (
    <RevealGroup as="div" className="spec-cards">
      <RevealItem as="div" className="spec-card" id="flagship-breastvision" {...hoverLift}>
        <div className="spec-top">
          <div>
            <h3>BreastVision TOMO</h3>
            <div className="model">ME-BV3000T PRO</div>
          </div>
          <div className="pill">LINE 02 · ME-MI</div>
        </div>
        <div className="spec-visual">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80"
            alt="Screening environment"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <table>
          <tbody>
            <tr>
              <td>MODALITY</td>
              <td>3D Digital Breast Tomosynthesis</td>
            </tr>
            <tr>
              <td>DETECTOR</td>
              <td>High-resolution flat-panel</td>
            </tr>
            <tr>
              <td>DOSE PROFILE</td>
              <td>Low-dose acquisition protocols</td>
            </tr>
            <tr>
              <td>WORKFLOW</td>
              <td>Integrated technologist console</td>
            </tr>
          </tbody>
        </table>
        <div className="spec-foot">
          <a href="#">Full specification sheet</a>
        </div>
      </RevealItem>

      <RevealItem as="div" className="spec-card" id="flagship-mobiledr" {...hoverLift}>
        <div className="spec-top">
          <div>
            <h3>Mobile DR</h3>
            <div className="model">ME-DR20 PRO</div>
          </div>
          <div className="pill">LINE 02 · ME-MI</div>
        </div>
        <div className="spec-visual">
          <img
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80"
            alt="Ward environment"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <table>
          <tbody>
            <tr>
              <td>MODALITY</td>
              <td>Motorized mobile digital radiography</td>
            </tr>
            <tr>
              <td>DETECTOR</td>
              <td>Wireless flat-panel</td>
            </tr>
            <tr>
              <td>MOBILITY</td>
              <td>Motorized drive, precision steering</td>
            </tr>
            <tr>
              <td>POWER</td>
              <td>Full-shift battery endurance</td>
            </tr>
          </tbody>
        </table>
        <div className="spec-foot">
          <a href="#">Full specification sheet</a>
        </div>
      </RevealItem>
    </RevealGroup>
  )
}

export default FlagshipCards
