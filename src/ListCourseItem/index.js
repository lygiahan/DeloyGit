import React from 'react';
import {Card, Typography,Col,Popover,Button} from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import classes from './ListCourseItem.module.scss';
import { actAddToCart } from '../actions/creator';
import { NotificationOpen } from '../Notification';



export default function ListCourseItem(props) {
    const dispatch =useDispatch()
    let {maKhoaHoc,biDanh,tenKhoaHoc,moTa,luotXem,hinhAnh,ngayTao,soLuongHocVien,nguoiTao} =props.item;

    const mapLuotXem =(data)=>{
        if(data <= 10){
            return ' normal'
        }
        else if(data > 10){
            return ' good'
        }
     }
     const cutMoTa =(text)=>{
         if(text.length >25){
            //  return text.substr(0,35)+" "+ '...';
            return text;
         }
         else{
             return text;
         }
     }
     const AddToCart =(cart)=>{         
          dispatch(actAddToCart(cart))
          NotificationOpen()
     }
    const contentPopover =(
        <div>
            <Typography.Text mark>Ngày tạo: {ngayTao}</Typography.Text>
             <Typography.Title style={{marginLeft:8}} level={4}>{tenKhoaHoc}</Typography.Title>
            <Typography.Text style={{marginLeft:9}} mark>{mapLuotXem(luotXem)}</Typography.Text>
            <div style={{width:220,margin:"auto",marginTop:10}}>
                <Typography.Text>{cutMoTa(moTa)}</Typography.Text>
            </div>
            <div style={{marginTop:60}}>
                <Link to={`detail/${maKhoaHoc}`}>
                <Button type="primary"style={{fontWeight:"bold",marginRight:10}}>Xem Chi tiết</Button>
                </Link>
                <Button 
                onClick={()=>AddToCart(props.item)}
                style={{backgroundColor:"#ec5252",color:"white",fontWeight:"bold"}}>Thêm Giỏ Hàng</Button>

            </div>
        </div>
    )
   
    return (
         <Popover trigger="hover"placement='leftTop'
         content={contentPopover} >
       <Link to={`/detail/${maKhoaHoc}`}>      
        <Card hoverable cover={<img style={{height:150}} src={hinhAnh}/>} className={classes.card}>
             <Card.Meta title={tenKhoaHoc} description={nguoiTao.hoTen}/>   
             <div className={classes.card_star}>
               <StarFilled />
               <StarFilled />
               <StarFilled />
               <StarFilled />
               <StarOutlined />
               <p style={{marginTop:14,marginLeft:9,color:"black"}}>({luotXem})</p>
             </div>
            <Typography.Text mark>{mapLuotXem(luotXem)}</Typography.Text>
            <div style={{marginTop:10}}>
                 {/* <Button style={{backgroundColor:"#ec5252",color:"white",fontWeight:"bold"}}>Thêm Giỏ Hàng  </Button> */}

            </div>
        </Card>
        </Link>
     </Popover>

    )
}
