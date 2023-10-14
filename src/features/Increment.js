import React from 'react';

export const Increment = ({onIncrement}) => {

    return (
        <button className="increment" type="button" onClick={onIncrement}>
            +
        </button>
    )
}