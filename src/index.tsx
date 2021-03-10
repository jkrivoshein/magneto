import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import './index.scss';
import App from './App';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes />
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
