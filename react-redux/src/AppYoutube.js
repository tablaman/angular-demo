import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyA0aHsIXIkXgNTnvUXNzASyDmpQY7kRiMw';

class App extends Component {
  constructor(props) {
    super (props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    };
    this.videoSearch('dji mavic pro');
  }

  videoSearch (term = '') {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState ({
        videos,
        selectedVideo: videos[0],
        term
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="section hello">this is a section
          <span className="label label-primary">primary</span>
        </div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="App-intro">
          <VideoDetail video={this.state.selectedVideo}></VideoDetail>
          <VideoList videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        </div>
      </div>
    );
  }
}

export default App;
