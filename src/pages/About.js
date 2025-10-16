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
          <h2>
            Tôi là Trần Khánh Linh — Sinh viên năm 4, Frontend Developer
          </h2>
          <p>
            Hiện đang là sinh viên năm 4 tại <b>Đại học Công nghệ TP.HCM (HUTECH)</b>, 
            chuyên ngành <b>Công nghệ Phần mềm</b>, tôi đam mê thiết kế và xây dựng 
            các giao diện web hiện đại, tương tác và thân thiện với người dùng. 
            Tôi luôn hướng đến việc áp dụng kiến thức lập trình cùng tư duy thẩm mỹ 
            để tạo ra trải nghiệm số chất lượng và mang lại giá trị thực.
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
            <span>Git / GitHub</span>
            <div className="progress"><div className="bar" style={{ width: "75%" }}></div></div>
          </div>
          <div className="skill">
            <span>UI/UX Design</span>
            <div className="progress"><div className="bar" style={{ width: "70%" }}></div></div>
          </div>
        </div>
      </section>

      {/* Phần 3: Sở thích */}
      <section className="interests-section">
        <h2>Sở thích</h2>
        <ul>
          <li>🎧 Nghe nhạc</li>
          <li>📚 Đọc blog & học công nghệ mới</li>
          <li>🌍 Du lịch & chụp ảnh</li>
          <li>💻 Thử nghiệm framework và thư viện Frontend mới</li>
        </ul>
      </section>

      {/* Phần 4: Mục tiêu nghề nghiệp */}
      <section className="goals-section">
        <h2>Mục tiêu nghề nghiệp</h2>
        <p>
          Mục tiêu của tôi là trở thành một Frontend Developer chuyên nghiệp,
          xây dựng các ứng dụng web hiện đại, tối ưu và thân thiện với người dùng.
          Tôi luôn muốn nâng cao kỹ năng, học hỏi các công nghệ mới và đóng góp
          vào các dự án chất lượng, mang lại giá trị tích cực cho cộng đồng.
        </p>
      </section>
    </div>
  );
}

export default About;
