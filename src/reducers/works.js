export default function works(state = {works: []}, action) {
    switch (action.type) {
        case "WORKS_CONTENT_DATA_SUCCESS":
            let works = state.works;
            for (var i in action.payload) {
                works = [...works, action.payload[i]]
            }
            return {...state, works};
        case "SET_LOADER_FALSE":
            return {...state, setLoaderFalse: true};
        default:
            return state
    }
}
