import React from "react";
import { Link } from "react-router-dom"; // thêm dòng này
import "../../style/homepage.css";
import logo from "../../assets/logo.png";
import Benefits from "./Benefits";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div className="homepage">
      <header className="header">
        <img src={logo} className="logoImg" alt="logo" />
        <div className="logo">
          <p>ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</p>
          <h2>TRƯỜNG ĐẠI HỌC BÁCH KHOA</h2>
        </div>
        <nav className="nav">
          <a href="#">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#features">Thư viện</a>
          <a href="#contact">Liên hệ</a>
        </nav>
      </header>

      <section className="hero">
        <div className="overlay-hero">
          <div className="hero-content">
            <h1>Chương trình Tutor - HCMUT</h1>
            <p>
              Hỗ trợ sinh viên trong học tập và phát triển kỹ năng, kết nối với
              giảng viên, nghiên cứu sinh và sinh viên năm trên giàu kinh
              nghiệm.
            </p>
            {/* Nút đăng nhập được đổi thành Link */}
            <Link to="/login" className="cta-btn">
              Đăng nhập
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Mục tiêu</h2>
        <p>
          Hệ thống được xây dựng nhằm quản lý và vận hành chương trình Tutor
          hiệu quả, hiện đại, có khả năng mở rộng, đáp ứng nhu cầu thực tiễn
          trong môi trường giáo dục đại học.
        </p>
      </section>

      <Benefits />

      <section id="features" className="features">
        <h2>Các tính năng</h2>
        <div className="feature-list">
          <div className="feature-card">
            <h3>Quản lý thông tin</h3>
            <p>
              Hồ sơ cá nhân, lĩnh vực chuyên môn, nhu cầu hỗ trợ của sinh viên
              và tutor.
            </p>
          </div>
          <div className="feature-card">
            <h3>Đặt & Quản lý lịch</h3>
            <p>
              Đặt lịch, hủy/đổi lịch, nhắc lịch tự động và quản lý buổi gặp trực
              tiếp hoặc trực tuyến.
            </p>
          </div>
          <div className="feature-card">
            <h3>Phản hồi & Đánh giá</h3>
            <p>
              Sinh viên phản hồi chất lượng, tutor theo dõi tiến bộ, khoa/bộ môn
              khai thác dữ liệu đánh giá.
            </p>
          </div>
          <div className="feature-card">
            <h3>Báo cáo & Thống kê</h3>
            <p>
              Hỗ trợ phòng Đào tạo và Công tác Sinh viên theo dõi, xét điểm rèn
              luyện và học bổng.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
// chú ý: bạn cần tạo file LoginPage.jsx trong thư mục src/components/Login với nội dung như bên dưới
// import logo from "../../assets/logo.png";
// import "../../style/login.css";

// export default function LoginPage() {
//   return (
//     <div className="login-page">
//       <img src={logo} alt="logo" className="login-logo" />

//       <div className="login-options">
//         <button className="login-btn">
//           <span className="icon">👤</span>
//           <p>Người dùng khách</p>
//         </button>

//         <button className="login-btn">
//           <span className="icon">🧑</span>
//           <p>Tài khoản HCMUT</p>
//         </button>
  
//         <button className="login-btn"> 
//           <span className="icon">G</span>
//           <p>Google</p>
//         </button>
//       </div>
//     </div>
//   );
// }