import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
// Routes
import routes from './routes';
// SASS IMPORT
import './sass/_main.scss'

const store = configureStore();

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
