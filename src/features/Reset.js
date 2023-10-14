import React from 'react';

export const Reset = ({onReset}) => {
    return (
        <button className="reset" type="button" onClick={onReset}>
            Reset
        </button>
    )
}