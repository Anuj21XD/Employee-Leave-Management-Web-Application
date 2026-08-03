import { useNavigate } from "react-router-dom";
import LeaveRequestsTable from "../../components/manager/LeaveRequestsTable";
import { useState, useEffect } from "react";
import { getAllLeaves } from "../../services/leaveService";
import type { Leave } from "../../models/Leave";

const ManagerReviewPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  const [leaveType, setLeaveType] = useState("All");

  const [sort, setSort] = useState("Newest");

  const [requests, setRequests] = useState<Leave[]>([]);
  useEffect(() => {
    setRequests(getAllLeaves());
  }, []);

  const refreshRequests = () => {
    setRequests(getAllLeaves());
  };

  const filteredRequests = requests
    .filter((leave) => {
      return leave.employeeName.toLowerCase().includes(search.toLowerCase());
    })
    .filter((leave) => {
      return status === "All" ? true : leave.status === status;
    })
    .filter((leave) => {
      return leaveType === "All" ? true : leave.leaveType === leaveType;
    })
    .sort((a, b) => {
      if (sort === "Newest") {
        return (
          new Date(b.appliedOn).getTime() - new Date(a.appliedOn).getTime()
        );
      }

      return new Date(a.appliedOn).getTime() - new Date(b.appliedOn).getTime();
    });

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <button
        onClick={() => navigate("/manager")}
        style={{
          marginBottom: "25px",
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
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        Review Leave Requests
      </h1>

      <p
        style={{
          color: "#6b7280",
          fontSize: "17px",
          marginBottom: "35px",
        }}
      >
        Review, approve or reject employee leave requests.
      </p>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "25px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px 14px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              width: "220px",
            }}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          >
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          >
            <option>All</option>
            <option>Casual Leave</option>
            <option>Sick Leave</option>
            <option>Earned Leave</option>
            <option>Work From Home</option>
            <option>Maternity Leave</option>
            <option>Paternity Leave</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>

          <button
            onClick={() => {
              setSearch("");
              setStatus("All");
              setLeaveType("All");
              setSort("Newest");
            }}
            style={{
              padding: "10px 18px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Reset
          </button>
        </div>

        <LeaveRequestsTable
          requests={filteredRequests}
          refreshRequests={refreshRequests}
        />
      </div>
    </div>
  );
};

export default ManagerReviewPage;
