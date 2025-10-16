import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>

        <section className="about">
        <div className="about-text">
            <h2>Về tôi</h2>
            <p>
            Tôi là <b>Trần Khánh Linh</b>, sinh viên ngành Công nghệ thông tin. Tôi đam mê lập trình và luôn tìm kiếm cơ hội để học hỏi, phát triển kỹ năng và tạo ra các sản phẩm số hữu ích. Mỗi dự án, mỗi dòng code với tôi đều là cơ hội để tiến bộ và thể hiện sự sáng tạo.
            </p>
            <button className="btn-resume">Xem Hồ sơ</button>
        </div>
        <div className="about-photo">
            <img src="https://i.pravatar.cc/130?img=12" alt="Ảnh đại diện Trần Khánh Linh" />
        </div>
        </section>

        <section className="contact-section">
        <h2>Liên hệ</h2>
        <form action="#" method="post">
            <label for="name">Họ và tên</label>
            <input type="text" id="name" name="name" placeholder="Nhập họ và tên" required />
            
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Nhập email" required />
            
            <label for="message">Tin nhắn</label>
            <textarea id="message" name="message" placeholder="Nhập nội dung tin nhắn" required></textarea>
            
            <button type="submit">Gửi</button>
        </form>
        </section>
    </div>
  );
}

export default Contact;
