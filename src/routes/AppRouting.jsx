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
  const router = createBrowserRouter([
    {
      path: "/smart-villa/",
      element: <LayoutApp />,
      children: [
        {
          path: "/smart-villa/",
          element: <Home />,
        },
        {
          path: "/smart-villa/about",
          element: <About />,
        },
        {
          path: "/smart-villa/services",
          element: <ServicesPage />,
        },
        {
          path: "/smart-villa/property",
          element: <Property />,
        },
        {
          path: "/smart-villa/property/featureDetails/:id",
          element: <FeatureDetails />,
        },
        {
          path: "/smart-villa/blog",
          element: <Blogs />,
        },
        {
          path: "/smart-villa/saved",
          element: <SavedProperty />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouting;
