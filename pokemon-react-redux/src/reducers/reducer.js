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
            
            return {
                ...state,
                isGetting: false,
                pokemon: action.payload
            }
        default:
            return state;
    }
}