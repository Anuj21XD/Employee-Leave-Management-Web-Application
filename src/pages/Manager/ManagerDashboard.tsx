import DashboardCards from "../../components/manager/DashboardCards";
import LogoutButton from "../../components/common/LogoutButton";
import { useNavigate } from "react-router-dom";


const ManagerDashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div></div>

        <LogoutButton />
      </div>

      <h1
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#2563eb",
          marginBottom: "8px",
        }}
      >
        Manager Dashboard
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#6b7280",
          marginTop: "10px",
          marginBottom: "40px",
        }}
      >
        Welcome back! Review and manage employee leave requests.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1e3a8a",
            marginBottom: "40px",
          }}
        >
          Dashboard Overview
        </h2>

        <DashboardCards />
      </section>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <button
          onClick={() => navigate("/manager/review-requests")}
          style={{
            padding: "14px 24px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Review Leave Requests →
        </button>
      </div>

      
    </div>
  );
};

export default ManagerDashboard;
