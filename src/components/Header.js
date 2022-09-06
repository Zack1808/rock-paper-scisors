import React from 'react';

// Creating the Header component
const Header = ({ score }) => {
    return (
        <div className='header'>Score: {score}</div>
    )
};

export default Header;