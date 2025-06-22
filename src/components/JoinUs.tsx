import React from "react";
import "../styles/JoinUs.css";
import "../App.css";
import divider from "../assets/divider2.png";

function JoinUs() {
  return (
    <div>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-center">
        <span className="bigheader">Join Us!</span>
      </div>
      <br></br>
      <div className="jointext">
        <span className="text">
          We are actively accepting members and applications to join our
          executive board. We are especially looking to recruit board members
          from the natural sciences and engineering fields. Any student who
          supports the idea of encouraging more women in science-related fields
          is welcome :)
        </span>
      </div>
      <br></br>
      <div className="dividerdiv">
        <img src={divider} alt="page divider" className="divider" />
      </div>
      <div className="aligncenter">
        <span className="mediumheader">How To Join:</span>
      </div>
      <br></br>
      <ol className="smolheader marginleft">
        <li>go to some link</li>
        <li>press a button or something</li>
        <li>i actually have no idea ಥ_ಥ</li>
      </ol>
    </div>
  );
}

export default JoinUs;
