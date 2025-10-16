import React from "react";
import "../../styles/Blog/BlogPost.css";

function Java3() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Exception Handling trong Java</h1>
      <p className="blog-subtitle">
        Tìm hiểu try-catch-finally, throws và cách tạo custom exception trong Java.
      </p>

      <img src="/images/java.jpg" alt="Java Exception Handling" className="blog-image" />

      <section className="blog-content">
        <h2>1. Exception là gì?</h2>
        <p>
          <b>Exception</b> (ngoại lệ) là các lỗi xảy ra trong quá trình chương trình chạy,
          chẳng hạn như chia cho 0, truy cập mảng sai chỉ mục, hoặc lỗi khi đọc file.
          Java cung cấp cơ chế mạnh mẽ để xử lý ngoại lệ giúp chương trình không bị dừng đột ngột.
        </p>

        <h2>2. Phân loại Exception</h2>
        <ul>
          <li><b>Checked Exception</b> – phải xử lý hoặc khai báo bằng <code>throws</code>.</li>
          <li><b>Unchecked Exception</b> – lỗi xảy ra trong runtime như <code>NullPointerException</code>.</li>
        </ul>

        <h2>3. Cấu trúc try-catch-finally</h2>
        <pre className="code-block">
            {`public class Demo {
            public static void main(String[] args) {
                try {
                int a = 5 / 0; // gây lỗi chia cho 0
                } catch (ArithmeticException e) {
                System.out.println("Lỗi: " + e.getMessage());
                } finally {
                System.out.println("Khối finally luôn được thực thi");
                }
            }
            }`}
        </pre>
        <p>
          <b>try</b> chứa mã có thể gây lỗi, <b>catch</b> xử lý lỗi nếu xảy ra, và
          <b>finally</b> luôn được chạy dù có lỗi hay không (thường dùng để đóng file, kết nối, v.v.).
        </p>

        <h2>4. Từ khóa throws</h2>
        <p>
          Nếu một phương thức có thể ném lỗi, ta có thể khai báo bằng <code>throws</code>
          để “báo trước” cho phương thức gọi nó biết cần xử lý lỗi.
        </p>
        <pre className="code-block">
            {`public static void readFile() throws IOException {
            FileReader file = new FileReader("data.txt");
            }

            public static void main(String[] args) {
            try {
                readFile();
            } catch (IOException e) {
                System.out.println("Không tìm thấy file!");
            }
            }`}
        </pre>

        <h2>5. Tạo Custom Exception</h2>
        <p>
          Ta có thể tự định nghĩa ngoại lệ riêng bằng cách kế thừa từ lớp <code>Exception</code> hoặc <code>RuntimeException</code>.
        </p>
        <pre className="code-block">
            {`class InvalidAgeException extends Exception {
            public InvalidAgeException(String message) {
                super(message);
            }
            }

            public class Test {
            static void checkAge(int age) throws InvalidAgeException {
                if (age < 18)
                throw new InvalidAgeException("Tuổi phải từ 18 trở lên!");
                else
                System.out.println("Đủ tuổi đăng ký.");
            }

            public static void main(String[] args) {
                try {
                checkAge(15);
                } catch (InvalidAgeException e) {
                System.out.println("Lỗi: " + e.getMessage());
                }
            }
            }`}
        </pre>

        <h2>6. Từ khóa throw</h2>
        <p>
          <code>throw</code> dùng để chủ động ném một exception trong code.
          Ví dụ: <code>throw new ArithmeticException("Không thể chia cho 0");</code>
        </p>

        <h2>7. Tổng kết</h2>
        <p>
          Exception Handling giúp chương trình Java an toàn và đáng tin cậy hơn.
          Hãy luôn bao quanh đoạn code dễ lỗi bằng <b>try-catch</b>, và tạo ngoại lệ riêng khi cần logic kiểm tra phức tạp.
        </p>
      </section>
    </div>
  );
}

export default Java3;
