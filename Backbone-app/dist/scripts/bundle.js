(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// App.js

var Rectangle = Backbone.Model.extend({});

var RectangleView = Backbone.View.extend({
  tagName: 'div',
  className: 'rectangle',

  events: {
    'click': 'move'

  },

  render: function() {
    this.setDimensions();
    this.setPosition();
    this.setColor();
    return this;
  },

  setDimensions: function() {
    this.$el.css({
      width: this.model.get('width') + 'px',
      height: this.model.get('height') + 'px'
    });
  },

  setPosition: function () {
    var position = this.model.get('position');
    this.$el.css({
      left: position.x,
      top: position.y,
      border: '1px solid #333'
    });
  },

  setColor: function () {
    this.$el.css('background-color', this.model.get('color'));
  },

  move: function () {
    this.$el.css('left', this.$el.position().left + 10);
  }
});

var models = [
  new Rectangle({
    width: 100,
    height: 60,
    position: {
      x: 300,
      y: 150
    },
    color: '#fefefe'
  }),
  new Rectangle({
    width: 300,
    height: 160,
    position: {
      x: 500,
      y: 10
    },
    color: '#333'
  }),
  new Rectangle({
    width: 250,
    height: 460,
    position: {
      x: 800,
      y: 350
    },
    color: '#efefef'
  })
];
_(models).each (function(model) {
  $('#app').append(new RectangleView({model: model}).render().el);
})
var myRect = new Rectangle({
  width: 100,
  height: 60,
  position: {
    x: 300,
    y: 150
  },
  color: '#fefefe'
});

// var myView = new RectangleView ({model: myRect});
//
// // render to dom
// $('#app').append(myView.render().el);

},{}],2:[function(require,module,exports){
"use strict";

// var React = require('react');
// var ReactDOM = require('react-dom');

// var $ = require('jQuery');
// var Underscore = require('Underscore');
// var Backbone = require('Backbone');

var app = require('./app.js');

// v1.0.0 implementation of Router
// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
// var InitialiseActions = require('./actions/initialiseActions');
//
// var routes = require('./routes');
// InitialiseActions.initApp();
//
//
//   // ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
//   ReactDOM.render(routes, document.getElementById('app'));

},{"./app.js":1}]},{},[2]);
