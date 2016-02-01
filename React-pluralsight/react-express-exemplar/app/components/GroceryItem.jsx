var React = require('react/addons');
var action = require('../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
  delete: function(e) {
    e.preventDefault();
    action.delete(this.props.item);
  },
  togglePurchased: function(e) {
    e.preventDefault();
    if (this.props.item.purchased) {
      action.unbuy(this.props.item);
    } else {
      action.buy(this.props.item);
    }
  },
  render: function() {
    return (
      <li className={this.props.item.purchased ? 'strikethrough': ''}>{this.props.item.name}
        <form className="col-lg-3" onSubmit={this.togglePurchased}>
          <button className={this.props.item.purchased ? "" : "button-primary"}>
            {this.props.item.purchased ? "Unbuy" : "Buy"}
          </button>
        </form>
        <form className="three columns" onSubmit={this.delete}>
          <button>&times;</button>
        </form>
      </li>
    )
  }
})
