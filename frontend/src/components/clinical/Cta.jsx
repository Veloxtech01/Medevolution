import { Link } from 'react-router-dom'

// Closing distributor CTA: gradient blue panel sitting inside the page
// container (not full-bleed), as in the template. Takes no props.
function Cta() {
  return (
    <div className="wrap">
      <div className="cta">
        <div>
          <h2>Become an authorized distributor.</h2>
          <p>
            Partner with MedEvolution to bring precision diagnostic imaging to your market. Territory
            availability, training, and commercial terms on request.
          </p>
        </div>
        <Link to="/become-a-distributor" className="btn">
          Start the Conversation
        </Link>
      </div>
    </div>
  )
}

export default Cta
