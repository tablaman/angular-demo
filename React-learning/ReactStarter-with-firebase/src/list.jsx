var React = require('react');
var ListItem = require('./listItem');

module.exports =  React.createClass({
    render: function () {
      return <div>
                {this.renderList()}
            </div>
        
    
    },
    renderList: function () {
        if (!this.props.items) {
            return <h2>Please add your first Todo Item</h2>
        }
        else {
            var children = [];
            for (var key in this.props.items) {
                var item = this.props.items[key];
                item.key = key;
                
                children.push(
                    <ListItem
                        item={item}
                        key={key} >
                        
                    </ListItem>

                )
            }
            return children;
        }
        
    }


})          