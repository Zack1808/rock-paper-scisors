// Function that chooses an option for the house randomly
export const newHousePick = (setHouse) => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random()*3)])
};