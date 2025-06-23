import React from "react";
import "../styles/Footer.css";
import WINSlogo from "../assets/WINSlogo.jpg";
import footersparks from "../assets/footersparks.png";

const Footer = () => {
  return (
    <div className="container-fluid footer lightblue-bg overlap">
      <div className="row no-gutters">
        <div className="col d-flex align-items-center">
          <span className="text-start credittext">Women In Science</span>
        </div>
        <div
          className="col justify-content-end d-flex align-items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          <span className="text-end credittext">
            Email:{" "}
            <a target="_blank" href="mailto:wei.ding@umb.edu">
              wei.ding@umb.edu
            </a>
            <br />
            Phone: 617-287-6428
            <br></br>
            Website adapted from{" "}
            <a
              target="_blank"
              href="https://www.figma.com/community/file/1337059051646144807"
            >
              a template by Harsh Bhattad
            </a>{" "}
            - Licensed under{" "}
            <a
              target="_blank"
              href="https://creativecommons.org/licenses/by/4.0/"
            >
              CC BY 4.0
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
