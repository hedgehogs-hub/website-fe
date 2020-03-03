export default function testimonials(state=[],action){
    switch(action.type){
        case "TESTIMONIALS_CONTENT_DATA_SUCCESS":
            return action.payload;
        default:
            return state
    }
}