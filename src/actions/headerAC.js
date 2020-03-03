import request from "./api";
const type="HEADER_CONTENT_DATA_SUCCESS"
export function headerContentDataSuccess(headerContent) {
    return {
        type: type,
        payload: headerContent
    }
}
export const headerContentData =  (url) => async dispatch => {
    const res = await request.get(url)
    dispatch(headerContentDataSuccess(res.data))
}