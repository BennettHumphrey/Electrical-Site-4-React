import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home/Home';
import Nav from './Components/Nav/Nav';
import { ParallaxProvider } from 'react-scroll-parallax';
import Projects from './Pages/Projects/Projects';
import { projectsShowcase } from './globalStore';
import Contact from './Pages/Contact/Contact';



// TODO:
// Look into autoanimate
   // https://auto-animate.formkit.com/
// Look into pnpm/yarn



const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: '/projects/:projectId',
        element: <Projects  />,
        loader: ({ params }) => {
          return projectsShowcase[params.projectId]
        }
      }
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
)
