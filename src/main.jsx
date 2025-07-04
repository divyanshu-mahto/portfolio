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
import Home from './pages/Home.jsx'
import Project_Peep from './pages/Project_Peep.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: "/projects/dumbqr",
    element: <Project_Dumbqr />
  },
  {
    path: "/projects/peep",
    element: <Project_Peep />
  },
  {
    path: "/projects/email-service-springboot",
    element: <Project_AWS_SES />
  },
  {
    path: "/projects/minuteglass",
    element: <Project_MinuteGlass />
  },
  {
    path: "/resume",
    element: <Resume />
  },
],
{
  basename: "/"
}
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
