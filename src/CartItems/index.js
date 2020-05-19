import React, { Fragment } from 'react';
import { Row, Col, Typography,Popconfirm, Button } from 'antd';
import {connect,useDispatch} from 'react-redux';
import {QuestionCircleOutlined} from '@ant-design/icons'
import classes from './CartItems.module.scss';
import { actRemoveCart, actGhiDanh } from '../actions/creator';
import { NotificationDelete, UpdateThongtin } from '../Notification';
import { useHistory } from 'react-router-dom';


 function CartItems(props) {
     const dispatch =useDispatch();
     const history =useHistory();
    let {hinhAnh,tenKhoaHoc,moTa,maKhoaHoc,taiKhoan} =props.item;
      
    const cutMoTa =(text)=>{
        if(text.length >25){
            return text.substr(0,25) +" "+"..."
        }else{
            return text;
        }
    }
    const ghiDanh =(makhoahoc)=>{
        let taikhoan =JSON.parse(localStorage.getItem('taikhoan'))
        let token = localStorage.getItem('token');
        let userlog = localStorage.getItem('userlogin')
        let data ={taikhoan,makhoahoc};
        if(token && userlog){
            dispatch(actGhiDanh(data))
        }else{
            UpdateThongtin('Vui lòng đăng nhập để ghi danh');
            setTimeout(()=>{
                history.push('/login')
            },1000)
        }
    }
    const removeCart=(ma)=>{
        dispatch(actRemoveCart(ma));
        NotificationDelete();
    }
    return (
        <Fragment>
            <li className={classes.cart}>
              <div className={classes.cart_content}>
                 <Row>
                     <Col md={4}>
                     <img src={hinhAnh} className={classes.cart_content_img}/>
                     </Col>
                     <Col md={8}>
                      <div style={{textAlign:'center'}}>
                           <Typography.Title level={4}>{tenKhoaHoc}</Typography.Title>
                          <Typography.Text>{cutMoTa(moTa)}</Typography.Text>
                      </div>
                     </Col>
                      <Col md={6}>
                        <div style={{textAlign:"center",marginTop:30}}>
                        <Popconfirm title="Bạn có muốn xóa ?"
                        okText="Đồng ý"
                        onCancel
                        onConfirm={()=>removeCart(maKhoaHoc)}
                        cancelText="Không"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        >
                            <Button style={{backgroundColor:'#ec5252',color:"white",fontWeight:"bold"}}>Xóa</Button>
                        </Popconfirm>
                        </div>
                     </Col>
                      <Col md={6} style={{textAlign:"center"}}>
                          <Popconfirm title="Bạn có muốn ghi danh?"okText="Đồng ý"cancelText="Không" onConfirm={()=>ghiDanh(maKhoaHoc)}>
                                <Button 
                                style={{marginTop:30,fontWeight:'bold',fontSize:20,height:40}}
                                 type="primary">Ghi Danh
                                </Button>
                          </Popconfirm>
                     </Col>
                    
                    
                 </Row>
              </div>
            </li>
        </Fragment>
    )
}
const mapStateToProps = state =>({
    ghidanh:state.UserReducer.ghidanh
})
export default connect(mapStateToProps)(CartItems)