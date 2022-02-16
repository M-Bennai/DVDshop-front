import React, { useContext } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import logo from "../assets/logo_dvdshop.svg";
import cartIcon from "../assets/shopping-bag.svg";
//import { AuthContext } from "./auth/Auth";
import Auth from "./auth/Auth";
import { logout } from "./services/AuthApi";

const Navbar = () => {
  // const { authState, setAuthState } = useContext(AuthContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  // const logOut = () => {
  //   setAuthState({ ...authState, status: false });

  //   localStorage.clear();
  // };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <nav className="nav-navbar">
      <div className="container-navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div className="menu-container">
          <NavLink to="/movies">Movies </NavLink>
          <NavLink to="/series">Tv shows </NavLink>
          <NavLink to="/anime">Anime</NavLink>
        </div>
        <div className="user-shop-container">
          {(!isAuthenticated && (
            <>
              <Link className="link-login" to="/login">
                LOGIN
              </Link>
              <Link className="link-signin" to="/register">
                SIGN IN
              </Link>
            </>
          )) || (
            <>
              <NavLink className="link-login" to="/profile">
                PROFILE
              </NavLink>
              <div className="link-login" onClick={handleLogout}>
                LOGOUT
              </div>
            </>
          )}
          <Link to="/cart">
            <img src={cartIcon} alt={cartIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
