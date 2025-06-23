import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/Header.css";
import WINSlogo from "../assets/WINSlogo.jpg";
import UMBlogo from "../assets/UMass Boston Logo.png";

const Header = () => {
  // please turn the links into an array :)
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "JOIN US", path: "/joinus" },
    { name: "EVENTS", path: "/events" },
    { name: "GALLERY", path: "/gallery" },
  ];

  return (
    <div className="header lightblue-bg">
      <header>
        <div className="bigbar">
          <div>
            <a href="home">
              <img src={UMBlogo} alt="UMBB logo" className="logos" />
              <img src={WINSlogo} alt="WINS logo" className="logos" />
            </a>
          </div>
          <nav className="navbar">
            <ul className="navbar-links">
              {/* Mapping through navLinks to generate <li> and <Link> elements */}
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
