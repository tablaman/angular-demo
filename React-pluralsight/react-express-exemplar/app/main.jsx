console.log('hello jsx');
var React = require('react');
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initialList = [
  {
    name: "Ice cream",
    purchased: true
  }, {
    name: "Marshmellows",
    purchased: false
  }, {
    name: "Tea",
    purchased: false
  }, {
    name: "Ice burger",
    purchased: true
  }, {
    name: "Chocolate",
    purchased: false
  }
];

ReactDOM.render(<GroceryItemList listItems={initialList} />, app);
