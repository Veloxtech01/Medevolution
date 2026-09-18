import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import OurStandard from './pages/OurStandard'
import GlobalPresence from './pages/GlobalPresence'
import BecomeDistributor from './pages/BecomeDistributor'
import Contact from './pages/Contact'
import Maintenance from './pages/Maintenance'

// Site-wide kill switch: set VITE_MAINTENANCE_MODE=true in frontend/.env to
// take the whole site down for scheduled work, without touching the route
// table below. Read once at module load, matching how Vite inlines env vars.
const isUnderMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true'

// Central route table (per project convention: all routes live here, no
// second <Routes> tree elsewhere). Every route nests under the shared
// Layout, which renders Header/Footer once and crossfades between pages —
// except in maintenance mode, where every path resolves to the standalone
// Maintenance page instead (no Header/Footer, nothing else is reachable).
const router = createBrowserRouter(
  isUnderMaintenance
    ? [{ path: '*', element: <Maintenance /> }]
    : [
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
      ]
)

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
