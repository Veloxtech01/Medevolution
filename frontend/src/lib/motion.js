// Shared Framer Motion (the `motion` package) timing, easing, and variant
// constants. Every animated component imports from here instead of
// hand-rolling its own variants, so the site's motion language stays
// consistent (subtle fade/translate, no spring overshoot — matches the
// site's precise/technical visual style).

// Custom ease curve (a gentle "ease-out-expo") used for every animation.
export const EASE = [0.16, 1, 0.3, 1]

// Single-element fade-up, used by <Reveal> and standalone motion elements.
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

// Reduced-motion fallback for fadeUp: opacity only, shorter duration, no
// translate — used when the visitor has prefers-reduced-motion enabled.
export const fadeUpReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}

// Stagger container for groups of fadeUp children (<RevealGroup>/<RevealItem>
// and Hero's staged entrance).
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

// Reduced-motion fallback: no stagger delay between children.
export const staggerContainerReduced = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
}

// Route crossfade variants for the root Layout's <Outlet/> wrapper.
export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: EASE } },
}

// Reduced-motion fallback: opacity-only, faster.
export const pageTransitionReduced = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

// Hover/tap lift used on primary CTA buttons and cards.
export const hoverLift = {
  whileHover: { y: -3 },
  whileTap: { y: 0, scale: 0.98 },
  transition: { duration: 0.15, ease: EASE },
}
