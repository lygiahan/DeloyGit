import React from "react";
import { connect } from "react-redux";
import { Modal, Upload, Button } from "antd";
import { Field, Form, Formik } from "formik";
import { LoginOutlined, UploadOutlined } from "@ant-design/icons";
import classes from "./CourseAdd.module.scss";

function CourseAdd(props) {
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
          maKhoaHoc: "",
          biDanh: "",
          tenKhoaHoc: "",
          moTa: "",
          luotXem: 0,
          danhGia: 0,
          hinhAnh: "",
          maNhom: "",
          ngayTao: "",
          maDanhMucKhoaHoc: "",
          taiKhoanNguoiTao: "",
        }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {(props) => (
          <Form style={{ height: "auto", height: "auto", paddingTop: 50 }}>
            <div className={classes.form_content}>
              <h2 style={{ textAlign: "center" }}>
                Thêm Khóa Học <LoginOutlined />
              </h2>
              <div>
                <Field
                  type="text"
                  placeholder="Mã khóa học"
                  value={props.values.maKhoaHoc}
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Bí danh"
                  value={props.values.biDanh}
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Tên khóa học"
                  value={props.values.tenKhoaHoc}
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Mô tả"
                  value={props.values.moTa}
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Lượt xem"
                  value={props.values.luotXem}
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Đánh giá"
                  value={props.values.danhGia}
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
             
                    <Upload>
                        <Button>
                        <UploadOutlined /> Click to Upload
                        </Button>
                    </Upload>
              </div>
              <div>
                <Field
                  type="text"
                  as="select"
                  className={classes.fiel}
                  value={props.values.maNhom}
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
              <div>
                <Field
                  type="text"
                  placeholder="Ngày Tạo"
                  value={props.values.ngayTao}
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  value={props.values.maDanhMucKhoaHoc}
                  placeholder="Mã danh mục khóa học"
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Tài khoản người tạo"
                  value={props.values.taiKhoanNguoiTao}
                  className={classes.fiel}
                  onChange={props.handleChange}
                />
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
export default connect()(CourseAdd);
