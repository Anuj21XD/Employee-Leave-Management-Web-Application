const LeaveBalance = () => {
  const balances = [
    { title: "Casual Leave", days: 8 },
    { title: "Sick Leave", days: 12 },
    { title: "Earned Leave", days: 15 },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        marginTop: "1.5rem",
      }}
    >
      {balances.map((leave) => (
        <div
          key={leave.title}
          className="leave-card"
          style={{
            flex: 1,
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "24px",
            minWidth: "200px",
            minHeight: "130px",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{
              margin: "0 0 16px",
              fontSize: "22px",
              fontWeight: "700",
              color: "#1e3a8a",
            }}
          >
            {leave.title}
          </h3>

          <p
            style={{
              margin: 0,
              fontSize: "30px",
              fontWeight: "600",
              color: "#111827",
            }}
          >
            {leave.days}
            <span
              style={{
                fontSize: "18px",
                color: "#6b7280",
                marginLeft: "6px",
                fontWeight: "500",
              }}
            >
              Days
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default LeaveBalance;
