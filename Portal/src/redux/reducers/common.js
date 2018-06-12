import {GET_RESOURCE_REQUEST, GET_RESOURCE_SUCCESS, GET_RESOURCE_FAIL } from 'actions/common';
const initialState = {
    isLoading: false,
    message: {},
    errorMsg: ''
}

export default function reducer(state = initialState, action) {
    console.log('common reducer', state, action)
    switch (action.type) {
        case GET_RESOURCE_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: {},
                errorMsg: ''
            }
        case GET_RESOURCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.result.data,
                errorMsg: ''
            }
        case GET_RESOURCE_FAIL:
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