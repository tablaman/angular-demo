// "use strict";
/*eslint-disable strict */ // Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var CommentBox = require('./commentBox.js');
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function () {
      return (
        <div>
          <div className="container-fluid">
            <CommentBox url="http://localhost:3000/api/comments" pollInterval={2000} />
            {this.props.children}
          </div>
        </div>
      );
    }
});
 

module.exports = App;
