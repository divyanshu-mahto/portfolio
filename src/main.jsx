import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import NotFoundErrorPage from './pages/NotFoundErrorPage.jsx'
import Project_Dumbqr from './pages/Project_Dumbqr.jsx'
import Project_AWS_SES from './pages/Project_AWS_SES.jsx'
import Project_GTFS from './pages/Project_GTFS.jsx'
import Project_URL_shortener from './pages/Project_URL_shortener.jsx'
import Project_MinuteGlass from './pages/Project_MinuteGlass.jsx'
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <About />,
    errorElement: <NotFoundErrorPage />
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: "/projects/dumbqr",
    element: <Project_Dumbqr />
  },
  {
    path: "/projects/email-service-springboot",
    element: <Project_AWS_SES />
  },
  {
    path: "/projects/trip-planner-gtfs-neo4j",
    element: <Project_GTFS />
  },
  {
    path: "/projects/minuteglass",
    element: <Project_MinuteGlass />
  },
  {
    path: "/projects/url-shortener",
    element: <Project_URL_shortener />
  },
  {
    path: "/resume",
    element: <Resume />
  },
],
{
  basename: "/portfolio"
}
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
