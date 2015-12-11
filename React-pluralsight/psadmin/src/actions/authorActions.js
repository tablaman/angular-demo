"use strict";

var Dispatcher = require('../dispatcher/AppDispatcher');
var AuthorApi = require('../api/AuthorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    // Dispatcher, go tell all stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },
  updateAuthor: function(author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);

    // Dispatcher, go tell all stores that an author was just updated.
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  },
  deleteAuthor: function(author) {
    AuthorApi.deleteAuthor(author);

    // Dispatcher, go tell all stores that an author was just updated.
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      ID: author.id
    });
  }
};

module.exports = AuthorActions;
