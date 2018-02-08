import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Button from 'material-ui/Button';

function Drafts(props) {
  const {classes} = props;
  return (<div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit
      <code>src/App.js</code>
      and save to reload.
    </p>
    <Button variant="raised" color="primary">
      Primary
    </Button>
  </div>);
}

Drafts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Drafts;