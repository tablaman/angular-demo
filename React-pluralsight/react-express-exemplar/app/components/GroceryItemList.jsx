var React = require('react/addons');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

module.exports = React.createClass ({
    getListItems: function () {
      return this.props.listItems.map(function(item, index){
          return <GroceryItem item={item} key={'item'+ index} />
        })
    },
    render: function() {
      return (
        <div className="row">
          <h1>Grocery List</h1>
          <ul>
              {this.getListItems()}

          </ul>
          <GroceryListAddItem />
        </div>
      )
    }
})
