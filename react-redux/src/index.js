import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppReactRedux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

// import App from './AppYoutube';
// import App from './AppMaps';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './styles/styles.scss';
import './index.css';



ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
