"use strict";

var React = require('react');
var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var Error404 = require('./components/error404');

var ReactRouter = require('react-router');
var createBrowserHistory = require('history/lib/createBrowserHistory');
var createHashHistory = require('history/lib/createHashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;


var routes = (
  <Router history={createHashHistory()}>
    <Route name="main" path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage } />
      <Route path="authors" component={AuthorPage} />
      <Route path="author" name="addAuthor" component={ManageAuthorPage} />
      <Route path="author/:id" name="manageAuthor" component={ManageAuthorPage} />
      <Route path="about/login" component={AuthorPage} onEnter={requireAuth} />
      <Redirect from="auth" to="authors" />
      <Redirect from="about-us" to="about" />
      <Redirect from="about/*" to="about" />
      <Route path="*" component={Error404} />
    </Route>
  </Router>
);

// Route intercepts
function confirmUserWantsToLeaveForm (nextState, replaceState) {
  console.log(nextState);
  console.log(replaceState);
}

function requireAuth(nextState, replaceState) {
  if (!confirm('Are you sure you want to read page that\'s this boring')) {
    console.log('check auth');
  }
}

module.exports = routes;


// <Route path="/" component={HomePage}/>
//  to introduce 404: <Route path="*" component={Error404}/>
// More info re Enter and Leave hooks: https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteConfiguration.md

// Note: couln't get createBrowserHistory () to work properly unfortunately
// TODO: investigate further!
