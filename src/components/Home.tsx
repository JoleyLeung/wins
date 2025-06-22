import React from "react";
import "../styles/Home.css";
import "../App.css";
import womanoncomputer from "../assets/womanoncomputer.png";
import crown from "../assets/crown.png";
import divider from "../assets/divider2.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate("/aboutus");
  };

  return (
    <div>
      <br></br>
      <br></br>
      <div>
        <span className="smolheader hello">Hello!</span>
      </div>
      <br></br>
      <br></br>
      <img src={crown} alt="crown" className="crownimg" />
      <div className="hometitle">
        <span className="bigheader">
          We’re Women <br />
          in Science (WINS) <br />
          club.
        </span>
      </div>
      <br></br>
      <br></br>

      <div className="flex-container">
        <div></div>
        <div>
          <div className="marginleft purposetext">
            <span className="mediumheader">Our Purpose is...</span>
          </div>
          <ul className="text marginright marginleft">
            <li>
              To unite women working in, studying and interested in
              science-related disciplines.
            </li>
            <li>To provide a social platform for women in these fields.</li>
            <li>
              To provide women with important skills and resources necessary to
              succeed in science-related areas.
            </li>
            <li>
              To foster awareness and understanding of women’s issues in
              science-related fields both in the academic and industrial worlds.
            </li>
          </ul>
          <button className="button learnmore" onClick={goToAboutUs}>
            LEARN MORE
          </button>
        </div>
        <div>
          <img
            src={womanoncomputer}
            alt="a woman on a computer"
            className="purposeimg"
          />
        </div>
        <div></div>
      </div>

      <div className="dividerdiv">
        <img src={divider} alt="page divider" className="divider" />
      </div>
      <div className="aligncenter">
        <span className="smolheader">Events We Held</span>
      </div>
    </div>
  );
};

export default Home;
