import React from 'react';

const Display = props => {
    return (
        <div>
            <h1>BaseBall App</h1>
            <h2>Balls: {props.displayBalls}</h2>
            <h2>Strikes: {props.displayStrikes}</h2>
        </div>
    )
}

export default Display;