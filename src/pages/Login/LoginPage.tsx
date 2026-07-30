import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #dbeafe, #eff6ff, #dbeafe)",
        padding: "20px",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;