import React from 'react';
import Button from "./Button";

function FruitCounter({ fruitType, buttonClicked, incrementCounter, decrementCounter }) {
    return (
        <div className="fruitBar">
            <h3>{fruitType}</h3>
            <Button
                buttonType= "button"
                clickHandler={incrementCounter}
            > +
            </Button>

            <p>{buttonClicked}</p>
            <Button
                buttonType= "button"
                clickHandler={decrementCounter}
                toggleDisabled={buttonClicked === 0}>
                -
            </Button>
        </div>
    );
}

export default FruitCounter;