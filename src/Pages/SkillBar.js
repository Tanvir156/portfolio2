import React from "react";
import "./CSS/SkillBar.css";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardCover from "@mui/joy/CardCover";
import express from "./image/express.png";
import reacct from "./image/react.jpeg";
import reactboot from "./image/reactboot.png";
import mongodb from "./image/mongodb.png";
import material from "./image/material.png";
import nodejs from "./image/nodejs.jpeg";
const SkillBar = () => {
  const theme = createTheme();

  theme.typography.h4 = {
    fontSize: "2.1rem",
    color: "gray",

    textAlign: "left",
    "@media (min-width:600px)": {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.1rem",
    },
  };
  theme.typography.h3 = {
    fontSize: "1rem",
    color: "white",

    textAlign: "left",
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };
  theme.typography.p = {
    fontSize: "0.9rem",
    color: "#ADD8E6",
    textAlign: "left",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="skillbar">
        <div>
          <div className="gootat">
            <Typography variant="h4">I am Good At</Typography>
          </div>
          <div className="allImage">
            <div className="fontend">
              <img src={reacct} alt="alt text" className="img-responsive" />
              <img src={reactboot} alt="alt text" className="img-responsive" />
              <img src={material} alt="alt text" className="img-responsive" />
            </div>
            <div className="backend">
              <img src={nodejs} alt="alt text" className="img-responsive" />
              <img src={express} alt="alt text" className="img-responsive" />
              <img src={mongodb} alt="alt text" className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SkillBar;
