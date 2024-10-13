import React from "react";
import "../styles/Home.css";
import "../App.css";
import winsimg from "../assets/winsimg.png";
import crown from "../assets/crown.png";
import divider from "../assets/divider.png";
const Home = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <div>
        <span className="smolheader hello">Hello!</span>
      </div>
      <br></br>
      <br></br>
      <img src={crown} alt="placeholder" className="crownimg" />
      <div className="title">
        <span className="bigheader">
          We’re Women <br />
          in Science (WINS) <br />
          club.
        </span>
      </div>
      <br></br>
      <br></br>
      <div className="marginleft">
        <span className="mediumheader">Our Purpose is...</span>
      </div>
      <div className="flex-container">
        <div></div>
        <div>
          <ul className="purposelist">
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
        </div>
        <div>
          <img src={winsimg} alt="placeholder" className="purposeimg" />
        </div>
        <div></div>
      </div>
      <button className="button learnmore">LEARN MORE</button>
      <div className="dividerdiv">
        <img src={divider} alt="page divider" className="divider" />
      </div>
      <div className="d-flex justify-content-center">
        <span className="smolheader">Events We Held</span>
      </div>
    </div>
  );
};

export default Home;
