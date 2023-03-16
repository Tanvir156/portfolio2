import React from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PriceCard from "./../Components/PriceCard";
import PriceCard2 from "./../Components/PriceCard2";
import PriceCard3 from "./../Components/PriceCard3";
import "./CSS/Priceing.css";
const Pricceing = () => {
  const theme = createTheme();

  theme.typography.h4 = {
    fontSize: "1rem",
    color: "white",

    textAlign: "left",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };
  theme.typography.h3 = {
    fontSize: "1.6rem",
    color: "white",

    textAlign: "left",
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6rem",
    },
  };
  theme.typography.p = {
    fontSize: "0.9rem",
    color: "white",
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
      <div className="priceings">
        <Typography
          variant="h4"
          style={{
            background: "whitesmoke",
            margin: "auto",
            color: "dimgray",
            width: "max-content",
            top: "-5px",
            position: "relative",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          PRICING PER BUILD
        </Typography>
        <div className="forgird">
          <PriceCard />
          <PriceCard2 />
          <PriceCard3 />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Pricceing;
