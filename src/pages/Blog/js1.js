import React from "react";
import "../../styles/Blog/BlogPost.css";

function Js1() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">JavaScript Basics</h1>
      <p className="blog-subtitle">
        Cú pháp cơ bản, biến, hàm, vòng lặp và nguyên tắc lập trình trong JavaScript.
      </p>

      <img src="/images/js.jpg" alt="JavaScript Basics" className="blog-image" />

      <section className="blog-content">
        <h2>1. Giới thiệu về JavaScript</h2>
        <p>
          <b>JavaScript (JS)</b> là ngôn ngữ lập trình được dùng rộng rãi trên web để tạo sự tương tác động.
          JS chạy chủ yếu trên trình duyệt, nhưng cũng có thể chạy trên server thông qua Node.js.
        </p>

        <h2>2. Biến và kiểu dữ liệu</h2>
        <p>
          JS có 3 cách khai báo biến:
          <ul>
            <li><code>var</code> — cũ, có phạm vi function.</li>
            <li><code>let</code> — mới hơn, có phạm vi block.</li>
            <li><code>const</code> — hằng số, không thể gán lại giá trị.</li>
          </ul>
        </p>

        <pre className="code-block">
            {`let name = "Linh";
            const age = 21;
            var city = "Hồ Chí Minh";

            console.log(name, age, city);`}
        </pre>

        <h2>3. Các kiểu dữ liệu cơ bản</h2>
        <ul>
          <li><b>String</b>: chuỗi ký tự</li>
          <li><b>Number</b>: số (cả nguyên và thực)</li>
          <li><b>Boolean</b>: true / false</li>
          <li><b>Object</b>: cấu trúc chứa key-value</li>
          <li><b>Array</b>: danh sách phần tử</li>
          <li><b>null</b> và <b>undefined</b></li>
        </ul>

        <pre className="code-block">
            {`let student = {
            name: "Linh",
            score: 9.5,
            passed: true
            };

            console.log(student.name); // "Linh"`}
        </pre>

        <h2>4. Câu điều kiện</h2>
        <p>Dùng <code>if</code>, <code>else if</code>, <code>else</code> để xử lý điều kiện logic.</p>

        <pre className="code-block">
            {`let score = 85;
            if (score >= 90) {
            console.log("Xuất sắc");
            } else if (score >= 70) {
            console.log("Khá");
            } else {
            console.log("Cần cố gắng thêm");
            }`}
        </pre>

        <h2>5. Vòng lặp</h2>
        <p>JavaScript hỗ trợ nhiều kiểu vòng lặp như <code>for</code>, <code>while</code>, <code>for...of</code>, <code>for...in</code>.</p>

        <pre className="code-block">
            {`let numbers = [1, 2, 3, 4];
            for (let num of numbers) {
            console.log(num);
            }`}
        </pre>

        <h2>6. Hàm trong JavaScript</h2>
        <p>
          Hàm giúp gom logic xử lý lại, dễ tái sử dụng. Có thể khai báo bằng nhiều cách:
        </p>

        <pre className="code-block">
            {`function greet(name) {
            return "Xin chào " + name;
            }

            const greetArrow = (name) => {
            return \`Chào bạn, \${name}!\`;
            }

            console.log(greet("Linh"));
            console.log(greetArrow("Huy"));`}
        </pre>

        <h2>7. Nguyên tắc cơ bản khi lập trình JS</h2>
        <ul>
          <li>Đặt tên biến rõ nghĩa.</li>
          <li>Tách nhỏ hàm theo chức năng.</li>
          <li>Hạn chế dùng biến toàn cục.</li>
          <li>Luôn kiểm tra kiểu dữ liệu khi so sánh.</li>
        </ul>

        <h2>8. Tổng kết</h2>
        <p>
          Đây là những kiến thức nền tảng cần nắm vững trước khi đi sâu vào DOM, Event, hay Async JavaScript.
          Khi bạn hiểu rõ cú pháp cơ bản, việc học các thư viện như React sẽ dễ dàng hơn rất nhiều.
        </p>
      </section>
    </div>
  );
}

export default Js1;
