import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="app">
      <div className="body">
        <header>
          <Navbar></Navbar>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
