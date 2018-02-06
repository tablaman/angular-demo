import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Components
//
import GoogleMap from 'google-map-react';

const API_KEY = 'AIzaSyA0aHsIXIkXgNTnvUXNzASyDmpQY7kRiMw';
const API_KEY_GMAPS = 'AIzaSyApHYh3niJuIgI71KQ6y-XV5fvrfqRg514';
const mapStyle = {
  width: `${window.innerWidth}px`,
  height: `${window.innerHeight}px`

};

class App extends Component {
  static defaultProps = {
    center: {
      lat: -31.9505,
      lng: 115.8605
    },
    zoom: 10,
    greatPlaceCoords: {
      lat: 31.9505,
      lng: 115.8605
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>

        <div className="App-intro" style={mapStyle}>
          <GoogleMap bootstrapURLKeys={{
            key: API_KEY_GMAPS,
            language: 'en'
          }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}></GoogleMap>
        </div>
      </div>
    );
  }
}

export default App;
