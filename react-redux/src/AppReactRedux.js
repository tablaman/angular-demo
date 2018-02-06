import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// Components
import BookList from './containers/BookList';

// Reducers
import rootReducer from './reducers/index';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="section">
                    <BookList />
                </div>
            </div>
        );
    }
}

export default App;
