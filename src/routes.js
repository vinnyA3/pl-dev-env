import React, { PropTypes } from 'react';
import { IndexRoute, Route } from 'react-router';
// Components
import App from './components/app';
import Home from './components/home/home';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="signin" component={Signin} />
  </Route>
);
