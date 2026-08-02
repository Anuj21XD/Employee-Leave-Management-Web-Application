import { useState } from "react";
import {
  approveLeave,
  getPendingLeaves,
  rejectLeave,
} from "../../services/leaveService";

const LeaveRequestsTable = () => {
  const [requests, setRequests] = useState(getPendingLeaves());

  const handleApprove = (id: number) => {
    approveLeave(id);
    setRequests(getPendingLeaves());
  };

  const handleReject = (id: number) => {
    rejectLeave(id);
    setRequests(getPendingLeaves());
  };

  if (requests.length === 0) {
    return (
      <p
        style={{
          color: "#6b7280",
          fontSize: "17px",
        }}
      >
        No pending leave requests.
      </p>
    );
  }

  return (
    <table
      className="leave-table"
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>Employee</th>
          <th>Leave Type</th>
          <th>From</th>
          <th>To</th>
          <th>Days</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {requests.map((leave) => (
          <tr key={leave.id}>
            <td>{leave.employeeName}</td>

            <td>{leave.leaveType}</td>

            <td>{leave.startDate}</td>

            <td>{leave.endDate}</td>

            <td>{leave.numberOfDays}</td>

            <td>{leave.reason}</td>

            <td>
              <span
                style={{
                  background: "#fef3c7",
                  color: "#92400e",
                  padding: "5px 10px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                }}
              >
                {leave.status}
              </span>
            </td>

            <td>
              <div
                style={{
                  display: "flex",
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
                    cursor: "pointer",
                  }}
                >
                  Approve
                </button>

                <button
                  onClick={() => handleReject(leave.id)}
                  style={{
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Reject
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaveRequestsTable;