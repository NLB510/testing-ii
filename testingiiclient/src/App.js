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

  hit = e => {
    e.preventDefault();

    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0
    })

  };

  strike = e => {
    e.preventDefault();

    if(this.state.strikes < 2 && this.state.balls <= 3) {

      this.setState(prevState => {
        return {
          strikes: prevState.strikes + 1
        };
      });
    } else {
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0
      })
    }
  };

  ball = e => {
    e.preventDefault();

    if (this.state.strikes <= 2 && this.state.balls < 3) {

      this.setState(prevState => {
        return {
          balls: prevState.balls + 1
        };
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0
      })
    }

  };

  foul = () => {

    if (this.state.strikes <= 2 && this.state.balls <= 3 && this.state.fouls < 3) {

      this.setState(prevState => {
        return {
          fouls: prevState.fouls + 1
        };
      });
    } else {
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0
      })
    }

  };

  render() {
    return (
      <div className="App">
        <div>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/display">Display</NavLink>
        </div>
        
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <Dashboard
                {...props}
                stats={this.state}
                recordHit={this.hit}
                recordStrike={this.strike}
                recordBall={this.ball}
                recordFoul={this.foul}
              />
            )}
          />
          <Route
            path="/display"
            render={props => <Display {...props} stats={this.state} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
