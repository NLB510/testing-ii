import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/display/Display";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0
  };

  hit = () => {};
  strike = () => {};
  ball = () => {};
  foul = () => {};

  render() {
    return (
      <div className="App">
        <div>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/display">Display</NavLink>
        </div>
        <h2>At Bat Tracker</h2>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <Dashboard
                {...props}
                atBat={this.state}
                recordHit={this.hit}
                recordStrike={this.strike}
                recordBall={this.ball}
                recordFoul={this.foul}
              />
            )}
          />
          <Route
            path="/display"
            render={props => <Display {...props} atBat={this.state} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
