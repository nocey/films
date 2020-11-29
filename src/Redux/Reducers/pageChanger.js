export default function(state=1,action){
    switch(action.type){
        case "ADD_PAGE":
            return state += 1;
        case"DOWN_PAGE":
            return state -=1;
        
        default:
            return state
    }
    
}