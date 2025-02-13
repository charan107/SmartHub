import React, { useState } from 'react';
import "./Header.css"
import MultiDropdown from '../../GlobalComponents/DropDown/DropDown';
import hamburger from "../../../assets/hamburger-menu.svg";
import resourcelibrary from "../../../assets/resourcelibrary.svg";
import genre from "../../../assets/genre.svg";
import smartpick from "../../../assets/smartpick.svg";
import requestabook from "../../../assets/requestabook.svg";
import support from "../../../assets/support.svg";
import adminpanel from "../../../assets/adminpanel.svg";
import communityexchange from "../../../assets/communityexchange.svg";

const Header = () => {
  const options = {
    filter: [
      "Filter", "Books", "Articles", "Videos", "Genre", "Author", "Publication Year", "Language", "Format", "Availability"
    ],
    sort: [
      "Sort By", "Relevance", "Newest First", "Oldest First", "Most Borrowed", "Highest Rated", "Alphabetical (A-Z)", "Alphabetical (Z-A)"
    ]
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Resource Library"); // Default active link

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleLinkClick = (linkName) => setActiveLink(linkName); // Update active link state

  return (
    <div className="header-wrapper">
      {/* Hamburger Icon */}
      <div 
        className="hamburger"
        onMouseEnter={() => setIsSidebarOpen(true)}  
      >
        <img src={hamburger} alt="Menu" />
      </div>

      {/* Sidebar */}
      <div 
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`} 
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <nav className="sidebar-links">
          <a 
            href="#" 
            className={activeLink === "Resource Library" ? "active" : ""}
            onClick={() => handleLinkClick("Resource Library")}
          >
            <img src={resourcelibrary} width={"30px"} alt="" /> Resource Library
          </a>
          <a 
            href="#" 
            className={activeLink === "Smart Picks" ? "active" : ""}
            onClick={() => handleLinkClick("Smart Picks")}
          >
            <img src={smartpick} width={"30px"} alt="" /> Smart Picks
          </a>
          <a 
            href="#" 
            className={activeLink === "Community Exchange" ? "active" : ""}
            onClick={() => handleLinkClick("Community Exchange")}
          >
            <img src={communityexchange} width={"30px"} alt="" /> Community Exchange
          </a>
          <a 
            href="#" 
            className={activeLink === "Request a Book" ? "active" : ""}
            onClick={() => handleLinkClick("Request a Book")}
          >
            <img src={requestabook} width={"30px"} alt="" /> Request a Book
          </a>
          <a 
            href="#" 
            className={activeLink === "Admin Panel" ? "active" : ""}
            onClick={() => handleLinkClick("Admin Panel")}
          >
            <img src={adminpanel} width={"30px"} alt="" /> Admin Panel
          </a>
          <a 
            href="#" 
            className={activeLink === "Genres" ? "active" : ""}
            onClick={() => handleLinkClick("Genres")}
          >
            <img src={genre} width={"30px"} alt="" /> Genres
          </a>
          <a 
            href="#" 
            className={activeLink === "Support" ? "active" : ""}
            onClick={() => handleLinkClick("Support")}
          >
            <img src={support} width={"30px"} alt="" /> Support
          </a>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className='inputandfilter'>  
          <input 
            className="search-input"
            type="text" 
            placeholder="Search books, articles, videos..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          <div className="filter-sort-container">
            <MultiDropdown options={options.filter} />
            <MultiDropdown options={options.sort} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
