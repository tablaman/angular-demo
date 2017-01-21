import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super (props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render () {
    return (
      <div className="search-bar">
        <input
          value={this.props.term}
          type="text" key="hello" ref="h1"
          placeholder="search"
          onChange={this.onInputChange} />
      </div>

    )
  }

  onInputChange(e) {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  // same as render = () => <input />;
}


export default SearchBar;
