import React from "react";
import Button from "@mui/material/Button";
import "./CSS/Practice.css";
const Practice = (props) => {
  return (
    <div>
      <section className="secction">
        <div className="half-width">
          <h2>
            I am <span>Tanvir Ahamed</span>
          </h2>
          <p>{props.description}</p>
          <Button variant="contained" className="centerbutton">
            Hire Me
          </Button>
        </div>
        <div className="half-width">
          <img src={props.imgk} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Practice;
