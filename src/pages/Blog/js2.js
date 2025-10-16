import React from "react";
import "../../styles/Blog/BlogPost.css";

function Js2() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">DOM Manipulation trong JavaScript</h1>
      <p className="blog-subtitle">
        Cách truy cập và thay đổi nội dung HTML/CSS bằng JavaScript.
      </p>

      <img
        src="/images/js.jpg"
        alt="DOM Manipulation"
        className="blog-image"
      />

      <div className="blog-content">
        <h2>1. DOM là gì?</h2>
        <p>
          DOM (Document Object Model) là mô hình cây đại diện cho tài liệu HTML.
          Mỗi phần tử HTML được xem là một “node” trong cây này, và bạn có thể
          thao tác với chúng bằng JavaScript để thay đổi giao diện web động hơn.
        </p>

        <div className="code-block">
          {`<div id="demo">Hello World!</div>

            <script>
            const element = document.getElementById("demo");
            console.log(element.innerText); // In ra: Hello World!
            </script>`}
        </div>

        <h2>2️. Truy cập phần tử trong DOM</h2>
        <p>Dưới đây là một số cách truy cập phần tử trong DOM:</p>
        <ul>
          <li>
            <code>document.getElementById("id")</code> — truy cập phần tử theo
            ID.
          </li>
          <li>
            <code>document.querySelector(".class")</code> — truy cập phần tử
            theo CSS selector.
          </li>
          <li>
            <code>document.getElementsByTagName("div")</code> — truy cập tất cả
            phần tử có tag name.
          </li>
        </ul>

        <h2>3️. Thay đổi nội dung và thuộc tính</h2>
        <p>
          Bạn có thể thay đổi nội dung, HTML hoặc thuộc tính của phần tử dễ
          dàng:
        </p>

        <div className="code-block">
          {`const title = document.getElementById("demo");
            title.innerText = "Chào bạn!";
            title.style.color = "red";`}
        </div>

        <h2>4️. Thêm và xóa phần tử DOM</h2>
        <p>
          Dưới đây là ví dụ cách thêm một phần tử mới vào trang và xóa nó khỏi
          DOM:
        </p>

        <div className="code-block">
          {`const newItem = document.createElement("p");
            newItem.innerText = "Đây là phần tử mới!";
            document.body.appendChild(newItem);

            document.body.removeChild(newItem);`}
        </div>

        <h2>5️. Sự kiện DOM (Event)</h2>
        <p>
          JavaScript có thể bắt các sự kiện như <code>click</code>,{" "}
          <code>input</code>, <code>mouseover</code> để phản hồi tương tác người
          dùng:
        </p>

        <div className="code-block">
          {`const btn = document.querySelector("button");
            btn.addEventListener("click", () => {
            alert("Bạn vừa click!");
            });`}
        </div>

        <h2> Tổng kết</h2>
        <p>
          DOM Manipulation là phần cốt lõi khi bạn muốn tương tác và làm động
          trang web. Thành thạo DOM giúp bạn xây dựng các ứng dụng web trực quan
          và mượt mà hơn.
        </p>
      </div>
    </div>
  );
}

export default Js2;
