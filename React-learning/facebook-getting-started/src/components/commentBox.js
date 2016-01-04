"use strict";

var React = require('react');
var CommentList = require('./commentList.js');
var CommentForm = require('./commentForm.js');

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList data={data} />
        <CommentForm />
      </div>
    );
  }
});


module.exports = CommentBox;
