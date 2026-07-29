import LeaveForm from "../../components/leave/LeaveForm";

const ApplyLeave = () => {
  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "40px auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#1e40af",
          fontSize: "38px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Apply Leave
      </h1>

      <p
        style={{
          color: "#6b7280",
          fontSize: "17px",
          marginBottom: "35px",
        }}
      >
        Fill in the details below to submit your leave request.
      </p>

      <LeaveForm />
    </div>
  );
};

export default ApplyLeave;