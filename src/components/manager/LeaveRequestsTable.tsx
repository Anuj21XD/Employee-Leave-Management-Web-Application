import { approveLeave, rejectLeave } from "../../services/leaveService";
import type { Leave } from "../../models/Leave";
import { useState } from "react";

interface LeaveRequestsTableProps {
  requests: Leave[];
  refreshRequests: () => void;
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Approved":
      return {
        background: "#dcfce7",
        color: "#15803d",
      };

    case "Rejected":
      return {
        background: "#fee2e2",
        color: "#b91c1c",
      };

    case "Cancelled":
      return {
        background: "#e5e7eb",
        color: "#4b5563",
      };

    default:
      return {
        background: "#fef3c7",
        color: "#92400e",
      };
  }
};

const LeaveRequestsTable = ({
  requests,
  refreshRequests,
}: LeaveRequestsTableProps) => {
  const [showRejectModal, setShowRejectModal] = useState(false);

  const [selectedLeaveId, setSelectedLeaveId] = useState<number | null>(null);

  const [rejectionReason, setRejectionReason] = useState("");
  const handleApprove = (id: number) => {
    approveLeave(id);
    refreshRequests();
  };

  const handleRejectClick = (id: number) => {
    setSelectedLeaveId(id);
    setRejectionReason("");
    setShowRejectModal(true);
  };

  const confirmReject = () => {
    if (!rejectionReason.trim()) {
      alert("Please enter a rejection reason.");
      return;
    }

    if (selectedLeaveId !== null) {
      rejectLeave(selectedLeaveId, rejectionReason);

      refreshRequests();
    }

    setShowRejectModal(false);
    setSelectedLeaveId(null);
    setRejectionReason("");
  };

  if (requests.length === 0) {
    return (
      <p
        style={{
          color: "#6b7280",
          fontSize: "17px",
        }}
      >
        No leave requests found.
      </p>
    );
  }

  return (
    <>
    <table
      className="leave-table"
      style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "white",
      }}
    >
      <thead
        style={{
          background: "#eff6ff",
        }}
      >
        <tr>
          <th style={headerStyle}>Employee</th>
          <th style={headerStyle}>Leave Type</th>
          <th style={headerStyle}>From</th>
          <th style={headerStyle}>To</th>
          <th style={headerStyle}>Days</th>
          <th style={headerStyle}>Reason</th>
          <th style={headerStyle}>Applied On</th>
          <th style={headerStyle}>Status</th>
          <th style={headerStyle}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {requests.map((leave) => (
          <tr key={leave.id}>
            <td style={cellStyle}>{leave.employeeName}</td>
            <td style={cellStyle}>{leave.leaveType}</td>
            <td style={cellStyle}>{leave.startDate}</td>
            <td style={cellStyle}>{leave.endDate}</td>
            <td style={cellStyle}>{leave.numberOfDays}</td>
            <td
              style={{
                ...cellStyle,
                maxWidth: "200px",
              }}
              title={leave.reason}
            >
              <div
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {leave.reason}
              </div>
            </td>
            <td style={cellStyle}> {leave.appliedOn} </td>

            <td style={cellStyle}>
              <span
                style={{
                  ...getStatusStyle(leave.status),
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  display: "inline-block",
                  minWidth: "90px",
                  textAlign: "center",
                }}
              >
                {leave.status}
              </span>
            </td>

            <td
              style={{
                ...cellStyle,
                textAlign: "center",
              }}
            >
              {leave.status === "Pending" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() => handleApprove(leave.id)}
                    style={{
                      background: "#22c55e",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleRejectClick(leave.id)}
                    style={{
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Reject
                  </button>
                </div>
              ) : (
                <span
                  style={{
                    color: "#9ca3af",
                    fontWeight: "600",
                  }}
                >
                  —
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {showRejectModal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.45)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        width: "450px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#1e3a8a",
        }}
      >
        Reject Leave Request
      </h2>

      <label
        style={{
          display: "block",
          fontWeight: "600",
          marginBottom: "8px",
        }}
      >
        Rejection Reason <span style={{ color: "red" }}>*</span>
      </label>

      <textarea
        rows={4}
        value={rejectionReason}
        onChange={(e) => setRejectionReason(e.target.value)}
        placeholder="Enter the reason for rejecting this leave request..."
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          resize: "vertical",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
        }}
      >
        <button
          onClick={() => {
            setShowRejectModal(false);
            setSelectedLeaveId(null);
            setRejectionReason("");
          }}
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            background: "#9ca3af",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Cancel
        </button>

        <button
          onClick={confirmReject}
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            background: "#dc2626",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Reject Leave
        </button>
      </div>
    </div>
  </div>
)} </>
);
  
};

const headerStyle = {
  padding: "18px",
  color: "#1e3a8a",
  fontSize: "17px",
  fontWeight: "700",
  textAlign: "center" as const,
};

const cellStyle = {
  padding: "18px",
  borderBottom: "1px solid #e5e7eb",
  textAlign: "center" as const,
};

export default LeaveRequestsTable;
