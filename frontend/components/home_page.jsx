import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    console.log(this.props.users)
    

    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else if (!this.props.users) {
        return <div></div>
    } else {
        return (
          <div>
            <div>
              <span>YOUR TOP MATCHES</span>
              {this.props.users.map( (user) => {
                return <li>{user.username}</li>
              })
            }
            </div>
            <div> QUESTIONS </div>
          </div>
        )
      }
    }

}

export default HomePage;
