console.log('hello jsx');
var React = require('react');
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initialList = [
  {
    name: "Ice cream"
  }, {
    name: "Marshmellows"
  }, {
    name: "Tea"
  }, {
    name: "Ice burger"
  }, {
    name: "Chocolate"
  }
];

ReactDOM.render(<GroceryItemList listItems={initialList} />, app);
