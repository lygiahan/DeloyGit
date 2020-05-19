import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { useEffect } from "react";
import { actCourseDetail, actAddToCart } from "../../actions/creator";
import classes from "./CourseDetail.module.scss";
import { Typography, Row, Col, Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { NotificationOpen } from "../../Notification";
import Footer from "../../layout/Footer";

function CourseDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  let { tenKhoaHoc, moTa, ngayTao, luotXem, nguoiTao,hinhAnh,maKhoaHoc } = props.coursedetail;

  useEffect(() => {
    dispatch(actCourseDetail(id));
  }, [id]);

  const mapLuotXem = (data) => {
    if (data <= 10) {
      return "normal";
    } else {
      return "good";
    }
  };

  const addToCart =(cart)=>{
      dispatch(actAddToCart(cart))
      NotificationOpen()
  }

  return (
      <Fragment>
    <div
      style={{
        backgroundColor: "#505763",
        height: "auto",
        padding: 50,
        lineHeight: 3,
      }}
    >
      <div className={classes.container}>
        <Typography.Title style={{ color: "#ffffff" }}>
          {tenKhoaHoc}
        </Typography.Title>
        <Typography.Title style={{ color: "white" }} level={4}>
          {moTa}
        </Typography.Title>
        <div style={{ color: "#f4c150" }}>
          <Typography.Text style={{ marginRight: 10 }} mark>
            {mapLuotXem(luotXem)}
          </Typography.Text>
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarOutlined />
        </div>
        <div>
          <Typography.Text style={{ color: "white" }}>
            Người tạo: {nguoiTao ? nguoiTao.hoTen : ""}
          </Typography.Text>
        </div>
        <div>
          <Typography.Text style={{ color: "white" }}>
            Sau khi Update:{ngayTao}
          </Typography.Text>
        </div>
      </div>
     
    </div>
    <div className={classes.whatlearn}>
        <Row>
            <Col md={16}>
               <div className={classes.whatlearn_left}>
                    <Typography.Title underline level={3} mark>Học Được những gì</Typography.Title>
                    <ul style={{fontSize:18,lineHeight:2}}>
                      <Row>
                          <Col md={12} style={{marginRight:15}}> 
                           <li>Trở thành giỏi về ngôn ngữ</li>
                           <li>Hiểu các lý thuyết hàn lâm xung quanh phong cách và kỹ thuật lãnh đạo</li>
                           <li>Biết sự khác biệt giữa các kiểu ủy nhiệm và kiểu nào phù hợp với từng tình huống</li>
                           </Col>
                          <Col md={11}>
                          <li>Đại biểu hiệu quả để trao quyền cho nhóm của họ</li>
                          <li>Trở thành một ông chủ tốt hơn và điều hành một nhóm hiệu quả cao</li>
                          <li>Có một cuộc sống cân bằng công việc lành mạnh, với một môi trường hạnh phúc</li>
                          </Col>
                      </Row>
                    </ul>
               </div>
            </Col>
            <Col md={8}>
                 <div className={classes.whatlearn_right}>
                      <img src={hinhAnh} className={classes.img}/>
                      <div className={classes.whatlearn_right_content}>

                          <Button onClick={()=>addToCart(props.coursedetail)} className={classes.whatlearn_right_content_button}>Thêm Giỏ hàng</Button>

                          <Typography.Text strong underline style={{fontSize:15}}>Khóa học này bao gồm:</Typography.Text>
                           <ul style={{lineHeight:2}}>
                               <li>Video theo yêu cầu 2,5 giờ</li>
                               <li>16 tài nguyên có thể tải xuống</li>
                               <li>Truy cập trọn đời</li>
                               <li>Truy cập trên điện thoại di động và TV</li>
                               <li>2.5 hours on-demand video</li>

                           </ul>
                      </div>
                     
                 </div>
                 <div className={classes.whatlearn_right_bottom}>
                      <div className={classes.whatlearn_right_bottom_content}>
                                <Typography.Title style={{fontSize:18}}>Đào tạo 5 người trở lên?</Typography.Title>
                                <p>Giúp nhóm của bạn truy cập vào hơn 4.000 khóa học HlyDemy hàng đầu mọi lúc, mọi nơi...</p>
                      </div>
                 </div>
                
            </Col>
        </Row>

    </div>
    <Footer />

    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  coursedetail: state.CourseReducer.coursedetail,
});
export default connect(mapStateToProps)(CourseDetail);
