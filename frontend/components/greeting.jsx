import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    window.location = '/#/login';
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
          <span className="have-an-account">Have an account?</span>
          <button className="header-main-greeting-login" onClick={this.handleLogin}><span>Sign In</span></button>
        </div>
      );
    }
  }
}

export default Greeting;
