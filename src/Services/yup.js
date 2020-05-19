import * as Yup from 'yup';


export const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string()

        .required('Required'),
    matKhau: Yup.string()

        .required('Required'),
    hoTen: Yup.string()

        .required('Required'),
    soDT: Yup.number()
        .required("required"),
    email: Yup.string()
        .email('invalid email')
        .required('Required'),
    maLoaiNguoiDung: Yup.string()
        .required("Required"),
    maNhom: Yup.string()
        .required("Required")
})