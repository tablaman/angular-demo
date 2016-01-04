// "use strict";
/*eslint-disable strict */ // Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function () {
      return (
        <div>
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      );
    }
});


module.exports = App;
