import React from 'react';
import {connect,useDispatch} from 'react-redux';
import {Form,Formik,Field} from 'formik';
import  classes from './Login.module.scss';
import {LoginOutlined } from '@ant-design/icons';
import { actUserLogin } from '../../actions/creator';
import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';

 function Login(props) {
     const dispatch = useDispatch();
     const history =useHistory();
    
    return (
        <Formik
        initialValues={{
            taiKhoan:'',
            matKhau:''
        }}
        onSubmit={value=>{
           dispatch(actUserLogin(value,history))     
        }}
        >
        {props=>(
            <Form style={{height:"auto",backgroundColor:'#1DA57A',height:568,paddingTop:50}}>
                <div className={classes.form_content}>
                    <h2 style={{textAlign:"center"}}>Đăng nhập <LoginOutlined /></h2>
                 <div>
                     <Field type="text"
                     name="taiKhoan"
                     value={props.values.taiKhoan}
                      placeholder="Tài khoản" 
                      className={classes.fiel}
                      onChange={props.handleChange}/>
                </div>
                <div>
                     <Field 
                     type="password"
                     name="matKhau"
                     value={props.values.matKhau} 
                     placeholder="Mật khẩu"
                      className={classes.fiel}
                      onChange={props.handleChange}/>
                </div>
                <div style={{textAlign:'center'}}>
                    <button className={classes.form_content_button} type='submit'>Đăng Nhập</button>
                </div>
                </div>

            </Form>
        )}    
        </Formik>
    )
}
const mapStateToProps =state =>({
    userlogin:state.UserReducer.userlogin
})
export default connect(mapStateToProps)(Login);