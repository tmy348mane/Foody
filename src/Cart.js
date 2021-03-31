import React, { Component } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import SubTotal from "./SubTotal";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SUBTOTAL: 0,
    };
    this.calIncrementedTotal = this.calIncrementedTotal.bind(this);
    this.calDecrementedTotal = this.calDecrementedTotal.bind(this);
    this.checkOut = this.checkOut.bind(this);
  }

  calIncrementedTotal(total) {
    this.setState({
      SUBTOTAL: +this.state.SUBTOTAL + +total,
    });
  }
  calDecrementedTotal(total) {
    this.setState({
      SUBTOTAL: +this.state.SUBTOTAL - +total,
    });
  }

  checkOut(e) {
    const email = localStorage.getItem("email");
    if (email === null) {
      console.log("Inside Redirect Login");
      window.location.href = "/login";
    } else {
      const userOrders = {
        email: localStorage.getItem("email"),
        orders: this.props.foodInCart,
        subTotal: this.state.SUBTOTAL,
      };
      // axios.post("http://localhost:5000/saveOrders", userOrders);

      window.location.href = "/catlog";
    }
  }
  render() {
    return (
      <div className="cart">
        <div className="cartTitle">
          <h2>Cart</h2>
        </div>

        <CartItem
          foodInCart={this.props.foodInCart}
          calIncrementedTotal={this.calIncrementedTotal}
          calDecrementedTotal={this.calDecrementedTotal}
        />
        <SubTotal SUBTOTAL={this.state.SUBTOTAL} checkOut={this.checkOut} />
      </div>
    );
  }
}

export default Cart;
