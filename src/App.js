import './App.css';
import React, {useReducer} from 'react';

import './App.css';
import {Cats, Dogs, Form} from "./components";

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case 'addDog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}
        case 'delCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)}
        case 'delDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)}
        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    let {cats, dogs} = state;

    return (
        <div className={'container'}>
            <div>
                <Form dispatch={dispatch}/>
                <div className={'animals'}>
                    <Cats cats={cats} dispatch={dispatch}/>
                    <Dogs dogs={dogs} dispatch={dispatch}/>
                </div>
            </div>
        </div>
    );
};

export default App;