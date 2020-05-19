import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { actThongTinUser } from "../../actions/creator";
import { Tabs, Avatar } from "antd";
import classes from './profile.module.scss';
import UserEdit from "../UserEdit";
import UpdatePassword from "../UpdatePassword";
import Course from "../Course";
import Footer from "../../layout/Footer";

function Profile(props) {
  const dispatch = useDispatch();
 
  useEffect(() => {
      let taiKhoan = JSON.parse(localStorage.getItem("taikhoan"));
      let matKhau = JSON.parse(localStorage.getItem("matkhau"));
      let data = { taiKhoan, matKhau };
      dispatch(actThongTinUser(data));
      if(props.updatepass){
        dispatch(actThongTinUser(data));
        return;
      }
  }, [props.updatethongtin,props.updatepass]);
  
   const userEdit =()=>{
     if(props.thongtin){
       return <UserEdit thongtin={props.thongtin}/>
     }
   }
   const updatePass =()=>{
     if(props.thongtin){
       return <UpdatePassword thongtin={props.thongtin}/>
     }
   }
   const yourCourse =()=>{
     if(props.thongtin){
    return <Course thongtin={props.thongtin}/>
     }
   }
  return (
    <div className={classes.tong}>
      <div style={{textAlign:"center"}}>
        <div>
           <Avatar  size={94}style={{fontSize:50,color:'#1DA57A',marginLeft:10}}>
             {props.thongtin? props.thongtin.hoTen.toUpperCase().slice(0,1):''}
           </Avatar>
        </div>
        <div>
            <h3 style={{paddingLeft:20,margin:10,fontSize:25}}>{props.thongtin ? props.thongtin.hoTen:''}</h3>
        </div>
        </div>
        <div className={classes.tong_left}>
      <Tabs tabPosition ={"top"} size="large" type="line">
        <Tabs.TabPane tab="Profile" key="1">
            {userEdit()}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Thay đổi mật khẩu" key="2">
            {updatePass()}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Khóa học của bạn" key="3" >
          {yourCourse()}
        </Tabs.TabPane>
       
      </Tabs>
      </div>
      <Footer/>
    </div>
  );
}
const mapSTateToprops = (state) => ({
  thongtin: state.UserReducer.thongtinuser,
  updatethongtin:state.UserReducer.updatethongtin,
  updatepass:state.UserReducer.updatepass
});
export default connect(mapSTateToprops)(Profile);
