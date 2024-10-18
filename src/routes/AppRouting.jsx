import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutApp from "../app/LayoutApp";
import Home from "../pages/Home";
import About from "../pages/About";
import ServicesPage from "../pages/ServicesPage";
import Property from "../pages/Property";
import Blogs from "../pages/Blogs";
import FeatureDetails from "../pages/FeatureDetails";
import SavedProperty from "../pages/SavedProperty";

const AppRouting = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LayoutApp />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/services",
            element: <ServicesPage />,
          },
          {
            path: "/property",
            element: <Property />,
          },
          {
            path: "/property/featureDetails/:id",
            element: <FeatureDetails />,
          },
          {
            path: "/blog",
            element: <Blogs />,
          },
          {
            path: "/saved",
            element: <SavedProperty />,
          },
        ],
      },
    ],
    {
      basename: "/smart-villa/",
    }
  );

  return <RouterProvider router={router} />;
};

export default AppRouting;
