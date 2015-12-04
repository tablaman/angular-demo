"use strict"

var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>About
          <p>This application uses following:
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Flux</li>
              <li>Node</li>
              <li>Gulp</li>
            </ul>
          </p>
        </h1>
      </div>
    );
  }
});

module.exports = About;
