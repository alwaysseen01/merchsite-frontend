import React from "react";
import { Link, useLocation } from "react-router-dom";
import './navigation.css';

const Navbar = () => {
    let location = useLocation();
    return (
      <ul className="navbar">
          <Link to="/t-shirts" className={`navbar__element ${location.pathname === "/t-shirts" ? "active" : ""}`}><li>T-SHIRTS</li></Link>
          <Link to="/sweatshirts" className={`navbar__element ${location.pathname === "/sweatshirts" ? "active" : ""}`}><li>SWEATSHIRTS</li></Link>
          <Link to="/hoodie" className={`navbar__element ${location.pathname === "/hoodie" ? "active" : ""}`}><li>HOODIE</li></Link>
          <Link to="/backpacks" className={`navbar__element ${location.pathname === "/backpacks" ? "active" : ""}`}><li>BACKPACKS</li></Link>
          <Link to="/pants" className={`navbar__element ${location.pathname === "/pants" ? "active" : ""}`}><li>PANTS</li></Link>
          <Link to="/shirts" className={`navbar__element ${location.pathname === "/shirts" ? "active" : ""}`}><li>SHIRTS</li></Link>
          <Link to="/hats" className={`navbar__element ${location.pathname === "/hats" ? "active" : ""}`}><li>HATS</li></Link>
      </ul>
    );
  };
  
  export default Navbar;
