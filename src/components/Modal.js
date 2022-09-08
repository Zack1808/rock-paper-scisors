import React from 'react';
import ReactDOM from 'react-dom'

// importing images
import close from '../images/icon-close.svg';
import rules from '../images/image-rules.svg'

// Importing the styling
import '../css/Modal.css';

// Creating the Modal component
const Modal = ({ toggle }) => {
    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-box">
                <div className="modal-header">
                    <h1>Rules</h1>
                    <button onClick={toggle}>
                        <img src={close} alt="Close" />
                    </button>
                </div>
                <img src={rules} alt="Rules" />
            </div>
        </div>, 
        document.getElementById('modal')
    )
};

export default Modal;