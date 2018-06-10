export const GET_INFO_REQUEST = "info/GET_INFO_REQUEST";
export const GET_INFO_SUCCESS = "info/GET_INFO_SUCCESS";
export const GET_INFO_FAIL = "info/GET_INFO_FAIL";

export function getResumeInfo() {
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(`http://localhost:4200/api/resume.json`)
    }
    return result;
}

export function getResourceTrees() {
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(`https://api.github.com/repos/photonalpha/blogs/git/trees/master?recursive=1`)
    }
    return result;
}

export function getBlogData() {
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(`https://api.github.com/repos/PhotonAlpha/blogs/git/blobs/ab24c5d484807f0369cccb43a96d73a3e2750f70`)
    }
    return result;
}