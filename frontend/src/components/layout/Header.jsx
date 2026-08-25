import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { LuMenu, LuX, LuChevronDown } from 'react-icons/lu'
import logo from '../../assets/logo.png'
import { productDivisions } from '../../data/productLines'
import MotionLink from '../motion/MotionLink'
import { hoverLift } from '../../lib/motion'

// Sticky site header: logo, hover-driven mega menu over the 14 product
// lines, primary route links, and the request-a-quote CTA. Below 980px the
// inline nav is replaced by a hamburger-triggered mobile panel (state below)
// with the same links plus an accordion for the product divisions.
// Takes no props. Returns the <nav> landmark for the page.
function Header() {
  const reduced = useReducedMotion()
  // Whether the mobile panel is open, and whether its Products accordion is expanded.
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  // Closes the mobile panel — bound to every link inside it so navigating
  // away (or clicking the CTA) never leaves the panel open underneath.
  const closeMenu = () => {
    setMenuOpen(false)
    setProductsOpen(false)
  }

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

        <MotionLink
          to="/contact"
          className="btn btn-blue nav-cta"
          style={{ padding: '10px 20px', fontSize: 14 }}
          {...hoverLift}
        >
          Request a Quote
        </MotionLink>

        {/* Hamburger toggle — only rendered visually below 980px via CSS */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
      </div>

      {/* Mobile nav panel — slides open below the header, animated height/opacity */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0.15 : 0.25 }}
          >
            <div className="wrap mobile-nav-inner">
              {/* Products accordion — same division/line data as the desktop mega menu, stacked */}
              <div className="mobile-nav-item">
                <button
                  type="button"
                  className="mobile-nav-accordion-trigger"
                  aria-expanded={productsOpen}
                  onClick={() => setProductsOpen((open) => !open)}
                >
                  Products
                  <LuChevronDown className={productsOpen ? 'chevron chevron-open' : 'chevron'} size={16} />
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      className="mobile-nav-accordion"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0.1 : 0.2 }}
                    >
                      {productDivisions.map((division) => (
                        <div key={division.id} className="mobile-nav-division">
                          <b>{division.navHeading}</b>
                          {division.lines.map((line) => (
                            <Link to={`/products#line-${line.num}`} key={line.num} onClick={closeMenu}>
                              <i>{line.num}</i>
                              {line.navName}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/our-standard" onClick={closeMenu}>Our Standard</Link>
              <Link to="/global-presence" onClick={closeMenu}>Global Presence</Link>
              <Link to="/become-a-distributor" onClick={closeMenu}>Become a Distributor</Link>
              <Link to="/contact" className="btn btn-blue mobile-nav-cta" onClick={closeMenu}>
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Header
