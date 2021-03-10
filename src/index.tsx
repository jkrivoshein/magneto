import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.scss';
import App from './App';
import Routes from './routes';
import rootReducer from './reducers/index'
const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App>
        <Routes />
      </App>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
