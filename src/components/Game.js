import React from 'react';
import { Link } from 'react-router-dom';

// Importing the image
import Triangle from "../images/bg-triangle.svg";

// Importing the style file
import '../css/Game.css';

// Creating the Game component
const Game = ({ setPlayerChoice }) => {

    const setChoice = (e) =>{
        setPlayerChoice(e.target.dataset.id)
    }
    
    return (
        <div className='play'>
            <img src={Triangle} alt="" className='triangle' />
            <div className="items">
                <Link to="/game" >
                    <div className="icon icon--paper" data-id="paper" onClick={setChoice}></div>
                </Link>
                <Link to="/game" >
                    <div className="icon icon--scissors" data-id="scissors" onClick={setChoice}></div>
                </Link>
                <Link to="/game" >
                    <div className="icon icon--rock" data-id="rock" onClick={setChoice}></div>
                </Link>
            </div>
        </div>
    )
};

export default Game;