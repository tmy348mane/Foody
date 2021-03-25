import React, { Component } from "react";
import "./Home.css";
import RectangleOne from "./RectangleOne.png";
import NavBar from "./NavBar";
import foodyIcon from "./foody-icon.png";
import noodles from "./noodles.png";
import fries from "./fries.png";
import meat from "./meat.png";
import iphoneMockup from "./iphoneMockup.png";
import whatsapp from "./007-whatsapp.png";
import youtube from "./002-youtube.png";
import twitter from "./014-twitter.png";
import instagram from "./034-instagram.png";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar className="HomeNavBar" />
        <div className="homeBackgroundImage">
          <h3 className="animateFoodyIconOne">Fresh food Delivers Here</h3>
          <img className="imageOne" src={RectangleOne} alt="img" />
        </div>

        <div className="briefOne">
          <img
            data-tilt
            className="foodBigIcon"
            src={foodyIcon}
            alt="foodIconImg"
          />
          <p
            id="briefPara"
            style={{ fontSize: "20px" }}
            className="container mt-1"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis
            nesciunt facere dolore itaque alias cumque numquam, magni incidunt
            soluta quasi! In aspernatur cum assumenda laudantium officia iste
            sapiente voluptatem fugit laborum odio accusamus nesciunt tempore
            voluptas ab perspiciatis ipsam tempora, quod quisquam fuga
          </p>
        </div>

        <div className="briefTwo">
          <div className="homeCircleOne"></div>
          <div className="homeCircleTwo"></div>

          <div data-tilt className="cardOne">
            <a href="./catlog.html">
              <img className="noodleIcon" src={noodles} alt="noodles" />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              repellendus.
            </p>
          </div>

          <div data-tilt className="cardTwo">
            <a href="./catlog.html">
              <img className="friesIcon" src={fries} alt="noodles" />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              repellendus.
            </p>
          </div>

          <div data-tilt className="cardThree">
            <a href="./catlog.html">
              <img className="meatIcon" src={meat} alt="noodles" />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              repellendus.
            </p>
          </div>
        </div>

        <div className="briefThree">
          <div className="tableMockup">
            <img src={iphoneMockup} alt="" />
            <p>Make Food Delivery ,Fun with Foody</p>
            <button className="tableMockupMore">More</button>
          </div>
        </div>

        <div className="briefFour"></div>

        <footer className="footer">
          <img className="footerFoodyIcon" src={foodyIcon} alt="" />

          <ul className="footerLinkOne">
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./index.html">
                Home Page
              </a>
            </li>
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./aboutus.html">
                About Page
              </a>
            </li>
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./contactus.html">
                Contact Page
              </a>
            </li>
          </ul>

          <ul className="footerLinkTwo">
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./cart.html">
                Cart Page
              </a>
            </li>
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./profile.html">
                Profile Page
              </a>
            </li>
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./catlog.html">
                Catlog Page
              </a>
            </li>
          </ul>

          <ul className="footerLinkThree">
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./index.html">
                Terms Page
              </a>
            </li>
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./index.html">
                Privacy Policy{" "}
              </a>
            </li>
            <li className="footerItem">
              <a style={{ textDecoration: "none" }} href="./index.html">
                Checkout Page
              </a>
            </li>
          </ul>

          <div className="line"></div>

          <div className="media">
            <img className="whatsAppIcon" src={whatsapp} alt="WhatsApp" />
            <img className="youTubeIcon" src={youtube} alt="WhatsApp" />
            <img className="twitterIcon" src={twitter} alt="WhatsApp" />
            <img className="instagramIcon" src={instagram} alt="WhatsApp" />
            <p>@Copyright All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
