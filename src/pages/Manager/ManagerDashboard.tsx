import DashboardCards from "../../components/manager/DashboardCards";
import LeaveRequestsTable from "../../components/manager/LeaveRequestsTable";
import LogoutButton from "../../components/common/LogoutButton";

const ManagerDashboard = () => {
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

      <section style={{ marginTop: "3rem" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1e3a8a",
            marginBottom: "40px",
          }}
        >
          Pending Leave Requests
        </h2>

        <LeaveRequestsTable />
      </section>
    </div>
  );
};

export default ManagerDashboard;
