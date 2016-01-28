var React = require('react/addons');

module.exports = React.createClass ({
    getListItems: function () {
      return this.props.listItems.map(function(item){
          return <li>{item.name}</li>
        })
    },
    render: function() {
      return (
        <div>
          <h1>Grocery List</h1>
          <ul>
            this.getListItems();
          </ul>
        </div>
      )
    }
})
