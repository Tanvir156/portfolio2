import React from "react";
import "./CSS/Card.css";
import WebIcon from "@mui/icons-material/Web";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Card = () => {
  const ability = [
    {
      icon: <WebIcon style={{ fontSize: "6rem" }} />,
      tittle: "WEBSITE AUDIT",
      content:
        "Looking to improve your page performance,SEO,or user experience?Request a free site audit.",
    },
    {
      icon: <DeveloperBoardIcon style={{ fontSize: "6rem" }} />,
      tittle: "DESIGN+DEVELOPMENT",
      content:
        "Clean,modern design-optimized for performance,search engines,and converting users to customers.",
    },
    {
      icon: <CardGiftcardIcon style={{ fontSize: "6rem" }} />,
      tittle: "ECOMMERCE",
      content:
        "Integration OF eCommerce platforms,payment gateways,custom product templates,and more.",
    },
    {
      icon: <MobileFriendlyIcon style={{ fontSize: "6rem" }} />,
      tittle: "MOBILE-FRIENDLY",
      content:
        "A responsive design makes your website accessible to all users,regardless of their device.",
    },
  ];
  const swep = () => {
    const content = document.getElementById("content");
    content.scrollBy({
      left: 250, // specify the number of pixels to scroll horizontally
      behavior: "smooth", // specify the scrolling behavior ('auto', 'smooth', or 'instant')
    });
  };
  const swep2 = () => {
    const content = document.getElementById("content");
    content.scrollBy({
      left: -180, // specify the number of pixels to scroll horizontally
      behavior: "smooth", // specify the scrolling behavior ('auto', 'smooth', or 'instant')
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ArrowBackIosIcon
        style={{ fontSize: "2rem", width: "40px" }}
        onClick={swep2}
        className="arrow2"
      />
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="content"
        id="content"
      >
        {ability.map((abilityy) => (
          <div key={abilityy.index} className="wholeContent">
            <div className="container">
              <div className="icon">{abilityy.icon}</div>
              <div className="tittle">
                <h2>{abilityy.tittle}</h2>
              </div>
              <div className="text">
                <p>{abilityy.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowForwardIosIcon
        style={{ fontSize: "2rem", width: "40px" }}
        onClick={swep}
        className="arrow"
      />
    </div>
  );
};

export default Card;
