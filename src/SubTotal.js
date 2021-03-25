import React, { Component } from "react";
import "./SubTotal.css";

class SubTotal extends Component {
  render() {
    return (
      <div>
        <div className="subTotal">
          <div className="total">
            <h3>SubTotal</h3>
            <h4>Charges my apply</h4>
          </div>
          <h3 style={{ marginRight: "15px" }}>&#8377; {this.props.SUBTOTAL}</h3>
        </div>

        <button
          className="checkOut"
          onClick={() => {
            this.props.checkOut();
          }}
        >
          CHECKOUT
        </button>
      </div>
    );
  }
}

export default SubTotal;
