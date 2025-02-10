import React, { useState } from 'react';
import "./Navbar.css";
import book from "../../../assets/book.svg";
import homeIcon from "../../../assets/home.svg";
import aboutIcon from "../../../assets/about.svg";
import learnIcon from "../../../assets/learn.svg";
import hamburgerIcon from "../../../assets/hamburger-menu.svg"; 

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("#home"); // Track active tab

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={book} alt="Logo" />
      </div>
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li>
          <a href="#home" 
             className={activeTab === "#home" ? "active" : ""}
             onClick={() => setActiveTab("#home")}>
            <img src={homeIcon} alt="Home" className="nav-icon" /> Home
          </a>
        </li>
        <li>
          <a href="#about" 
             className={activeTab === "#about" ? "active" : ""}
             onClick={() => setActiveTab("#about")}>
            <img src={aboutIcon} alt="About Us" className="nav-icon" /> About Us
          </a>
        </li>
        <li>
          <a href="#learn" 
             className={activeTab === "#learn" ? "active" : ""}
             onClick={() => setActiveTab("#learn")}>
            <img src={learnIcon} alt="Learn" className="nav-icon" /> Learn with Us
          </a>
        </li>
      </ul>
      <div className="hamburger1" onClick={toggleMenu}>
        <img src={hamburgerIcon} alt="Menu" />
      </div>
    </nav>
  );
}

export default Navbar;
