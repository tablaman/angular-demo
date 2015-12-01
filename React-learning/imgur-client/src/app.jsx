var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require ('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Routes = require ('./routes');
var Api = require('./utils/api');




// var element = React.createElement(Hello, {});
React.render(Routes, document.querySelector('.container'));
