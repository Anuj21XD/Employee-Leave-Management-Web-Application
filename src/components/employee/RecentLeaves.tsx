const RecentLeaves = () => {
  const requests = [
    {
      type: "Casual Leave",
      from: "28 Jul 2026",
      status: "Pending",
    },
    {
      type: "Sick Leave",
      from: "15 Jul 2026",
      status: "Approved",
    },
    {
      type: "Earned Leave",
      from: "01 Jul 2026",
      status: "Rejected",
    },
  ];

  return (
    <table
      className= "leave-table"
      style={{
        width: "100%",
        marginTop: "1rem",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th style={{color: "#1e3a8a", fontSize: "18px", fontWeight: "700", width: "40%", textAlign: "left" }}>Leave Type</th>
          <th style={{color: "#1e3a8a", fontSize: "18px", fontWeight: "700", width: "30%", textAlign: "center" }}>Date</th>
          <th style={{color: "#1e3a8a", fontSize: "18px", fontWeight: "700", width: "30%", textAlign: "center" }}>Status</th>
        </tr>
      </thead>

      <tbody>
        {requests.map((leave, index) => (
          <tr key={index}>
            <td
              style={{
                padding: "18px 0",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "left",
                width: "40%",
              }}
            >
              {leave.type}
            </td>

            <td
              style={{
                padding: "18px 0",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
                width: "30%",
              }}
            >
              {leave.from}
            </td>

            <td
              style={{
                padding: "18px 0",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
                width: "30%",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  backgroundColor:
                    leave.status === "Approved"
                      ? "#dcfce7"
                      : leave.status === "Pending"
                        ? "#fef3c7"
                        : "#fee2e2",
                  color:
                    leave.status === "Approved"
                      ? "#166534"
                      : leave.status === "Pending"
                        ? "#92400e"
                        : "#991b1b",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {leave.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentLeaves;
