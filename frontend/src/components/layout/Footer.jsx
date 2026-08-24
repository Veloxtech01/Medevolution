import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RevealGroup, RevealItem } from "../motion/Reveal";

// Site footer: brand mark + tagline, secondary nav links, and the
// copyright/legal bottom bar. Takes no props, returns the page <footer>.
// Brand block and link column fade/stagger in via RevealGroup/RevealItem,
// matching the reveal treatment used across the rest of the site.
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <RevealGroup className="foot" as="div">
          <RevealItem>
            <img
              src={logo}
              alt="MedEvolution Inc"
              style={{ height: 28, width: "auto", display: "block" }}
            />
            <p className="tag">
              MedEvolution Inc — US-engineered precision medical equipment,
              trusted worldwide since 1990.
            </p>
          </RevealItem>
          <RevealItem className="foot-links">
            <Link to="/products">Products</Link>
            <Link to="/our-standard">Our Standard</Link>
            <Link to="/global-presence">Global Presence</Link>
            <Link to="/become-a-distributor">Become a Distributor</Link>
            <Link to="/contact">Contact</Link>
          </RevealItem>
        </RevealGroup>
        <div className="foot-bottom">
          <div>© 2026 MEDEVOLUTION INC. ALL RIGHTS RESERVED. </div>
          <div>PRIVACY · TERMS · REGULATORY STATEMENTS</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
