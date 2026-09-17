import { Outlet, Navigate } from "react-router-dom";
import { UseAuthStore } from "../store/ZustandStore";

const ProtectedRoute = () => {
  const token = UseAuthStore((state) => state.token);
  if (!token) {
    return <Navigate to={"/register"} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
