import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {connect,useDispatch} from 'react-redux';
import Khachhang from '../Khachhang';
import { useEffect } from 'react';
import { actGetUser, actGetThongTinHocVienKhoaHoc, actAdminGetCourse } from '../../actions/creator';
import GhiDanh from '../GhiDanh';
import Course from '../Course';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

 function Home(props) {
     const dispatch = useDispatch();
    const [collapsed,setCollapsed]=useState(false);
    const onCollasped = ()=>{
        setCollapsed(!collapsed)
    }
    useEffect(()=>{
        dispatch(actGetUser())
        dispatch(actAdminGetCourse())
    },[])
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollasped}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Khachhang danhsachuser={props.danhsachuser}/>
              <GhiDanh courses={props.courses}/>
              <Course courses={props.courses}/>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
}
const mapStateToProps =(state)=>({
    danhsachuser:state.AdminReducer.danhsachUser,
    courses:state.AdminReducer.course
})
export default connect(mapStateToProps)(Home);