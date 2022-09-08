import React from 'react';

// Importing the style file
import "../css/Footer.css";

// Creating the Footer component
const Footer = () =>{
    return (
        <footer className="footer">
                <div className='attribution'>
                Challanged by <a href='https://www.frontendmentor.io?ref=challange' target="_blank">Frontend Mentor</a>
                Code by JPN
            </div>
            <button className="rules">
                Rules
            </button>
        </footer>
    )
};

export default Footer;