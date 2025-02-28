import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import UnderConstruction from "../Components/UnderConstruction";
import Services from "../Pages/Services/Services ";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      { path: "*", element: <UnderConstruction /> },
    ],
  },
]);
