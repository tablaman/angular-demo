"use strict";

var React = require('react');
var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var routes = (
  <Router>
    <Route name="main" path="/" component={App}>
      <Route path="about" component={AboutPage}/>
      <Route path="authors" component={AuthorPage}/>
    </Route>
  </Router>
);


module.exports = routes;
