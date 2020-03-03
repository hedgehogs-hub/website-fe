import request from "./api";

const type = "WORKS_CONTENT_DATA_SUCCESS";


export function worksContentDataSuccess(works) {
    return {
        type: type,
        payload: works
    }
}

export const getMoreWorks = (url, page) => async dispatch => {

    const res = await request.get(`${url}/?page=${page}`);
    if (res.data.data && res.data.data.length) {
        dispatch(worksContentDataSuccess(res.data.data))
    } else {
        dispatch({
            type: "SET_LOADER_FALSE"
        })
    }
};

// export class WorksService extends BaseService {
//     createWork(url, data) {
//         return this.post(url, data);
//     }
// }

