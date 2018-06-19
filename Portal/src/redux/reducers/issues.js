import { Base64 } from 'js-base64';

const GET_INFO_REQUEST = "issue/GET_INFO_REQUEST";
const GET_INFO_SUCCESS = "issue/GET_INFO_SUCCESS";
const GET_INFO_FAIL = "issue/GET_INFO_FAIL";

const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    console.log('issue reducer', state, action)
    switch (action.type) {
        case GET_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: {},
                errorMsg: ''
            }
        case GET_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.result.data,
                errorMsg: ''
            }
        case GET_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                message: {},
                errorMsg: '请求错误'
            }  
        default:
            return state
    }
}
export function getBlogIssues(params) {
    console.log('getBlogIssues', params);
    const result = {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: client => client.get(BOLG_ISSUES)
    }
    return result;
}

const t = 'NmQ4ZGEyMDQ4ZmY3ODAyZjc1ZDViZGRmMTcwNjBjNWQ1NDU5NWRkZg==';
const TOKEN = `access_token=`+Base64.decode(t);
const BOLG_ISSUES = `https://api.github.com/repos/PhotonAlpha/blogs/issues?state=open`+`&`+TOKEN;


const BOLG_REPOSITORY = `https://api.github.com/search/code?q=extension:md+in:path+language:md+repo:photonalpha/blogs`+`&`+TOKEN;
const ABOUT_REPOSITORY = `https://api.github.com/repos/PhotonAlpha/blogs/readme`+`?`+TOKEN;
