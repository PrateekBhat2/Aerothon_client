import Navbar from "./components/Navbar";
import TravelInfo from "./components/TravelInfo";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/errorPage";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";

export default function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TravelInfo />,
      errorElement: <ErrorPage />
    },
    {
      path: "/AboutUs",
      element: <AboutUs />
    },
    {
      path: "Product",
      element: <Product />
    }
  ])

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}
