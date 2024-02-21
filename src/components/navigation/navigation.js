import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import './navigation.css';
import CategoryContext from "../../contexts/categoryContext";

const Navbar = () => {
  let location = useLocation();
  const context = useContext(CategoryContext);

  if (!context || context.loading) {
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

  const { categories } = context;

  return (
      <ul className="navbar">
          {categories.map((category) => (
              <Link to={`/${category.name}`} className={`navbar__element ${location.pathname === `/${category.name}` ? "active" : ""}`}><li>{category.name.toUpperCase()}</li></Link>
          ))}
      </ul>
  );
};
  
export default Navbar;

