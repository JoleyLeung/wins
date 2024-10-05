import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            <Link to="/joinus">JOIN US</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
