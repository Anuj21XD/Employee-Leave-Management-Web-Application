import { useState } from "react";
import {
  getLeavesByEmployee,
  cancelLeave,
} from "../../services/leaveService";
import type { Leave } from "../../models/Leave";
import type { User } from "../../models/User";

const LeaveHistoryTable = () => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  ) as User;

  const [leaves, setLeaves] = useState<Leave[]>(
    getLeavesByEmployee(currentUser.id)
  );

  const handleCancel = (id: number) => {
    cancelLeave(id);
    setLeaves(getLeavesByEmployee(currentUser.id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "#16a34a";

      case "Rejected":
        return "#dc2626";

      case "Cancelled":
        return "#6b7280";

      default:
        return "#d97706";
    }
  };

  if (leaves.length === 0) {
    return (
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h2>No Leave Requests Found</h2>

        <p style={{ color: "#6b7280" }}>
          You haven't submitted any leave requests yet.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        overflowX: "auto",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead
          style={{
            background: "#eff6ff",
          }}
        >
          <tr>
            <th style={headerStyle}>Leave Type</th>
            <th style={headerStyle}>Start Date</th>
            <th style={headerStyle}>End Date</th>
            <th style={headerStyle}>Days</th>
            <th style={headerStyle}>Reason</th>
            <th style={headerStyle}>Applied On</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td style={cellStyle}>{leave.leaveType}</td>
              <td style={cellStyle}>{leave.startDate}</td>
              <td style={cellStyle}>{leave.endDate}</td>
              <td style={cellStyle}>{leave.numberOfDays}</td>
              <td style={cellStyle}>{leave.reason}</td>
              <td style={cellStyle}>{leave.appliedOn}</td>

              <td style={cellStyle}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      background: getStatusColor(leave.status),
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontWeight: "bold",
                      fontSize: "14px",
                      minWidth: "95px",
                      textAlign: "center",
                    }}
                  >
                    {leave.status}
                  </span>

                  {leave.status === "Rejected" &&
                    leave.rejectionReason && (
                      <div
                        style={{
                          background: "#fef2f2",
                          border: "1px solid #fecaca",
                          color: "#991b1b",
                          borderRadius: "8px",
                          padding: "8px",
                          fontSize: "12px",
                          textAlign: "center",
                          maxWidth: "220px",
                          lineHeight: "1.4",
                        }}
                      >
                        <strong>Reason:</strong>
                        <br />
                        {leave.rejectionReason}
                      </div>
                    )}
                </div>
              </td>

              <td style={cellStyle}>
                {leave.status === "Pending" ? (
                  <button
                    onClick={() => handleCancel(leave.id)}
                    style={{
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Cancel
                  </button>
                ) : (
                  <span style={{ color: "#9ca3af" }}>—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const headerStyle = {
  padding: "16px",
  textAlign: "left" as const,
  borderBottom: "1px solid #d1d5db",
  color: "#1e3a8a",
  fontWeight: "bold",
};

const cellStyle = {
  padding: "16px",
  borderBottom: "1px solid #e5e7eb",
};

export default LeaveHistoryTable;