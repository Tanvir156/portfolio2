import React from "react";
import MarkerImage from "./../Components/MarkerImage";
import MarkerContent from "./../Components/MarkerContent";
import "./CSS/Marker.css";
import Divider from "@mui/material/Divider";
import Image from "./../Components/volunteer.png";
import Chip from "@mui/material/Chip";
const PartOfPortfolio4 = () => {
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
            link="https://volunteer-orpin.vercel.app"
            tittl="Volunteer"
            tittle={<Chip label="2022" color="primary" />}
            text="This website helps you to help people and also help you to manage any social work.register as a volunteer and help people with others people who are interested to help"
            button="Preview"
            button2="Visit site"
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default PartOfPortfolio4;
