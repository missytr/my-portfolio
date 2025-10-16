import React from "react";
import "../../styles/Blog/BlogPost.css";

function Java2() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Java OOP</h1>
      <p className="blog-subtitle">
        Khám phá lập trình hướng đối tượng: Class, Object, Inheritance, Polymorphism.
      </p>

      <img
        src="/images/java.jpg"
        alt="Java OOP"
        className="blog-image"
      />

      <section className="blog-content">
        <h2>1. Giới thiệu về OOP trong Java</h2>
        <p>
          OOP (Object-Oriented Programming) là mô hình lập trình dựa trên khái niệm
          “đối tượng” — nơi dữ liệu và hành vi được đóng gói chung lại.
          Java là một trong những ngôn ngữ hỗ trợ OOP mạnh mẽ nhất.
        </p>

        <h2>2. Class và Object</h2>
        <p>
          <b>Class</b> là bản thiết kế (blueprint) cho các đối tượng,
          còn <b>Object</b> là thể hiện cụ thể của lớp.
        </p>
        <pre className="code-block">
            {`public class Student {
            String name;
            int age;

            void study() {
                System.out.println(name + " đang học Java");
            }
            }

            public class Main {
            public static void main(String[] args) {
                Student s1 = new Student();
                s1.name = "Linh";
                s1.age = 21;
                s1.study();
            }
            }`}
        </pre>

        <h2>3. Tính kế thừa (Inheritance)</h2>
        <p>
          Kế thừa cho phép một lớp <b>con</b> sử dụng lại thuộc tính và phương thức của lớp <b>cha</b>,
          giúp giảm lặp code và tăng khả năng tái sử dụng.
        </p>
        <pre className="code-block">
            {`class Animal {
            void eat() {
                System.out.println("Đang ăn...");
            }
            }

            class Dog extends Animal {
            void bark() {
                System.out.println("Gâu gâu!");
            }
            }

            public class Main {
            public static void main(String[] args) {
                Dog dog = new Dog();
                dog.eat(); // Kế thừa từ Animal
                dog.bark();
            }
            }`}
        </pre>

        <h2>4. Tính đa hình (Polymorphism)</h2>
        <p>
          Đa hình cho phép một hành động có thể được thực hiện theo nhiều cách khác nhau.
          Trong Java, nó được thể hiện qua <b>ghi đè phương thức</b> (method overriding).
        </p>
        <pre className="code-block">
            {`class Animal {
            void sound() {
                System.out.println("Âm thanh chung");
            }
            }

            class Cat extends Animal {
            @Override
            void sound() {
                System.out.println("Meo meo");
            }
            }

            public class Main {
            public static void main(String[] args) {
                Animal myCat = new Cat();
                myCat.sound(); // Gọi phương thức được ghi đè
            }
            }`}
        </pre>

        <h2>5. Tính đóng gói (Encapsulation)</h2>
        <p>
          Đóng gói giúp bảo vệ dữ liệu bên trong đối tượng bằng cách sử dụng các
          <b>phạm vi truy cập</b> (private, public, protected) và phương thức getter/setter.
        </p>
        <pre className="code-block">
            {`public class Account {
            private double balance;

            public void setBalance(double amount) {
                if (amount > 0) balance = amount;
            }

            public double getBalance() {
                return balance;
            }
            }`}
        </pre>

        <h2>6. Tổng kết</h2>
        <p>
          OOP là nền tảng quan trọng của Java. Việc hiểu và vận dụng thành thạo
          bốn tính chất chính: <b>Encapsulation</b>, <b>Inheritance</b>,
          <b>Polymorphism</b>, và <b>Abstraction</b> sẽ giúp bạn viết code
          gọn gàng, dễ bảo trì và mở rộng hơn.
        </p>
      </section>
    </div>
  );
}

export default Java2;
