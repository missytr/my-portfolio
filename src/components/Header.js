import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/MainStyle.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">Trần Khánh Linh</div>
      <nav className="nav-menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Trang chủ</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>Giới thiệu</Link>
        <Link to="/cv" className={location.pathname === "/cv" ? "active" : ""}>CV</Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Dự án</Link>
        <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Chia sẻ</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Liên hệ</Link>
      </nav>
    </header>
  );
}

export default Header;
