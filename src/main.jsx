import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "./Pages/Projects/Projects";
import { projectsShowcase } from "./globalStore";
import Contact from "./Pages/Contact/Contact";
import Nav from "./Components/Nav/Layout";
import { subPages } from "./Pages/SubPage/SubPageData";
import SubPage from "./Pages/SubPage/SubPage";

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
        path: "/projects/:projectId",
        element: <Projects />,
        loader: ({ params }) => {
          return projectsShowcase[params.projectId];
        },
      },
      {
        path: "/subPage/:subPageId",
        element: <SubPage />,
        loader: ({ params }) => {
          return subPages[params.subPageId];
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);
