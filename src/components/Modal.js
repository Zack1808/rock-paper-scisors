import React from "react";
import ReactDOM from "react-dom";
import { UilMultiply } from "@iconscout/react-unicons";

// Importing the style file
import '../css/Modal.css'

// Importing the image with the rules
import Rules from "../images/image-rules.svg";

// Creating the portal
const Modal = ({ close }) => {
  return ReactDOM.createPortal(
    <div className="modal-container" onClick={() => close(false)}>
      <div className="modal-box">
        <div className="modal-header">
          <h1>Rules</h1>
          <UilMultiply onClick={() => close(false)} />
        </div>
        <div className="modal-body">
          <img src={Rules} alt="" />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

// Exporting the Modal component
export default Modal;
