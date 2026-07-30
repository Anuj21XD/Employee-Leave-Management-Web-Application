import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";
import ApplyLeave from "../pages/Employee/ApplyLeave";
import ManagerDashboard from "../pages/Manager/ManagerDashboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Navigate to="/" replace />} />

        {/* Employee */}
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route
          path="/employee/apply-leave"
          element={<ApplyLeave />}
        />

        {/* Manager */}
        <Route path="/manager" element={<ManagerDashboard />} />

        {/* Invalid Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;