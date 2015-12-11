"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

// This top-level component will be the 'smart' one.
// so let the child component Manage all of the input controls.
var ManageAuthorPage = React.createClass({
  mixins: [
    Router.History,
    // Assuming Home is a route component, it may use the
    // Lifecycle mixin to get a routerWillLeave method.
    // Source: https://github.com/rackt/react-router/blob/master/docs/guides/advanced/ConfirmingNavigation.md
    Router.Lifecycle
  ],

  routerWillLeave: function(nextLocation) {
    if(this.state.dirty) {
      return 'Your work is not saved! Are you sure you want to leave?';
    }
  },
  getInitialState: function () {
    return {
      author: { id: '', firstName: '', lastName: '' },
      errors: {},
      dirty: false
    };
  },
  // good to use componentWillMount instead of componentDidMount since setState will NOT
  // force a render of the compoenent
  // this way rendering will not fire twice.
  componentWillMount: function () {
    var authorId = this.props.params.id; // from the path '/author: id'

    if (authorId) {
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }
  },

  setAuthorState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },

  // Validation for author
  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; // clear any previous states.

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },
  saveAuthor: function(event) {
    event.preventDefault(); // otherwise clicking submit will actually cause page to submit
    if (!this.authorFormIsValid()) return;

    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    } else {
      AuthorActions.createAuthor(this.state.author);
    }
    
    this.setState({dirty: false});
    toastr.success('Author has been added!');
    // Navigate back to /authors
    this.history.pushState(null, '/authors');
  },

  render: function() {
      return (
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors} />
      );
  }
});

module.exports = ManageAuthorPage;
