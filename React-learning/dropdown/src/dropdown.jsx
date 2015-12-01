/***
Dropdown
this should know when to list based on user interaction

**/

///< reference path='typings/react/react.d.ts' /> 

var React = require('react');
var Button = require('./button');
var ListItem = require('./listItem');
 

module.exports = React.createClass({
	handleClick: function () {
		this.setState({open: !this.state.open});
	},
	handleItemClick: function (itemClicked) {
		console.log(itemClicked);
		this.setState({
			open: false,
			itemTitle: itemClicked
		});
	},
	// Initialiser runs only once
	getInitialState: function () {
		return { open: false }
	},
	render: function() {
		var list = this.props.items.map(function(item) {
				return <ListItem 
				item={item} 
				whenItemClicked={this.handleItemClick} 
				className={this.state.itemTitle === item ? 'active' : ''} />
			}.bind(this));
		return <div className="dropdown">
			<Button 
				whenClicked={this.handleClick} 
				className="btn-default" 
				title={this.state.itemTitle || this.props.title} 
				subTitleClassName="caret"
				/>
				
			<ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
				{list}
			</ul>
		</div>
	}
	
	
});