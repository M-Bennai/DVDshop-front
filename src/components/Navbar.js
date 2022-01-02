import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/DVDSHOP-logo.svg";
import cartIcon from "../assets/shopping-bag.svg";

const Navbar = () => {
  return (
    <nav className="nav-navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
      </div>
      <div className="menu-container">
        <NavLink to="/movies">MOVIES </NavLink>
        <NavLink to="/series">SERIES </NavLink>
        <NavLink to="/anime">ANIME</NavLink>
      </div>
      <div className="user-shop-container">
        <Link to="/login">LOGIN</Link>
        <Link to="/register">SIGN IN</Link>
        <Link to="/cart">
          <img src={cartIcon} alt={cartIcon} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
