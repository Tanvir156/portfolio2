import React from "react";
import "./CSS/PriceCard.css";
import Button from "@mui/material/Button";
const PriceCard3 = () => {
  return (
    <div className="priceCard">
      <div style={{ margin: "40px" }} className="priceCarddiv3">
        <h4 style={{ position: "relative", zIndex: "1111" }}>PREMIUM</h4>
      </div>
      <div>
        <p>Website Audit</p>
        <p>Design</p>
        <p>Development</p>
        <p>Backups</p>
        <p>Analytic</p>
        <p>Live Chat</p>
        <p>COntent Mangement</p>
        <p>SEO optimization</p>
        <p>Maintenance Agreement</p>
        <p>eCommarce</p>
        <p>Email Setup</p>
        <p>Hosting</p>
      </div>
      <Button
        variant="contained"
        style={{
          margin: "30px",
          borderRadius: "15px",
          background: "#ffcd00",
          color: "#fff",
        }}
      >
        Request Quote
      </Button>
    </div>
  );
};

export default PriceCard3;
