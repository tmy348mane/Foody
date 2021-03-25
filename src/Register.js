import React, { Component } from "react";
import "./Register.css";
import VectorOne from "./VectorOne.png";
import food from "./food.png";
import Group from "./Group.png";
import axios from "axios";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

export default class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      validEmail: false,
      validFirstName: false,
      validLastName: false,
      validPassword: false,
      invalidEmail: false,
      invalidFirstName: false,
      invalidLastName: false,
      invalidPassword: false,
      invalidConfirmPassword: false,
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeEmail(event) {
    this.setState(
      {
        email: event.target.value,
      },
      () => {
        if (this.state.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
          this.setState({
            validEmail: true,
            invalidEmail: false,
          });
        } else {
          this.setState({
            invalidEmail: true,
          });
        }
      }
    );
  }
  changeFirstName(event) {
    this.setState(
      {
        firstName: event.target.value,
      },
      () => {
        if (this.state.firstName.match(/^[a-zA-Zs]+$/)) {
          this.setState({
            validFirstName: true,
            invalidFirstName: false,
          });
        } else {
          this.setState({
            invalidFirstName: true,
          });
        }
      }
    );
  }
  changeLastName(event) {
    this.setState(
      {
        lastName: event.target.value,
      },
      () => {
        if (this.state.lastName.match(/^[a-zA-Zs]+$/)) {
          this.setState({
            validLastName: true,
            invalidLastName: false,
          });
        } else {
          this.setState({
            invalidLastName: true,
          });
        }
      }
    );
  }
  changePassword(event) {
    this.setState(
      {
        password: event.target.value,
      },
      () => {
        if (
          this.state.password.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
        ) {
          console.log("Inside Valid Password");
          this.setState({
            validPassword: true,
            invalidPassword: false,
          });
        } else {
          this.setState({
            invalidPassword: true,
          });
        }
      }
    );
  }

  changeConfirmPassword(event) {
    this.setState(
      {
        confirmPassword: event.target.value,
      },
      () => {
        if (this.state.confirmPasssword === this.state.password) {
          console.log("Inside valid Confirm Password");
          this.setState({
            validPassword: true,
            invalidConfirmPassword: false,
          });
        } else {
          this.setState({
            invalidConfirmPassword: true,
          });
        }
      }
    );
  }

  onSubmit(event) {
    event.preventDefault();

    console.log("Validation Errors" + this.state.validationErrors);
    if (this.state.validEmail === true) {
      console.log("Inside  Registration Block");
      const registered = {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
      };
      axios.post("http://localhost:5000/api", registered);

      window.location.href = "/login";
    }
  }
  render() {
    return (
      <div
        className="Block"
        style={{ margin: 0, padding: 0, backgroundColor: "#272626" }}
      >
        <img src={food} alt="" className="foodImg" />
        <img className="mainImg" src={Group} alt="" />

        <img className="vectorOne" src={VectorOne} alt="" />

        <div className="formLines">
          <div className="lineOne"></div>
          <div className="lineTwo"></div>
          <div className="lineThree"></div>
          <div className="lineFour"></div>
          <div className="lineFive"></div>
        </div>

        <div className="registerForm">
          <form onSubmit={this.onSubmit} className="register">
            <Tippy
              className="tippy-box"
              content="Enter Valid Email"
              visible={this.state.invalidEmail}
            >
              <input
                required
                type="email"
                autoComplete="off"
                placeholder="example@email.com"
                className="emailInput"
                onChange={this.changeEmail}
                value={this.state.email}
              />
            </Tippy>
            <Tippy
              className="tippy-box"
              content="Enter Valid First Name"
              visible={this.state.invalidFirstName}
            >
              <input
                required
                type="text"
                autoComplete="off"
                placeholder="First name"
                className="firstNameInput"
                onChange={this.changeFirstName}
                value={this.state.firstName}
              />
            </Tippy>

            <Tippy
              className="tippy-box"
              content="Enter Valid Last Name"
              visible={this.state.invalidLastName}
            >
              <input
                required
                type="text"
                autoComplete="off"
                placeholder="Last name"
                className="lastNameInput"
                onChange={this.changeLastName}
                value={this.state.lastName}
              />
            </Tippy>
            <div className="pass">
              <Tippy
                className="tippy-box"
                content="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                visible={this.state.invalidPassword}
              >
                <input
                  required
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                  className="passwordInput"
                  onChange={this.changePassword}
                  value={this.state.password}
                />
              </Tippy>

              <Tippy
                className="tippy-box"
                content="Password are not matching"
                visible={this.state.invalidConfirmPassword}
              >
                <input
                  required
                  type="password"
                  autoComplete="off"
                  placeholder="C. Password"
                  className="confirmPasswordInput"
                  onChange={this.changeConfirmPassword}
                  value={this.state.confirmPassword}
                />
              </Tippy>
            </div>
            <button className="submitButton">
              <p>Sign Up</p>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
