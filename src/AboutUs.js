import React, { Component } from "react";
import ajit from "./ajit.jpeg";
import tanmayMane from "./tanmayMane.jpeg";
import doubleQuotes from "./doubleQuotes.png";
import NavBar from "./NavBar";
import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="firstDiv">
          <p>The Team</p>
        </div>
        <div class="secDiv">
          <div className="secDivCircleOne"></div>
          <div className="secDivCircleTwo"></div>
          <div className="secDivCircleThree"></div>
          <div className="secDivParaOne">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              corporis autem a consequuntur laborum.
            </p>
          </div>
          <div className="secDivParaTwo">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              corporis autem a consequuntur laborum.
            </p>
          </div>
          <div className="secDivParaThree">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              corporis autem a consequuntur laborum.
            </p>
          </div>
        </div>
        <div className="thirdDiv">
          <p>Meet the Team</p>

          <div className="grpBlock">
            <img src={ajit} className="imgOne" alt="profileOne"></img>
            <img src={tanmayMane} className="imgTwo" alt="profileOne"></img>
          </div>
          <div className="grpName">
            <h3 className="nameOne">Tanmay Mane</h3>
            <p className="nameParaOne">Computer Engineer</p>
            <h3 className="nameTwo">Ajit Upade</h3>
            <p className="nameParaTwo">Computer Engineer</p>
          </div>
        </div>

        <div className="forthDiv">
          <div className="forthDivCircle">
            <img src={doubleQuotes} alt="" />
          </div>
          <p className="forthDivFirPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a
            doloremque sapiente voluptates eligendi sint totam! Iure sequi
            commodi non molestiae sint ex ad porro.
          </p>
          <p className="forthDivSecPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a
            doloremque sapiente voluptates eligendi sint totam! Iure sequi
            commodi non molestiae sint ex ad porro.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
