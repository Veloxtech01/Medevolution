import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import OurStandard from './pages/OurStandard'
import GlobalPresence from './pages/GlobalPresence'
import BecomeDistributor from './pages/BecomeDistributor'
import Contact from './pages/Contact'

// Central route table (per project convention: all routes live here, no
// second <Routes> tree elsewhere). Every route nests under the shared
// Layout, which renders Header/Footer once and crossfades between pages.
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/our-standard', element: <OurStandard /> },
      { path: '/global-presence', element: <GlobalPresence /> },
      { path: '/become-a-distributor', element: <BecomeDistributor /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

// App root: mounts the router plus the single shared toast host used by
// every page's forms.
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </>
  )
}

export default App
