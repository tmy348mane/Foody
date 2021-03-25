import "./App.css";
import Home from "./Home";
import Register from "./Register";
import AboutUs from "./AboutUs";
import Catlog from "./Catlog";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Login } from "./Login";
import Dashboard from "./Dashboard";
import React, { Component } from "react";
import axios from "axios";
import Restraunt from "./Restraunt";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restro:[],
      restroMenu: [],
      restroShortName: "",
      isRestroMenuReady: false,
    };
    this.loadRestroMenu = this.loadRestroMenu.bind(this);
  }
  loadRestroMenu(restroFullName) {
    this.setState(
      {
        restroShortName: restroFullName,
      },
      () => {
        const restro = {
          restroShortName: this.state.restroShortName,
        };

        console.log("restroName : " + restro);

        axios.post("http://localhost:5000/restraunts", restro).then((res) => {
          this.setState(
            {
              restro:res.data,
              restroMenu: res.data[0].menu,
              isRestroMenuReady: true,
            });
        });
      });
  }

  render() {
    console.log("Email"+localStorage.getItem('email'));
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home/>}
            ></Route>

            <Route
              exact
              path="/register"
              render={(props) => <Register check="Chekde True" />}
            ></Route>

            <Route
              path="/restrauntMenu"
              render={(props) => <Restraunt hotel={this.state.restro} log={this.state.restroMenu} />}
            ></Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/profile">
              <Dashboard />
            </Route>

            <Route exact path="/aboutus">
              <AboutUs />
            </Route>

            <Route exact path="/catlog">
              <Catlog loadRestroMenu={this.loadRestroMenu} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
