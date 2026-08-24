import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, fadeUpReduced } from '../../lib/motion'

// Shared sub-page header band: doc-reference line, eyebrow, headline, and
// intro copy. Reuses the homepage hero's blueprint styling in a single
// column (no hero-grid/draw-box), so every inner page opens the same way.
// Fades/slides in once on mount (above the fold, so not scroll-triggered).
// Props: refLine (string), eyebrow (string), title (node), description (node).
function PageHeader({ refLine, eyebrow, title, description }) {
  const reduced = useReducedMotion()
  return (
    <motion.header
      className="hero grid-bg"
      initial="hidden"
      animate="visible"
      variants={reduced ? fadeUpReduced : fadeUp}
    >
      <div className="wrap" style={{ paddingBottom: 64 }}>
        <div className="ref">{refLine}</div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p style={{ maxWidth: 640 }}>{description}</p>
      </div>
    </motion.header>
  )
}

export default PageHeader
