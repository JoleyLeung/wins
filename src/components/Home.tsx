import React from "react";
import "../styles/Home.css";
import "../App.css";
import womanoncomputer from "../assets/womanoncomputer.png";
import crown from "../assets/crown.png";
import divider from "../assets/divider2.png";
import instagram from "../assets/InstagramPurple.png";
import youtube from "../assets/YoutubePurple.png";
import instagramclicked from "../assets/InstagramClicked.png";
import youtubeclicked from "../assets/YoutubeClicked.png";
import googlegroups from "../assets/GoogleGroupsPurple.png";
import googlegroupsclicked from "../assets/GoogleGroupsClicked.png";
import EventCarousel from "./EventCarousel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate("/aboutus");
  };
  const goToEvents = () => {
    navigate("/events");
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
      <div className="bothsocials">
        <div className="imageBox">
          <div className=" imageInn">
            <a
              target="_blank"
              href="https://www.youtube.com/@womeninscienceclubatumassb2697"
            >
              <img src={youtube} alt="Youtube" className="socials unclicked" />
            </a>
          </div>
          <div className="hoverImg">
            <a
              target="_blank"
              href="https://www.youtube.com/@womeninscienceclubatumassb2697"
            >
              <img
                src={youtubeclicked}
                alt="Youtube"
                className="socials clicked"
              />
            </a>
          </div>
        </div>
        <div className="imageBox">
          <div className="imageInn">
            <a target="_blank" href="https://groups.google.com/u/4/g/wis_umb">
              <img src={googlegroups} alt="Google Groups" className="socials" />
            </a>
          </div>
          <div className="hoverImg">
            <a target="_blank" href="https://groups.google.com/u/4/g/wis_umb">
              <img
                src={googlegroupsclicked}
                alt="Google Groups"
                className="socials clicked"
              />
            </a>
          </div>
        </div>
        <div className="imageBox">
          <div className="imageInn">
            <a target="_blank" href="https://www.instagram.com/umbwins/">
              <img src={instagram} alt="Instagram" className="socials" />
            </a>
          </div>
          <div className="hoverImg">
            <a target="_blank" href="https://www.instagram.com/umbwins/">
              <img
                src={instagramclicked}
                alt="Instagram"
                className="socials clicked"
              />
            </a>
          </div>
        </div>
      </div>

      <br></br>
      <div className="flex-container">
        <div></div>
        <div>
          <div className="marginleft purposetext">
            <span className="mediumheader">Our Purpose is...</span>
          </div>
          <ul className="text purposelist">
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
      </div>
      <br></br>
      <div className="dividerdiv overlap">
        <img src={divider} alt="page divider" className="divider" />
      </div>
      <br></br>
      <div className="aligncenter overlap">
        <span className="mediumheader">Events We Held</span>
      </div>
      <br></br>
      <section className=" hero--diagonal">
        <div className=" blue-bg">
          <div>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <EventCarousel />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              // ಥ_ಥ brrrrrr
            </div>
          </div>
        </div>
      </section>
      <div className="aligncenter overlap">
        <button className="button moreevents" onClick={goToEvents}>
          MORE EVENTS
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
