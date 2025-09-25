import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./login.css";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <img src={logo} alt="logo" className="login-logo" />

      <div className="login-options">
        <button className="login-btn" onClick={() => navigate("/auth/student")}>
          <span className="icon">🎓</span>
          <p>Student</p>
        </button>

        <button className="login-btn" onClick={() => navigate("/auth/tutor")}>
          <span className="icon">👨‍🏫</span>
          <p>Tutor</p>
        </button>
      </div>
    </div>
  );
}
