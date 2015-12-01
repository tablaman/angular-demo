var React = require('react');
var Dropdown = require('./dropdown');

var options = {
	title: 'Choose a dessert', // What should show up on button to open/close
	items: [
	'Apple Pie',
	'Blueberry Pie',
	'Meat Pie']
}

var el = React.createElement(Dropdown, options);
React.render(el, document.querySelector('.container')); 