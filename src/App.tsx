//import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <div>
          <Header />
        </div>
        <div>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/joinus" element={<JoinUs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
