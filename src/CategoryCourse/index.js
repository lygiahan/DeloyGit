import React from 'react'
import { useEffect } from 'react';
import {connect,useDispatch}from 'react-redux';
import { actCategoryCourse, ReduxThunk } from '../actions/creator';
import {Row,Col, Button} from 'antd';
import classes from './CategoryCourse.module.scss';
import { CHOOSE_CATEGORY } from '../actions/type';

function CategoryCourse(props) {

    const dispatch = useDispatch();
    useEffect(()=>{
           dispatch(actCategoryCourse()) 
    },[])

    const handleCategory=(ma)=>{
          dispatch(ReduxThunk(CHOOSE_CATEGORY,ma))
    }
    return (
        <Row className={classes.category_row}>
            {
                props.category.map((item,index)=>{
                    return <Col lg={4} md={6} sm={8 }xs={24}  key={index}>
                                 <Button  onClick={()=>handleCategory(item.maDanhMuc)} 
                                    className={classes.category_row_button}
                                    type="primary" shape="round">
                                    {item.tenDanhMuc}
                                 </Button>
                    </Col>
                })
            }
        </Row>
    )
}
const mapStateToProps = state =>({category:state.CourseReducer.categoryCourse})
export default  connect(mapStateToProps)(CategoryCourse);