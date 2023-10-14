import React from 'react';

export const Decrement = ({onDecrement}) => {
    
    return (
        <button className="decrement" type="button" onClick={onDecrement}>
            -
        </button>
    )
}