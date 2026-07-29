import LeaveBalance from "../../components/employee/LeaveBalance";
import QuickActions from "../../components/employee/QuickActions";
import RecentLeaves from "../../components/employee/RecentLeaves";


const EmployeeDashboard = () => {
  return (
    <div
      style={{
        width: "90%",
        padding: "40px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#2563eb",
          marginBottom: "8px",
        }}
      >
        Employee Dashboard
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#6b7280",
          marginTop: "10px",
          marginBottom: "40px",
        }}
      >
        Welcome back!
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
          Leave Balance
        </h2>
        <LeaveBalance />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1e3a8a",
            marginBottom: "40px",
          }}
        >
          Quick Actions
        </h2>
        <QuickActions />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1e3a8a",
            marginBottom: "40px",
          }}
        >
          Recent Leave Requests
        </h2>
        <RecentLeaves />
      </section>
    </div>
  );
};

export default EmployeeDashboard;
