import React from "react";
import CartFood from "./CartFood";
import "./CartItem.css";

function CartItem(props) {
  // const foods = ;

  const cartitems = props.foodInCart.map((food) => (
    <CartFood
      foods={food}
      calIncrementedTotal={props.calIncrementedTotal}
      calDecrementedTotal={props.calDecrementedTotal}
    />
  ));

  return <div className="cartItems">{cartitems}</div>;
}

export default CartItem;
