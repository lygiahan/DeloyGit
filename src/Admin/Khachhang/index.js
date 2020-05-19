import React, { Fragment } from "react";
import { Table, Space, Button, Typography } from "antd";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import KhachhangAdd from "../KhachhangAdd";
import KhachhangEdit from "../KhachhangEdit";
import { ReduxModal, ReduxThunk } from "../../actions/creator";
import { SHOW_MODAL, CANCE_MODAL, EDIT_MODAL, EDITTING } from "../../actions/type";
import { useEffect } from "react";

function Khachhang(props) {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(ReduxModal(SHOW_MODAL));
  };
  const handleCance = (e) => {
    dispatch(ReduxModal(CANCE_MODAL));
  };
  const handleOke = (e) => {
    dispatch(ReduxModal(CANCE_MODAL));
  };
  const ShowModalEdit =(data)=>{
      dispatch(ReduxModal(EDIT_MODAL))
      dispatch(ReduxThunk(EDITTING,data))
  }
  
  const column = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
    },
    {
      title: "Mã Loại",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() =>ShowModalEdit(record.taiKhoan)} type="primary">
            {" "}
            Chỉnh sửa
          </Button>
          <Button onClick={() => console.log(record)}>Xóa</Button>
        </Space>
      ),
    },
  ];
  return (
    <Fragment>
      <div style={{textAlign:"center"}}>
        <Typography.Title>DANH SÁCH USER</Typography.Title>
      </div>
      <Button
        onClick={() => showModal()}
        style={{ fontWeight: "bold", fontSize: 16, height: 40 }}
        type="primary"
      >
        Thêm người dùng
      </Button>
      <Table
        columns={column}
        bordered
        dataSource={props.danhsachuser}
        rowKey={(key) => key.taiKhoan}
        scroll={{ x: 1500, y: 300 }}
      />

      <KhachhangAdd
        handleOke={handleOke}
        handleCance={handleCance}
        showModal={showModal}
        visible={props.openModal}
      />

     {/* {props.editting ? 
      <KhachhangEdit
        editting={props.editting}
        handleCance={handleCance}
        visible={props.editModal}
        showModal={showModal}
      />:''} */}
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  openModal: state.ModalReducer.openModal,
  editModal: state.ModalReducer.editModal,
  editting:state.AdminReducer.editting

});
export default connect(mapStateToProps)(Khachhang);
