var React = require('react');


module.exports = React.createClass ({
	getInitialState: function () {
		return {
			text: ' ' 
		}
	},
	render: function() {
		return <div className="input-group">
			<input 
			value={this.state.text}
			onChange={this.handleInputChange}
			type="type" 
			className="form-control" />
			<span className="input-group-btn">
				<button 
					onClick={this.handleClick}
					className="btn btn-default" 
					type="button">
					Add
				</button>
			</span>
		</div>
	},
	handleClick: function () {
		// Send value of text input to firebase
		this.props.itemsStore.push({
			text: this.state.text,
			done: false
		});
		
		this.setState({text: ''});
	},
	handleInputChange: function (event) {
		// event describes what action was taken with direct ref to DOM element
		this.setState({text: event.target.value });
		
	}
}); 