console.log('hello jsx');
var React = require('react');
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList.jsx');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initialList = groceryItemStore.getItems();

function render () {
  ReactDOM.render(<GroceryItemList listItems={initialList} />, app);
}

render();

groceryItemStore.onChange(function(items){
  initial = items;
  render();
})
