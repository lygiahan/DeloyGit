import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Form, Field, Formik } from "formik";
import classes from './UpdatePassword.module.scss';
import { useState } from "react";
import { actUpdatePassword } from "../../actions/creator";
import { useHistory} from 'react-router-dom';
import {UpdateThongtin} from '../../Notification';
import {Row,Col} from 'antd';
function UpdatePassword(props) {
  const dispatch = useDispatch();
  const history = useHistory();
    
    const [user,setUser]=useState({
      taiKhoan:props.thongtin.taiKhoan,
      matKhau:props.thongtin.matKhau,
      hoTen:props.thongtin.hoTen,
      soDT:props.thongtin.soDT,
      maLoaiNguoiDung:"HV",
      maNhom:"GP01",
      email:props.thongtin.email,
    })

    const [matKhauMoi,setMatKhauMoi]=useState('')
     const handleChange =(e)=>{
       setMatKhauMoi(e.target.value)
     }

    useEffect(()=>{
        let {taiKhoan,matKhau,hoTen,soDT,maLoaiNguoiDung,maNhom,email}= props.thongtin;
           setUser({taiKhoan:taiKhoan,matKhau:matKhau,hoTen:hoTen,soDT:soDT,maLoaiNguoiDung:maLoaiNguoiDung,maNhom:maNhom,email:email})
    },[props.thongtin])
  return (
    <Formik
    initialValues={user}
    onSubmit={value=>{
     let data ={...value,matKhau:matKhauMoi}
          dispatch(actUpdatePassword(data,history))
          UpdateThongtin("Cập nhật mật khẩu thành công")
    }}
    >
        
      {(props) => (
        <Form>
          <div className={classes.form_content}>
       <Row>
         <Col md={24} sm={24}>
                     <div>
              <h2 style={{ textAlign: "center" }}>Mật khẩu hiện tại</h2>
              <Field
                type="password"
                value={user.matKhau}
                className={classes.fiel}
                name="matKhau"
                onChange={props.handleChange}
              />
            </div>
            </Col>
            <Col md={24} sm={24}>
            <div>
              <h2 style={{ textAlign: "center" }}>Mật khẩu mới</h2>
              <Field
                type="password"
                className={classes.fiel}
                
                name="matKhauMoi"
                value={matKhauMoi}
                onChange={handleChange}
              />
            </div>
            </Col>
            
         
         <Col md={24}sm={24}>
           <div style={{textAlign:"center"}}>
            <button type="submit" style={{backgroundColor:'#1DA57A',width:100,padding:10,color:"white",fontWeight:'bold'}}>Cập nhật</button>
            </div>
            </Col> 
            </Row>

          </div>
          
        </Form>
      )}
    </Formik>
  );
}
export default connect()(UpdatePassword);
