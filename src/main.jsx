import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  />,
  },
  // {
  //   path: "/subPage/:subPageId",
  //   element: <SubPage  />,
  //   loader: ({params}) => {
  //     return subPages[params.subPageId];
  //   }
  // },
  {
    path: "/contact",
  element: <Contact  />
},
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
