"use strict";

var React = require('react');

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    // call preventDefault to prevent the browser's default action of submitting the form.
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if(!text || !author) return;

    //Send request to server
    this.props.onCommentSubmit({author: author, text: text});
    // reset
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <div className="commentForm">
        <form action="" className="commentForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.author}
            onChange={this.handleAuthorChange}
            placeholder="Your name" />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="Say something..." />
          <input
            type="submit"
            value="Post" />
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;
