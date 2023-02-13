import React from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleScan(data) {
    navigate("/lista");
  }
  return (
    <div>
      <h1>hola desde home</h1>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          level="H"
          onScan={handleScan}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value="/lista"
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default Home;
