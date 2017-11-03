import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import loginModalStyle from './modal/login_modal.js'
import SessionFormContainer from './session_form_container';

import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      login: false,
      home: false
    }

    this.onModalOpen = this.onModalOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleUsernameClick = this.handleUsernameClick.bind(this);
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

  handleLogoClick(e) {
    this.setState({home:true})
  }

  handleUsernameClick(e) {

  }

  render() {
    if (this.state.home) {
      return <Redirect to="/" />
    }
    if (this.props.currentUser) {
      return(
        <div className="navbar-main">
          <div className="navbar-main-left">
            <div className="navbar-main-title" onClick={this.handleLogoClick}>
              {'petLo<3'}
            </div>
            <div>
              <Link to="/users">
                <div className="navbar-browse">
                  <span>Browse Matches</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="navbar-greeting">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-comment" aria-hidden="true"></i>
            <Link to="/profile">
              <div className="navbar-greeting-myprofile-button">
                <span>My Profile</span>
              </div>
            </Link>
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
