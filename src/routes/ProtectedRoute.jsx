// src/components/Fragments/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const ProtectedRoute = () => {
  const { isLoggedIn, username, isLoading } = useLogin();

  if (isLoading) {
    // Arahkan ke halaman login jika pengguna belum login
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    // Arahkan ke halaman login jika pengguna belum login
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, lanjutkan ke rute anak-anak
  // dan teruskan data username melalui context
  return <Outlet context={{ username }} />;
};

export default ProtectedRoute;
