export default function services(state=[],action){
    switch(action.type){
        case "SERVICES_CONTENT_DATA_SUCCESS":
            return action.payload;
        default:
            return state
    }
}