import React from "react";
import "../styles/CV.css";

function CV() {
  return (
    <div className="cv-container">

      {/* Khung hiển thị PDF */}
      <iframe
        src={process.env.PUBLIC_URL + "/CV.pdf"}
        width="80%"
        height="600px"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "20px",
        }}
        title="CV"
      ></iframe>

      {/* Nút tải xuống */}
      <div style={{ marginTop: "20px" }}>
        <a
          href={process.env.PUBLIC_URL + "/CV.pdf"}
          download="TranKhanhLinh_CV.pdf"
          className="download-btn"
        >
          Tải về CV
        </a>
      </div>
    </div>
  );
}

export default CV;
