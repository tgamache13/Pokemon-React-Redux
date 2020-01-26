import axios from 'axios';

export const GET_POKEMON_START = 'GET_POKEMON_START';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAIL = 'GET_POKEMON_FAIL';

export const getPokemon = () => dispatch => {
    dispatch({ type: GET_POKEMON_START });
    axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_POKEMON_SUCCESS, payload: res.data.results })
        });
}