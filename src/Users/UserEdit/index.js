import React, { useEffect } from 'react';
import classes from './UserEdit.module.scss';
import {Formik,Form,Field} from 'formik';
import { useState } from 'react';
import {useDispatch, connect} from 'react-redux';
import { actUpdateThongTin } from '../../actions/creator';
import { UpdateThongtin } from '../../Notification';
import {Row,Col} from 'antd';


function UserEdit(props) {
    const dispatch=useDispatch();
    const [disabled,setDisabled] =useState(true);
    let{taiKhoan,matKhau,hoTen,soDT,email,maLoaiNguoiDung,maNhom}=props.thongtin
    const [user,setUser]=useState({
        taiKhoan,
        matKhau,
        hoTen,
        soDT,
        maLoaiNguoiDung:'HV',
        maNhom:'GP01',
        email
    })
    const Edit =(value)=>{
        setDisabled(!disabled)
        if(disabled){

        }else{
            dispatch(actUpdateThongTin(value))
            UpdateThongtin("Cập nhật thông tin thành công");
        }
    }
    useEffect(()=>{
       if(props.thongtin){
        let {taiKhoan,matKhau,hoTen,soDT,email,maLoaiNguoiDung,maNhom} = props.thongtin;
        setUser({taiKhoan:taiKhoan,matKhau:matKhau,hoTen:hoTen,soDT:soDT,email:email,maLoaiNguoiDung:maLoaiNguoiDung,maNhom:maNhom})
       }
    },[])
    
    
    
    return (
        <Formik
          initialValues={user}       
          onSubmit={Edit}
        >
        {props=>(
            <Form style={{height:"auto"}}>
                <div className={classes.form_content}>
                   <Row>
                       <Col md={24} sm={24}>
                                       <div>
                     <h2 style={{textAlign:'center'}}>Tài khoản</h2>
                     <Field type="text"     
                      disabled     
                      value={props.values.taiKhoan}
                      className={classes.fiel}
                      name="taiKhoan"
                      onChange={props.handleChange}

                     />
                </div>

                </Col>
                 <Col md={24}sm={24}>
                <div>
                <h2 style={{textAlign:'center'}}>Mật khẩu</h2>

                     <Field 
                        type="password"
                        disabled={disabled}
                        value={props.values.matKhau}
                      className={classes.fiel}
                      name="matKhau"
                      onChange={props.handleChange}

                    />
                </div>
                </Col>
                <Col md={24}sm={24}>

                <div>
                <h2 style={{textAlign:'center'}}>Họ tên</h2>

                     <Field 
                     type="text"
                     disabled={disabled}      
                     value={props.values.hoTen}
                      className={classes.fiel}
                      name="hoTen"
                      onChange={props.handleChange}

                    />
                </div>
                </Col>
                <Col md={24} sm={24}>
                <div>
                <h2 style={{textAlign:'center'}}>Số điện thoại</h2>

                     <Field 
                     type="text"
                     disabled ={disabled}     
                     value={props.values.soDT}
                      className={classes.fiel}
                      name="soDT"
                      onChange={props.handleChange}

                    />
                </div>
                </Col>
                <Col md={24} sm={24}>
                <div>
                <h2 style={{textAlign:'center'}}>Email</h2>

                     <Field 
                     type="text"
                     disabled ={disabled}   
                     value={props.values.email}
                      className={classes.fiel}
                      name="email"
                      onChange={props.handleChange}
                    />
                </div>
                </Col>
                <Col md={24} sm={24}>
                <div style={{textAlign:"center"}}>
                    <button className={classes.form_content_button} type='submit'>
                      {disabled ? "Chỉnh sửa":"Cập nhật"}
                    </button>
                </div>
                </Col>
                </Row>

                </div>
                

            </Form>
        )}    
        </Formik>
    )
}
export default  connect()(UserEdit);