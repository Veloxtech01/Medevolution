import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, fadeUpReduced, staggerContainer, staggerContainerReduced } from '../../lib/motion'

// Single-block scroll-reveal: fades/slides the wrapped content in once it
// enters the viewport. `as` picks the rendered tag (default div) so it can
// wrap a <section>/<header> without adding an extra layout-affecting node.
// Animates once (viewport.once) — never re-triggers scrolling back up.
export function Reveal({ children, as = 'div', className, ...props }) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={reduced ? fadeUpReduced : fadeUp}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

// Stagger container: pair with <RevealItem> children to fade/slide each one
// in with a short delay between them as the group enters the viewport.
export function RevealGroup({ children, as = 'div', className, ...props }) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={reduced ? staggerContainerReduced : staggerContainer}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

// One staggered child of a <RevealGroup>. Inherits the "visible" trigger
// from the parent's variants via Framer Motion's variant propagation — no
// viewport logic of its own.
export function RevealItem({ children, as = 'div', className, ...props }) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]
  return (
    <MotionTag className={className} variants={reduced ? fadeUpReduced : fadeUp} {...props}>
      {children}
    </MotionTag>
  )
}
