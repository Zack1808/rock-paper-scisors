import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Importing the style file
import '../css/GameBoard.css'

// Creating the GameBoard component
const GameBoard = ({ score, playerChoice, setScore }) => {

    const [house, setHouse] = useState("");
    const [win, setWin] = useState("");
    const [counter, setCounter] = useState(3);

    const newHousePick = () => {
        const choices = ["rock", "paper", "scissors"];
        setHouse(choices[Math.floor(Math.random()*3)])
    };

    useEffect(() => {
        newHousePick();
    }, []); 

    useEffect(() => {
        const timer  = counter > 0 ? setInterval(() => {
            setCounter(counter - 1);
        }, 1000) : result();
        return () => {
            clearInterval(timer)
        }
    }, [counter,house])

    const result = () => {
        if(playerChoice === "rock" && house === "scissors") {
            setWin("win");
            setScore(score + 1);
        } else if(playerChoice === "rock" && house === "paper") {
            setWin("lose");
            setScore(score - 1);
        } else if(playerChoice === "paper" && house === "rock") {
            setWin("win");
            setScore(score + 1);
        } else if(playerChoice === "paper" && house === "scissors") {
            setWin("lose");
            setScore(score - 1);
        } else if(playerChoice === "scissors" && house === "paper") {
            setWin("win");
            setScore(score + 1);
        } else if(playerChoice === "scissors" && house === "rock") {
            setWin("lose");
            setScore(score - 1);
        } else {
            setWin("draw")
        }
    }

    const displayResult = () => {
        if(win == "win") {
            return (
                <div className="result_play">
                    <div className="text">You Win</div>
                    <Link className='play-again' onClick={() => setHouse()} to="/">Play Again</Link>
                </div>
            )
        };
        if(win == "lose") {
            return (
                <div className="result_play">
                    <div className="text">You Lose</div>
                    <Link className='play-again' onClick={() => setHouse()} to="/">Play Again</Link>
                </div>
            )
        };
        return (
            <div className="result_play">
                <div className="text">It's a Draw</div>
                <Link className='play-again' onClick={() => setHouse()} to="/">Play Again</Link>
            </div>
        )
    }

    return ( 
        <div className='game'>
            <div className="player_picked">
                <span className="text">You picked</span>
                <div className={`icon icon--${playerChoice} ${win == "win" ? "winner" : ""}`}></div>
            </div>
            { counter == 0 ? displayResult() : ""}
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