import Hero from '../components/home/Hero'
import Facts from '../components/home/Facts'
import ProductLedger from '../components/home/ProductLedger'
import OurModel from '../components/home/OurModel'
import Flagships from '../components/home/Flagships'
import GlobalDirectory from '../components/home/GlobalDirectory'
import DeploymentGallery from '../components/home/DeploymentGallery'
import CtaBanner from '../components/home/CtaBanner'

// Homepage: composes every marketing section in on-page order. Header/Footer
// are rendered once by the root Layout route. Takes no props.
function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <ProductLedger />
      <OurModel />
      <Flagships />
      <GlobalDirectory />
      <DeploymentGallery />
      <CtaBanner />
    </>
  )
}

export default Home
