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
