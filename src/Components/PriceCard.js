import React from "react";
import "./CSS/PriceCard.css";
import Button from "@mui/material/Button";
const PriceCard = () => {
  return (
    <div className="priceCard">
      <div style={{ margin: "40px" }} className="priceCarddiv">
        <h4 style={{ position: "relative", zIndex: "1111" }}>BASIC</h4>
      </div>
      <div>
        <p>Website Audit</p>
        <p>Design</p>
        <p>Development</p>
      </div>
      <Button
        variant="outlined"
        style={{
          margin: "30px",
          borderRadius: "15px",
          background: "#fff",
          color: "black",
        }}
      >
        Request Quote
      </Button>
    </div>
  );
};

export default PriceCard;
