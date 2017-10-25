import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleUsername(e) {
    e.preventDefault()
    this.setState(username: e.target.value)
  }

  handlePassword(e) {
    e.preventDefault()
    this.setState(username: e.target.password)
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.state
    this.props.processForm(user)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to petLove!
          <br />
          <label>
            Username:
            <input type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </label>
          <label>
            Password:
            <input type="text"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }


}
