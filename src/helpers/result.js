// Function that checks if the player or the house won
export const result = (playerChoice, house, score, setScore, setWin) => {
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