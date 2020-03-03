export default function header(state={},action){
    switch(action.type){
        case "HEADER_CONTENT_DATA_SUCCESS":
            return {...state, header: action.payload};
        default:
            return state
    }
}