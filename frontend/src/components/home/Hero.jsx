import { motion, useReducedMotion } from 'motion/react'
import MotionLink from '../motion/MotionLink'
import { fadeUp, fadeUpReduced, staggerContainer, staggerContainerReduced, hoverLift } from '../../lib/motion'

// Homepage hero: headline, intro copy, primary CTAs, and the annotated
// "engineering drawing" style photo panel. Staged entrance animation (ref
// line -> eyebrow -> heading -> copy -> buttons -> photo panel) plays once
// on mount, since this is above the fold. Takes no props.
function Hero() {
  const reduced = useReducedMotion()
  const container = reduced ? staggerContainerReduced : staggerContainer
  const item = reduced ? fadeUpReduced : fadeUp

  return (
    <motion.header className="hero grid-bg" initial="hidden" animate="visible" variants={container}>
      <div className="wrap hero-grid">
        <div>
          <motion.div className="ref" variants={item}>
            EST. 1990 · CAMBRIDGE, MA · DOC. MEDEV-WEB-2026 REV 2.0
          </motion.div>
          <motion.div className="eyebrow" variants={item}>
            US Medical Equipment Manufacturer · 14 Product Lines
          </motion.div>
          <motion.h1 variants={item}>
            Built to a <u>written standard.</u>
            <br />
            Since 1990.
          </motion.h1>
          <motion.p variants={item}>
            MedEvolution Inc is a US-based medical equipment manufacturer: fourteen product lines across four
            divisions, engineered from Cambridge, Massachusetts, produced in Shenzhen, and released only after
            unit-level QA.
          </motion.p>
          <motion.div className="hero-btns" variants={item}>
            <MotionLink to="/products" className="btn btn-blue" {...hoverLift}>
              View All 14 Product Lines
            </MotionLink>
            <MotionLink to="/our-standard" className="btn btn-line" {...hoverLift}>
              How We Build
            </MotionLink>
          </motion.div>
        </div>

        <motion.div className="draw-box" variants={item}>
          <div className="corner tl" />
          <div className="corner tr" />
          <div className="corner bl" />
          <div className="corner br" />
          <div className="ph">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80"
              alt="Diagnostic imaging suite"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
          <div className="draw-label">
            <span>FIG. 01 — DEPLOYED IMAGING SUITE / LINE 02 · ME-MI</span>
            <span>EST. 1990</span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Hero
