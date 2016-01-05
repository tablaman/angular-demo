"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = require('jquery');
var routes = require('./routes')
// $ = jQuery;

// v1.0.0 implementation of Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;


  ReactDOM.render(routes, document.getElementById('content'));
