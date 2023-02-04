import React from "react";

// Importing the style file
import "../css/Header.css";

// Importing the SVG logo
import Logo from "../images/logo.svg";

// Creating the Header component
const Header = ({ score = 0 }) => {
  return (
    <div className="header-container">
      <img src={Logo} alt="" />
      <div className="score-display">
        <span>Score: </span>
        {score}
      </div>
    </div>
  );
};

// Exporting the header component
export default Header;
