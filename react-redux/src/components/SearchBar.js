import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super (props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render () {
    return (
      <input type="text" key="hello" ref="h1" placeholder="search" onChange={this.onInputChange}/>

    )
  }

  onInputChange(e) {

    this.setState({ term: e.target.value });
  }

  // same as render = () => <input />;
}


export default SearchBar;
