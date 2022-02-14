import React, {useRef} from 'react';

import './Form.css';

const Form = ({dispatch}) => {
    const catInput = useRef();
    const dogInput = useRef();

    const form = (e) => {
        e.preventDefault();
        e.target.reset();
    };

    const addCat = () => {
        dispatch({type: 'addCat', payload: {cat: catInput.current.value}})
    };

    const addDog = () => {
        dispatch({type: 'addDog', payload: {dog: dogInput.current.value}})
    };

    return (
        <form onSubmit={form} className={'form'}>
            <input type="text" placeholder={'cat'} ref={catInput}/>
            <button onClick={addCat}>Add Cat</button>
            <input type="text" placeholder={'dog'} ref={dogInput}/>
            <button onClick={addDog}>Add Dog</button>
        </form>
    );
};

export {Form};