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
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {balances.map((leave) => (
        <div
          key={leave.title}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "1rem",
            minWidth: "180px",
          }}
        >
          <h3>{leave.title}</h3>
          <p>{leave.days} Days</p>
        </div>
      ))}
    </div>
  );
};

export default LeaveBalance;