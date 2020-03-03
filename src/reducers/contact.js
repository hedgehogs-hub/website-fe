export default function contact(state={},action){
    switch(action.type){
        case "CONTACT_CONTENT_DATA_SUCCESS":
            return action.payload;
        default:
            return state
    }
}