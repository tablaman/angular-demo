"use strict";

var Dispatcher = require ('../dispatcher/appDispatcher');
var AuthorApi = require('../api/AuthorApi');
var ActionTypes = require('../constants/actionTypes');

var InitialiseActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALISE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};


module.exports = InitialiseActions;
