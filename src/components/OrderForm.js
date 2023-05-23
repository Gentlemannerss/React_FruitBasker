import React from 'react';

function OrderForm() {
    return (
        <div className="information">
            <form>
                <h2>Form in standard HTML</h2>
                <label htmlFor="firstName">First name: </label>
                <input type="text" id="firstName" name="firstName"/>
                <label htmlFor="lastName">Last name: </label>
                <input type="text" id="lastName" name="lastName"/>
                <label htmlFor="Age">Age: </label>
                <input type="text" id="age" name="age"/>
                <label htmlFor="zipCode">Zip code: </label>
                <input type="text" id="zipCode" name="zipCode"/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email"/>
                <label htmlFor="orderfrequency">Orderfrequency :</label>
                <select name="orderfrequency" id="orderfrequency">
                    <option value="iedereweek">Iedere week</option>
                    <option value="iederemaand">Iedere maand</option>
                </select>
                <span>
                <input type="radio" id="overdag" name="deliveryOptions" value="overdag"/>
                <label htmlFor="overdag">Overdag</label>
                <input type="radio" id="avond" name="deliveryOptions" value="avond"/>
                <label htmlFor="avond">S' Avonds</label>
                </span>
                <label htmlFor="description">You're notes: </label>
                <input type="text" id="description" name="description"/>
                <span>
                <input type="checkbox" id="termsOf" name="termsOf"/>
                <label htmlFor="termsOf">Ik ga akkoord met de voorwaarden</label>
                </span>
                <button type="submit">Verzend</button>
            </form>
        </div>
    );
}

export default OrderForm;