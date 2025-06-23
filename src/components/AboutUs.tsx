import React from "react";
import "../styles/AboutUs.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import WINSGroupPhoto from "../assets/WINSGroupPhoto.jpg";

function AboutUs() {
  const navigate = useNavigate();
  const goToJoinUs = () => {
    navigate("/joinus");
  };
  return (
    <div>
      <br></br>
      <br></br>
      <div className="aligncenter">
        <span className="bigheader">About Us:</span>
      </div>
      <br></br>
      <div>
        <img
          src={WINSGroupPhoto}
          alt="WINS group photo!"
          className="winsgroupphoto"
        />
      </div>
      <br></br>
      <div className="winsphotodescription">
        <span>
          The Women in Science Club. Back row, from left to right: Wei Ding,
          Betty O'Neil, Nurit Haspel. Front row, from left to right: Shilpa
          Ghadge, Weiwei Gong, Jue Wang. Photo courtesy of Nurit Haspel.
        </span>
      </div>
      <br></br>
      <div className="abouttext">
        <span className="text">
          <div>
            The Women-In-Science Club aims to provide this critical support that
            so many students lack. We organize meetings where students can make
            new friends, reconnect with old ones, and get useful advice from
            senior students and faculty members who have gone through the same
            process and faced the exact same issues. Among our planned
            activities are field trips to research labs in the Boston area,
            inviting speakers from UMass Boston and other institutes to generate
            panel discussions and workshops to address a number of issues many
            of us face: work-life balance, juggling a career and a family life,
            navigating the not-always friendly job market, and being a part of a
            dual-career couple. While these issues are common to students of any
            gender, they weigh heavily on women due to the social expectations
            placed on them to be the main caregivers in their families. We also
            plan to organize programming improvement workshops and create
            research opportunities for undergraduates in order to attract female
            students to the many opportunities available to students in the
            science and engineering fields. In a preliminary survery among our
            students, we realized that most of them are interested in pursuing
            an academic career and could benefit from guidance and mentorship
            about work-life balance and preparation for the job market. Only a
            few students indicated that their families were not supportive of
            their choice to pursue a career in computing. In our opinion, it
            shows that family support is a very important factor in the career
            choice of the survey participants. There is no easy way to verify
            it, though, since potential students who lack support in their home
            and family environments are less likely to pursue a scientific
            career to begin with.
          </div>
          <a target="_blank" href="src\assets\WINSConstitution.pdf">
            WINS Constitution
          </a>
        </span>
      </div>
      <br></br>
      <button className="button aboutbutton" onClick={goToJoinUs}>
        JOIN US
      </button>
      <div className="aligncenter">
        <span className="bigheader">Meet the Team!</span>
      </div>
    </div>
  );
}

export default AboutUs;
