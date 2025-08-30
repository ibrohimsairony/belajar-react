import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import ErrorPage from "../pages/404";
import ProductsPage from "../pages/products";
import ProfilePage from "../pages/profile";
import ProtectedRoute from "./ProtectedRoute";
import DetailProductPage from "../pages/detailProduct";
import Navbar from "../components/layouts/Navbar";
import UseIdPage from "../pages/learn/UseIdPage";
import MemoPage from "../pages/learn/MemoPage";
import UseMemoPage from "../pages/learn/UseMemoPage";

const router = createBrowserRouter([
  { path: "/", element: <h1>Hello World</h1>, errorElement: <ErrorPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Navbar />,

        children: [
          { path: "/profile", element: <ProfilePage /> },
          { path: "/products", element: <ProductsPage /> },
          { path: "/product/:productId", element: <DetailProductPage /> },
        ],
      },
    ],
  },

  { path: "/register", element: <RegisterPage /> },
  { path: "/learn/useId", element: <UseIdPage /> },
  { path: "/learn/memo", element: <MemoPage /> },
  { path: "/learn/usememo", element: <UseMemoPage /> },
]);

export default router;
