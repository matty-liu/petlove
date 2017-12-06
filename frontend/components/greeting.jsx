import React from 'react';
import ReactDOM from 'react-dom';

import Modal from './modal/modal.jsx';
import loginModalStyle from './modal/login_modal.js';
import SessionFormContainer from './session_form_container';

import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      login: false
    }

    // this.onModalOpen = this.onModalOpen.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // onModalOpen() {
  //   loginModalStyle.content.opacity = 100;
  //   loginModalStyle.overlay.opacity = 100;
  // }

  openModal() {
    this.setState({modalOpen: true})
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  handleLogin(e) {
    this.setState({login: true, modalOpen: true});
  }

  handleSignup(e) {
    this.setState({login: false, modalOpen: true});
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
          <Modal modalOpen={this.state.modalOpen}>
            <SessionFormContainer login={this.state.login}/>
          </Modal>
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
