// import React, { useState } from 'react';
// import {Modal} from 'antd';
// import classes from './KhachhangEdit.module.scss';
// import {Form,Field,Formik} from 'formik';
// import {connect,useDispatch} from 'react-redux';
// import { LoginOutlined } from '@ant-design/icons';
// import { useEffect } from 'react';
// import { actEditUser } from '../../actions/creator';

//  function KhachhangEdit(props) {
//  const dispatch = useDispatch();
//  let local = JSON.parse(localStorage.getItem('user'));
// console.log(local)
//  const [user,setUser]=useState({
//     taiKhoan:"",
//     matKhau:'',
//     hoTen:'',
//     soDt:"",
//     email:"",    
//     maloaiNguoiDung:"",
//     maNhom:'',
// })

// useEffect(()=>{
//   if(local){
//    let getlocal = localStorage.getItem('user');
//     let {taiKhoan} = getlocal;
//     setUser({taiKhoan:taiKhoan})

//   }
// },[])
//  const setFiel =(value)=>{
//     value.taiKhoan='';
//     value.matKhau='';
//     value.hoTen='';
//     value.soDT='';
//     value.email='';

//  }
//   useEffect(()=>{
//        if(props.editting){
//            let {taiKhoan,hoTen,matKhau,soDt,maloaiNguoiDung,maNhom,email} = props.editting;
//            setUser({taiKhoan,hoTen,maNhom,matKhau,soDt,maloaiNguoiDung,email})
//        }
//   },[props.editting])
//     return (
//         <Modal title="edit"
//         visible={props.visible}
//         onCancel={props.handleCance}
//         width={700}
//         cancelText
//         footer>
            

//             <Formik
//           initialValues={user}
//             onSubmit={value=>{
//               // props.handleOke(false);
//               console.log(value)
//               dispatch(actEditUser(value))
//               setFiel(value)
//       }}>
//         {(props) => (
//           <Form style={{width:"auto"}}>
//             <div className={classes.form_content}>
//               <h2 style={{ textAlign: "center" }}>
//                Sửa Người Dùng <LoginOutlined />
//               </h2>
//               <div>
//                 <Field
//                   type="text"
//                   value={props.values.taiKhoan}
//                   name="taiKhoan"
//                   className={classes.fiel}
//                   onChange={props.handleChange}
//                 />
//               </div>
//               <div>
//                 <Field
//                   name="matKhau"
//                   type="password"
//                   value={props.values.matKhau}
//                   className={classes.fiel}
//                   onChange={props.handleChange}
//                 />
//               </div>
//               <div>
//                 <Field
//                   type="text"
//                   name="hoTen"
//                   value={props.values.hoTen}
//                   className={classes.fiel}
//                   onChange={props.handleChange}
//                 />
//               </div>
//               <div>
//                 <Field
//                   type="text"
//                   name="soDT"
//                   value={props.values.soDT}
//                   className={classes.fiel}
//                   onChange={props.handleChange}
//                 />
//               </div>
//               <div>
//                 <Field
//                   type="email"
//                   name="email"
//                   value={props.values.email}
//                   className={classes.fiel}
//                   onChange={props.handleChange}
//                 />
//               </div>
//               <div>
//                 <Field
//                   type="text"
//                   as="select"
//                   value={props.values.maloaiNguoiDung}
//                   name="maLoaiNguoiDung"
//                   className={classes.fiel}
//                   onChange={props.handleChange}
//                 >
//                   <option value="HV">Học viên</option>
//                   <option value="GV">Giáo vụ</option>
//                 </Field>
//               </div>
//               <div>
//                 <Field
//                   type="text"
//                   as="select"
//                   name="maNhom"
//                   value={props.values.maNhom}
//                   className={classes.fiel}
//                   onChange={props.handleChange}
//                 >
//                   <option value="GP01">GP01</option>
//                   <option value="GP02">GP02</option>
//                   <option value="GP03">GP03</option>
//                   <option value="GP04">GP04</option>
//                   <option value="GP05">GP05</option>
//                   <option value="GP06">GP06</option>
//                   <option value="GP07">GP07</option>
//                   <option value="GP08">GP08</option>
//                   <option value="GP09">GP09</option>
//                 </Field>
//               </div>
//               <div style={{ textAlign: "center" }}>
//                 <button className={classes.form_content_button} type="submit">
//                   Sửa
//                 </button>
//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>


//         </Modal>
//     )
// }
// // const mapStateToProps =state =>({
// //     editting:state.AdminReducer.editting
// // })
// export default connect()(KhachhangEdit)