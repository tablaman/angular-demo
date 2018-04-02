var React = require("react");
var ReactDOM = require("react-dom");
// var PropTypes = require("prop-types");
import PropTypes from 'prop-types';

require("./index.css");

// TODO:
//
// class App extends React.Component {
//   render() {
//     return <div>Hello This is awesome!</div>;
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

class Users extends React.Component {
  render() {
    const friends = this.props.list.filter(user => user.friend === true);

    return (
      <div>
        <h1>Friends</h1>
        <ul>{friends.map(filteredUser => <li key={filteredUser.name}>{filteredUser.name}</li>)}</ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list
            .filter(user => user.friend != true)
            .map(filteredUser => <li key={filteredUser.name}>{filteredUser.name}</li>)}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))

}
ReactDOM.render(
  <Users
    list={[
      { name: "Tyler", friend: true },
      { name: "Ryan", friend: true },
      { name: "Michael", friend: false },
      { name: "Mikenzi", friend: false },
      { name: "Jessica", friend: true },
      { name: "Dan", friend: false }
    ]}
  />,
  document.getElementById("app")

);