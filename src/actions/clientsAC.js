import request from './api';
const type="CLIENTS_CONTENT_DATA_SUCCESS";
export function clientsContentDataSuccess(clients) {
    return {
        type: type,
        payload: clients
    }
}
export const clientsContentData =  (url) => async dispatch => {
    const res = await request.get(url)
    dispatch(clientsContentDataSuccess(res.data))
}

