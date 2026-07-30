import LeaveHistoryTable from "../../components/leave/LeaveHistoryTable";
import { useNavigate } from "react-router-dom";


const LeaveHistory = () => {
  const navigate = useNavigate();  
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "30px",
      }}
    >
      <button
        onClick={() => navigate("/employee")}
        style={{
          marginBottom: "20px",
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Back to Dashboard
      </button>

      <h1
        style={{
          color: "#1e40af",
          fontSize: "38px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Leave History
      </h1>

      <p
        style={{
          color: "#6b7280",
          fontSize: "17px",
          marginBottom: "35px",
        }}
      >
        View all your submitted leave requests.
      </p>

      <LeaveHistoryTable />
    </div>
  );
};

export default LeaveHistory;
