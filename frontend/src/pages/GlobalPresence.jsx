import PageHeader from "../components/shared/PageHeader";
import OfficesDirectory from "../components/shared/OfficesDirectory";
import WhyLocations from "../components/presence/WhyLocations";

// Global Presence: the five regional offices and the reasoning behind each
// location. Header/Footer are rendered once by the root Layout route.
// Takes no props.
function GlobalPresence() {
  return (
    <>
      <PageHeader
        eyebrow="Global Presence"
        title="Five locations. Four regions. One standard."
        description="From engineering and corporate leadership in the United States, to manufacturing in China, to regional market and support offices across Europe and Asia — MedEvolution operates a single, connected quality standard worldwide."
      />

      <section>
        <div className="wrap">
          <OfficesDirectory />
        </div>
      </section>

      <WhyLocations />
    </>
  );
}

export default GlobalPresence;
