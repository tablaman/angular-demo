var React = require('react/addons');

module.exports = React.createClass({
  render: function() {
    return (
      <li className={this.props.item.purchased ? 'strikethrough': ''}>{this.props.item.name}</li>
    )
  }
})
