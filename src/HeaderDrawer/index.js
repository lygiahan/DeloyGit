import React from "react";
import { Drawer, Button, Space, Badge } from "antd";
import { ShoppingCartOutlined, AppstoreFilled, MenuOutlined } from "@ant-design/icons";
import classes from "./HeaderDrawer.module.scss";
import { Link } from "react-router-dom";

export default function HeaderDrawer(props) {
  return (
    <div >
      <Space>
      <MenuOutlined  onClick={props.showDrawer}/>
      </Space>
      <Drawer
        title="HlyCyber"
        
        closable={false}
        onClose={props.onClose}
        placement={props.placement}
        visible={props.visible}
      >
          <div className={classes.drawer_content}>
        <a href="#" style={{fontSize:18,color:"black"}}>
          <AppstoreFilled />
            Thể loại
          </a>
        <div>
        <Badge count={props.cartHeader.length} showZero>
          <Link to="/cart">
          <ShoppingCartOutlined
           
            rotate
            style={{ fontSize: 35 }}
          />
          </Link>
        </Badge>
        </div>
        <div>
          <Button style={{width:100,padding:5,height:40}} type="primary">
            <Link to='/login'> Đăng Nhập</Link>
          </Button>
        </div>
        <div>
          <Button  style={{width:100,backgroundColor:"#ec5252",color:"white",padding:5,height:40}}>
            <Link to="/register">Đăng Ký</Link>
            </Button>
        </div>
        </div>
      </Drawer>
    </div>
  );
}
