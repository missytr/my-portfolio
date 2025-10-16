import React from "react";
import "../styles/Style.css";

function Blog() {
  return (
    <div>
      <section className="blog-cards">
        <article className="project-card">
          <div className="project-info">
            <h3>Java Basics</h3>
            <p>
              Giới thiệu cơ bản về Java: cú pháp, biến, kiểu dữ liệu, vòng lặp và
              các kiến thức nền tảng cho người mới bắt đầu.
            </p>
            <a href="java1.html" className="btn btn-outline">
              Đọc tiếp
            </a>
          </div>
          <div className="project-image">
            <img src="images/java.jpg" alt="Java Basics" />
          </div>
        </article>

        <article className="project-card">
          <div className="project-info">
            <h3>Java OOP</h3>
            <p>
              Khám phá lập trình hướng đối tượng trong Java, các khái niệm Class,
              Object, Inheritance, Polymorphism...
            </p>
            <a href="java2.html" className="btn btn-outline">
              Đọc tiếp
            </a>
          </div>
          <div className="project-image">
            <img src="images/java.jpg" alt="Java OOP" />
          </div>
        </article>

        <article className="project-card">
          <div className="project-info">
            <h3>JavaScript Basics</h3>
            <p>
              Cú pháp cơ bản, biến, toán tử, vòng lặp và các nguyên tắc lập trình
              trong JavaScript.
            </p>
            <a href="js1.html" className="btn btn-outline">
              Đọc tiếp
            </a>
          </div>
          <div className="project-image">
            <img src="images/js.jpg" alt="JavaScript Basics" />
          </div>
        </article>

        <article className="project-card">
          <div className="project-info">
            <h3>JavaScript Async</h3>
            <p>
              Hiểu về Async, Promise, await và cách quản lý bất đồng bộ trong
              JavaScript.
            </p>
            <a href="js5.html" className="btn btn-outline">
              Đọc tiếp
            </a>
          </div>
          <div className="project-image">
            <img src="images/js.jpg" alt="JavaScript Async" />
          </div>
        </article>
      </section>
    </div>
  );
}

export default Blog;