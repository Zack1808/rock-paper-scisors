import React from "react";
import { Link } from "react-router-dom";

// Importing the style file
import "../../css/SelectPage.css";

// Creating the SelectPage component
const SelectPage = () => {
  return (
    <div className="select-container">
      <div className="row-icons">
        <Link to="/result" className="paper"></Link>
        <Link to="/result" className="rock"></Link>
      </div>
      <div className="row-icon">
        <Link to="/result" className="scissors"></Link>
      </div>
    </div>
  );
};

// Exporting the component
export default SelectPage;
