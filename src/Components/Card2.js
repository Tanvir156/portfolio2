import React from "react";
import "./CSS/Card2.css";
const Card = () => {
  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",

    // }}
    >
      <div>
        <div className="about-content">
          <h3>
            Welcome to{" "}
            <span class="color-text" style={{ color: "red" }}>
              My Profile
            </span>
          </h3>
          <h3>- It's my pleasure to introduce about myself.</h3>
          <p>
            Hello i'm{" "}
            <strong style={{ color: "red" }}>Tanvir from Bangladesh</strong>.
            i'm full stack web developer &amp; ui ux designer. with 2+ years of
            experience. With more than 1.5 years experience in web designe and
            front-end development, I have deep understanding of the technologies
            and the processes required for realising a successful web project
            from A to Z.
          </p>
          <br />
          <h3>What are my values?</h3>
          <p>
            When developing a web project, I focus on understanding the business
            goals and delivering a final product that will really work for the
            client.
          </p>
          <br />
          <p>
            <b>Phone:</b> +8801643072290
            <br />
            <b>E-mail:</b> rana525203@gmail.com
            <br />
            <b>Whatsapp:</b> +8801643072290
          </p>
          {/* <a href="#0" class="button js-scroll">
            Download my CV
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
