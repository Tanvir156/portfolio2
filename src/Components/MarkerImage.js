import React from "react";
import "./CSS/MarkerImage.css";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
const MarkerImage = (props) => {
  return (
    <div>
      {props.imag ? (
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover style={{ position: "relative" }}>
            <img src={props.imag} loading="lazy" alt="" className="img" />
          </CardCover>
        </Card>
      ) : (
        <span style={{ display: "none" }}>{props.myProp}</span>
      )}
      {props.vid ? (
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover style={{ position: "relative" }}>
            <video
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              />
            </video>
          </CardCover>
        </Card>
      ) : (
        <span style={{ display: "none" }}>{props.myProp}</span>
      )}

      {/* <img src={props.imag} alt="" className="img" /> */}
    </div>
  );
};

export default MarkerImage;
