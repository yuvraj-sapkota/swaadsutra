import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (
    token &&
    (location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/")
  ) {
    return <Navigate to="dashboard" />;
  }
  return <Outlet />;
};

export default PublicRoute;
