import React from "react";
import { Field, Form, Formik } from "formik";
import { Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import classes from "./Register.module.scss";
import { SignupSchema } from "../../Services/yup";
import {connect,useDispatch} from 'react-redux';
import { actUserRegister } from "../../actions/creator";
import {useHistory} from 'react-router-dom';


function Register() {
  const dispatch =useDispatch();
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maNhom: "GP01",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(value) =>{
         dispatch(actUserRegister(value))
         history.push('/login')
      } }
    >
      {(props) => (
        <Form className={classes.tong}>
          <div className={classes.form}>
            <h1
              style={{
                textAlign: "center",
                color: "#1DA57A",
                fontWeight: "bold",
              }}
            >
              Đăng Ký <UserOutlined />{" "}
            </h1>
            <Row className={classes.form_item}>
              <Col md={8} sm={4}  xs={16}>
                <div style={{ textAlign: "right" }}>
                  <label>Tài khoản:</label>
                </div>
              </Col>
              <Col md={14} sm={20} xs={24}>
                <Field
                  name="taiKhoan"
                  value={props.values.taiKhoan}
                  onChange={props.handleChange}
                />
                <p style={{ color: "#ec5252",marginLeft:25 }}>{props.errors.taiKhoan}</p>
              </Col>
            </Row>

            <Row className={classes.form_item}>
              <Col md={8} sm={4} xs={16}>
                <div style={{ textAlign: "right" }}>
                  <label>Mật khẩu:</label>
                </div>
              </Col>
              <Col md={14} sm={20} xs={24}>
                <Field
                  type="password"
                  name="matKhau"
                  value={props.values.matKhau}
                  onChange={props.handleChange}
                />
                  <p style={{ color: "#ec5252",marginLeft:25 }}>{props.errors.matKhau}</p>

              </Col>
            </Row>
            <Row className={classes.form_item}>
              <Col md={8} sm={4} xs={16}>
                <div style={{ textAlign: "right" }}>
                  <label>Họ Tên:</label>
                </div>
              </Col>
              <Col md={14} sm={20} xs={24}>
                <Field
                  name="hoTen"
                  value={props.values.hoTen}
                  onChange={props.handleChange}
                />
                                <p style={{ color: "#ec5252",marginLeft:25 }}>{props.errors.hoTen}</p>

              </Col>
            </Row>
            <Row className={classes.form_item}>
              <Col md={8} sm={4}  xs={16}>
                <div style={{ textAlign: "right" }}>
                  <label>Số Điện Thoại:</label>
                </div>
              </Col>
              <Col md={14}sm={20} xs={24}>
                <Field
                  name="soDT"
                  value={props.values.soDT}
                  onChange={props.handleChange}
                />
                 <p style={{ color: "#ec5252",marginLeft:25 }}>{props.errors.soDT}</p>

              </Col>
            </Row>
            <Row className={classes.form_item}>
              <Col md={8} sm={4}  xs={16}>
                <div style={{ textAlign: "right" }}>
                  <label>Email:</label>
                </div>
              </Col>
              <Col md={14} sm={20} xs={24}>
                <Field
                  name="email"
                  value={props.values.email}
                  onChange={props.handleChange}
                />
                 <p style={{ color: "#ec5252",marginLeft:25 }}>{props.errors.email}</p>

              </Col>
            </Row>
            <div style={{ textAlign: "center", paddingTop: 10 }}>
              <button type="submit" className={classes.form_button}>
                Đăng Ký
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default  connect()(Register);