import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import './navigation.css';
import CategoryContext from "../../contexts/categoryContext";

const Navbar = () => {
  let location = useLocation();
  const {categoriesLoading, categories} = useContext(CategoryContext)

  if (categoriesLoading) {
    return (
      <ul className="navbar">
        <li className="navbar__loading_element"></li>
        <li className="navbar__loading_element"></li>
        <li className="navbar__loading_element"></li>
        <li className="navbar__loading_element"></li>
        <li className="navbar__loading_element"></li>
        <li className="navbar__loading_element"></li>
        <li className="navbar__loading_element"></li>
      </ul>
    );
  }

  return (
      <ul className="navbar">
          {categories.map((category) => (
              <Link to={`/${category.name}`} className={`navbar__element ${location.pathname === `/${category.name}` ? "active" : ""}`}><li>{category.name.toUpperCase()}</li></Link>
          ))}
      </ul>
  );
};
  
export default Navbar;

