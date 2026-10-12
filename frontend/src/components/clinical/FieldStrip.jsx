import Photo from "./Photo";
import pointOfCare from "../../assets/point-of-care.jpg";

// The three clinical-environment photos and their captions.
const SHOTS = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    alt: "Operating theatre team",
    caption: "Surgical & theatre environments",
  },
  {
    src: pointOfCare,
    alt: "Radiologist reviewing diagnostic images",
    caption: "Diagnostic reading & reporting",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Clinician reviewing results on tablet",
    caption: "Point-of-care workflows",
  },
];

// "In the Field" section: three-up photo strip showing the environments the
// systems are deployed into. Takes no props.
function FieldStrip() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        {/* Section heading */}
        <div className="sec-head" style={{ marginBottom: 8 }}>
          <div className="eyebrow">In the Field</div>
          <h2>Trusted in real clinical environments.</h2>
        </div>

        {/* Photo strip */}
        <div className="strip">
          {SHOTS.map((shot) => (
            <div key={shot.caption}>
              <Photo src={shot.src} alt={shot.alt} />
              <div className="strip-cap">{shot.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FieldStrip;
