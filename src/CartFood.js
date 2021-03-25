import React, { Component } from "react";
import "./CartFood.css";

class CartFood extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      count: 0,
      totalAmount: 0,
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        this.props.calIncrementedTotal(this.props.foods.foodPrice);
      }
    );
  }
  decrement() {
    if (this.state.count !== 0) {
      this.setState(
        {
          count: this.state.count - 1,
        },
        () => {
          this.props.calDecrementedTotal(this.props.foods.foodPrice);
        }
      );
    } else {
      this.setState({
        count: 0,
      });
    }
  }

  render() {
    return (
      <div className="cartFood">
        <h3>{this.props.foods.foodName}</h3>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +
        </button>
        <h4>{this.state.count} </h4>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          -
        </button>
        <h4>&#8377; {this.props.foods.foodPrice}</h4>
      </div>
    );
  }
}

export default CartFood;
