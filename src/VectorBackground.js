import React, { Component } from "react";
import "./VectorBackground.css";

class VectorBackground extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isOpen:"Close"
    }
  }
  
  componentDidMount() {
    if(this.props.hotel[0].restroAvailability===true){
      this.setState({
        isOpen:"Open"
      });
    }
  }


  render() {
    return (
      <div className="vectorBackground">
        <div className="backgroundImage">
          <div className="circleOne"></div>
          <div className="circleTwo"></div>
          <div className="circleThree"></div>

          <div className="restroImage">
            <img src="firstRestro.jpg" alt="" />
          </div>

          <div className="restroIntro">
            <div className="intro">
              <h2>{this.props.hotel[0].restroFullName}</h2>
              <h3>{this.props.hotel[0].restroType}</h3>
              <h3>{this.props.hotel[0].restroAddress}</h3> 
              <div className="rating">
                <div className="ratingTitle">
                  <h4>Rating</h4>
                  <h3>3.2</h3>
                </div>
                <div className="verticleLineOne"></div>
                <div className="ratingTitle">
                  <h4>{this.state.isOpen}</h4>
                  <h3>for Delivery</h3>
                </div>
                <div className="verticleLineTwo"></div>
                <div className="ratingTitle">
                  <h4> &#8377; {this.props.hotel[0].retroCostForTwo}</h4>
                  <h3> For Two</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VectorBackground;