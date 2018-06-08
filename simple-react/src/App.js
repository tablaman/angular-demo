import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

class App extends React.Component {
  componentWillMount() {
    fetch('http://localhost:8080/ping').then(res => console.log(res))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <div>
            <h1>hello world!</h1>
            <img className="container__image" alt="react logo" src={reactLogo} />
            <p>If you see this everything is working!</p>
          </div>
          <ul className="left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

