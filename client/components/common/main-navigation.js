import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class MainNavigation extends Component {
  render() {
    return (
      <nav className="main-navi">
        <div className="main-navi__brand"><span>Swappy</span></div>
        <ul className="main-navi__links">
          <li className="main-navi__link"><Link to="/signup">Sign Up</Link></li>
          <li className="main-navi__link"><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
    );
  }
}
