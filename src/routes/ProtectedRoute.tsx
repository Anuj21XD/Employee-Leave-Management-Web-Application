import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRole: "employee" | "manager";
}

const ProtectedRoute = ({
  children,
  allowedRole,
}: ProtectedRouteProps) => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  // Not logged in
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  // Wrong role
  if (currentUser.role !== allowedRole) {
    if (currentUser.role === "employee") {
      return <Navigate to="/employee" replace />;
    }

    return <Navigate to="/manager" replace />;
  }

  return children;
};

export default ProtectedRoute;