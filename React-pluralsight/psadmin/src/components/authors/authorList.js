"use strict"

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  createAuthorRow: function (author) {
    return (
      <tr key={author.id}>
        <td><Link to="manageAuthor" params="{{id: author.id}}">{author.id}</Link></td>
        <td>{author.firstName} {author.lastName}</td>
      </tr>
    )
  },
  createAuthorRows: function () {
    return this.props.authors.map(function(author) {
        return (
          <tr key={author.id}>
            <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
            <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
            <td>{author.firstName} {author.lastName}</td>
          </tr>
        );
      }.bind(this));
  },

  deleteAuthor: function(id, event) {
    event.preventDefault();       // we don't want browser to do anything when you click this link.
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted');
  },

  render: function () {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.createAuthorRows()}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorList;

// {this.props.authors.map(this.createAuthorRow(), this)}

// <a href={"/#authors/" + author.id}>{author.id}</a>
