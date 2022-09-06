import React from 'react';

// Importing the css file
import "../css/Header.css";

// Creating the Header component
const Header = ({ score }) => {
    return (
        <div className='header'>
            <div className="text">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </div>
            <div className="score-box">
                <span>Score: </span>
                <div className="score-box__score">
                    {score}
                </div>
            </div>
        </div>
    )
};

export default Header;