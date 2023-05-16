import React from 'react';

function FruitCounter({ fruitType, buttonClicked, incrementCounter, decrementCounter }) {
    return (
        <div className="fruitBar">
            <h3>{fruitType}</h3>
            <button onClick={incrementCounter}>+</button>
            <p>{buttonClicked}</p>
            <button onClick={decrementCounter} disabled={buttonClicked === 0}>
                -
            </button>
        </div>
    );
}

export default FruitCounter;