import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react';

// Importing the helpers
import { displayResult } from '../helpers/displayResult';
import { newHousePick } from '../helpers/setFunctions';
import { result } from '../helpers/result';

// Importing the style file
import '../css/GameBoard.css'

// Creating the GameBoard component
const GameBoard = ({ score, playerChoice, setScore }) => {

    const [house, setHouse] = useState("");
    const [win, setWin] = useState("");
    const [counter, setCounter] = useState(3);

    // calls for the function that ramly chooses an option during rendering of the component
    useEffect(() => {
        newHousePick(setHouse);
    }, []); 

    // Runs a timer that will countdown before revealing the opton the house choose every time the counter or the house option changes
    useEffect(() => {
        const timer  = counter > 0 ? setInterval(() => {
            setCounter(counter - 1);
        }, 1000) : result(playerChoice, house, score, setScore, setWin);
        return () => {
            clearInterval(timer)
        }
    }, [counter,house])

    return ( 
        <div className='game'>
            <div className="player_picked">
                <span className="text">You picked</span>
                <div className={`icon icon--${playerChoice} ${win == "win" ? "winner" : ""}`}></div>
            </div>
            { counter == 0 ? displayResult(win, setHouse) : ""}
            <div className="house_picked">
                <span className="text">The House picked</span>
                { counter == 0 ? (
                    <div className={`icon icon--${house} ${win == "lose" ? "winner" : ""}`}></div>
                ) : (
                    <div className="counter">{counter}</div>
                )}
            </div>
            
        </div> 
    )
};

export default GameBoard;