import React, { useReducer } from 'react'
import Header from "./Header";

// dispatch({ type: 'INCREMENT', title: 'algo' })
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };

        case 'SET_TITLE':
            return {
                ...state,
                title: action.title
            };

        default:
            return state
    }
};

const initialState = {
    count: 0,
    title: 'Hola'
};

const UseReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    };

    const handleTitle = (e) => {
        dispatch({
            type: 'SET_TITLE',
            title: e.target.value
        })
    };

    return (
        <div>
            <Header title={"Hook useReducer"} />
            <input
                type='text'
                onChange={handleTitle}
                value={state.title}
            />
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
            <h1>
                { state.count } - { state.title }
            </h1>
        </div>
    )
};

export default UseReducer;