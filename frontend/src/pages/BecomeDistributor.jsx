import PageHeader from '../components/shared/PageHeader'
import GmbeSpotlight from '../components/shared/GmbeSpotlight'
import PartnerBenefits from '../components/distributor/PartnerBenefits'
import DistributorForm from '../components/distributor/DistributorForm'
import { Reveal } from '../components/motion/Reveal'

// Become a Distributor: partner benefits, the GMBE (Nigeria/West Africa)
// spotlight as a worked example, and the partnership inquiry form.
// Header/Footer are rendered once by the root Layout route. Takes no props.
function BecomeDistributor() {
  return (
    <>
      <PageHeader
        refLine="DOC. MEDEV-CP-2026 · SEC. 05"
        eyebrow="Distribution Network · Present on Every Continent"
        title="Distribute a brand built on documentation."
        description="MedEvolution systems reach hospitals and diagnostic centres through a network of authorized distributors spanning North America, South America, Europe, Asia, Africa, and Oceania."
      />
      <PartnerBenefits />

      <section className="ledger-sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="eyebrow">Featured Partner — Africa</div>
            <h2>A worked example: GMBE, Nigeria & West Africa.</h2>
          </Reveal>
          <GmbeSpotlight>
            <a
              href="mailto:sales@gmbe.net"
              style={{ display: 'inline-block', marginTop: 14, fontSize: 14, fontWeight: 600, color: 'var(--color-blue)' }}
            >
              sales@gmbe.net →
            </a>
          </GmbeSpotlight>
        </div>
      </section>

      <DistributorForm />
    </>
  )
}

export default BecomeDistributor
