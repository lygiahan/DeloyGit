import { instance } from "../configs";

export class UserService {
    Register(data) {
        return instance.post('/api/QuanLyNguoiDung/DangKy', data)
    }
    Login(data) {
        return instance.post('/api/QuanLyNguoiDung/DangNhap', data)
    }
    Thongtin(data, token) {
        return instance.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan', data, {
                headers: {
                    'Authorization': "Bearer " + token
                }
            }

        );
    }
    UpdateThongTin(data, token) {
        return instance.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
    }
    UpdatePassWord(data, token) {
        return instance.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
    }
    GhiDanh(data, token) {
        return instance.post('/api/QuanLyKhoaHoc/DangKyKhoaHoc', data, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    }

}