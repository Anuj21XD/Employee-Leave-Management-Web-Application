import { approveLeave, rejectLeave } from "../../services/leaveService";
import type { Leave } from "../../models/Leave";

interface LeaveRequestsTableProps {
  requests: Leave[];
  refreshRequests: () => void;
}

const LeaveRequestsTable = ({
  requests,
  refreshRequests,
}: LeaveRequestsTableProps) => {
  const handleApprove = (id: number) => {
    approveLeave(id);
    refreshRequests();
  };

  const handleReject = (id: number) => {
    rejectLeave(id);
    refreshRequests();
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
          <th
            style={{
              padding: "18px",
              color: "#1e3a8a",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Employee
          </th>
          <th
            style={{
              padding: "18px",
              color: "#1e3a8a",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Leave Type
          </th>
          <th
            style={{
              padding: "18px",
              color: "#1e3a8a",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            From
          </th>
          <th
            style={{
              padding: "18px",
              color: "#1e3a8a",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            To
          </th>
          <th
            style={{
              padding: "18px",
              color: "#1e3a8a",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Days
          </th>
          <th
            style={{
              padding: "18px",
              color: "#1e3a8a",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Reason
          </th>
          <th
            style={{
              padding: "18px",
              color: "#1e3a8a",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Status
          </th>
          <th
            style={{
              padding: "18px",
              color: "#1e3a8a",
              fontSize: "17px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {requests.map((leave) => (
          <tr key={leave.id}>
            <td
              style={{
                padding: "18px",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              {leave.employeeName}
            </td>

            <td
              style={{
                padding: "18px",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              {leave.leaveType}
            </td>

            <td
              style={{
                padding: "18px",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              {leave.startDate}
            </td>

            <td
              style={{
                padding: "18px",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              {leave.endDate}
            </td>

            <td
              style={{
                padding: "18px",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              {leave.numberOfDays}
            </td>

            <td
              style={{
                padding: "18px",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              {leave.reason}
            </td>

            <td
              style={{
                padding: "18px",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
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

            <td
              style={{
                padding: "18px",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              {leave.status === "Pending" ? (
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
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
                    onClick={() => handleReject(leave.id)}
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
                    color: "#6b7280",
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
  );
};

export default LeaveRequestsTable;
