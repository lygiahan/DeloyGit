import { instance } from '../configs';
export class CourseService {

    GetCourse() {
        return instance.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
    }
    CategoryCourse() {
        return instance.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    }
    ChooseCategory(madanhmuc) {
        return instance.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${madanhmuc}&MaNhom=GP01`)
    }
    CourseDetail(makhoahoc) {
        return instance.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${makhoahoc}`);
    }
    SearchCoures(search) {
        return instance.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${search}`)
    }
}