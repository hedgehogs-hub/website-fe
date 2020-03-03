export default function clients(state=[],action){
    switch(action.type){
        case "CLIENTS_CONTENT_DATA_SUCCESS":
            return action.payload;
        default:
            return state
    }
}