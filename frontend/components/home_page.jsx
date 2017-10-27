import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {

  render() {
    console.log(this.props);
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <div>
          <p>Home Page coming soon....</p>
          <img src={this.props.imageUrl} className="pet-profile-pic"/>
        </div>
      )
    }
  }

}

export default HomePage;
