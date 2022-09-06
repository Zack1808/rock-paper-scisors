import React from 'react';
import { Link } from 'react-router-dom';

// Creating the Game component
const Game = ({ setPlayerChoice }) => {

    const setChoice = (e) =>{
        setPlayerChoice(e.target.dataset.id)
    }
    
    return (
        <div className='play'>
            <Link to="/game" >
                <div className="icon icon--paper" data-id="paper" onClick={setChoice}>Paper</div>
            </Link>
            <Link to="/game" >
                <div className="icon icon--scissors" data-id="scissors" onClick={setChoice}>Scissors</div>
            </Link>
            <Link to="/game" >
                <div className="icon icon--rock" data-id="rock" onClick={setChoice}>Rock</div>
            </Link>
        </div>
    )
};

export default Game;