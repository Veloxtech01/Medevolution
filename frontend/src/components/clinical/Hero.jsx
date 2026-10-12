import { Link } from "react-router-dom";
import Photo from "./Photo";

// Homepage hero: headline, intro copy, the two primary CTAs and the annotated
// product photo panel. The standards/reach figures that used to sit in a strip
// below this now live in their own <Standards> section. Takes no props.
function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-inner">
          {/* Copy column */}
          <div>
            <div className="eyebrow">
              Diagnostic Imaging · Engineered in the USA Standard
            </div>
            <h1>
              Advancing the science of <em>early detection.</em>
            </h1>
            <p>
              MedEvolution designs and delivers precision diagnostic imaging
              systems. Engineered to exacting specifications, validated for
              demanding clinical environments, and supported across three
              continents.
            </p>
            <div className="hero-btns">
              <Link to="/products" className="btn btn-blue">
                Explore Products
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Request Company Profile
              </Link>
            </div>
          </div>

          {/* Photo panel */}
          <div className="hero-visual">
            <Photo
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80"
              alt="Diagnostic imaging suite"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
