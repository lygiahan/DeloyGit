import { CourseService } from "../Services/Course"
import { GET_COURSE, CATEGORY_COURSE, LIST_CATEGORY, COURSE_DETAIL, ADD_CART, REMOVE_CART, USER_LOGIN, USER_LOGIN_ERROR, THONGTIN_USER, UPDATE_THONGTIN_USER, UPDATE_PASSWORD_USER, LOG_OUT, GHIDANH_KHOAHOC, CATEGORY_HEADER, SEARCH_COURSE, ADMIN_LOGIN, ADMIN_LOGOUT, GET_USER, ADD_USER, ADMIN_GETCOURSE, GET_HOCVIEN_CHOXETDUYET } from "./type";
import { UserService } from "../Services/User";
import { instance } from "../configs";
import { UserLoginsuccess, UserLoginError, UpdateThongtin } from "../Notification";
import AdminService from '../Services/Admin';

export const ReduxThunk = (type, data) => {
    return {
        type,
        data
    }
}
export const ReduxModal = (type) => {
    return {
        type
    }
}
let courseService = new CourseService();
let userService = new UserService();
let adminService = new AdminService();
export const actGetCourse = () => {
    return async dispatch => {
        try {
            let res = await courseService.GetCourse();
            dispatch(ReduxThunk(CATEGORY_HEADER, res.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const actCategoryCourse = () => {
    return async dispatch => {
        try {
            let res = await courseService.CategoryCourse();
            dispatch(ReduxThunk(CATEGORY_COURSE, res.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const actChooseCourse = (madanhmuc) => {
    return async dispatch => {
        let res = await courseService.ChooseCategory(madanhmuc)
        dispatch(ReduxThunk(LIST_CATEGORY, res.data))
    }
}
export const actCourseDetail = (makhoahoc) => {
    return async dispatch => {
        let res = await courseService.CourseDetail(makhoahoc);
        dispatch(ReduxThunk(COURSE_DETAIL, res.data))
    }
}

export const actSearchCourse = (search) => {
    return async dispatch => {
        let res = await courseService.SearchCoures(search)
        console.log(res)
        dispatch(ReduxThunk(SEARCH_COURSE, res.data))
    }
}

export const actAddToCart = (data) => {
    return dispatch => {
        dispatch(ReduxThunk(ADD_CART, data))
    }
}
export const actRemoveCart = (data) => {
    return dispatch => {
        dispatch(ReduxThunk(REMOVE_CART, data))
    }
}
export const actUserRegister = (data) => {
    return async dispatch => {
        let res = await userService.Register(data);
        if (res) {
            localStorage.setItem('matkhau', JSON.stringify(res.data.matKhau))
        }

    }
}
export const actUserLogin = (data, history) => {
    return async dispatch => {
        try {
            let res = await userService.Login(data);
            if (res) {
                UserLoginsuccess();
            }
            localStorage.setItem("token", res.data.accessToken)
            localStorage.setItem("taikhoan", JSON.stringify(res.data.taiKhoan))
            localStorage.setItem("maloai", JSON.stringify(res.data.maLoaiNguoiDung))
            instance.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;
            let maloai = JSON.parse(localStorage.getItem("maloai"));
            console.log(maloai)
            if (maloai === "HV") {
                localStorage.setItem("userlogin", JSON.stringify(res.data))
                dispatch(ReduxThunk(USER_LOGIN, res.data))
                history.push('/')
            } else {
                localStorage.setItem("adminlogin", JSON.stringify(res.data))
                dispatch(ReduxThunk(ADMIN_LOGIN, res.data))
                history.push('/admin')
            }
        } catch (error) {
            UserLoginError();
            // dispatch(ReduxThunk(USER_LOGIN_ERROR, error))
        }
    }
}
export const actThongTinUser = (data) => {
    return async dispatch => {
        let token = localStorage.getItem("token")
        let res = await userService.Thongtin(data, token);
        localStorage.setItem("thongtin", JSON.stringify(res.data))
        dispatch(ReduxThunk(THONGTIN_USER, res.data))
    }
}
export const actUpdateThongTin = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await userService.UpdateThongTin(data, token);
        dispatch(ReduxThunk(UPDATE_THONGTIN_USER, res.data))
    }
}
export const actUpdatePassword = (data, history) => {
    return async dispatch => {
        let token = localStorage.getItem('token');
        let res = await userService.UpdatePassWord(data, token)
        dispatch(ReduxThunk(UPDATE_PASSWORD_USER, res.data))
        history.push('/')
    }
}
export const actLogout = (history) => {
    return dispatch => {
        dispatch(ReduxThunk(LOG_OUT, ""))
        history.push('/')
    }
}
export const actGhiDanh = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await userService.GhiDanh(data, token)
        if (res) {
            UpdateThongtin('Ghi danh thành công')
        }
        dispatch(ReduxThunk(GHIDANH_KHOAHOC, res.data))
    }
}


// ADMIN
export const actLogoutAdmin = (history) => {
    return dispatch => {
        dispatch(ReduxThunk(ADMIN_LOGOUT, ''))
        history.push('/')
    }
}
export const actGetUser = () => {
    return async dispatch => {
        let res = await adminService.getUser();
        dispatch(ReduxThunk(GET_USER, res.data))
    }
}
export const actAddUser = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await adminService.AddUser(data, token)
        dispatch(ReduxThunk(ADD_USER, res.data))
    }
}
export const actEditUser = (data) => {
    return async dispatch => {
        let token = localStorage.getItem("token")
        let res = await adminService.EditUser(data, token);
        console.log(res)
    }
}
export const actGetHocVienChoXetDuyet = (data) => {
    return async dispatch => {
        let token = localStorage.getItem("token")
        let res = await adminService.GetHocVienChoXetDuyet(data, token);
        dispatch(ReduxThunk(GET_HOCVIEN_CHOXETDUYET, res.data))
    }
}
export const actAdminGetCourse = () => {
    return async dispatch => {
        let res = await adminService.GetMaCourse();
        dispatch(ReduxThunk(ADMIN_GETCOURSE, res.data))
    }
}
export const actGhiDanhKhoaHoc = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await adminService.GhiDanhKhoaHoc(data, token);
        console.log(res)
    }
}
export const actHuyGhiDanh = (data) => {
    return async dispatch => {
        let token = localStorage.getItem('token')
        let res = await adminService.HuyGhiDanh(data, token);
        console.log(res)
    }
}