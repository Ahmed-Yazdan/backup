import React, { useReducer } from 'react';

// Initial Value for useReducer 2nd parameter
const countState = {
    count: 0,
    clicks: 0,
    activeUser: true
}

// Function for useReducer 1st parameter
const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
            break;

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
            break;
            
        default:
            return state
            break;
    }
}

const Count = () => {
    const [state, dispatch] = useReducer(countReducer, countState)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
        </div>
    );
};

export default Count;