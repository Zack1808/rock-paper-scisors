import { Link } from 'react-router-dom';


// Function that will display the apropriate score message
export const displayResult = (win, setHouse) => {
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