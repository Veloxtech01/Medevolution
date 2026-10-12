import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/clinical/Hero'
import Standards from '../components/clinical/Standards'
import Products from '../components/clinical/Products'
import Technology from '../components/clinical/Technology'
import Quality from '../components/clinical/Quality'
import FieldStrip from '../components/clinical/FieldStrip'
import GlobalReach from '../components/clinical/GlobalReach'
import Cta from '../components/clinical/Cta'
import '../styles/clinical.css'

// Homepage: a port of the "Clinical Precision" template, composed in the
// template's own order. It used to ship the template's own <Nav> and a
// <Footer>; both are gone — the route now nests under the shared Layout, so
// the site-wide Header/Footer render once around it like every other page.
// Everything stays inside the `.clinical` wrapper, which scopes the
// template's tokens and fonts to this page only. Takes no props.
function Home() {
  const location = useLocation()

  // Direct/campaign URLs like /#technology can't rely on the browser's native
  // hash jump: it fires before React has rendered the sections, so the page
  // stays at the top. Scroll manually once mounted (same pattern as the
  // Products page). `.clinical section[id]` carries scroll-margin-top so the
  // target clears the sticky nav.
  useEffect(() => {
    if (!location.hash) return
    const target = document.querySelector(location.hash)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location])

  return (
    <div className="clinical">
      <Hero />
      <Standards />
      <Products />
      <Technology />
      <Quality />
      <FieldStrip />
      <GlobalReach />
      <Cta />
    </div>
  )
}

export default Home
