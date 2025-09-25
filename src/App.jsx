import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.jsx";
import LoginPage from "./components/Login/Login.jsx";
import AuthForm from "./components/Auth/AuthForm.jsx";

function StudentDashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Student Dashboard</h2>
    </div>
  );
}
function TutorDashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Tutor Dashboard</h2>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/:role" element={<AuthForm />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/tutor" element={<TutorDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
