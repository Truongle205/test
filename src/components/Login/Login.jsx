import logo from "../../assets/logo.png";
import "./login.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <img src={logo} alt="logo" className="login-logo" />

      <div className="login-options">
        <button className="login-btn">
          <span className="icon">🎓</span>
          <p>Student</p>
        </button>

        <button className="login-btn">
          <span className="icon">👨‍🏫</span>
          <p>Tutor</p>
        </button>
      </div>
    </div>
  );
}
