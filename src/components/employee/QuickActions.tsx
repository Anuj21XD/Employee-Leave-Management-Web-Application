import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <button
        onClick={() => navigate("/employee/apply-leave")}
        style={{
          padding: "12px 24px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Apply Leave
      </button>

      <button
        type="button"
        onClick={() => navigate("/employee/leave-history")}
        style={{
          padding: "12px 24px",
          backgroundColor: "#6b7280",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Leave History
      </button>
    </div>
  );
};

export default QuickActions;
