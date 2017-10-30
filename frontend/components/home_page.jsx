import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getUsers()
  }

  render() {

    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else if (this.props.users) {
      return (
        <div>
          <div>
            <span>YOUR TOP MATCHES</span>
            {this.props.users.map((user,index) => {
              return <li key={index}>{user.username}</li>
            })
          }
          </div>
          <div> QUESTIONS </div>
        </div>
      )
    } else {
        return <div></div>
      }
    }

}

export default HomePage;
