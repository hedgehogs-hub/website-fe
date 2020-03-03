import request from "./api";
const type="SERVICES_CONTENT_DATA_SUCCESS"
export function servicesContentDataSuccess(services) {
    return {
        type: type,
        payload: services
    }
}
export const servicesContentData =  (url) => async dispatch => {
    const res = await request.get(url)
    dispatch(servicesContentDataSuccess(res.data.data))
}

