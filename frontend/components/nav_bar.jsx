import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import loginModalStyle from './modal/login_modal.js'
import SessionFormContainer from './session_form_container';

import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      login: false
    }

    this.onModalOpen = this.onModalOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  onModalOpen() {
    loginModalStyle.content.opacity = 100;
    loginModalStyle.overlay.opacity = 100;
  }

  closeModal() {
    loginModalStyle.overlay.opacity = 0;
    this.setState({modalOpen: false});
  }

  handleLogin(e) {
    this.setState({login: true, modalOpen: true});
    // window.location = '/#/login';
  }

  handleSignup(e) {
    this.setState({login: false, modalOpen: true});
    // window.location = '/#/signup';
  }

  handleLogout(e) {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className="navbar-main">
          <div className="navbar-main-title">{'petLo<3'}</div>
          <div className="navbar-greeting">
            <p className="navbar-greeting-text">Welcome {this.props.currentUser.username}</p>
            <button onClick={this.handleLogout} className="navbar-greeting-logout-button">Logout</button>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default NavBar;
