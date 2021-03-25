import React, { Component } from "react";
import Restro from "./Restro";
import "./Catlog.css";
import background from "./background.png";
import axios from "axios";
import NavBar from "./NavBar";

class Catlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restraunt: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/restraunts").then((res) => {
      this.setState(
        {
          restraunt: res.data,
        },
        () => {
          console.log("State OutPut" + this.state.restraunt[2].restroType);
        }
      );
    });
  }

  render() {
    const restross = this.state.restraunt.map((hotel) => {
      return (
        <Restro Hotel={hotel} loadRestroMenu={this.props.loadRestroMenu} />
      );
    });
    return (
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(to bottom right, #43C6AC, #F8FFAE)",
        }}
      >
        <NavBar />
        <div className="Background">
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            consectetur culpa incidunt possimus alias provident.
          </p>
          <img className="backgroundImg" src={background} alt="" />
          <button>
            <a
              style={{ textDecoration: "none", color: "azure" }}
              href="./index.html"
            >
              More
            </a>
          </button>
        </div>

        <div className="mainCatlog">
          <div className="restross">{restross}</div>
        </div>
      </div>
    );
  }
}

export default Catlog;
