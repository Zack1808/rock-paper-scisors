import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Creating the GameBoard component
const GameBoard = ({ score, playerChoice, setScore }) => {

    const [house, setHouse] = useState("");
    const [win, setWin] = useState("");

    const newHousePick = () => {
        const choices = ["rock", "paper", "scissors"];
        setHouse(choices[Math.floor(Math.random()*3)])
    };

    useEffect(() => {
        newHousePick();
    }, []); 

    useEffect(() => {
        result();
    }, [house])

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

    return ( 
        <div className='game'>
            Player Choice: {playerChoice}<br/>
            House Choice: {house}<br />

            Result: 
            {win == "win" && <h2>You Win</h2>}
            {win == "lose" && <h2>You Lose</h2>}
            {win == "draw" && <h2>Its a Draw</h2>}

            <Link to="/" onClick={() => setHouse()}>Play Again</Link>
        </div> 
    )
};

export default GameBoard;