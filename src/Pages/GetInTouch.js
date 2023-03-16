import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./CSS/GetInTouch.css";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
const GetInTouch = () => {
  const [sendText, setSendText] = useState("Send");

  const currencies = [
    {
      value: "Basic",
      label: "Basic",
    },
    {
      value: "Standard",
      label: "Standard",
    },
    {
      value: "Premium",
      label: "Premium",
    },
  ];
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
    color: "black",

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
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      type: type,
      message: message,
    };
    setSendText("Sending...");

    axios
      .post("http://localhost:5000/sendEmail", data)
      .then((response) => {
        console.log("Email sent successfully!");
        // Optionally show a success message to the user
        setSendText("Sent");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        // Optionally show an error message to the user
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "80vh" }}>
        <Typography
          variant="h4"
          style={{
            background: "#3c2087",
            margin: "auto",
            width: "max-content",
            top: "-5px",
            position: "relative",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          CONTRACT
        </Typography>
        <div>
          <Typography
            variant="h3"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              position: "relative",
              height: "20vh",
              alignItems: "center",
            }}
          >
            Get In Touch
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ marginRight: "20px" }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="Basic"
            helperText="Select Your Plan(Optional)"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", magin: "auto" }}
        >
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Message"
            minRows={4}
            className="textarea"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            magin: "auto",
            marginTop: "30px",
          }}
          className="linkk"
        >
          <Button
            variant="contained"
            style={{
              borderRadius: "9px",
            }}
            onClick={handleSubmit}
          >
            {sendText}
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "230px",
            margin: "auto",
            height: "10vh",
            top: "100",
            position: "relative",
          }}
        >
          <a
            href="https://www.linkedin.com/in/tanvir-ahamed-90a382267"
            target="_blank"
            rel="noreferrer"
            className="decoration"
          >
            <p>
              <LinkedInIcon fontsize="large" />
            </p>
          </a>
          <a href="www.email.com">
            <p>
              <EmailIcon fontsize="large" />
            </p>
          </a>
          <a
            href="https://github.com/Tanvir156"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <GitHubIcon fontsize="large" />
            </p>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <p>
              <FacebookIcon fontsize="large" />
            </p>
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default GetInTouch;
