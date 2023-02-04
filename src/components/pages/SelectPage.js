import React from "react";
import { Link } from "react-router-dom";

// Importing the style file
import "../../css/SelectPage.css";

// Creating the SelectPage component
const SelectPage = ({ setSelection }) => {
  return (
    <div className="select-container">
      <div className="row-icons">
        <Link
          to="/result"
          className="paper"
          onClick={() => setSelection("paper")}
        ></Link>
        <Link
          to="/result"
          className="scissors"
          scissors
          onClick={() => setSelection("scissors")}
        ></Link>
      </div>
      <div className="row-icon">
        <Link
          to="/result"
          className="rock"
          onClick={() => setSelection("rock")}
        ></Link>
      </div>
    </div>
  );
};

// Exporting the component
export default SelectPage;
