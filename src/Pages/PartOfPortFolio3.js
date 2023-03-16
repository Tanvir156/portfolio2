import React from "react";
import MarkerImage from "./../Components/MarkerImage";
import MarkerContent from "./../Components/MarkerContent";
import "./CSS/Marker.css";
import Divider from "@mui/material/Divider";
import Image from "./../Components/karokbibokti2.png";
import Chip from "@mui/material/Chip";
const PartOfPortfolio3 = () => {
  return (
    <div
      style={
        {
          // background: " #FF4136",
          // clipPath: "polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%)",
          // marginTop: "-35px",
        }
      }
      className="marker portfolio3"
    >
      <div className="imageSection">
        <MarkerImage imag={Image} />
      </div>
      <div className="contentSection">
        <div className="centercontent">
          <MarkerContent
            link="https://karokbibokti.netlify.app/"
            tittl="Karok Bibokti"
            tittle={<Chip label="2022" color="primary" />}
            text="It was my first work.I make this usign html ,css and javascript"
            button="Preview"
            button2="Visit site"
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default PartOfPortfolio3;
