export default function searchReducer(state="inception", action){
    switch(action.type){
        case "GET_FILMS_SEARCH":
            return action.payload;
        default:
            return state;
    }
}