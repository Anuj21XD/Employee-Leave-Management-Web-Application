const QuickActions = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <button
        style={{
           padding: "12px 24px",
           backgroundColor: "#2563eb",
           color: "white",
           border: "none",
           borderRadius: "8px",
           cursor: "pointer",
           fontWeight: "bold",}}
      >
        Apply Leave
      </button>

      <button
        style={{
           padding: "12px 24px",
           backgroundColor: "#6b7280",
           color: "white",
           border: "none",
           borderRadius: "8px",
           cursor: "pointer",
           fontWeight: "bold",}}
      >
        Leave History
      </button>
    </div>
  );
};

export default QuickActions;