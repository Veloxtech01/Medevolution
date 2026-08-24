import { RevealGroup, RevealItem } from '../motion/Reveal'

// The four-phase "how a MedEvolution system gets made" process timeline,
// shared between the homepage teaser and the Our Standard page so the
// canonical phase copy lives in one place. Takes no props.
const steps = [
  {
    tag: 'PHASE A',
    title: 'Specification & Design Control — Cambridge, MA',
    body: 'Performance, safety behavior, mechanical tolerances, materials, and user interface defined in MedEvolution engineering documents before a single unit is built.',
  },
  {
    tag: 'PHASE B',
    title: 'Qualified Production — Shenzhen, China',
    body: 'Manufactured at our Nanshan Hi-Tech Park facility under audited process requirements, including branding, packaging, and export-readiness standards.',
  },
  {
    tag: 'PHASE C',
    title: 'Four-Stage Pre-Production Approval',
    body: 'Staged reviews covering performance, safety, cosmetic standards, and packaging integrity. Deviations documented and corrected before release.',
  },
  {
    tag: 'PHASE D',
    title: 'Unit-Level QA & Lifecycle Support',
    body: 'Every unit inspected against written acceptance criteria, then supported through regional offices in Berlin, Daejeon, and Hyderabad and authorized partners worldwide.',
  },
]

function EngineeringModel() {
  return (
    <RevealGroup as="div" className="story">
      <RevealItem as="div" className="story-steps">
        {steps.map((step) => (
          <div className="step" key={step.tag}>
            <div className="tag">{step.tag}</div>
            <b>{step.title}</b>
            <p>{step.body}</p>
          </div>
        ))}
      </RevealItem>

      <RevealItem as="div" className="photo-card">
        <div className="ph">
          <img
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80"
            alt="Production engineer performing QA"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <div className="cap">FIG. 02 — QUALIFIED PRODUCTION & UNIT-LEVEL QA · SHENZHEN FACILITY</div>
      </RevealItem>
    </RevealGroup>
  )
}

export default EngineeringModel
