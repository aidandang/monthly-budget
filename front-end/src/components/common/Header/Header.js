import React, { Component } from 'react';

import { connect } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';

import logo from '../../../assets/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header className="header">
          <a
            href="/"
            className="header__bars-box"
            alt="menu"
            onClick={(e) => {
              e.preventDefault();
              this.props.toggle();
            }}
          >
            <i className="fas fa-bars"></i>
          </a>

          <nav className="header__nav-box">
            <a href="/" className="header__nav-box__logo-box">
              <img
                src={logo}
                className="header__nav-box__logo-box__logo"
                alt="logo"
              />
            </a>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/budgets">Budgets</a>
              </li>
              <li>
                <a href="/transations">Transactions</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>

          <div className="header__auth-box">
            {this.props.currentUser ? (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  auth.signOut();
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
              </a>
            ) : (
              <a href="/sign-in">
                <i className="fas fa-sign-in-alt"></i>
              </a>
            )}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Header);
