import React from "react";
import Card2 from "./../Components/Card2";
import Image from "./man.png";
import "./CSS/Skill.css";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Divider from "@mui/material/Divider";
const Skill = () => {
  return (
    <div style={{ marginTop: "-100px", background: "whitesmoke" }}>
      <div style={{ position: "relative", top: "60px" }}>
        <div className="section-title">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="skill">
        <div className="forimage">
          <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover style={{ position: "relative" }}>
              <img src={Image} loading="lazy" alt="" className="img" />
            </CardCover>
          </Card>
        </div>
        <div
          style={{
            right: "0",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
          className="fortext"
        >
          <Card2 />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Skill;
