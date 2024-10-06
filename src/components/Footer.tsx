import React from "react";
import "../styles/Footer.css";
import WINSlogo from "../assets/WINSlogo.jpg";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row no-gutters">
        <div className="col d-flex align-items-center col-md-auto">
          <img src={WINSlogo} width={50} height={50} alt="WINS logo" />
        </div>
        <div
          className="col d-flex align-items-center"
          style={{ height: "75px" }}
        >
          <span className="text-start">Women In Science</span>
        </div>
        <div
          className="col justify-content-end d-flex align-items-center"
          style={{ height: "75px" }}
        >
          <span className="text-end">
            Email: wei.ding@umb.edu
            <br />
            hello :D
            <br />
            phone number :00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
