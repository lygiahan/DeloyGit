import React, { Fragment } from 'react'
import ListCourseItem from '../ListCourseItem';
import {Row,Col} from 'antd';
import classes from './ListCourses.module.scss';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ListCourses(props) {

    return (
     <Row className={classes.tong}>   
           {
                props.courses.map((item,index)=>{
                    return(
                         <Col md={6} key={index}>
                          <ListCourseItem item={item} key={index}/>
                          </Col>
                    )
                })
            }
         </Row>
  

    )
}
