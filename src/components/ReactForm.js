import React, {useState} from "react";

function ReactForm() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        zipCode: '',
        eMail: '',
        orderFrequency: '',
        deliveryOptions: '',
        description: '',
        termsAndConditions: false,
    });
    function handleChange(e) {
        const changedFieldName = e.target.name;
        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }

    return (
        <div className="information">
            <form>
            <label>
                First name:
            <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
            />
            </label>
            <label>
                Last name:
            <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
            />
            </label>
            <label>
                Age:
            <input
                type="text"
                name="age"
                value={formState.age}
                onChange={handleChange}
            />
            </label>
            <label>
                Zip code:
            <input
                type="text"
                name="zipCode"
                value={formState.zipCode}
                onChange={handleChange}
            />
            </label>
            <label>
                Email:
            <input
                type="text"
                name="eMail"
                value={formState.eMail}
                onChange={handleChange}
            />
            </label>
            <label>
                Order Frequency:
            <select
            name="orderFrequency"
            value={formState.orderFrequency}
            onChange={handleChange}>
                <option value="everyWeek">Iedere week.</option>
                <option value="everyMonth">Iedere maand.</option>
            </select>
            </label>
            <label>
                Delivery Options:
                    <label>
                        <input
                            type="radio"
                            name="deliveryOptions"
                            value="day"
                            checked={formState.deliveryOptions === "day"}
                            onChange={handleChange}
                        />
                        Overdag {/*Waar je de tekst plaats maakt uit waar het komt na de checkbox*/}
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="deliveryOptions"
                            value="night"
                            checked={formState.deliveryOptions === "night"}
                            onChange={handleChange}
                        />
                        S' Avonds.
                    </label>
            </label>
            <label>
                You're notes:
                <input
                    type="text"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                />
                <textarea>
                    {/*Betere optie voor een formulier.*/}
                </textarea>
            </label>
            <label>
                <input
                    type="checkbox"
                    name="termsAndConditions"
                    checked={formState.termsAndConditions}
                    onChange={handleChange}
                />
                Akkoord met de algemene voorwaarden
            </label>
            </form>
        </div>
    )
}

export default ReactForm