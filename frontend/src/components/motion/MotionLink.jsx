import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

// React Router's <Link>, upgraded to a motion component (via motion.create)
// so it accepts whileHover/whileTap/variants like any other motion element.
// Used for CTA buttons and links that need the shared hoverLift interaction.
const MotionLink = motion.create(Link)

export default MotionLink
