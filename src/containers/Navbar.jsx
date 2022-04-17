import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>TheSurvey</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/survey"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Survey
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
