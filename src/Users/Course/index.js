import React, { Fragment } from 'react';
import { Table } from 'antd';


export default function Course(props) {
    console.log(props)
    let {chiTietKhoaHocGhiDanh }= props.thongtin;
   
    
    const columns = [
   
       
        {
          title: 'Khóa học của bạn',
          dataIndex: 'tenKhoaHoc',
        },
      
      ];
    
    return (
        <div style={{width:"auto"}}>
            <Table
              columns={columns}
              
              tableLayout 
              dataSource={chiTietKhoaHocGhiDanh} 
              rowKey={key=>key.maKhoaHoc}
              />
        </div>
    )
}
