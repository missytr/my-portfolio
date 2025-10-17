import React from "react";
import "../../styles/Blog/BlogPost.css";

function Java1() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Java Basics</h1>
      <p className="blog-subtitle">
        Giới thiệu cú pháp, biến, kiểu dữ liệu, vòng lặp và các kiến thức nền tảng.
      </p>

      <img
        src="/img/java1.jpg"
        alt="Java Basics"
        className="blog-image"
      />

      <section className="blog-content">
        <h2>1. Giới thiệu về Java</h2>
        <p>
          Java là một ngôn ngữ lập trình hướng đối tượng (OOP) phổ biến, được
          sử dụng rộng rãi cho phát triển ứng dụng web, mobile (Android), và hệ thống doanh nghiệp.
        </p>

        <h2>2. Cấu trúc cơ bản của chương trình Java</h2>
        <pre className="code-block">
            {`public class Main {
            public static void main(String[] args) {
                System.out.println("Hello, Java!");
            }
            }`}
        </pre>
        <p>
          Mỗi chương trình Java đều có ít nhất một lớp (class), và phương thức
          <code> main()</code> là điểm bắt đầu của chương trình.
        </p>

        <h2>3. Biến và kiểu dữ liệu</h2>
        <ul>
          <li><b>int</b> — số nguyên (ví dụ: 10, -5)</li>
          <li><b>double</b> — số thực (ví dụ: 3.14, -0.5)</li>
          <li><b>boolean</b> — giá trị đúng/sai (true/false)</li>
          <li><b>String</b> — chuỗi ký tự (ví dụ: "Xin chào")</li>
        </ul>

        <pre className="code-block">
            {`int age = 20;
            double score = 9.5;
            boolean isStudent = true;
            String name = "Linh";`}
        </pre>

        <h2>4. Câu lệnh điều kiện</h2>
        <pre className="code-block">
            {`if (age >= 18) {
            System.out.println("Bạn là người lớn.");
            } else {
            System.out.println("Bạn chưa đủ tuổi.");
            }`}
        </pre>

        <h2>5. Vòng lặp trong Java</h2>
        <p>
          Java hỗ trợ nhiều loại vòng lặp như <code>for</code>, <code>while</code>,
          và <code>do...while</code> để lặp lại các thao tác.
        </p>

        <pre className="code-block">
            {`for (int i = 1; i <= 5; i++) {
            System.out.println("Lần thứ " + i);
            }`}
        </pre>

        <h2>6. Tổng kết</h2>
        <p>
          Đây là các khái niệm cơ bản bạn cần nắm khi bắt đầu học Java. Hãy luyện
          tập thật nhiều để hiểu rõ cú pháp và tư duy lập trình.
        </p>
      </section>
    </div>
  );
}

export default Java1;
