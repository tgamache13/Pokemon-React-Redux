import { GET_POKEMON_START,
        GET_POKEMON_SUCCESS,
        GET_POKEMON_FAIL
        } from '../actions/getPokemon';

const initialState = {
    pokemon: [],
    error: '',
    isGetting: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMON_START:
            return {
                ...state,
                isGetting: true,
            }
        case GET_POKEMON_SUCCESS:
            const pokemon = [];
            return {
                ...state,
                isGetting: false,
                pokemon: pokemon
            }
        default:
            return state;
    }
}