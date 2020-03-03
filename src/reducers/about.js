export default function about(state={},action){
    switch(action.type){
        case "ABOUT_CONTENT_DATA_SUCCESS":
            return action.payload;
        default:
            return state
    }
}