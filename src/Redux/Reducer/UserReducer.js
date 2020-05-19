import { USER_LOGIN, USER_LOGIN_ERROR, THONGTIN_USER, UPDATE_THONGTIN_USER, UPDATE_PASSWORD_USER, LOG_OUT, GHIDANH_KHOAHOC } from "../../actions/type";

let initialState = {
    userlogin: null,
    error: '',
    thongtinuser: null,
    updatethongtin: '',
    updatepass: '',
    logout: '',
    ghidanh: ''
}



export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            state.userlogin = action.data;

            return {...state }
        case USER_LOGIN_ERROR:
            {
                console.log(action.data)
                state.error = action.data;
                return {...state }
            }
        case THONGTIN_USER:
            {
                return {...state, thongtinuser: action.data }
            }

        case UPDATE_THONGTIN_USER:
            {
                return {...state, updatethongtin: action.data }
            }
        case UPDATE_PASSWORD_USER:
            {
                return {...state, updatepass: action.data }
            }
        case LOG_OUT:
            {
                localStorage.clear();
                return {...state, userlogin: action.data }
            }
        case GHIDANH_KHOAHOC:
            {
                return {...state, ghidanh: action.data }
            }
        default:
            return state;
    }
}