import React, { useState, Fragment } from "react";
import {
  Layout,
  Row,
  Col,
  Input,
  Badge,
  Button,
  Avatar,
  Popover,
  Typography,
} from "antd";
import { ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
import HeaderDrawer from "../../HeaderDrawer";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import classes from "./Header.module.scss";
import { actLogout, actSearchCourse } from "../../actions/creator";
import CategoryHeader from "../../CategoryHeader";
import HeaderAdmin from '../../Admin/layout/Header';

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");
  let showDrawer = () => {
    setVisible(true);
  };
  let onClose = () => {
    setVisible(false);
  };
  let onChange = (e) => {
    setPlacement(e.target.value);
  };
  const getCategoryCourse = () => {
    if (props.categorycourse) {
      return props.categorycourse.map((item, index) => {
        return <CategoryHeader item={item} key={index} />;
      });
    }
  };
  const contentTheLoai = (
    <div>
      <Row style={{ width: 650 }}>{getCategoryCourse()}</Row>
    </div>
  );

  return (
    <Layout.Header className={classes.header}>
      {props.adminlogin ?  <HeaderAdmin thongtin={props.adminlogin}/>:
      (
        <Row className={classes.header_row}>
        <Col md={3}>
          <Link to="/">Hlydemy</Link>
        </Col>
        <Col md={3}>
          <Popover content={contentTheLoai} placement="bottom">
            <a style={{ fontSize: 16 }}>
              <AppstoreOutlined /> Thể loại
            </a>
          </Popover>
        </Col>
        <Col md={8}>
          <Input.Search
            onSearch={(text) => {
              console.log(text)
              dispatch(actSearchCourse(text))
            }}
            className={classes.header_input}
            placeholder="Search khóa học ..."
            size="large"
          ></Input.Search>
        </Col>     
        <Col md={2} style={{ textAlign: "right" }}>
        </Col>
        <Col md={2} style={{ textAlign: "right" }}>
          <Badge count={props.cartHeader.length} showZero>
            <Link to="/cart">   
              <ShoppingCartOutlined
                rotate
                style={{ fontSize: 28, color: "black" }}
              />
            </Link>
          </Badge>
        </Col>
        {props.userlogin ? (
          <Fragment>
            <div style={{ marginLeft: 200, paddingBottom: 15 }}>
              <Popover
                placement="bottom"
                openClassName
                content={
                  <div>
                    <Row style={{ width: "auto", margin: 5 }}>
                      <Col md={7}>
                        <Avatar size="large">
                          {props.userlogin.hoTen.length > 1
                            ? props.userlogin.hoTen.toUpperCase().slice(0, 1)
                            : ""}
                        </Avatar>
                      </Col>
                      <Col md={15} style={{ marginLeft: 10 }}>
                        <div>
                          <Typography.Title style={{ fontSize: 18 }}>
                            {props.userlogin.hoTen}
                          </Typography.Title>
                        </div>
                        <div>
                          <Typography.Text>
                            {props.userlogin.email}
                          </Typography.Text>
                        </div>
                      </Col>
                    </Row>
                    <div style={{ marginTop: 30 }}>
                      <Link to="/profile/edit">
                        <Button
                          type="link"
                          style={{ fontWeight: "bold", fontSize: 17 }}
                        >
                          Hồ sơ
                        </Button>
                      </Link>
                    </div>
                    <div>
                      <Button
                        type="link"
                        style={{ fontWeight: "bold", fontSize: 17 }}
                      >
                        Cart của bạn
                      </Button>
                    </div>
                    <div>
                      <Button
                        type="link"
                        style={{ fontWeight: "bold", fontSize: 17 }}
                        onClick={() => dispatch(actLogout(history))}
                      >
                        Đăng xuất
                      </Button>
                    </div>
                  </div>
                }
              >
                <Link to="/profile/edit">
                  <Avatar size={50}>
                    {props.userlogin.hoTen.length > 1
                      ? props.userlogin.hoTen.toUpperCase().slice(0, 1)
                      : ""}
                  </Avatar>
                </Link>
              </Popover>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            <Col md={3} style={{ textAlign: "right" }}>
              <Link to="/login">
                <Button
                  className={classes.header_button_dangnhap}
                  type="primary"
                >
                  Đăng Nhập
                </Button>
              </Link>
            </Col>
            <Col md={3} style={{ textAlign: "center" }}>
              <Button className={classes.header_button_dangky}>
                <Link to="/register">Đăng Ký</Link>
              </Button>
            </Col>
          </Fragment>
        )}
      </Row>
      ) }
      

      <h2 className={classes.header_open_drawer}>
        <HeaderDrawer
          visible={visible}
          placement={placement}
          showDrawer={showDrawer}
          onClose={onClose}
          onChange={onChange}
          cartHeader={props.cartHeader}
        />
      </h2>
    </Layout.Header>
  );
}
const mapStateToProps = (state) => ({
  cartHeader: state.CartReducer,
  userlogin: state.UserReducer.userlogin,
  categorycourse: state.CourseReducer.coursecategory,
  adminlogin: state.AdminReducer.adminlogin,
});
export default connect(mapStateToProps)(Header);
