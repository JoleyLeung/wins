import React from "react";
import "../styles/JoinUs.css";
import "../App.css";
import divider from "../assets/divider2.png";
import bluedivider from "../assets/Border (1).png";

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
      <br></br>

      <div className="dividerdiv bluedivider">
        <img src={bluedivider} alt="page divider" className="divider" />
      </div>
      <br></br>
      <br></br>
      <div className="aligncenter">
        <span className="mediumheader">How To Join:</span>
      </div>
      <br></br>

      <ol className="smolheader list">
        <li>
          Go to our{" "}
          <a target="_blank" href="https://groups.google.com/u/4/g/wis_umb">
            Google Group
          </a>
        </li>
        <li>Press the "Join Group" button</li>
        <li>Welcome to our club! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</li>
      </ol>
    </div>
  );
}

export default JoinUs;
