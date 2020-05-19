import React, { Fragment, Children } from "react";
import { Button, Select, Table, Switch, Typography } from "antd";
import { connect, useDispatch } from "react-redux";
import { actGetHocVienChoXetDuyet, ReduxModal, actGhiDanhKhoaHoc, actHuyGhiDanh } from "../../actions/creator";
import { useState } from "react";
import { VISIBLE } from "../../actions/type";

function GhiDanh(props) {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(actGetHocVienChoXetDuyet(value));
    localStorage.setItem("makhoahoc",JSON.stringify(value))
  };
  
  const handleChangeSwich =()=>{
      dispatch(ReduxModal(VISIBLE))
    
  }
    const handleSwich =(value)=>{
                  
      let makhoahoc = localStorage.getItem("makhoahoc");
      let data ={maKhoaHoc:makhoahoc,taiKhoan:value}
        if(!props.visible){

              dispatch(actGhiDanhKhoaHoc(data))
        }
        else{
            dispatch(actHuyGhiDanh(data))
        }
      
    }
  let column = [
      { 
        title:"Tài Khoản",
        dataIndex: "taiKhoan"
     },
       { 
        title:"Họ Tên",
        dataIndex: "hoTen"
     },{
         title:"Xác nhận ",
         render:(text,record)=>(
            <Switch defaultChecked={false}  
                     onClick={()=>handleSwich(record.taiKhoan)}               
                     onChange={handleChangeSwich}>
                      
            </Switch>
         )
     }
    ];
  return (
    <div style={{marginTop:50}}>
        <div style={{textAlign:"center"}}>
        <Typography.Title level={1}>GHI DANH KHÓA HỌC</Typography.Title>

        </div>
      <Select
        onChange={handleClick}
        defaultValue="Chọn Khóa Học"
        placeholder="pale"
        style={{ width: 200 }}
        size="large"
      >
        {props.courses.map((item, index) => {
          return (
            <Select.Option key={index} value={item.maKhoaHoc}>
              {item.maKhoaHoc}
            </Select.Option>
          );
        })}
      </Select>
      <Table columns={column}
      dataSource={props.danhsachchoxetduyet}
      rowKey={key=>key.taiKhoan}>

      </Table>
    </div>
  );
}
const mapStateToProps = (state) => ({
  danhsachchoxetduyet: state.AdminReducer.danhsachuserchoxetduyet,
  visible:state.AdminReducer.visible
});
export default connect(mapStateToProps)(GhiDanh);
