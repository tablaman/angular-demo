 import React from "react";
 import List from "./List";
 import ConnectedTodos from './Todos';
 import ConnectedGoals from './Goals';
 import {
   connect
 } from 'react-redux';

 import {
   handleInitialData
 } from '../actions/shared';

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props;

    if (loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <React.Fragment>
        <ConnectedTodos />
        <ConnectedGoals />
      </React.Fragment>
    )
  }
}

// connect: Render any component, passing that component any data 
// it needs from the store
// we have a function that passes data that App needs
export default connect((state) => ({
  loading: state.loading
}))(App)