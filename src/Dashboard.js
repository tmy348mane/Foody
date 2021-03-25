import React, { Component } from "react";
import NavBar from "./NavBar";
import man8 from "./man8.png";
import "./Dashboard.css";
import foodImage from "./foodOne.png";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      userName:""
    };
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    console.log(localStorage.getItem("email"));
    const Email = {
      email: localStorage.getItem("email"),
    };

    console.log("Email " + Email);
    axios.post("http://localhost:5000/userOrders", Email).then((res) => {
      console.log("res " + res.data.orders[0].foodName);
      this.setState({
        orders: res.data.orders,
        userName:localStorage.getItem('fullName')
      })
    });
  }
  logOut() {
    console.log("LogOut Button Clicked");
    localStorage.clear();
  }

  render() {
    console.log(localStorage.getItem("email"));
    console.log("First Name " + localStorage.getItem("userfirstName"));

    const ORDERS = this.state.orders.map((order) => {
      return  <div className="order">
                <img src={foodImage} alt=""></img>
                <h4>{order.foodName}</h4>
                <h6>{order.foodDescription}</h6>
                <h5>&#8377; {order.foodPrice}</h5>
              </div>;
    });
    return (
      <div className="dashboard">
        <NavBar />
        <div className="profileCover"></div>
        <div className="dashDiv">
          <div className="profilePicture">
            <img
              src={man8}
              style={{
                position: "absolute",
                top: "7px",
                left: "7px",
                height: "237px",
                width: "237px",
              }}
              alt="Profile"
            />
          </div>
          <div className="userBrief">
            <h3>{this.state.userName}</h3>
            {/* <h3>{localStorage.getItem("fullName")}</h3> */}
          </div>

          <div className="userContent">
            <div className="userOrders">
              {ORDERS}
              {/* <div className="order">
                <img src={foodImage} alt=""></img>
                <h4>Food Name</h4>
                <h6>lorem ipsum dolor sit lorem ipsum dolor sit</h6>
                <h5>&#8377; 100</h5>
              </div>
              <div className="order">
                <img src={foodImage} alt=""></img>
                <h4>Food Name</h4>
                <h6>lorem ipsum dolor sit lorem ipsum dolor sit</h6>
                <h5>&#8377; 100</h5>
              </div>
              <div className="order">
                <img src={foodImage} alt=""></img>
                <h4>Food Name</h4>
                <h6>lorem ipsum dolor sit lorem ipsum dolor sit</h6>
                <h5>&#8377; 100</h5>
              </div> */}
            </div>
          </div>
        </div>

        <button className="logOut" onClick={this.logOut}>
          Log Out
        </button>
      </div>
    );
  }
}

export default Dashboard;
