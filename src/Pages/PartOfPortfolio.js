import React from "react";
import MarkerImage from "./../Components/MarkerImage";
import MarkerContent from "./../Components/MarkerContent";
import "./CSS/Marker.css";
import Divider from "@mui/material/Divider";
import Image from "./../Components/eschool.png";
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
            link="https://e-school-pi.vercel.app"
            tittl="E-School"
            tittle={<Chip label="2022" color="primary" />}
            text="This is a online course selling website.I build this website to sell my web design courses"
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
