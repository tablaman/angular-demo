"use strict"

var React = require('react');

var About = React.createClass({
  // willTransitionTo no longer available in latest release of react
  // The replacement for willTransitionTo in the 1.0 API is <Route onEnter>. See the auth-flow example for an example of how to use this hook.
  // Transition hooks have moved from route handler components up to the route objects themselves to give developers greater flexibility.
  // Now, you don't need a component class just to define a transition hook. Instead, you can just use a prop and a function.
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      console.log('over here');
      if (!confirm('Are you sure you want to read page that\'s this boring')) {
        transition.about();
      } else {
        callback();
      }
    }
  },
  render: function () {
    return (
      <div>
        <h1>About
          <p>This application uses following:</p>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
          </ul>
        </h1>
      </div>
    );
  }
});

module.exports = About;
