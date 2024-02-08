import React from "react";
import { Link } from "react-router-dom";
import './navigation.css';

const Navbar = () => {
  return (
    <ul className="navbar">
        <Link to="/t-shirts" className="navbar__element"><li>T-SHIRTS</li></Link>
        <Link to="/sweatshirts" className="navbar__element"><li>SWEATSHIRTS</li></Link>
        <Link to="/hoodie" className="navbar__element"><li>HOODIE</li></Link>
        <Link to="/backpacks" className="navbar__element"><li>BACKPACKS</li></Link>
        <Link to="/pants" className="navbar__element"><li>PANTS</li></Link>
        <Link to="/shirts" className="navbar__element"><li>SHIRTS</li></Link>
        <Link to="/hats" className="navbar__element"><li>HATS</li></Link>
    </ul>
  );
};

export default Navbar;

