import React, { Component } from "react";
import firstRestro from "./firstRestro.jpg";
import "./Restro.css";
import "./Restro.css";
import { Link } from "react-router-dom";

class Restro extends Component {
  render() {
    return (
      <div id="restroCard" className="firstRestro">
        <img className="firstRestroImage" src={firstRestro} alt="" />
        <h2 className="restroName">
          {" "}
          <Link
            to="restrauntMenu"
            style={{ textDecoration: "none", color: "gray" }}
          >
            {this.props.Hotel.restroShortName}
          </Link>{" "}
        </h2>
        <p className="restroBrief" style={{ display: "inherit" }}>
          {this.props.Hotel.restroBrief}
        </p>
        <button
          className="quickView"
          onClick={() =>
            this.props.loadRestroMenu(this.props.Hotel.restroShortName)
          }
        >
          Quick View
        </button>
      </div>
    );
  }
}

export default Restro;
