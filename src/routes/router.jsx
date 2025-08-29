import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import ErrorPage from "../pages/404";
import ProductsPage from "../pages/products";
import ProfilePage from "../pages/profile";
import ProtectedRoute from "./ProtectedRoute";
import DetailProductPage from "../pages/detailProduct";

const router = createBrowserRouter([
  { path: "/", element: <h1>Hello World</h1>, errorElement: <ErrorPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/profile", element: <ProfilePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/product/:productId", element: <DetailProductPage /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
