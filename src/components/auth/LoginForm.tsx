import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState<"employee" | "manager">("employee");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter username and password.");
      return;
    }

    const user = login(username, password, role);

    if (!user) {
      setError("Invalid credentials.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.role === "employee") {
      navigate("/employee");
    } else {
      navigate("/manager");
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "80px auto",
        background: "white",
        padding: "35px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Employee Leave Management
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        <button
          type="button"
          onClick={() => setRole("employee")}
          style={{
            flex: 1,
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background:
              role === "employee" ? "#2563eb" : "#e5e7eb",
            color: role === "employee" ? "white" : "black",
            fontWeight: "bold",
          }}
        >
          Employee
        </button>

        <button
          type="button"
          onClick={() => setRole("manager")}
          style={{
            flex: 1,
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background:
              role === "manager" ? "#2563eb" : "#e5e7eb",
            color: role === "manager" ? "white" : "black",
            fontWeight: "bold",
          }}
        >
          Manager
        </button>
      </div>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
        }}
      />

      {error && (
        <p
          style={{
            color: "#dc2626",
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          {error}
        </p>
      )}

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;