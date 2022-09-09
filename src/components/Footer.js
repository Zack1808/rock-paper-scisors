import React, { useState } from 'react';

// Importing the costume made components
import Modal from './Modal';

// Importing helper functions
import { toggleModal } from '../helpers/toogleModal';

// Importing the style file
import "../css/Footer.css";

// Creating the Footer component
const Footer = () =>{

    const [modal, setModal] = useState(false);

    return (
        <>
            <footer className="footer">
                <div className='attribution'>
                    Challanged by <a href='https://www.frontendmentor.io?ref=challange' target="_blank">Frontend Mentor</a>
                    Code by JPN
                </div>
                <button className="rules" onClick={() => toggleModal(modal, setModal)}>
                    Rules
                </button>
            </footer>
            {
                modal ? <Modal modal={modal} setModal={setModal} /> : null
            }
        </>
    )
};

export default Footer;