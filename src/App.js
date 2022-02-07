import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> This app is created by using react(not using create-react-app)</h1>
      </div>
    );
  }
}

export default hot(module)(App);
