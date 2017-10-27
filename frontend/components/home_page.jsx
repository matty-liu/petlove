import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {

  render() {
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <p>Home Page coming soon....</p>
      )
    }
  }

}

export default HomePage;
