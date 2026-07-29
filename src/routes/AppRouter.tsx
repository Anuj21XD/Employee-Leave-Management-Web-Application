import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import EmployeeDashboard from "../pages/Employee/EmployeeDashboard";
import ManagerDashboard from "../pages/Manager/ManagerDashboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/manager" element={<ManagerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;