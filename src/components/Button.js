import React from 'react';

function Button({ clickHandler , toggleDisabled, children, buttonType , nameOfClass }) {
    return (
        <div>
            {nameOfClass ?
            <button
                className={ nameOfClass }
                type={ buttonType }
                onClick={ clickHandler }
                disabled={ toggleDisabled }
            >
                {children}
            </button>
                :
                <button
                    className='standardButton'
                    type={ buttonType }
                    onClick={ clickHandler }
                    disabled={ toggleDisabled }
                >
                    {children}
                </button>
            }
        </div>
    );
}

export default Button;