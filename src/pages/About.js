import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      {/* Phần 1: Giới thiệu bản thân */}
      <section className="intro-section">
        <div className="intro-image">
          <img
            src="https://via.placeholder.com/300x300.png?text=Profile+Photo"
            alt="Ảnh cá nhân"
          />
        </div>
        <div className="intro-text">
          <h1>Giới thiệu</h1>
          <h2>Tôi là Nguyễn Khánh Linh — Frontend Developer</h2>
          <p>
            Tôi đam mê thiết kế và xây dựng giao diện người dùng hiện đại,
            thân thiện và có tính tương tác cao. Với nền tảng vững chắc về
            công nghệ web và tư duy thẩm mỹ, tôi luôn hướng đến việc tạo ra
            những trải nghiệm số mang lại giá trị thực cho người dùng.
          </p>
          <blockquote>“Code bằng lý trí – Thiết kế bằng trái tim.”</blockquote>
        </div>
      </section>

      {/* Phần 2: Kỹ năng */}
      <section className="skills-section">
        <h2>Kỹ năng</h2>
        <div className="skills-list">
          <div className="skill">
            <span>HTML / CSS</span>
            <div className="progress"><div className="bar" style={{ width: "90%" }}></div></div>
          </div>
          <div className="skill">
            <span>JavaScript / React</span>
            <div className="progress"><div className="bar" style={{ width: "85%" }}></div></div>
          </div>
          <div className="skill">
            <span>Node.js / Express</span>
            <div className="progress"><div className="bar" style={{ width: "70%" }}></div></div>
          </div>
          <div className="skill">
            <span>UI/UX Design</span>
            <div className="progress"><div className="bar" style={{ width: "75%" }}></div></div>
          </div>
        </div>
      </section>

      {/* Phần 3: Sở thích */}
      <section className="interests-section">
        <h2>Sở thích</h2>
        <ul>
          <li>🎧 Nghe nhạc</li>
          <li>📚 Đọc blog công nghệ</li>
          <li>🌍 Du lịch & chụp ảnh</li>
          <li>💻 Khám phá framework mới</li>
        </ul>
      </section>

      {/* Phần 4: Mục tiêu nghề nghiệp */}
      <section className="goals-section">
        <h2>Mục tiêu nghề nghiệp</h2>
        <p>
          Mục tiêu của tôi là trở thành một lập trình viên Fullstack có khả năng
          xây dựng các ứng dụng web hiện đại, tối ưu và thân thiện với người dùng.
          Tôi luôn mong muốn học hỏi, nâng cao kỹ năng để tạo ra những sản phẩm
          chất lượng, mang lại giá trị tích cực cho cộng đồng.
        </p>
      </section>
    </div>
  );
}

export default About;
