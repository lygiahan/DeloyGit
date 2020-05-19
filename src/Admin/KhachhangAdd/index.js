import React from "react";
import { Modal } from "antd";
import { Form, Formik, Field } from "formik";
import { LoginOutlined } from "@ant-design/icons";
import {connect,useDispatch} from 'react-redux';
import classes from "./KhachhangAdd.module.scss";
import { actAddUser } from "../../actions/creator";

 function KhachhangAdd(props) {
     const dispatch = useDispatch();

     const setFiel =(value)=>{
        value.taiKhoan='';
        value.matKhau='';
        value.hoTen='';
        value.soDT='';
        value.email='';

     }
     
  return (

    <Modal
      visible={props.visible}
      onCancel={props.handleCance}
     cancelText
     footer
     width={700}
            
    >
      <Formik
      initialValues={{
          taiKhoan:'',
          matKhau:'',
          hoTen:'',
          soDT:'',
          email:'',
          maloaiNguoiDung:'HV',
          maNhom:'GP01',
      }}
      onSubmit={value=>{
          props.handleOke(false);
          dispatch(actAddUser(value))
          setFiel(value)
      }}>
        {(props) => (
          <Form style={{width:"auto"}}>
            <div className={classes.form_content}>
              <h2 style={{ textAlign: "center" }}>
                Thêm người dùng <LoginOutlined />
              </h2>
              <div>
                <Field
                  type="text"
                  name="taiKhoan"
                  placeholder="Tài khoản"
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  name="matKhau"
                  type="password"
                  placeholder="Mật khẩu"
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="hoTen"
                  placeholder="Họ tên"
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="soDT"
                  placeholder="Số Điện Thoại"
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  as="select"
                  name="maLoaiNguoiDung"
                  className={classes.fiel}
                  onChange={props.handleChange}
                >
                  <option value="HV">Học viên</option>
                  <option value="GV">Giáo vụ</option>
                </Field>
              </div>
              <div>
                <Field
                  type="text"
                  as="select"
                  name="maNhom"
                  className={classes.fiel}
                  onChange={props.handleChange}
                >
                  <option value="GP01">GP01</option>
                  <option value="GP02">GP02</option>
                  <option value="GP03">GP03</option>
                  <option value="GP04">GP04</option>
                  <option value="GP05">GP05</option>
                  <option value="GP06">GP06</option>
                  <option value="GP07">GP07</option>
                  <option value="GP08">GP08</option>
                  <option value="GP09">GP09</option>
                </Field>
              </div>
              <div style={{ textAlign: "center" }}>
                <button className={classes.form_content_button} type="submit">
                  Thêm
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
// const mapStateToProps =state =>({
//   openModal:state.ModalReducer
// })
export default connect()(KhachhangAdd);