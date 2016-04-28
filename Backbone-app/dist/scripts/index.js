"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

// v1.0.0 implementation of Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;

var routes = require('./routes');

// ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
ReactDOM.render(routes, document.getElementById('app'));