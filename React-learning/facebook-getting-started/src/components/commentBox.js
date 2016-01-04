"use strict";

var React = require('react');
var CommentList = require('./commentList.js');
var CommentForm = require('./commentForm.js');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});


module.exports = CommentBox;
