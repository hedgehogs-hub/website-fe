import request from "./api";
const type="TESTIMONIALS_CONTENT_DATA_SUCCESS"
export function testimonialsContentDataSuccess(testimonials) {
    return {
        type: type,
        payload: testimonials
    }
}
export const testimonialsContentData =  (url) => async dispatch => {
    const res = await request.get(url);
    dispatch(testimonialsContentDataSuccess(res.data))
}

