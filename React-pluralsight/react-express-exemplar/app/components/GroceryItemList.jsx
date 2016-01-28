var React = require('react/addons');
var GroceryItem = require('./GroceryItem.jsx');

module.exports = React.createClass ({
    getListItems: function () {
      return this.props.listItems.map(function(item, index){
          return <GroceryItem item={item} key={'item'+ index} />
        })
    },
    render: function() {
      return (
        <div>
          <h1>Grocery List</h1>
          <ul>
              {this.getListItems()}

          </ul>
        </div>
      )
    }
})
