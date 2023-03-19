import React from "react";
import MarkerImage from "./../Components/MarkerImage";
import MarkerContent from "./../Components/MarkerContent";
import "./CSS/Marker.css";
import Divider from "@mui/material/Divider";
import Image from "./../Components/nootbook.png";
import Chip from "@mui/material/Chip";
const Portfolio = () => {
  return (
    <div
      style={
        {
          // background: "whitesomoke",
        }
      }
      className="marker portfolio"
    >
      <div className="imageSection">
        <MarkerImage imag={Image} />
      </div>
      <div className="contentSection">
        <div className="centercontent">
          <MarkerContent
            link="https://notebook-self.vercel.app"
            heading="PORTFOLIO"
            tittl="Social Media"
            tittle={<Chip label="2022" color="primary" />}
            text="A platform where one can store her personal note.people can also share their status publicly.one can navigate other profile and can see their details.One can also message another exits in this website"
            button="Preview"
            button2="Visit site"
          />
        </div>
      </div>
      <Divider variant="middle" />
    </div>
  );
};

export default Portfolio;
