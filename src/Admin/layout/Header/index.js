import React from "react";
import { Row, Col, Typography, Avatar, Popover, Button } from "antd";
import {connect,useDispatch} from 'react-redux';
import { actLogout, actLogoutAdmin } from "../../../actions/creator";
import {useHistory} from 'react-router-dom';

 function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const dangXuat =(history)=>{
    dispatch(actLogoutAdmin(history))
  }
  const conTent =()=>{
      return (
          <div>
              <Button onClick={()=>dangXuat(history)} type="primary">Đăng Xuất</Button>
          </div>
      )
  }
  return (
    <Row>
      <Col md={12}>
        <div style={{ paddingTop: 20 }}>
          <Typography.Title level={1}>ADMIN</Typography.Title>
        </div>
      </Col>
      <Col md={12}>
        <ul style={{ listStyle: "none" }}>
          <li style={{ textAlign: "right" }}>
            <div style={{ paddingTop: 10 }}>      
              <Popover content={conTent}>
                <Avatar size={64}>
                  <Typography.Title level={1} style={{ paddingTop: 8 }}>
                    {props.thongtin.hoTen
                      ? props.thongtin.hoTen.toUpperCase().slice(0, 1)
                      : ""}
                  </Typography.Title>
                </Avatar>
              </Popover>
            </div>
          </li>
        </ul>
      </Col>
    </Row>
  );
}
export default connect()(Header)