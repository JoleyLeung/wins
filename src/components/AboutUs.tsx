import React from "react";
import "../styles/AboutUs.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  const goToJoinUs = () => {
    navigate("/joinus");
  };
  return (
    <div>
      <div className="abouttitle">
        <span className="bigheader">About Us:</span>
      </div>
      <br></br>
      <div className="marginleft marginright">
        <span className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
      <button className="button marginleft" onClick={goToJoinUs}>
        JOIN US
      </button>
    </div>
  );
}

export default AboutUs;
