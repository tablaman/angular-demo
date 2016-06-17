var React = require('react');
var ReactDOM = require('react-dom');

/** 
  App
**/

var App = React.createClass ({
  render: function() {
    return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market"/>
          </div>
          <Order/>
          <Inventory/>
        </div>
      )
  }
});

/** 
  Header
**/

var Header = React.createClass({
  render: function () {
    console.log(this);
    return (
      <header className="top">
        <h1>Catch 
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span> 
          Day
          </h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
});

/** 
  Inventory
**/

var Inventory = React.createClass({
  render: function () {
    return (
      <p>Inventory</p>
    )
  }
});

/** 
  Order
**/

var Order = React.createClass({
  render: function () {
    return (
      <p>Order</p>
    )
  }
});


/** 
  StorePicker
  This will make us make <StorePicker/>
**/

var StorePicker = React.createClass({
  render: function() {
    var name = "wes"
    return (
      <form className="store-selector">
        <h2>Please enter a store {name}</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit" />
      </form>

      )
  }
});


ReactDOM.render(<App/>, document.querySelector('#main'));
