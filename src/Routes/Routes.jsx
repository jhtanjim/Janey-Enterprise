import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import UnderConstruction from "../Components/UnderConstruction";
import Services from "../Pages/Services/Services ";

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

      { path: "*", element: <UnderConstruction /> },
    ],
  },
]);
