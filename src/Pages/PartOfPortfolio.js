import React from "react";
import MarkerImage from "./../Components/MarkerImage";
import MarkerContent from "./../Components/MarkerContent";
import "./CSS/Marker.css";
import Divider from "@mui/material/Divider";
import Image from "./../Components/Tictecchat.png";
import Chip from "@mui/material/Chip";
const PartOfPortfolio = () => {
  return (
    <div
      style={
        {
          // background: "#5689C0",
          // clipPath: "polygon(0% 5%, 100% 0%, 100% 100%, 0% 95%)",
          // marginTop: "-35px",
        }
      }
      className="marker portfolio1"
    >
      <div className="imageSection">
        <MarkerImage imag={Image} />
      </div>
      <div className="contentSection">
        <div className="centercontent">
          <MarkerContent
            link="https://tic-tec-toe-game.onrender.com"
            tittl="Chat&Play Tictec"
            tittle={<Chip label="2022" color="primary" />}
            text="I build this using react node js and socketio.you can play and chat with your friend."
            button="Preview"
            button2="Visit site"
          />
        </div>
      </div>
 <Divider variant="middle" />
    </div>
  );
};

export default PartOfPortfolio;
