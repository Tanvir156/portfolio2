import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./CSS/OverView.css";
import Button from "@mui/material/Button";
import imag from "./../Components/wave.png";
export default function OverView() {
  const theme = createTheme();

  theme.typography.h1 = {
    fontSize: "2.1rem",
    color: "white",
    textAlign: "center",
    "@media (min-width:600px)": {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };
  theme.typography.p = {
    fontSize: "0.9rem",
    color: "white",
    textAlign: "center",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
  };
  const otherCompt1 = document.querySelector(".portfolio");
  const handleClick = () => {
    otherCompt1.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="header">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm" className="section">
            <Box style={{ display: "grid", height: "fit-content" }}>
              <Typography variant="h1">
                <div class="teext">
                  Hello, I'm <span class="highlight">Tanvir Ahamed</span>.
                  <br />
                  I'm a full-stack web developer.
                </div>
              </Typography>
              {/* <Typography variant="p">
                I am a MERN stack developer.I can design responsive Website and
                make your website creative.
              </Typography> */}
              <Button
                variant="contained"
                style={{
                  width: "max-content",
                  margin: "auto",
                  marginTop: "60px",
                  padding: "13px",
                  borderRadius: "40px",
                  cursor: "pointer",
                  zIndex: "11111",
                }}
                onClick={handleClick}
              >
                View my work
              </Button>
            </Box>
          </Container>
          <img src={imag} alt="" className="imgg" />
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}
