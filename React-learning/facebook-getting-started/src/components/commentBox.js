"use strict";

var React = require('react');
var CommentList = require('./commentList.js');
var CommentForm = require('./commentForm.js');

var CommentBox = React.createClass({
  getInitialState: function () {
    return {
      data: []
    }
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});


module.exports = CommentBox;
