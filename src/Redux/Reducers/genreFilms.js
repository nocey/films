export default function (state=[],action){
    switch (action.type){
        case "GET_FILMS_GENRE":
            return action.payload;
        default:
            return state
    }
}