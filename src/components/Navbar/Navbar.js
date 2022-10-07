import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/home">Home</NavLink>
        {/* <a href="/#products-section">Shop</a> */}
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/">Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
