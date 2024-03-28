import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import './navigation.css';
import CategoryContext from "../../contexts/categoryContext";
import cartIcon from './icons/cartIcon.png'

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
          <Link to='/cart' className={`navbar__element cartPage ${location.pathname === `/${'cart'}` ? "active" : ""}`}>
            <li>MY CART</li>
            <img src={cartIcon} className='cartIcon'></img>
          </Link>
      </ul>
  );
};
  
export default Navbar;

