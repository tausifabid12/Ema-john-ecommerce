import React from "react";
import Logo from "../images/Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Order</a>
        <a href="/">Services</a>
        <a href="/">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
