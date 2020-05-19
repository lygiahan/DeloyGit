import React, { Fragment } from 'react';
import {connect,useDispatchtch, useDispatch} from 'react-redux';
import {Table, Typography, Button} from 'antd';
import CourseAdd from '../CourseAdd';
import { ReduxModal } from '../../actions/creator';
import { TOGGLE_ADDCOURSE, TOGGLE_CANCECOURSE } from '../../actions/type';

 function Course(props) {
     const dispatch = useDispatch();
     
     const column =[
        {
            title:"Mã Khóa học",
            dataIndex:"maKhoaHoc"
        },
         {
             title:"Tên Khóa học",
             dataIndex:"tenKhoaHoc"
         },
         {
            title:"Hình Ảnh",
            render:(record)=>(
                <img style={{width:120,height:100}} src={record.hinhAnh}/>
            )
        },
         
     ]
     const handleModal =()=>{
         dispatch(ReduxModal(TOGGLE_ADDCOURSE))
     }
     const handleCance =()=>{
         dispatch(ReduxModal(TOGGLE_CANCECOURSE))
     }
    return (
        <Fragment>
            <div style={{marginTop:100,textAlign:"center"}}>
                <Typography.Title level={2}>DANH SÁCH KHÓA HỌC</Typography.Title>
            </div>
            <div>
                <Button type="primary" onClick={handleModal}>Thêm Khóa Học</Button>
            </div>
           <Table columns={column} dataSource={props.courses} rowKey={e=>e.maKhoaHoc}>

           </Table>
           <CourseAdd  visible={props.toggle}handleCance={handleCance}/>
        </Fragment>
    )
}
const mapStateToprops =state =>({
    toggle:state.ModalReducer.toggleAdd
})
export default connect(mapStateToprops)(Course)
