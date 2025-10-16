import React from "react";
import "../../styles/Blog/BlogPost.css";

function Java4() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Java Collections Framework</h1>
      <p className="blog-subtitle">
        Giới thiệu List, Set, Map và cách áp dụng vào dự án thực tế.
      </p>

      <img src="/images/java.jpg" alt="Java Collections" className="blog-image" />

      <section className="blog-content">
        <h2>1. Giới thiệu về Collections Framework</h2>
        <p>
          <b>Java Collections Framework (JCF)</b> là tập hợp các lớp và giao diện
          cung cấp cấu trúc dữ liệu mạnh mẽ như <b>List, Set, Map</b> giúp lưu trữ và
          thao tác với nhóm đối tượng một cách hiệu quả.  
          Các lớp nằm trong package <code>java.util</code>.
        </p>

        <h2>2. List — Danh sách có thứ tự</h2>
        <p>
          <b>List</b> lưu trữ các phần tử theo thứ tự thêm vào và cho phép trùng lặp.
          Các lớp triển khai phổ biến:
        </p>
        <ul>
          <li><code>ArrayList</code> – nhanh trong truy xuất, chậm khi chèn/xóa giữa danh sách.</li>
          <li><code>LinkedList</code> – chèn/xóa nhanh, nhưng truy xuất chậm hơn.</li>
        </ul>

        <pre className="code-block">
            {`import java.util.*;

            public class ListExample {
            public static void main(String[] args) {
                List<String> names = new ArrayList<>();
                names.add("Linh");
                names.add("Huy");
                names.add("Linh"); // cho phép trùng lặp

                for (String name : names) {
                System.out.println(name);
                }
            }
            }`}
        </pre>

        <h2>3. Set — Tập hợp không trùng lặp</h2>
        <p>
          <b>Set</b> không cho phép trùng phần tử và không đảm bảo thứ tự.
          Một số lớp thường dùng:
        </p>
        <ul>
          <li><code>HashSet</code> – không đảm bảo thứ tự phần tử.</li>
          <li><code>LinkedHashSet</code> – lưu theo thứ tự thêm vào.</li>
          <li><code>TreeSet</code> – tự động sắp xếp phần tử theo thứ tự tự nhiên.</li>
        </ul>

        <pre className="code-block">
            {`import java.util.*;

            public class SetExample {
            public static void main(String[] args) {
                Set<Integer> numbers = new HashSet<>();
                numbers.add(3);
                numbers.add(1);
                numbers.add(3); // bị bỏ qua

                System.out.println(numbers);
            }
            }`}
        </pre>

        <h2>4. Map — Cấu trúc key-value</h2>
        <p>
          <b>Map</b> lưu dữ liệu theo cặp <b>key-value</b>.  
          Mỗi key là duy nhất và dùng để truy xuất nhanh giá trị tương ứng.
        </p>
        <ul>
          <li><code>HashMap</code> – nhanh nhất, không đảm bảo thứ tự.</li>
          <li><code>LinkedHashMap</code> – lưu theo thứ tự chèn.</li>
          <li><code>TreeMap</code> – sắp xếp key theo thứ tự tự nhiên.</li>
        </ul>

        <pre className="code-block">
            {`import java.util.*;

            public class MapExample {
            public static void main(String[] args) {
                Map<String, Integer> scores = new HashMap<>();
                scores.put("Linh", 95);
                scores.put("Huy", 88);
                scores.put("Linh", 100); // ghi đè giá trị cũ

                for (String key : scores.keySet()) {
                System.out.println(key + " => " + scores.get(key));
                }
            }
            }`}
        </pre>

        <h2>5. Ứng dụng trong dự án thực tế</h2>
        <p>
          Collections Framework thường được sử dụng trong các ứng dụng quản lý dữ liệu như:
        </p>
        <ul>
          <li>Danh sách sinh viên (<code>List&lt;Student&gt;</code>).</li>
          <li>Tập hợp ID duy nhất (<code>Set&lt;UUID&gt;</code>).</li>
          <li>Bảng ánh xạ tài khoản - mật khẩu (<code>Map&lt;String, String&gt;</code>).</li>
        </ul>

        <pre className="code-block">
            {`class Student {
            String name;
            int score;
            Student(String name, int score) {
                this.name = name;
                this.score = score;
            }
            }

            public class App {
            public static void main(String[] args) {
                List<Student> students = new ArrayList<>();
                students.add(new Student("Linh", 90));
                students.add(new Student("Nam", 80));

                for (Student s : students) {
                System.out.println(s.name + " - " + s.score);
                }
            }
            }`}
        </pre>

        <h2>6. Tổng kết</h2>
        <p>
          <b>Collections Framework</b> là nền tảng quan trọng trong Java,
          giúp xử lý tập dữ liệu một cách linh hoạt và hiệu quả.
          Việc hiểu rõ <b>List, Set, Map</b> sẽ giúp bạn dễ dàng xây dựng ứng dụng lớn hơn.
        </p>
      </section>
    </div>
  );
}

export default Java4;
