import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/">
          <img className="foodyIcon" src="foody-icon.png" alt="foody-icon" />
        </Link>
        <nav className="navBar">
          <ul className="navList" style={{ listStyle: "none" }}>
            <li className="navItem">
              <Link style={{ textDecoration: "none", color: "grey" }} to="/">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link
                style={{ textDecoration: "none", color: "grey" }}
                to="aboutus"
              >
                AboutUs
              </Link>
            </li>
            <li className="navItem">
              <Link
                style={{ textDecoration: "none", color: "grey" }}
                to="aboutus"
              >
                ContactUs
              </Link>
            </li>
            <li className="navItem">
              <Link
                style={{ textDecoration: "none", color: "grey" }}
                to="catlog"
              >
                Catlog
              </Link>
            </li>
            <li className="navItem">
              <Link
                style={{ textDecoration: "none", color: "grey" }}
                to="profile"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
