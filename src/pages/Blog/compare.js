import React from "react";
import "../../styles/Blog/BlogPost.css";

function Compare() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Java vs JavaScript: Nên học cái nào trước?</h1>
      <p className="blog-subtitle">
        So sánh cú pháp, ứng dụng và hướng đi giữa hai ngôn ngữ lập trình phổ biến nhất thế giới.
      </p>

      <img
        src="images/java-js.jpg"
        alt="Java vs JavaScript"
        className="blog-image"
      />

      <div className="blog-content">
        <p>
          Java và JavaScript là hai ngôn ngữ lập trình phổ biến nhất hiện nay.
          Dù tên gọi khá giống nhau, nhưng thực tế chúng{" "}
          <b>hoàn toàn khác biệt</b> về cú pháp, cách chạy và mục đích sử dụng.
          Trong bài viết này, chúng ta sẽ cùng so sánh chi tiết để bạn chọn hướng học phù hợp.
        </p>

        <h2>1. Nguồn gốc và mục đích ra đời</h2>
        <p>
          <b>Java</b> được phát triển bởi <b>Sun Microsystems</b> vào năm 1995 với phương châm
          “Write Once, Run Anywhere” — viết một lần, chạy mọi nơi.  
          Java chủ yếu dùng để phát triển ứng dụng desktop, backend server, và Android.
        </p>
        <p>
          <b>JavaScript</b> cũng ra đời năm 1995, được phát triển bởi <b>Netscape</b> để làm cho
          các trang web trở nên <b>động và tương tác hơn</b>.  
          Hiện nay, JavaScript được dùng không chỉ ở frontend mà còn ở backend (Node.js).
        </p>

        <h2>2. Cú pháp và cách chạy</h2>
        <p>
          Java là ngôn ngữ <b>biên dịch (compiled)</b>, còn JavaScript là{" "}
          <b>thông dịch (interpreted)</b>.  
          Java chạy trên máy ảo (JVM), còn JavaScript chạy trực tiếp trên trình duyệt hoặc Node.js.
        </p>

        <div className="code-block">
        {`// Java
        public class Hello {
            public static void main(String[] args) {
                System.out.println("Hello Java");
            }
        }

        // JavaScript
        console.log("Hello JavaScript");`}
        </div>

        <p>
          ➤ Java cần biên dịch trước khi chạy, trong khi JavaScript có thể chạy ngay lập tức.  
          ➤ Java bắt buộc khai báo kiểu dữ liệu tường minh, còn JavaScript là ngôn ngữ “loosely typed”.
        </p>

        <h2>3️. Ứng dụng thực tế</h2>
        <ul>
          <li>
            <b>Java:</b> Ứng dụng Android, hệ thống ngân hàng, phần mềm doanh nghiệp, backend (Spring Boot).
          </li>
          <li>
            <b>JavaScript:</b> Website, ứng dụng web (React, Vue, Angular), backend (Node.js), mobile (React Native).
          </li>
        </ul>

        <h2>4. Nên học cái nào trước?</h2>
        <p>Câu trả lời phụ thuộc vào <b>mục tiêu của bạn</b>:</p>
        <ul>
          <li>
            🎯 Nếu bạn muốn làm <b>frontend web developer</b>, hãy bắt đầu với JavaScript.
          </li>
          <li>
            ⚙️ Nếu bạn thích <b>xây dựng hệ thống lớn, logic phức tạp, hoặc ứng dụng Android</b>,
            hãy chọn Java.
          </li>
          <li>
            💡 Nếu bạn muốn trở thành fullstack developer, hãy học <b>JavaScript trước</b>,
            sau đó học thêm Java để nắm rõ backend nâng cao.
          </li>
        </ul>

        <h2>✨ Kết luận</h2>
        <p>
          Java và JavaScript đều là nền tảng quan trọng trong lập trình hiện đại.
          Bạn không cần chọn “hoặc cái này hoặc cái kia” — hãy chọn <b>thứ phù hợp với mục tiêu hiện tại</b>,
          và mở rộng dần sau khi đã vững nền tảng.
        </p>
        <p>
          👉 Bắt đầu với JavaScript nếu bạn muốn thấy kết quả nhanh chóng trên trình duyệt,
          hoặc chọn Java nếu bạn thích tư duy logic và hệ thống chặt chẽ.
        </p>
      </div>
    </div>
  );
}

export default Compare;
