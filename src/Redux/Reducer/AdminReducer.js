import { ADMIN_LOGIN, ADMIN_LOGOUT, GET_USER, ADD_USER, SHOW_MODAL, EDITTING, ADMIN_GETCOURSE, GET_HOCVIEN_CHOXETDUYET, VISIBLE } from "../../actions/type";

let initialState = {
    adminlogin: '',
    danhsachUser: [],
    editting: null,
    course: [],
    danhsachuserchoxetduyet: [],
    visible: false
};



export const AdminReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADMIN_LOGIN:
            {
                state.adminlogin = action.data;
                return {...state }
            }
        case ADMIN_LOGOUT:
            {
                state.adminlogin = action.data;
                localStorage.clear()
                return {...state }
            }
        case GET_USER:
            {
                state.danhsachUser = action.data;
                return {...state }
            }
        case ADD_USER:
            {
                state.danhsachUser.push(action.data);
                return {...state }
            }
        case EDITTING:
            {
                let index = state.danhsachUser.find(item => item.taiKhoan === action.data)
                state.editting = index;
                localStorage.setItem("user", JSON.stringify(state.editting))
                return {...state }
            }
        case ADMIN_GETCOURSE:
            {
                state.course = action.data;
                return {...state }
            }
        case GET_HOCVIEN_CHOXETDUYET:
            {
                state.danhsachuserchoxetduyet = action.data;
                return {...state }
            }
        case VISIBLE:
            {
                state.visible = !state.visible;
                return {...state }
            }
        default:
            return state;
    }
}