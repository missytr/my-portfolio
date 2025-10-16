import React from "react";
import "../styles/Home.css";

function HeroSection() {
  return (
    <section className="hero-section">s
      <div className="hero-content">
        {/* Bên trái: chữ */}
        <div className="hero-text">
          <h1>
            Xin chào, tôi là <br />
            <span className="highlight">Trần Khánh Linh</span>
          </h1>
          <p>
            <b>Software Engineer in Progress</b> — tôi theo đuổi đam mê sáng tạo
            và công nghệ, với mong muốn mang lại trải nghiệm số tốt nhất cho
            người dùng.
          </p>
          <a href="/about" className="btn-main">
            Về tôi
          </a>
        </div>

        {/* Bên phải: ảnh */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
            alt="Trần Khánh Linh"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
