"use strict";

var React = require('react');
var Comment = require('./comment.js');

var CommentList = React.createClass({
  render: function() {
    return (
      <div className='commentList'>
        <Comment author="Pete Hunter">This is one comment</Comment>
        <Comment author="Michael Jordan">This is another comment</Comment>
      </div>
    );
  }
});

module.exports = CommentList;
