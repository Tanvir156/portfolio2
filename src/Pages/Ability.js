import React from "react";
import Card from "./../Components/Card";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Ability = () => {
  return (
    <div
      style={{
        display: "grid",
        marginTop: "-74px",
        background: "#ffcd00",
        height: "90vh",

        // clipPath: "polygon(0% 0%,100% 0%,100% 95%,0% 100%)",
      }}
      className="ability"
    >
      <Card />
      <Button
        variant="outlined"
        style={{
          width: "max-content",
          margin: "auto",
          marginBottom: "40px",
          borderRadius: "30px",
        }}
      >
        Learn More
      </Button>
      <Divider variant="middle" style={{ position: "" }} />
    </div>
  );
};

export default Ability;
