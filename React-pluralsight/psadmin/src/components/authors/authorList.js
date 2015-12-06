"use strict"

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
            <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
            <td>{author.firstName} {author.lastName}</td>
          </tr>
        );
      });
  },
  render: function () {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
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
