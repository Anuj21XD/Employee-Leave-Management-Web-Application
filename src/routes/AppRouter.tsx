import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";
import ApplyLeave from "../pages/Employee/ApplyLeave";
import ManagerDashboard from "../pages/Manager/ManagerDashboard";
import LeaveHistory from "../pages/Employee/LeaveHistory";
import ProtectedRoute from "./ProtectedRoute";
import ManagerReviewPage from "../pages/Manager/ManagerReviewPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Navigate to="/" replace />} />

        {/* Employee */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRole="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/apply-leave"
          element={
            <ProtectedRoute allowedRole="employee">
              <ApplyLeave />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/leave-history"
          element={
            <ProtectedRoute allowedRole="employee">
              <LeaveHistory />
            </ProtectedRoute>
          }
        />

        {/* Manager */}
        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRole="manager">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager/review-requests"
          element={
            <ProtectedRoute allowedRole="manager">
              <ManagerReviewPage />
            </ProtectedRoute>
          }
        />

        {/* Invalid Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
