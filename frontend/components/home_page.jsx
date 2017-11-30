import React from 'react';
import { Link, Route, Redirect, withRouter } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchField: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentWillMount() {
    this.props.getUsers()
  }

  handleSearch(e) {
    this.setState({searchField: e.target.value})
  }

  render() {
    let renderUsers;
    if (this.props.userMatches) {
      renderUsers = this.props.userMatches
    } else {
      renderUsers = this.props.users
    }

    let filteredUsers = [];
    if (this.props.users) {
      filteredUsers = renderUsers.filter((user)=> {
        return (user.username.toLowerCase().indexOf(this.state.searchField.toLowerCase()) !== -1)
      })
    }

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

                  <input type="search"
                    className="home-main-matches-search"
                    placeholder="Who are you into?"
                    onChange={this.handleSearch}></input>

                </div>
                <div className="home-main-matches-thumbnail-container">
                    {filteredUsers.map((user) => {
                      return (
                        <div className="home-main-matches-thumbnail-container2" key={user.id}>
                          <Link to={`profile/${user.id}`} key={user.id}>
                            <div key={user.id} >
                              <img
                                src={user.image_url}
                                className="home-main-matches-thumbnail"
                                key={user.id}/>
                              <div className="home-main-matches-thumbnail-username">
                                {user.username}
                              </div>
                              <div className="home-main-matches-thumbnail-matchpercent">
                                {`${91-Math.abs(user.compatibility_value-this.props.userCompatibilityValue)}% Match`}
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                    )}
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
