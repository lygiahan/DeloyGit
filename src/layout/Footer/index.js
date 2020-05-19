import React, { Fragment } from 'react'
import { Row, Col } from 'antd'

export default function Footer() {
    return (
        <Fragment>
            <Row style={{marginTop:100}}>
                <Col md={8}>
                   <ul style={{listStyle:'none'}}>
                   <h2>Thể loại</h2>

                       <li>Lập trình Backend</li>
                       <li>Thiết kế Web</li>
                       <li>Lập trình di động</li>
                       <li>Lập trình Frontend</li>
                       <li>Lập trình Fullstack</li>
                       <li>Tư duy lập trình</li>

                   </ul>
                </Col>
               
                <Col md={8}>
                  <ul>
                      <h2>Giới thiệu</h2>
                      <li>BẢN TIN ĐĂNG KÝ
Đăng ký e-mail của chúng tôi và là người đầu tiên biết ưu đãi đặc biệt của chúng tôi! Hơn nữa, chúng tôi sẽ giảm giá 15% cho đơn hàng tiếp theo sau khi bạn đăng ký.</li>
                  </ul>
                </Col>
                <Col md={8}>
                 <ul style={{listStyle:"none"}}>
                   
                    <h2>Liên hệ tôi</h2>
                     <li>Địa chỉ:hẽm 496/1 Dương Quảng Hàm</li>
                     <li>SDT:0868602253</li> 
                     <li>email:hanjimj000@gmail.com</li>
                 </ul>
                </Col>
            </Row>

            
        </Fragment>
    )
}
