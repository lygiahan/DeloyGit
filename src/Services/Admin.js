import { instance } from "../configs";

export default class AdminService {
    getUser(data, token) {
        return instance.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01', data, {

        })
    }
    AddUser(data, token) {
        return instance.post('/api/QuanLyNguoiDung/ThemNguoiDung', data, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
    }
    EditUser(data, token) {
        return instance.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
    }
    GetHocVienChoXetDuyet(data, token) {
        return instance.post('/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet', {
            maKhoaHoc: data
        }, {
            headers: {
                'Authorization': "Bearer " + token
            }
        });
    }
    GetMaCourse() {
        return instance.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
    }
    GhiDanhKhoaHoc(data, token) {
        return instance.post('/api/QuanLyKhoaHoc/GhiDanhKhoaHoc', data, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
    }
    HuyGhiDanh(data, token) {
        return instance.post('/api/QuanLyKhoaHoc/HuyGhiDanh', data, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
    }
}