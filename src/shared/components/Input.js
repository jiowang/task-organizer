import { useReducer, useCallback } from "react";
import React from 'react';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: true
            };
        default:
            return state;
    }
}

const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {value: props.initialValue || '', isValid: props.isValid || false});
    
    const changeHandler = useCallback((event) => {
        dispatch({type: 'CHANGE', val: event.target.value});
    }, []);

    return (
        <input
            id={props.id}
            type="text"
            onChange={changeHandler}
            value={inputState.value}
        />
    );
}

export default Input;