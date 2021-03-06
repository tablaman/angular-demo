"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

// v1.0.0 implementation of Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var InitialiseActions = require('./actions/initialiseActions');

var routes = require('./routes');
InitialiseActions.initApp();


  // ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
  ReactDOM.render(routes, document.getElementById('app'));
