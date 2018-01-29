import React from 'react';
import ReactDOM from 'react-dom';

import Modal from '../modal/modal.jsx';
import loginModalStyle from '../modal/login_modal.js';
import SessionFormContainer from '../session/session_form_container';

import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(e) {
    this.props.openModal({modalType: 'login'})
  }

  handleSignup(e) {
    this.props.openModal({modalType: 'signup'});
  }

  handleLogout(e) {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className="header-main">
          <h1 className="header-main-title">{'petLo<3'}</h1>
          <div className="header-greeting">
            <p className="header-greeting-text">Welcome {this.props.currentUser.username}</p>
            <button onClick={this.handleLogout} className="header-greeting-logout-button">Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header-main">
          <h1 className="header-main-title">{'petLo<3'}</h1>
          <div className="header-main-greeting">
            <button className="header-main-greeting-login" onClick={this.handleSignup}><span>Sign Up</span></button>
            <button className="header-main-greeting-login" onClick={this.handleLogin}><span>Sign In</span></button>
          </div>
        </div>
      );
    }
  }
}

export default Greeting;
