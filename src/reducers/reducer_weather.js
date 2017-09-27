import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){    
    switch(action.type){
        case FETCH_WEATHER:
        //return state.push(action.payload.data);ERROR no se puede modificar o mutar state, se tiene
        //que crear una nueva instancia de state en este caso es un arreglo
            //return state.concat([action.payload.data]);El metodo concat regresa un nuevo arreglo.
            return [action.payload.data, ...state]; //ES6 igual a arriba
    }
    return state;
}

