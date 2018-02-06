import React, {Component} from 'react';
import {connect} from 'react-redux';

// Actions
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div className="list-group col-sm-4">
        {this.renderList()}
      </div>

    )
  }
}

// This is the GLUE between react and redux.
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {books: state.books};
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps (dispatch) {
  // When seelectBook Called, the result should be passed to all our reducers
  return bindActionCreators ({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps)(BookList);
