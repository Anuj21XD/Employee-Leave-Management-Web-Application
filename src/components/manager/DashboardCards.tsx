import { getLeaves } from "../../services/leaveService";
import { users } from "../../data/users";

const DashboardCards = () => {
  const leaves = getLeaves();

  const pending = leaves.filter(
    (leave) => leave.status === "Pending"
  ).length;

  const approved = leaves.filter(
    (leave) => leave.status === "Approved"
  ).length;

  const rejected = leaves.filter(
    (leave) => leave.status === "Rejected"
  ).length;

  const employees = users.filter(
    (user) => user.role === "employee"
  ).length;

  const cards = [
    {
      title: "Pending Requests",
      value: pending,
    },
    {
      title: "Approved",
      value: approved,
    },
    {
      title: "Rejected",
      value: rejected,
    },
    {
      title: "Employees",
      value: employees,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            flex: 1,
            minWidth: "220px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,.08)",
          }}
        >
          <h3
            style={{
              color: "#2563eb",
            }}
          >
            {card.title}
          </h3>

          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;