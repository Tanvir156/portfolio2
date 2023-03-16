import React from "react";
import MarkerImage from "./../Components/MarkerImage";
import MarkerContent from "./../Components/MarkerContent";
import "./CSS/Marker.css";
import Divider from "@mui/material/Divider";
import Image from "./../Components/Marker.jpg";
import Chip from "@mui/material/Chip";
const Marker = () => {
  return (
    <div
      style={{
        clipPath: "polygon(0% 5%, 100% 0%, 100% 100%, 0% 100%)",
        marginTop: "-35px",
        background: "firebrick",
      }}
      className="marker"
    >
      <div className="imageSection">
        <MarkerImage imag={Image} />
      </div>
      <div className="contentSection">
        <div className="centercontent">
          <MarkerContent
            tittl="Marker.io"
            tittle={<Chip label="recommanded" color="primary" />}
            text="Collect client feedback and report bugs into Jira, Trello, Asana, Github directly from your site with screenshots, annotations, console logs, and more."
            button="Get Free Trial"
          />
        </div>
      </div>
    </div>
  );
};

export default Marker;
