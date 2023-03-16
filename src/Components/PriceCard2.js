import React from "react";
import "./CSS/PriceCard.css";
import Button from "@mui/material/Button";
const PriceCard2 = () => {
  return (
    <div className="priceCard">
      <div style={{ margin: "40px" }} className="priceCarddiv2">
        <h4 style={{ position: "relative", zIndex: "1111" }}>STANDARD</h4>
      </div>
      <div>
        <p>Website Audit</p>
        <p>Design</p>
        <p>Development</p>
        <p>Backups</p>
        <p>Analytic</p>
        <p>Live Chat</p>
        <p>COntent Mangement</p>
      </div>
      <Button
        variant="contained"
        style={{
          margin: "30px",
          borderRadius: "15px",
          background: "#7205f7",
          color: "#fff",
        }}
      >
        Request Quote
      </Button>
    </div>
  );
};

export default PriceCard2;
