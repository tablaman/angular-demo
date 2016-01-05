"use strict";

var React = require('react');
var Comment = require('./comment.js');

var CommentList = React.createClass({
  createNodes: function () {
    return (this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    }));
  },
  render: function() {
    return (
      <div className="commentList">
        {this.createNodes()}
      </div>
    );
  }
});

module.exports = CommentList;
