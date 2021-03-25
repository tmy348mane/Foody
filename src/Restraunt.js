import React, { Component } from "react";
import NavBar from "./NavBar";
import VectorBackground from "./VectorBackground";
import Menu from "./Menu";

class restrauntMenu extends Component {
  render() {
    console.log(this.props.hotel);
    return (
      <div>
        <NavBar />
        <VectorBackground hotel={this.props.hotel} />
        <Menu dishcatlog={this.props.log} />
      </div>
    );
  }
}

export default restrauntMenu;
