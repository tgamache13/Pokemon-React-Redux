import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../actions/getPokemon';
import { Link } from 'react-router-dom';


const Welcome = () => {
    const dispatch = useDispatch();

    return (
        <Link to='/pokemon-list'>
            <button onClick={() => dispatch(getPokemon())}>Click</button>
        </Link>
    )
}

export default Welcome;