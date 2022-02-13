import React, {useReducer} from 'react';

import {} from './Counters.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: 0}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset3':
            return {...state, count3: 0}
        default:
            return state;

    }
};

const Counters = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div className={'counters'}>
            <div>
                <h2>Counter 1</h2>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset'})}>RESET</button>
            </div>
            <div>
                <h2>Counter 2</h2>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset2'})}>RESET</button>
            </div>
            <div>
                <h2>Counter 3</h2>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset3'})}>RESET</button>
            </div>
        </div>
    );
};

export default Counters;