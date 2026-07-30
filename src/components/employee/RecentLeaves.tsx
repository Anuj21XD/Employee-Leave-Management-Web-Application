import { getLeavesByEmployee } from "../../services/leaveService";
import type { User } from "../../models/User";

const RecentLeaves = () => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  ) as User;

  const requests = getLeavesByEmployee(currentUser.id)
    .slice(-3)
    .reverse();

  if (requests.length === 0) {
    return (
      <p
        style={{
          marginTop: "20px",
          color: "#6b7280",
          fontSize: "16px",
        }}
      >
        No recent leave requests.
      </p>
    );
  }

  return (
    <table
      className="leave-table"
      style={{
        width: "100%",
        marginTop: "1rem",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              color: "#1e3a8a",
              fontSize: "18px",
              fontWeight: "700",
              width: "40%",
              textAlign: "left",
            }}
          >
            Leave Type
          </th>

          <th
            style={{
              color: "#1e3a8a",
              fontSize: "18px",
              fontWeight: "700",
              width: "30%",
              textAlign: "center",
            }}
          >
            Date
          </th>

          <th
            style={{
              color: "#1e3a8a",
              fontSize: "18px",
              fontWeight: "700",
              width: "30%",
              textAlign: "center",
            }}
          >
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        {requests.map((leave) => (
          <tr key={leave.id}>
            <td
              style={{
                padding: "18px 0",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "left",
                width: "40%",
              }}
            >
              {leave.leaveType}
            </td>

            <td
              style={{
                padding: "18px 0",
                borderBottom: "1px solid #e5e7eb",
                textAlign: "center",
                width: "30%",
              }}
            >
              {leave.startDate}
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