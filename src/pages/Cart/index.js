import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Cart.module.scss";
import CartItems from "../../CartItems";
import { Button } from "antd";

function Cart(props) {
  const mapCart = () => {
    return props.cart.map((item, index) => {
      return <CartItems item={item} key={index} />;
    });
  };
  return (
    <div className={classes.tong}>
      <div className={classes.cart_content}>
        <h2>
          {props.cart.length
            ? props.cart.length + " khóa học trong giỏ hàng"
            : " "}
        </h2>
        {props.cart.length === 0 ? (
          <div>
              <div>
        <h2>{props.cart.length} khóa học trong giỏ hàng</h2>
              </div>
            <h1 style={{ textAlign: "center" }}>Empty Cart</h1>
            <div style={{textAlign:"center"}}>
            <Link to="/">
              <Button type="primary"style={{fontSize:16,fontWeight:"bold",paddingTop:10,lineHeight:1}}>Chọn khóa học ngay nào</Button>
            </Link>
            </div>
          </div>
        ) : (
          <ul style={{ listStyle: "none" }}>{mapCart()}</ul>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cart: state.CartReducer,
});
export default connect(mapStateToProps)(Cart);
