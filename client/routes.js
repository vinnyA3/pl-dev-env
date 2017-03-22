import React, { PropTypes } from 'react';
import { IndexRoute, Route } from 'react-router';
// Components
import App from './components/app';
import Home from './components/home/home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
