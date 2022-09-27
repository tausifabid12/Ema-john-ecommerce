import React from "react";
import "./Hero.css";
import img from "../images/Hero.jpg";

const Hero = () => {
  return (
    <div className="hero-container flex-center">
      <div className="hero-text-container">
        <p>
          <small className="sale-text">Sale upto 70% off</small>
        </p>
        <h1>New Collection For Fall</h1>
        <p>Discover all the new arrivals of ready-to-wear collection.</p>
        <button>Shop Now</button>
      </div>
      <div className="hero-img-container flex-center">
        <div className="rectangle"></div>
        <img className="hero-img" src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
