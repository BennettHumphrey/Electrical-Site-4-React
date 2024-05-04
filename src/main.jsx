import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home/Home';
import Contact from './Components/Contact';
import Nav from './Components/Nav/Nav';
import { ParallaxProvider } from 'react-scroll-parallax';



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
