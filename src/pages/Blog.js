import React from "react";
import "../styles/Style.css";

function Blog() {
  const blogs = [
    {
      title: "Java Basics",
      desc: "Giới thiệu cú pháp, biến, kiểu dữ liệu, vòng lặp và các kiến thức nền tảng.",
      img: "images/java.jpg",
      link: "./Blog/java1",
    },
    {
      title: "Java OOP",
      desc: "Khám phá lập trình hướng đối tượng: Class, Object, Inheritance, Polymorphism.",
      img: "images/java.jpg",
      link: "./Blog/java2",
    },
    {
      title: "Exception Handling trong Java",
      desc: "Tìm hiểu try-catch-finally, throws và cách tạo custom exception trong Java.",
      img: "images/java.jpg",
      link: "./Blog/java3",
    },
    {
      title: "Java Collections Framework",
      desc: "Giới thiệu List, Set, Map và cách áp dụng vào dự án thực tế.",
      img: "images/java.jpg",
      link: "./Blog/java4",
    },
    {
      title: "JavaScript Basics",
      desc: "Cú pháp cơ bản, biến, hàm, vòng lặp và nguyên tắc lập trình trong JS.",
      img: "images/js.jpg",
      link: "./Blog/js1",
    },
    {
      title: "DOM Manipulation",
      desc: "Cách truy cập và thay đổi nội dung HTML/CSS bằng JavaScript.",
      img: "images/js.jpg",
      link: "./Blog/js2",
    },
    {
      title: "Asynchronous JavaScript",
      desc: "Hiểu về callback, Promise, async/await và xử lý bất đồng bộ.",
      img: "images/js.jpg",
      link: "./Blog/js3",
    },
    {
      title: "Modern JavaScript (ES6+)",
      desc: "Arrow function, destructuring, module, spread/rest và các tính năng hiện đại.",
      img: "images/js.jpg",
      link: "./Blog/js4",
    },
    {
      title: "Java vs JavaScript: Nên học cái nào trước?",
      desc: "So sánh cú pháp, ứng dụng, và định hướng nghề nghiệp giữa Java và JavaScript.",
      img: "images/java-js.jpg",
      link: "./Blog/compare",
    },
  ];

  return (
    <div>
      <section className="blog-cards">
        {blogs.map((b, i) => (
          <article className="project-card" key={i}>
            <div className="project-info">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <a href={b.link} className="btn btn-outline">
                Đọc tiếp
              </a>
            </div>
            <div className="project-image">
              <img src={b.img} alt={b.title} />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Blog;
