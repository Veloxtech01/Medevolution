import Photo from "./Photo";
import surgicalTheatre from "../../assets/surgical-theatre.jpg";
import diagnosticReading from "../../assets/diagnostic-reading.jpg";
import pointOfCare from "../../assets/point-of-care-workflows.jpg";

// The three clinical-environment photos and their captions.
const SHOTS = [
  {
    src: surgicalTheatre,
    alt: "Operating theatre team",
    caption: "Surgical & theatre environments",
  },
  {
    src: diagnosticReading,
    alt: "Radiologist reviewing diagnostic images",
    caption: "Diagnostic reading & reporting",
  },
  {
    src: pointOfCare,
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
