import React, { Component } from "react";
import Cart from "./Cart";
import FoodType from "./FoodType";
import "./Menu.css";
import MenuItems from "./MenuItems";
// import axios from "axios";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodData: [],
      cartArray: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount(props) {
    this.setState(
      {
        foodData: this.props.dishcatlog,
      },
      () => {}
    );
  }

  addToCart(e, fName) {
    let currentFood = this.state.foodData.find(
      (food) => food.foodName === fName
    );
    this.setState({
      cartArray: [...this.state.cartArray, currentFood],
    });
  }
  render() {
    return (
      <div className="menu">
        <FoodType />
        <MenuItems foodData={this.state.foodData} addToCart={this.addToCart} />
        <Cart foodInCart={this.state.cartArray} />
      </div>
    );
  }
}

export default Menu;
