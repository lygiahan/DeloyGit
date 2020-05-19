import { notification } from 'antd';

export const NotificationOpen = () => {
    notification.success({
        duration: 1,
        message: "Thêm giỏ hàng thành công"
    })

}
export const NotificationDelete = () => {
    notification.warn({
        duration: 2,
        message: "Xóa thành công"
    })
}
export const UserLoginsuccess = () => {
    notification.success({
        duration: 1,
        message: "Đăng nhập thành công"
    })
}
export const UserLoginError = () => {
    notification.error({
        duration: 3,
        message: "Tài khoản hoặc mật khẩu ko đúng"
    })
}
export const UpdateThongtin = (message) => {
    notification.success({
        duration: 2,
        message
    })
}