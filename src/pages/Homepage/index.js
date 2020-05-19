import React, { Fragment, useEffect } from "react";
import { Layout ,Card,   Row,Col, Typography, Avatar} from "antd";
import { useDispatch, connect } from "react-redux";
import classes from "./Homepage.module.scss";
import {actChooseCourse, actGetCourse } from "../../actions/creator";
import ListCourses from "../../ListCourses";
import CategoryCourse from "../../CategoryCourse";
import Footer from "../../layout/Footer";

function Homgpage(props) {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(actGetCourse());
    }, []);
    useEffect(()=>{
        dispatch(actChooseCourse(props.choosecategory))
        
    },[props.choosecategory])
  return (
    <Fragment>
      <Layout>
        <Layout.Content className={classes.content}>
          <div className={classes.treamer}>
           
          </div>
          <CategoryCourse />   
          <ListCourses courses={props.courses} />
          <div style={{width:'80%',margin:'auto',marginTop:50,marginBottom:70}}>
            <Row>
              <Col md={12} sm={24} xs={24}>
                 <img style={{width:'100%'}} src="https://cybersoft.edu.vn/wp-content/uploads/2020/04/online.png"/>

              </Col>
              <Col md={12} sm={24} xs={24}>
              <Typography.Text style={{lineHeight:2,fontSize:17}}>
                    Học Online tại HLyShop.vn
                    Hơn 92% trên hơn 3000 học viên học tại CyberSoft học theo lộ trình và có việc làm tốt. CyberSoft đã triển khai chương trình Học lập trình trực tuyến Online tại CyberLearn để tạo điều kiện cho các bạn không có điều kiện học trực tiếp tại HCM có thể tham gia.
              </Typography.Text>
              </Col>
            </Row>
          </div>
          <div className={classes.yousay}>
           <Typography.Text mark style={{fontSize:25}}>Học viên nói về chúng tôi</Typography.Text>
            <Row >
              <Col md={8} xs={24} sm={24}>
                 <Card style={{width:350,height:'220px',fontSize:16}}
                >
                 <Card.Meta
                   avatar={<Avatar src="https://i.udemycdn.com/user/100x100/8872940_27b4_3.jpg" />}
                  title="Hanly"description="Hlydemy là một vị cứu tinh. Tôi không có thời gian hay tiền bạc cho việc học đại học. Mục tiêu của tôi là trở thành một nhà phát triển web tự do và nhờ có Hlydemy, tôi thực sự rất thân thiết."></Card.Meta>
                 </Card>
              </Col>
              <Col md={8} xs={24} sm={24}>
              <Card style={{width:350,height:'220px',fontSize:16}}
                >
                 <Card.Meta
                   avatar={<Avatar src="https://i.udemycdn.com/user/100x100/22869844_edad.jpg" />}
                  title="Thien"description="
                  Tôi yêu Hlydemy! Các khóa học là tuyệt vời và các giảng viên rất vui vẻ và hiểu biết. Tôi chỉ muốn chúng tôi tìm thấy nó sớm hơn."></Card.Meta>
                 </Card>
              </Col> 
              <Col md={8} xs={24}sm={24}>
              <Card style={{width:350,height:'220px',fontSize:16}}
                >
                 <Card.Meta
                   avatar={<Avatar src="https://i.udemycdn.com/user/100x100/22869844_edad.jpg" />}
                  title="Xa"description="
                  Cảm ơn bạn Hlydemy! Bạn đã đổi mới niềm đam mê học hỏi và ước mơ trở thành nhà phát triển web."></Card.Meta>
                 </Card>
              
              </Col>
            </Row>
          </div>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Fragment>
  );
}
const mapStateToprops = (state) => ({ 
  courses: state.CourseReducer.courses ,
  choosecategory:state.CourseReducer.chooseCategory
});
export default connect(mapStateToprops)(Homgpage);
