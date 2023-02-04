import React, { useState, useEffect } from "react";
import { UilCopyright } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Footer.css";

// Importing costume components
import Modal from "./Modal";

// Creating the Footer component
const Footer = () => {
  // Setting up state
  const [modal, setModal] = useState(false);

  // Disabling scroll when modal is open
  useEffect(() => {
    modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });

  return (
    <>
      <div className="footer-container">
        <UilCopyright /> JPN
        <button onClick={() => setModal(true)}>Show Rules</button>
      </div>
      {modal ? <Modal close={setModal} /> : null}
    </>
  );
};

// Exporting the Footer component
export default Footer;
