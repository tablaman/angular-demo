var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');

/** 
  App
**/

var App = React.createClass ({
  // React Lifecycle
  getInitialState() {
      return {
          fishes : {},
          order : {}  
      };
  },
  addFish: function (fish) {
    var timestamp = (new Date()).getTime();
    // update state obj
    this.state.fishes['fish-' + timestamp]= fish;
    // the following is done is such a way as to increase performance
    this.setState({ fishes: this.state.fishes })
  },
  loadSamples: function () {
    this.setState({
      fishes: require('./sample-fishes')
    })
  },
  render: function() {
    return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market"/>
          </div>
          <Order/>
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
        </div>
      )
  }
});

/** 
  Add firsh form
**/

var AddFishForm = React.createClass({
  createFish: function(evt) {
    evt.preventDefault();
    // create object
    var fish = {
      name : this.refs.name.value,
      price : this.refs.price.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
    // add fish to state
    this.props.addFish(fish);
    // reset form
    this.refs.fishForm.reset();
    console.log(fish);
  },
  render: function () {
    return (
      <form action="" ref="fishForm" className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name" />
        <input type="text" ref="price" placeholder="Fish Price $" />
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea ref="desc" placeholder="Description"></textarea>
        <input type="text" ref="image" placeholder="Url to Image"/>
        <button type="submit">+ Add Item </button>
      </form>
    )
  }
})

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
      <div>
        <p>Inventory</p>
        <AddFishForm {...this.props} />
        <button onClick={this.props.loadSamples}>Load Sample Fish</button>
      </div>
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
  mixins : [History],
  goToStore: function(event) {
    event.preventDefault();
    // get data from input
    var storeId = this.refs.storeId.value;
    // transition from StorePicker to App
    this.history.pushState(null, '/store/' + storeId)
  },

  render: function() {
    var name = "wes"
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store {name}</h2>
        <input type="text" ref="storeId" 
          defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>

      )
  }
});

/** 
  Not found
**/

var NotFound = React.createClass({
  render: function() {
    return (
      <h2>Not Found!</h2>
      )
  }
});


/** 
  Routes
**/
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
