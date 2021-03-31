import React, { Component } from "react";
import Vector1 from "./Vector1.png";
import Vector2 from "./Vector2.png";
import Vector3 from "./Vector3.png";
import Vector4 from "./Vector4.png";
import foodyIcon from "./foody-icon.png";
import userIcon from "./userIcon.png";
import passwordIcon from "./passwordIcon.png";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
      isLoggedIn: false,
    };
    this.changeemail = this.changeemail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }
  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePass(event) {
    this.setState({
      pass: event.target.value,
    });
  }
  onsubmit(event) {
    event.preventDefault();

    const logedIn = {
      email: this.state.email,
      pass: this.state.pass,
      invalidEmailAndPassword: false,
      user: [],
    };

    axios
      .post("http://localhost:5000/login", logedIn)
      .then((res) => {
        console.log(res.data);

        if (res.data === null) {
          this.setState({
            isLoggedIn: false,
            invalidEmailAndPassword: true,
          });
        } else {
          this.setState(
            {
              user: res.data,
              isLoggedIn: true,
              invalidEmailAndPassword: false,
            },
            () => {
              localStorage.setItem("userfirstName", this.state.user.firstName);
              localStorage.setItem("userlastName", this.state.user.lastName);

              const fName = localStorage.getItem("userfirstName");
              const lName = localStorage.getItem("userlastName");
              const FULLNAME = fName + " " + lName;
              console.log(FULLNAME);
              localStorage.setItem("fullName", FULLNAME);
              localStorage.setItem("email", this.state.email);

              console.log(
                "first Name from local Storage " +
                  localStorage.getItem("userfirstName")
              );
              console.log(
                "last Name from local Storage " +
                  localStorage.getItem("userlastName")
              );
              console.log(
                "Email from local Storage " + localStorage.getItem("email")
              );
              console.log(
                "Full Name from local Storage " +
                  localStorage.getItem("fullName")
              );
            }
          );
          if (localStorage.getItem("email") === "admin@foody.com") {
            window.location.href = "/admin";
          } else if (this.state.isLoggedIn) {
            window.location.href = "/catlog";
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // if (this.state.isLoggedIn) {
    //   return <Redirect to="/restrauntMenu" />;
    // }
  }
  render() {
    return (
      <div
        className="LoginDiv"
        style={{
          backgroundColor: "#272626",
          height: "100vh",
          position: "relative",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img className="VectorOne" src={Vector1} alt="vectoreOne" />
        <img className="VectorTwo" src={Vector2} alt="" />

        <div className="MainDiv">
          <img className="FoodySmallIcon" src={foodyIcon} alt="FOodyLogo" />
          <img className="UserIcon" src={userIcon} alt="" />

          <div className="LineOne"></div>
          <img className="PasswordIcon" src={passwordIcon} alt="" />
          <div className="LineTwo"></div>
          <form className="LoginForm" onSubmit={this.onsubmit}>
            <Tippy
              className="tippy-box"
              content="Enter Valid Email"
              visible={this.state.invalidEmailAndPassword}
            >
              <input
                className="UserNameInput"
                autoComplete="off"
                name="userName"
                placeholder="Email"
                type="email"
                onChange={this.changeemail}
                value={this.state.email}
              ></input>
            </Tippy>

            <Tippy
              className="tippy-box"
              content="Enter Valid Password"
              visible={this.state.invalidEmailAndPassword}
            >
              <input
                className="PasswordInput"
                autoComplete="off"
                name="password"
                placeholder="************"
                type="password"
                onChange={this.changePass}
                value={this.state.pass}
              ></input>
            </Tippy>
            <button className="SubmitButton" type="submit">
              <p>Sign In</p>
            </button>
          </form>
          <Link to="register" className="SignUpAnchor" href="./register.html">
            Sign Up
          </Link>
          <p className="Copyright">@Copyright All rights reserved</p>
        </div>

        <img className="VectorThree" src={Vector3} alt="" />
        <img className="VectorFour" src={Vector4} alt="" />
      </div>
    );
  }
}

export default Login;
