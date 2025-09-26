import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import "./auth.css";

export default function AuthForm() {
  const { role } = useParams(); // "student" | "tutor"
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warnOtherSites, setWarnOtherSites] = useState(false);
  const [error, setError] = useState("");

  const prettyRole = role === "tutor" ? "Tutor" : "Student";

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError(
        "⚠️The credentials you provided cannot be determined to be authentic."
      );
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(
          "⚠️The credentials you provided cannot be determined to be authentic."
        );
        return;
      }

      role === "tutor" ? navigate("/tutor") : navigate("/student");
    } catch {
      setError("⚠️Cannot connect to authentication server.");
    }
  };

  const onClear = () => {
    setUsername("");
    setPassword("");
    setWarnOtherSites(false);
    setError("");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <img src={logo} alt="logo" className="auth-logo" />
          <h1>Central Authentication Service</h1>
        </div>

        <h2 className="auth-title">Enter your Username and Password</h2>
        <p className="auth-subtitle">
          Role: <strong>{prettyRole}</strong>
        </p>

        <form onSubmit={onSubmit} className="auth-form">
          <label className="auth-label">
            <span>Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="your.username"
              className="auth-input"
            />
          </label>

          <label className="auth-label">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="auth-input"
            />
          </label>

          <label className="auth-checkbox">
            <input
              type="checkbox"
              checked={warnOtherSites}
              onChange={(e) => setWarnOtherSites(e.target.checked)}
            />
            <span>Warn me before logging me into other sites.</span>
          </label>

          {error && <div className="auth-error">{error}</div>}

          <div className="auth-actions">
            <button type="submit" className="btn primary">
              Login
            </button>
            <button type="button" className="btn" onClick={onClear}>
              Clear
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <a href="#">Forgot password?</a>
          <a href="#">Change password?</a>
          <div className="split" />
          <a href="mailto:support@hcmut.edu.vn">support@hcmut.edu.vn</a>
        </div>
      </div>
    </div>
  );
}
