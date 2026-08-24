import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Header from './Header'
import Footer from './Footer'
import { pageTransition, pageTransitionReduced } from '../../lib/motion'

// Snaps the viewport to the top after a route's exit animation finishes
// (AnimatePresence's onExitComplete — fires for both link clicks and
// browser back/forward, since both just change location.pathname). Explicit
// `behavior: 'instant'` overrides index.css's global `scroll-behavior:
// smooth`, which would otherwise animate this reset visibly under the
// incoming page's fade-in. Runs before the new page mounts, so a page like
// Products that scrolls itself to a #hash target on mount still wins.
function resetScroll() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

// Root layout route: renders Header/Footer once (instead of every page
// duplicating them) and crossfades the routed page inside <Outlet/> between
// navigations. Keyed by pathname so AnimatePresence treats each route as a
// distinct element to exit/enter. Takes no props.
function Layout() {
  const location = useLocation()
  const reduced = useReducedMotion()

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" onExitComplete={resetScroll}>
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={reduced ? pageTransitionReduced : pageTransition}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default Layout
