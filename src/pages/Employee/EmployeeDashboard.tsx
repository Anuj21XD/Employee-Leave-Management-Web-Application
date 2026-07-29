import LeaveBalance from "../../components/employee/LeaveBalance";

const EmployeeDashboard = () => {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1>Employee Dashboard</h1>

      <p>Welcome back!</p>

      <section style={{ marginTop: "2rem" }}>
       <h2>Leave Balance</h2>
       <LeaveBalance />
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Quick Actions</h2>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Recent Leave Requests</h2>
      </section>
    </div>
  );
};

export default EmployeeDashboard;