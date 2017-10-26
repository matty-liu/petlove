import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import loginModalStyle from './modal/login_modal.js'
import SessionFormContainer from './session_form_container';

import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      login: false
    }

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  openModal(e) {
    this.setState({modalOpen: true});
  }

  afterOpenModal() {
  // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
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
        <div className="header-greeting">
          <h3 className="header-greeting-text">Welcome {this.props.currentUser.username}</h3>
          <button onClick={this.handleLogout} className="header-greeting-logout-button">Logout</button>
        </div>
      );
    } else {
      return (
        <div className="header-main-greeting">
          <button className="header-main-greeting-login" onClick={this.handleSignup}><span>Sign Up</span></button>
          <button className="header-main-greeting-login" onClick={this.handleLogin}><span>Sign In</span></button>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={loginModalStyle}>
            <div>
              <SessionFormContainer login={this.state.login}/>
            </div>
          </Modal>

        </div>
      );
    }
  }
}

export default Greeting;
