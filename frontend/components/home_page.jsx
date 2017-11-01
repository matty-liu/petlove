import React from 'react';
import { Link, Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getUsers()
  }

  render() {
    console.log(this.props.users)
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/" />
      )
    } else if (this.props.users) {
      return (
        <div className="home">
          <div className="home-main">
            <div className="home-main-matches">
                <div className="home-main-above-matches">
                  <div className="home-main-matches-title"> Your top matches </div>
                  <input type="search" className="home-main-matches-search" placeholder="What are you into?"></input>
                </div>
                <div className="home-main-matches-thumbnail-container">
                  {this.props.users.map((user) => {
                    return (
                      <Link to={`profile/${user.id}`} key={user.id}>
                        <div key={user.id} >
                          <img
                            src={user.image_url}
                            className="home-main-matches-thumbnail"
                            key={user.id}/>
                          <div className="home-main-matches-thumbnail-info">
                            {user.username}
                          </div>
                        </div>
                      </Link>
                  )
                  })}
                </div>

              </div>
          </div>
          <div className="home-main-below">
            
          </div>
        </div>
      )
    } else {
        return <div></div>
      }
    }

}

export default HomePage;
