import React, { Component } from "react";
import foodImage from "./foodOne.png";
import "./MenuItemsFoods.css";

class MenuItemsFoods extends Component {
  render() {
    return (
      <div className="food">
        <div className="foodDetails">
          <h2>{this.props.foods.foodName} </h2>
          <h3> &#8377; {this.props.foods.foodPrice}</h3>
          <h4>{this.props.foods.foodDescription}</h4>
          <button
            onClick={(e) => this.props.addToCart(e, this.props.foods.foodName)}
          >
            Add to cart
          </button>
        </div>
        <img src={foodImage} alt=""></img>
      </div>
    );
  }
}

export default MenuItemsFoods;
