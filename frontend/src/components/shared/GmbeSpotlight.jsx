import { Reveal } from '../motion/Reveal'

// Featured Africa distributor callout (GS Medics Biomedical Engineering
// Ltd), shared between the homepage teaser and the Become a Distributor
// page. `children`, if given, renders as a trailing CTA under the copy —
// each page decides what that CTA should point to.
function GmbeSpotlight({ children }) {
  return (
    <Reveal as="div" className="gmbe">
      <div>
        <div className="r">FEATURED PARTNER · AFRICA — FORM MEDEV-DIST-01</div>
        <h3>GS Medics Biomedical Engineering Ltd (GMBE)</h3>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#9AA0B8' }}>
          AUTHORIZED DISTRIBUTOR · NIGERIA & WEST AFRICA
          <br />
          103 EGBE ROAD, EJIGBO, LAGOS · GMBE.NET
        </p>
      </div>
      <div>
        <p>
          GMBE delivers MedEvolution systems across Nigeria on a Design-Build-Equip-Maintain model, with offices in
          Lagos, Abuja, Port Harcourt, and Kano — providing local installation, biomedical engineering support,
          applications training, and preventive maintenance. Authorized distributors serve all six continents.
        </p>
        {children}
      </div>
    </Reveal>
  )
}

export default GmbeSpotlight
