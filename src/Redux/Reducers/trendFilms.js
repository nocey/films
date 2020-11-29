import {GET_FILMS_TRENDS} from '../Actions/Actions'

export default function trendFilms(state="naci",action){
    switch(action.type){
        case GET_FILMS_TRENDS:
            return action.payload;
        default:
            return state;
    }
}