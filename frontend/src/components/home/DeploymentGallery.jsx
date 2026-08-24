import { motion } from 'motion/react'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

// The three-image "where MedEvolution systems work" environment gallery.
const environments = [
  {
    code: 'ENV-01 — IMAGING SUITES',
    src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80',
    alt: 'Imaging suite',
  },
  {
    code: 'ENV-02 — THEATRE & ACUTE CARE',
    src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80',
    alt: 'Surgical team',
  },
  {
    code: 'ENV-03 — POINT OF CARE',
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    alt: 'Point of care',
  },
]

function DeploymentGallery() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal as="div" className="sec-head" style={{ marginBottom: 32 }}>
          <div className="eyebrow">Deployment Environments</div>
          <h2>Where MedEvolution systems work.</h2>
        </Reveal>

        <RevealGroup as="div" className="gal">
          {environments.map((env) => (
            <RevealItem as="div" key={env.code}>
              {/* overflow:hidden .ph clips the image so the hover zoom stays
                  inside the card border */}
              <div className="ph">
                <motion.img
                  src={env.src}
                  alt={env.alt}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="cap">{env.code}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default DeploymentGallery
