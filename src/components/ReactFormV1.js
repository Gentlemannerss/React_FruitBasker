import React from 'react';

function ReactFormV1() {
    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [termsAndCoditionValue, toggelTermsAndConditionsValue] = React.useState(false);
    return (
        <>
        <div className="information">
            <form>
                <label htmlFor="firstName">
                    First name:
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstNameValue}
                        placeholder="Please enter you're first name."
                        onChange={(e) => setFirstNameValue(e.target.value)} //dit slaat de waarde van de gebruiker op zodat we dit kunnen gebruiken.
                    />
                </label>
                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        id="terms-and-conditions"
                        name="terms-and-conditions"
                        checked={termsAndCoditionValue}
                        onChange={() => toggelTermsAndConditionsValue(!termsAndCoditionValue)}
                    />
                    Ik ga akkoord met de algemene voorwaarden.
                </label>
            </form>
        </div>
        </>
    );
}

export default ReactFormV1;