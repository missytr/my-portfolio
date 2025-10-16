import React from "react";
import "../../styles/Blog/BlogPost.css";

function Js4() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">
        Modern JavaScript (ES6+) – Các Tính Năng Hiện Đại Bạn Cần Biết
      </h1>

      <p className="blog-subtitle">
        JavaScript đã phát triển mạnh mẽ kể từ phiên bản <b>ES6 (ECMAScript 2015)</b>.  
        Những tính năng mới giúp code ngắn gọn, dễ đọc và hiệu quả hơn.  
        Dưới đây là những cải tiến quan trọng mà bạn <b>bắt buộc phải biết</b> khi lập trình JS hiện đại.
      </p>

      <div className="blog-content">
        <h2>1️. let và const</h2>
        <p>
          Trước ES6, JavaScript chỉ có <code>var</code>. Giờ đây, ta có thêm <b>let</b> và <b>const</b> — 
          giúp kiểm soát phạm vi biến (block scope) và tránh lỗi khi vô tình gán lại giá trị.
        </p>

        <div className="code-block">
        {`var x = 10;
        let y = 20;
        const z = 30;

        y = 25; // OK
        // z = 40; ❌ Error - const không thể thay đổi giá trị`}
        </div>

        <h2>2️. Arrow Function</h2>
        <p>
          Arrow function giúp viết hàm ngắn gọn và tự động bind <code>this</code> với phạm vi bên ngoài.
        </p>

        <div className="code-block">
        {`// Cách cũ
        function greet(name) {
        return "Xin chào " + name;
        }

        // Arrow function
        const greet = (name) => "Xin chào " + name;

        console.log(greet("Linh"));`}
        </div>

        <h2>3️. Destructuring</h2>
        <p>
          Destructuring giúp “rút gọn” việc lấy dữ liệu từ object hoặc array.
        </p>

        <div className="code-block">
        {`const user = { name: "Linh", age: 21 };
        const { name, age } = user;

        const numbers = [1, 2, 3];
        const [a, b] = numbers;

        console.log(name, age); // Linh 21
        console.log(a, b); // 1 2`}
        </div>

        <h2>4️. Spread và Rest Operator (...)</h2>
        <p>
          Toán tử ba chấm (<code>...</code>) giúp “trải” hoặc “gom” dữ liệu dễ dàng hơn.
        </p>

        <div className="code-block">
        {`// Spread - sao chép mảng
        const arr1 = [1, 2];
        const arr2 = [...arr1, 3, 4];
        console.log(arr2); // [1, 2, 3, 4]

        // Rest - gom tham số
        function sum(...nums) {
        return nums.reduce((a, b) => a + b, 0);
        }
        console.log(sum(1, 2, 3, 4)); // 10`}
        </div>

        <h2>5️. Template Literals</h2>
        <p>
          Cho phép chèn biến hoặc biểu thức trực tiếp vào chuỗi bằng dấu backtick (`` ` ``).
        </p>

        <div className="code-block">
        {`const name = "Linh";
        console.log(\`Xin chào, \${name}! Hôm nay là \${new Date().toDateString()}\`);`}
        </div>

        <h2>6️. Module Import/Export</h2>
        <p>
          Hệ thống module giúp chia nhỏ code thành nhiều file, dễ bảo trì hơn.
        </p>

        <div className="code-block">
        {`// math.js
        export const add = (a, b) => a + b;

        // main.js
        import { add } from "./math.js";
        console.log(add(2, 3)); // 5`}
        </div>

        <h2>7️. Optional Chaining & Nullish Coalescing</h2>
        <p>
          Hai tính năng mới giúp tránh lỗi khi truy cập giá trị undefined hoặc null.
        </p>

        <div className="code-block">
        {`const user = { profile: { name: "Linh" } };

        console.log(user.profile?.name); // "Linh"
        console.log(user.settings?.theme); // undefined

        const theme = user.settings?.theme ?? "light";
        console.log(theme); // "light"`}
        </div>

        <h2> Tổng kết</h2>
        <ul>
          <li><b>let/const:</b> Giúp code an toàn và có phạm vi rõ ràng hơn.</li>
          <li><b>Arrow function:</b> Viết ngắn gọn, tự động bind <code>this</code>.</li>
          <li><b>Destructuring & Spread:</b> Giúp thao tác dữ liệu dễ dàng.</li>
          <li><b>Module & Template literal:</b> Viết code hiện đại, sạch sẽ hơn.</li>
        </ul>

        <p>
          👉 Sử dụng ES6+ là tiêu chuẩn bắt buộc khi lập trình JavaScript hiện nay.  
          Nắm vững các cú pháp này giúp bạn làm việc hiệu quả hơn và dễ đọc code của người khác hơn!
        </p>
      </div>
    </div>
  );
}

export default Js4;
