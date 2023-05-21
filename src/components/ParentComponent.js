import React, {useState} from 'react';
import FruitCounter from './FruitCounter';

function ParentComponent() {
    const [bananaClicked, setBananaClicked] = useState(0);
    const [strawberryClicked, setStrawberryClicked] = useState(0);
    const [appleClicked, setAppleClicked] = useState(0);
    const [kiwiClicked, setKiwiClicked] = useState(0);

    const incrementBanana = () => {
        setBananaClicked(bananaClicked + 1);
    };

    const decrementBanana = () => {
        if (bananaClicked > 0) {
            setBananaClicked(bananaClicked - 1);
        }
    };

    const incrementStrawberry = () => {
        setStrawberryClicked(strawberryClicked + 1);
    };

    const decrementStrawberry = () => {
        if (strawberryClicked > 0) {
            setStrawberryClicked(strawberryClicked - 1);
        }
    };

    const incrementApple = () => {
        setAppleClicked(appleClicked + 1);
    };

    const decrementApple = () => {
        if (appleClicked > 0) {
            setAppleClicked(appleClicked - 1);
        }
    };

    const incrementKiwi = () => {
        setKiwiClicked(kiwiClicked + 1);
    };

    const decrementKiwi = () => {
        if (kiwiClicked > 0) {
            setKiwiClicked(kiwiClicked - 1);
        }
    };

    const resetCounters = () => {
        setBananaClicked(0);
        setStrawberryClicked(0);
        setAppleClicked(0);
        setKiwiClicked(0);
    };

    return (
        <div className="fruitContainer">
            <FruitCounter
                fruitType="🍌 Bananen"
                buttonClicked={bananaClicked}
                incrementCounter={incrementBanana}
                decrementCounter={decrementBanana}
            />
            <FruitCounter
                fruitType="🍓 Aardbeien"
                buttonClicked={strawberryClicked}
                incrementCounter={incrementStrawberry}
                decrementCounter={decrementStrawberry}
            />
            <FruitCounter
                fruitType="🍏 Appels"
                buttonClicked={appleClicked}
                incrementCounter={incrementApple}
                decrementCounter={decrementApple}
            />
            <FruitCounter
                fruitType="🥝 Kiwi"
                buttonClicked={kiwiClicked}
                incrementCounter={incrementKiwi}
                decrementCounter={decrementKiwi}
            />
            <button className="" onClick={resetCounters}>Reset All</button>
        </div>
    );
}

export default ParentComponent;