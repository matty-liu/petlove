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
    this.afterOpenModal = this.afterOpenModal.bind(this);
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
    e.preventDefault();
    // window.location = '/#/signup';
  }

  handleLogout(e) {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <h3>Welcome {this.props.currentUser.username}</h3>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="header-main-greeting">
          <button className="header-main-greeting-login" onClick={this.handleLogin}><span>Sign Up</span></button>
            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={loginModalStyle}>
              <div>

              </div>
            </Modal>

          <button className="header-main-greeting-login" onClick={this.openModal}><span>Sign In</span></button>


        </div>
      );
    }
  }
}

export default Greeting;
