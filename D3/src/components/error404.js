"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var error404 = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Whoops! Looks like you're in the wrong area</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    );
  }
});


module.exports = error404;
