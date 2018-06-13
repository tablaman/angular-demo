import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Button} from 'react-toolbox/lib/button';


class App extends Component {
  state = {
    simpleDialogIsOpen: false
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} width="50px" className="App-logo" alt="logo" />
          <h1 className="App-title">MDC</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button raised label="HELLO There" />
      </div>
    );
  }
}

export default App;
