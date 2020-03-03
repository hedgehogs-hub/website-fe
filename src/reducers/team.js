export default function team(state=[],action){
    switch(action.type){
        case "TEAM_CONTENT_DATA_SUCCESS":
            return action.payload;
        default:
            return state
    }
}