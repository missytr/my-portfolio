import React from "react";
import "../../styles/Blog/BlogPost.css";

function Js3() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Asynchronous JavaScript – Hiểu và Làm Chủ Bất Đồng Bộ</h1>
      <p className="blog-subtitle">
        JavaScript là ngôn ngữ đơn luồng (single-threaded), nhưng vẫn có thể xử lý tác vụ
        <b> bất đồng bộ</b> nhờ cơ chế <b>Event Loop</b> và các công cụ như
        <b> callback</b>, <b>Promise</b> và <b>async/await</b>.
      </p>

      <div className="blog-content">
        <h2>1️. Vấn đề bất đồng bộ là gì?</h2>
        <p>
          Trong lập trình, bất đồng bộ giúp chương trình không bị “đứng” khi thực hiện các tác vụ tốn thời gian 
          (ví dụ như gọi API, đọc file...). Thay vì chờ, JavaScript tiếp tục chạy các lệnh khác.
        </p>

        <div className="code-block">
        {`console.log("Bắt đầu");
        setTimeout(() => {
        console.log("Tác vụ bất đồng bộ");
        }, 2000);
        console.log("Kết thúc");`}
        </div>

        <p>
          Kết quả in ra:
          <br />👉 Bắt đầu  
          <br />👉 Kết thúc  
          <br />👉 Tác vụ bất đồng bộ (sau 2 giây)
        </p>

        <h2>2️. Callback</h2>
        <p>
          Callback là hàm được truyền vào hàm khác như một tham số, để được gọi sau khi tác vụ hoàn tất.
        </p>

        <div className="code-block">
        {`function fetchData(callback) {
        setTimeout(() => {
            callback("Dữ liệu đã được tải xong!");
        }, 2000);
        }

        fetchData((data) => {
        console.log(data);
        });`}
        </div>

        <p>❗Nhược điểm: Callback dễ gây ra “callback hell” khi lồng quá nhiều.</p>

        <h2>3️. Promise</h2>
        <p>
          Promise giúp code gọn gàng hơn bằng cách quản lý trạng thái của tác vụ: 
          <b> pending</b>, <b>fulfilled</b> hoặc <b>rejected</b>.
        </p>

        <div className="code-block">
        {`const promise = new Promise((resolve, reject) => {
        let success = true;
        if (success) resolve("Thành công!");
        else reject("Thất bại!");
        });

        promise
        .then((msg) => console.log(msg))
        .catch((err) => console.error(err));`}
        </div>

        <h2>4️. Async/Await</h2>
        <p>
          Async/Await giúp viết code bất đồng bộ trông như đồng bộ, dễ đọc và dễ bảo trì hơn.
        </p>

        <div className="code-block">
        {`async function getData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Lỗi:", error);
        }
        }

        getData();`}
        </div>

        <h2>5️. Tổng kết</h2>
        <ul>
          <li>Callback: đơn giản nhưng dễ gây lồng nhau.</li>
          <li>Promise: cải thiện cách xử lý bất đồng bộ.</li>
          <li>Async/Await: cú pháp ngắn gọn, dễ đọc, dựa trên Promise.</li>
        </ul>

        <p>
          👉 Hiểu rõ cơ chế bất đồng bộ giúp bạn xử lý dữ liệu, API và hiệu năng web tốt hơn.  
          Đây là kiến thức <b>bắt buộc</b> cho bất kỳ lập trình viên JavaScript nào.
        </p>
      </div>
    </div>
  );
}

export default Js3;
