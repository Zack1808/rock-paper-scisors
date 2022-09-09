import React from 'react';
import ReactDOM from 'react-dom'

// Importgin heplpers
import { toggleModal } from '../helpers/toogleModal';

// importing images
import close from '../images/icon-close.svg';
import rules from '../images/image-rules.svg'

// Importing the styling
import '../css/Modal.css';

// Creating the Modal component
const Modal = ({ modal, setModal}) => {
    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-box">
                <div className="modal-header">
                    <h1>Rules</h1>
                    <button onClick={() => toggleModal(modal, setModal)}>
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