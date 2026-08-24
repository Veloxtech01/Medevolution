import PageHeader from "../components/shared/PageHeader";
import EngineeringModel from "../components/shared/EngineeringModel";
import CompanyStory from "../components/standard/CompanyStory";
import Compliance from "../components/standard/Compliance";
import { Reveal } from "../components/motion/Reveal";

// Our Standard: the company's founding story, mission/vision/values, the
// four-phase engineering model, and quality/compliance credentials — the
// site's trust-building destination in place of a separate About page.
// Header/Footer are rendered once by the root Layout route. Takes no props.
function OurStandard() {
  return (
    <>
      <PageHeader
        eyebrow="Our Standard · Quality & Compliance"
        title="Built to a written standard."
        description="We are transparent about our model: engineering and design control from Cambridge, production at our Shenzhen facility, and nothing ships until it passes our gate."
      />
      <CompanyStory />

      <section>
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="eyebrow">The MedEvolution Model</div>
            <h2>How a MedEvolution system gets made.</h2>
            <p>
              Every system is governed by MedEvolution engineering documents
              covering performance, safety behavior, mechanical tolerances, and
              user experience — and passes a four-stage approval workflow from
              prototype to production release.
            </p>
          </Reveal>
          <EngineeringModel />
        </div>
      </section>

      <Compliance />
    </>
  );
}

export default OurStandard;
