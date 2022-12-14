import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing the costume made components
import Header from './Header';
import Game from './Game';
import GameBoard from './GameBoard';
import Modal from './Modal'
import Footer from './Footer';

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {

    const [playerChoice, setPlayerChoice] = useState("");
    const [score, setScore] = useState(0);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="rotate">
                <h1>Please rotate the screen to portrait mode to play</h1>
            </div>
            <div className='container'>
                <Header score={score} />
                <Routes>
                    <Route exact path='/' element={<Game setPlayerChoice={setPlayerChoice} />} />
                    <Route exact path='/game' element={<GameBoard playerChoice={playerChoice} score={score} setScore={setScore} />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
};

export default App;