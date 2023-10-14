
//set up initial state
const initial_state = 0

//action creators
export const increment = () => {
    return {
        type: "addOne",
        payload: 1
    }
}

export const decrement = () => {
    return {
        type: "minusOne",
        payload: 1
    }
}

export const reset = () => {
    return {
        type: "reset",
        payload: 0
    }
}

//Reducer function
export const countReducer = (state=initial_state, action) => {
    switch(action.type) {
        case 'addOne': {
            return state + action.payload
        }
        
        case 'minusOne': {
            return state - action.payload
        }

        case 'reset': {
            return action.payload
        }

        default: {
            return state;
        }
    }
}

//selectors
export const selectCountNumber = state => state;