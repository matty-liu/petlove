import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {

  render() {
    console.log(this.props)
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else if (this.props.users) {
      return (
        <div>
          <div>
            <span>YOUR TOP MATCHES</span>
            this.props.users.map( (user) => (
              <li>{user.username}</li>
            ))

          </div>
          <div> QUESTIONS </div>
        </div>
      )
    } else {
      return <div>No Matches</div>
    }
  }

}

export default HomePage;
