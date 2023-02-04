import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importing the style file
import "../../css/ResultPage.css";

// Creating the ResultPage component
const ResultPage = ({ setResult, userChoice }) => {
  // Variable definition
  const choices = ["rock", "paper", "scissors"];
  const [counter, setCounter] = useState(3);
  const [aiSelection, setAiSelection] = useState("");
  const [res, setRes] = useState("");

  useState(() => {
    setAiSelection(choices[Math.floor(Math.random() * 3)]);
  }, []);

  // Setting up the counter
  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : setRes(getResult());
    return () => {
      clearInterval(timer);
    };
  }, [counter, aiSelection]);

  // Getting the result
  const getResult = () => {
    if (
      (userChoice === "rock" && aiSelection === "scissors") ||
      (userChoice === "paper" && aiSelection === "rock") ||
      (userChoice === "scissors" && aiSelection === "paper")
    ) {
      setResult((prevState) => prevState + 1);
      return "You Win";
    } else if (
      (userChoice === "rock" && aiSelection === "paper") ||
      (userChoice === "paper" && aiSelection === "scissors") ||
      (userChoice === "scissors" && aiSelection === "rock")
    ) {
      setResult((prevState) => prevState - 1);
      return "You Lose";
    } else {
      return "It's a Draw";
    }
  };

  return (
    <div className="result-container">
      <span
        className={`${userChoice} ${res === "You Win" ? "win" : null}`}
      ></span>
      {counter > 0 ? null : (
        <div className="result">
          <h2>{res}</h2>
          <Link to="/">Play Again</Link>
        </div>
      )}
      {counter > 0 ? (
        <span className="counter">{counter}</span>
      ) : (
        <span
          className={`${aiSelection} ${res === "You Lose" ? "win" : null}`}
        ></span>
      )}
    </div>
  );
};

// Exporting the ResultPage component
export default ResultPage;
