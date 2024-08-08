import Home from "../pages/Home.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import MyCart from "../pages/MyCart.jsx";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
