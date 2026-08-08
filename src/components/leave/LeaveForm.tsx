import { useState } from "react";
import { addLeave, getLeavesByEmployee } from "../../services/leaveService";
import type { Leave, LeaveType } from "../../models/Leave";
import type { User } from "../../models/User";
import { getUserById } from "../../services/userService";

const LeaveForm = () => {
  const [leaveType, setLeaveType] = useState("Casual Leave");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const [errors, setErrors] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleReset = () => {
    setLeaveType("Casual Leave");
    setStartDate("");
    setEndDate("");
    setReason("");

    setErrors({
      leaveType: "",
      startDate: "",
      endDate: "",
      reason: "",
    });
  };

  const handleSubmit = () => {
    const newErrors = {
      leaveType: "",
      startDate: "",
      endDate: "",
      reason: "",
    };

    let isValid = true;

    if (!leaveType) {
      newErrors.leaveType = "Please select a leave type.";
      isValid = false;
    }

    if (!startDate) {
      newErrors.startDate = "Please select a start date.";
      isValid = false;
    }

    if (!endDate) {
      newErrors.endDate = "Please select an end date.";
      isValid = false;
    }

    if (!reason.trim()) {
      newErrors.reason = "Please enter a reason.";
      isValid = false;
    }

    if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
      newErrors.endDate = "End date cannot be before start date.";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser") || "{}",
    ) as User;

    const user = getUserById(currentUser.id);

    if (!user) {
      alert("User not found.");
      return;
    }

    const days =
      Math.floor(
        (new Date(endDate).getTime() - new Date(startDate).getTime()) /
          (1000 * 60 * 60 * 24),
      ) + 1;

    const existingLeaves = getLeavesByEmployee(currentUser.id);

    const hasOverlap = existingLeaves.some((leave) => {
      if (leave.status === "Rejected" || leave.status === "Cancelled") {
        return false;
      }

      const existingStart = new Date(leave.startDate);
      const existingEnd = new Date(leave.endDate);

      const newStart = new Date(startDate);
      const newEnd = new Date(endDate);

      return newStart <= existingEnd && newEnd >= existingStart;
    });

    if (hasOverlap) {
      alert(
        "You already have an Approved or Pending leave request during the selected dates.",
      );
      return;
    }
    
    let availableBalance = 0;

    switch (leaveType) {
      case "Casual Leave":
        availableBalance = user.leaveBalance.casual;
        break;

      case "Sick Leave":
        availableBalance = user.leaveBalance.sick;
        break;

      case "Earned Leave":
        availableBalance = user.leaveBalance.earned;
        break;

      default:
        break;
    }

    if (days > availableBalance) {
      alert(
        `Insufficient ${leaveType} balance.\nAvailable: ${availableBalance} day(s)`,
      );
      return;
    }

    const leave: Leave = {
      id: Date.now(),
      employeeId: currentUser.id,
      employeeName: currentUser.name,
      leaveType: leaveType as LeaveType,
      startDate,
      endDate,
      numberOfDays: days,
      reason,
      status: "Pending",
      appliedOn: new Date().toLocaleDateString(),
    };

    addLeave(leave);

    alert("Leave request submitted successfully!");

    handleReset();
  };

  return (
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          color: "#1e40af",
          fontSize: "30px",
          marginBottom: "30px",
        }}
      >
        Leave Request Details
      </h2>

      {/* Leave Type */}

      <div style={{ marginBottom: "25px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
            color: "#1e3a8a",
          }}
        >
          Leave Type <span style={{ color: "red" }}>*</span>
        </label>

        <select
          value={leaveType}
          onChange={(e) => {
            setLeaveType(e.target.value);
            setErrors({
              ...errors,
              leaveType: "",
            });
          }}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        >
          <option>Casual Leave</option>
          <option>Sick Leave</option>
          <option>Earned Leave</option>
          <option>Maternity Leave</option>
          <option>Paternity Leave</option>
          <option>Work From Home</option>
        </select>

        {errors.leaveType && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            {errors.leaveType}
          </p>
        )}
      </div>

      {/* Dates */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <div style={{ flex: 1 }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
              color: "#1e3a8a",
            }}
          >
            Start Date <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);

              setErrors({
                ...errors,
                startDate: "",
              });
            }}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />

          {errors.startDate && (
            <p
              style={{
                color: "#dc2626",
                fontSize: "13px",
                marginTop: "5px",
              }}
            >
              {errors.startDate}
            </p>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
              color: "#1e3a8a",
            }}
          >
            End Date <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);

              setErrors({
                ...errors,
                endDate: "",
              });
            }}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />

          {errors.endDate && (
            <p
              style={{
                color: "#dc2626",
                fontSize: "13px",
                marginTop: "5px",
              }}
            >
              {errors.endDate}
            </p>
          )}
        </div>
      </div>

      {/* Reason */}

      <div style={{ marginBottom: "25px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
            color: "#1e3a8a",
          }}
        >
          Reason <span style={{ color: "red" }}>*</span>
        </label>

        <textarea
          rows={5}
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);

            setErrors({
              ...errors,
              reason: "",
            });
          }}
          placeholder="Please provide the reason for your leave..."
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            resize: "vertical",
            fontSize: "15px",
          }}
        />

        {errors.reason && (
          <p
            style={{
              color: "#dc2626",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            {errors.reason}
          </p>
        )}
      </div>

      {/* Supporting Document */}

      <div style={{ marginBottom: "30px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
            color: "#1e3a8a",
          }}
        >
          Supporting Document (Optional)
        </label>

        <input
          type="file"
          style={{
            width: "100%",
            padding: "10px 0",
          }}
        />
      </div>

      {/* Leave Balance */}

      <div
        style={{
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "30px",
        }}
      >
        <h3
          style={{
            color: "#2563eb",
            marginBottom: "15px",
          }}
        >
          Available Leave Balance
        </h3>

        <p>
          Casual Leave : <strong>8 Days</strong>
        </p>

        <p>
          Sick Leave : <strong>12 Days</strong>
        </p>

        <p>
          Earned Leave : <strong>15 Days</strong>
        </p>
      </div>

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "15px",
        }}
      >
        <button
          type="button"
          onClick={handleReset}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            background: "#9ca3af",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Submit Request
        </button>
      </div>
    </div>
  );
};

export default LeaveForm;
