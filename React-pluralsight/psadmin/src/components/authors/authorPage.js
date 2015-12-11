"use strict"

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
  getInitialState: function () {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  componentWillMount: function () {
    AuthorStore.addChangeListener(this._onChange);
  },
  // Cleanup
  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    console.log('on change');
    this.setState({authors: AuthorStore.getAllAuthors() });
  },

  render: function () {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="author" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorPage;
