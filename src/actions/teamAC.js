import request from "./api";
const type="TEAM_CONTENT_DATA_SUCCESS"
export function teamContentDataSuccess(team) {
    return {
        type: type,
        payload: team
    }
}

export const teamContentData =  (url) => async dispatch => {
    const res = await request.get(url)
    dispatch(teamContentDataSuccess(res.data.data))
}

