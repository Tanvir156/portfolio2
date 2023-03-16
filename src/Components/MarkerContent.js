import React from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import "./CSS/MarkerContent.css";
const MarkerContent = (props) => {
  const theme = createTheme();

  theme.typography.h4 = {
    fontSize: "2.1rem",
    color: "dimgray",

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
    color: "black",

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
    color: "dimgray",
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
      {props.heading ? (
        <Typography variant="h3" className="prot">
          {props.heading}
        </Typography>
      ) : (
        <span style={{ display: "none" }}>{props.myProp}</span>
      )}
      <div>
        <React.Fragment>
          <CssBaseline />
          <Typography variant="h4">
            {props.tittl} {props.tittle}
          </Typography>
          <div className="container2">
            <div className="tittle2"></div>
            <div className="content2">
              <Typography variant="p">{props.text}</Typography>
            </div>
            <Button variant="contained" className="button2">
              {props.button}
            </Button>
            {props.button2 ? (
              <a
                href={props.link}
                target="_blank"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                <Button
                  variant="outlined"
                  id="button3"
                  style={{ margin: "5px" }}
                >
                  {props.button2}
                </Button>
              </a>
            ) : (
              <span style={{ display: "none" }}>{props.myProp}</span>
            )}
          </div>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
};

export default MarkerContent;
