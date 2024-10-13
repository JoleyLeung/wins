import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/Header.css";

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
    <header>
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
    </header>
  );
};

export default Header;
