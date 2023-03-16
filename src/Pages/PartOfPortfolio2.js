import React from "react";
import MarkerImage from "./../Components/MarkerImage";
import MarkerContent from "./../Components/MarkerContent";
import "./CSS/Marker.css";
import Divider from "@mui/material/Divider";
import Image from "./../Components/videochat.png";
import Chip from "@mui/material/Chip";
const PartOfPortfolio2 = () => {
  return (
    <div
      style={
        {
          // background: "#800080",
          // clipPath: "polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%)",
          // marginTop: "-35px",
        }
      }
      className="marker portfolio2"
    >
      <div className="imageSection">
        <MarkerImage imag={Image} />
      </div>
      <div className="contentSection">
        <div className="centercontent">
          <MarkerContent
            link="https://tic-tec-videochat.onrender.com/"
            tittl="TicTecToe and Video Chat"
            tittle={<Chip label="2022" color="primary" />}
            text="I build this using react node js and socketio.you can play and vido chat with your friend."
            button="Preview"
            button2="Visit site"
          />
        </div>
      </div>
 <Divider variant="middle" />
    </div>
  );
};

export default PartOfPortfolio2;
