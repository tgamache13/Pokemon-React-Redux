import React from 'react';
import { useSelector } from 'react-redux';


const PokemonList = () => {
    const [ pokemon ] = useSelector(state => (
        [state.pokemon]
    ));

    return (
        <div>
            {pokemon.map(poke => <div key={poke.name} >Pokemon: {poke.name} </div>)}
        </div>
    );
}

export default PokemonList;