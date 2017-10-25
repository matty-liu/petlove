import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
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
        <div>
          <Link to="/signup">Sign Up</Link>
          <span> </span>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
}

export default Greeting;
