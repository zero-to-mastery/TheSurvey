import React from "react";
import logo from "./logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoWithText">
        <div className="logo">
          <img src={logo} alt="Logo of The Survey" />
        </div>
        <div className="text">
          <span className="">The Survey</span>
        </div>
      </div>
      <div className="signup">
        <a href="../html/signup.html">Sign Up</a>
      </div>
    </div>
  );
};
export default Navbar;
