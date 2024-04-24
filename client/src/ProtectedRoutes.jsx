import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  return currentUser === null ? (
    <Navigate to="/signin" replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoutes;
