import React from 'react'
import { Col } from 'antd'
import { Link, NavLink } from 'react-router-dom'

 export default function CategoryHeader(props) {

    return (
        <Col md={6 }>
            <div style={{width:200,fontWeight:'bold',margin:10}}>
                <Link to={`detail/${props.item.maKhoaHoc}`}>
                     {props.item ? props.item.tenKhoaHoc:''}
                </Link>
            </div>
        </Col>
    )
}
