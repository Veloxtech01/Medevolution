import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { productDivisions } from '../../data/productLines'
import MotionLink from '../motion/MotionLink'
import { hoverLift } from '../../lib/motion'

// Sticky site header: logo, hover-driven mega menu over the 14 product
// lines, primary route links, and the request-a-quote CTA.
// Takes no props. Returns the <nav> landmark for the page.
function Header() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="MedEvolution Inc" style={{ height: 32, width: 'auto', display: 'block' }} />
        </Link>

        <div className="nav-links">
          {/* Products mega menu — reveals on hover via CSS, no JS state needed */}
          <div className="nav-item">
            <Link to="/products">
              <span>Products</span>
            </Link>
            <div className="mega">
              {productDivisions.map((division) => (
                <div key={division.id}>
                  <b>{division.navHeading}</b>
                  {division.lines.map((line) => (
                    <Link to={`/products#line-${line.num}`} key={line.num}>
                      <i>{line.num}</i>
                      {line.navName}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Link to="/our-standard">Our Standard</Link>
          <Link to="/global-presence">Global Presence</Link>
          <Link to="/become-a-distributor">Become a Distributor</Link>
        </div>

        <MotionLink to="/contact" className="btn btn-blue" style={{ padding: '10px 20px', fontSize: 14 }} {...hoverLift}>
          Request a Quote
        </MotionLink>
      </div>
    </nav>
  )
}

export default Header
