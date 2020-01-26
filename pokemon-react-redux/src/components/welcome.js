import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../actions/getPokemon';


const Welcome = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(getPokemon('huh'))}>Click</button>
    )
}

export default Welcome;