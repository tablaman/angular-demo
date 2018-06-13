import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button
} from 'react-toolbox/lib/button';
import Autocomplete from './Autocomplete';
import DialogTest from './Dialog';

import theme from './button.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" width="80px" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
           <Button theme={theme} raised label = "Hello World!" />
           <Autocomplete/>
           <DialogTest />
      </div>
    );
  }
}

export default App;
